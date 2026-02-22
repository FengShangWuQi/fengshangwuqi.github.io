<template>
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0">
      <div class="hero-blob hero-blob-1" />
      <div class="hero-blob hero-blob-2" />
      <div class="hero-blob hero-blob-3" />
      <div class="hero-blob hero-blob-4" />
    </div>
  </div>
</template>

<style scoped>
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.75;
}

.hero-blob-1 {
  width: 500px;
  height: 500px;
  background: rgba(90, 110, 220, 0.5);
  top: -10%;
  left: -5%;
  animation: blob-drift-1 20s ease-in-out infinite;
}

.hero-blob-2 {
  width: 450px;
  height: 450px;
  background: rgba(180, 100, 220, 0.45);
  top: 50%;
  right: -5%;
  animation: blob-drift-2 25s ease-in-out infinite;
}

.hero-blob-3 {
  width: 400px;
  height: 400px;
  background: rgba(80, 180, 240, 0.4);
  bottom: -10%;
  left: 30%;
  animation: blob-drift-3 22s ease-in-out infinite;
}

.hero-blob-4 {
  width: 350px;
  height: 350px;
  background: rgba(170, 110, 200, 0.4);
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
