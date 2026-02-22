<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- CSS gradient blobs layer -->
    <div class="absolute inset-0">
      <div class="hero-blob hero-blob-1" />
      <div class="hero-blob hero-blob-2" />
      <div class="hero-blob hero-blob-3" />
      <div class="hero-blob hero-blob-4" />
    </div>
    <!-- Canvas particle network layer -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full" />
  </div>
</template>

<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement>()
let animationId = 0

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

const palette = [
  'rgba(100, 120, 200, alpha)',
  'rgba(160, 100, 200, alpha)',
  'rgba(100, 180, 220, alpha)',
  'rgba(180, 130, 180, alpha)',
  'rgba(120, 160, 200, alpha)',
]

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let particles: Particle[] = []
  let mouseX = -1000
  let mouseY = -1000

  const resize = () => {
    width = canvas.offsetWidth
    height = canvas.offsetHeight
    canvas.width = width * devicePixelRatio
    canvas.height = height * devicePixelRatio
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    initParticles()
  }

  const getParticleCount = () => {
    const area = width * height
    return Math.min(Math.floor(area / 6000), 150)
  }

  const initParticles = () => {
    const count = getParticleCount()
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1,
      color: palette[Math.floor(Math.random() * palette.length)],
    }))
  }

  const maxDist = 180

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    for (const p of particles) {
      // Mouse interaction: attract nearby particles gently
      const dmx = p.x - mouseX
      const dmy = p.y - mouseY
      const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy)
      if (mouseDist < 200) {
        const force = (200 - mouseDist) / 200 * 0.03
        p.vx += dmx * force
        p.vy += dmy * force
      }

      // Dampen velocity
      p.vx *= 0.985
      p.vy *= 0.985

      p.x += p.vx
      p.y += p.vy

      // Wrap around edges
      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      // Draw particle with glow
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color.replace('alpha', '0.7')
      ctx.fill()

      // Outer glow
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = p.color.replace('alpha', '0.08')
      ctx.fill()
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(130, 140, 200, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(draw)
  }

  const onMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }

  const onMouseLeave = () => {
    mouseX = -1000
    mouseY = -1000
  }

  resize()
  draw()

  window.addEventListener('resize', resize)
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mouseleave', onMouseLeave)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
    canvas.removeEventListener('mousemove', onMouseMove)
    canvas.removeEventListener('mouseleave', onMouseLeave)
  })
})
</script>

<style scoped>
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
}

.hero-blob-1 {
  width: 500px;
  height: 500px;
  background: rgba(100, 120, 200, 0.35);
  top: -10%;
  left: -5%;
  animation: blob-drift-1 20s ease-in-out infinite;
}

.hero-blob-2 {
  width: 450px;
  height: 450px;
  background: rgba(170, 120, 200, 0.3);
  top: 50%;
  right: -5%;
  animation: blob-drift-2 25s ease-in-out infinite;
}

.hero-blob-3 {
  width: 400px;
  height: 400px;
  background: rgba(100, 180, 220, 0.25);
  bottom: -10%;
  left: 30%;
  animation: blob-drift-3 22s ease-in-out infinite;
}

.hero-blob-4 {
  width: 350px;
  height: 350px;
  background: rgba(160, 130, 180, 0.25);
  top: 20%;
  right: 25%;
  animation: blob-drift-4 18s ease-in-out infinite;
}

@keyframes blob-drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(80px, 40px) scale(1.1); }
  66% { transform: translate(-30px, 60px) scale(0.95); }
}

@keyframes blob-drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-60px, -30px) scale(1.05); }
  66% { transform: translate(40px, -50px) scale(0.9); }
}

@keyframes blob-drift-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -40px) scale(1.1); }
  66% { transform: translate(-40px, 20px) scale(0.95); }
}

@keyframes blob-drift-4 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 50px) scale(1.15); }
  66% { transform: translate(60px, -20px) scale(0.9); }
}
</style>
