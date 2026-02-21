<template>
  <header class="app-header">
    <p class="app-header__subtitle">Curated Collection</p>
    <h1 class="app-header__title">The Gallery</h1>
    <div class="app-header__divider" />
  </header>
</template>

<style scoped>
.app-header {
  padding: 3.5rem 1.5rem 1.5rem;
  text-align: center;
}

.app-header__subtitle {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.app-header__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-light) 50%, var(--color-text) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-header__divider {
  width: 3rem;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-text), transparent);
  margin: 1.25rem auto 0;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .app-header {
    padding: 2rem 1rem 1rem;
  }

  .app-header__subtitle {
    font-size: 0.7rem;
    letter-spacing: 0.25em;
  }

  .app-header__divider {
    width: 2rem;
    margin-top: 1rem;
  }
}
</style>
