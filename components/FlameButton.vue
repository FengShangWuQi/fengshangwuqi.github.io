<template>
  <div class="flame-button" role="img" :aria-label="text">
    <img class="flame-poster" :src="posterSrc" alt="" aria-hidden="true">
    <video
      ref="videoRef"
      class="flame-video"
      :src="videoSrc"
      :poster="posterSrc"
      aria-hidden="true"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    />
    <span class="flame-copy">
      <span class="flame-copy-text">{{ text }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ text?: string }>(), { text: '' })

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.app.baseURL.endsWith('/')
  ? runtimeConfig.app.baseURL
  : `${runtimeConfig.app.baseURL}/`
const videoSrc = `${baseURL}flame-button.mp4?v=inpaint-no-shadow-20260630`
const posterSrc = `${baseURL}flame-poster.jpg?v=inpaint-no-shadow-20260630`
const videoRef = ref<HTMLVideoElement | null>(null)

let reducedMotion: MediaQueryList | null = null

const applyMotionPreference = () => {
  const video = videoRef.value

  if (!video) {
    return
  }

  if (reducedMotion?.matches) {
    video.pause()
  }
  else {
    // autoplay covers the normal case; this recovers playback if the browser blocked it.
    video.play().catch(() => {})
  }
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.addEventListener('change', applyMotionPreference)
  applyMotionPreference()
})

onBeforeUnmount(() => {
  reducedMotion?.removeEventListener('change', applyMotionPreference)
})
</script>

<style scoped>
@font-face {
  font-family: "Fengshang Hand";
  src:
    local("HanziPen SC Bold"),
    local("HanziPen SC"),
    local("翩翩体-简"),
    local("Wawati SC");
  font-display: block;
  font-style: normal;
  font-weight: 700;
  unicode-range: U+4E0A, U+67AB, U+68CB, U+96FE;
}

.flame-button {
  position: relative;
  display: block;
  width: min(61vw, 560px);
  min-width: 288px;
  aspect-ratio: 900 / 324;
  padding: 0;
  border: 0;
  border-radius: 999px;
  appearance: none;
  overflow: hidden;
  container-type: inline-size;
  cursor: default;
  background: transparent;
  clip-path: inset(0 round 999px);
  color: #fff;
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.flame-poster,
.flame-video {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

.flame-poster {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .flame-video {
    display: none;
  }

  .flame-poster {
    display: block;
  }
}

.flame-copy {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.flame-copy-text {
  display: inline-block;
  background: linear-gradient(180deg, #ffffff 0%, #f7f8ff 38%, rgba(205, 216, 255, 0.96) 100%);
  background-clip: text;
  color: rgba(248, 250, 255, 0.96);
  filter:
    drop-shadow(0 0 5px rgba(213, 221, 255, 0.32))
    drop-shadow(0 0 12px rgba(104, 118, 226, 0.2));
  font-family: "Fengshang Hand", "HanziPen SC", "翩翩体-简", "Wawati SC", "娃娃体-简", "PingFang SC", cursive;
  font-size: clamp(29px, 6.9cqw, 39px);
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.05;
  paint-order: stroke fill;
  pointer-events: none;
  text-rendering: geometricprecision;
  text-shadow: none;
  transform: translate(0.075em, -0.5px);
  -webkit-background-clip: text;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke: 0.36px rgba(248, 251, 255, 0.48);
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

@media (max-width: 430px) {
  .flame-button {
    width: min(88vw, 308px);
    min-width: 0;
  }
}
</style>
