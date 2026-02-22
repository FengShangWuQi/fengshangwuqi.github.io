<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full" />
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
  'rgba(90, 110, 220, alpha)',
  'rgba(180, 100, 220, alpha)',
  'rgba(80, 180, 240, alpha)',
  'rgba(170, 110, 200, alpha)',
  'rgba(100, 160, 230, alpha)',
]

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let particles: Particle[] = []

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
      p.vx += (Math.random() - 0.5) * 0.06
      p.vy += (Math.random() - 0.5) * 0.06

      p.vx *= 0.99
      p.vy *= 0.985

      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color.replace('alpha', '0.7')
      ctx.fill()

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = p.color.replace('alpha', '0.08')
      ctx.fill()
    }

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

  resize()
  draw()

  window.addEventListener('resize', resize)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>
