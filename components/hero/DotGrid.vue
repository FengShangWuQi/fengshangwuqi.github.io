<template>
  <div class="absolute inset-0 overflow-hidden">
    <div class="grid-dots" />
    <div class="grid-glow grid-glow-1" />
    <div class="grid-glow grid-glow-2" />
  </div>
</template>

<style scoped>
.grid-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(130, 140, 200, 0.25) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 55% 50% at 50% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 55% 50% at 50% 50%, black 20%, transparent 70%);
}

.grid-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}

.grid-glow-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(90, 110, 220, 0.7), transparent 65%);
  top: 15%;
  left: 20%;
  animation: glow-orbit-1 32s ease-in-out infinite;
}

.grid-glow-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(160, 100, 220, 0.65), transparent 65%);
  bottom: 15%;
  right: 20%;
  animation: glow-orbit-2 30s ease-in-out infinite;
}

@keyframes glow-orbit-1 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(100px, 50px); }
  50% { transform: translate(60px, -70px); }
  75% { transform: translate(-80px, -30px); }
}

@keyframes glow-orbit-2 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-80px, -60px); }
  50% { transform: translate(-40px, 80px); }
  75% { transform: translate(90px, 40px); }
}
</style>
