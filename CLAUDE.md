# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start development server (auto-opens browser)
pnpm build         # Build for production (GitHub Pages preset)
pnpm generate      # Static site generation
pnpm preview       # Preview production build locally
```

After `pnpm install`, `nuxt prepare` runs automatically via postinstall.

## Architecture

Nuxt 3 gallery app with TypeScript, deployed to GitHub Pages at base URL `/gallery/`.

**Data flow:** `pages/index.vue` fetches `GET /api/images` via `useAsyncData` → server API (`server/api/images.get.ts`) scans `public/images/` directory, reads dimensions with `image-size`, converts filenames to titles → returns `GalleryImage[]` → shared state managed by `composables/useGallery.ts` using `useState()` for SSR safety.

**Adding images:** Drop files into `public/images/` — the server API auto-discovers them. Supported formats: jpg, jpeg, png, webp, avif. Filenames become titles (e.g., `crimson-winter-forest.jpg` → "Crimson Winter Forest").

**Key components:**
- `GalleryGrid.vue` — responsive multi-column layout (1→4 columns via media queries), adapts column count to image count
- `GalleryItem.vue` — image card with `NuxtImg` lazy loading, hover effects on desktop, always-visible title on mobile
- `LightboxOverlay.vue` — fullscreen viewer teleported to body, with keyboard navigation (arrows, ESC), touch swipe, body scroll lock. Uses unscoped styles due to Teleport and native `<img>` with baseURL prefix for static hosting compatibility
- `IconGithub.vue` — GitHub SVG icon component

**Modules:** `@nuxt/image` configured for WebP format at 80% quality.

## Conventions

- Vue Composition API with `<script setup lang="ts">`
- Scoped styles in components, BEM-like class naming (e.g., `.app-header__title`). Exception: `LightboxOverlay.vue` uses unscoped styles (Teleport compatibility)
- Composables use arrow functions and `useState()` for shared state
- Theme colors defined as CSS custom properties in `assets/css/main.css` (e.g., `--color-text`, `--color-bg`) — use these instead of hardcoded hex values
- Commit messages follow Conventional Commits, no AI signature (`/commit` skill available)
