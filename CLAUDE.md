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

Nuxt 3 multi-page personal site with TypeScript, deployed to GitHub Pages at `/`.

**Pages:** Both pages use `layout: false` (no shared layout).
- `pages/index.vue` — hero landing page with full-screen animated background, section entry cards, fixed GitHub icon
- `pages/gallery.vue` — photo gallery with brand logo top bar, gradient page header, grid layout and lightbox viewer

**Data flow:** `pages/gallery.vue` fetches `GET /api/images` via `useAsyncData` → server API (`server/api/images.get.ts`) scans `public/images/` directory, reads dimensions with `image-size`, converts filenames to titles → returns `GalleryImage[]` → shared state managed by `composables/useGallery.ts` using `useState()` for SSR safety.

**Adding images:** Drop files into `public/images/` — the server API auto-discovers them. Supported formats: jpg, jpeg, png, webp, avif. Filenames become titles (e.g., `crimson-winter-forest.jpg` → "Crimson Winter Forest").

**Key components:**
- `HeroBackground.vue` — CSS gradient blob animation + Canvas particle network with mouse interaction
- `SectionCard.vue` — entry card for site sections (icon, title, description, optional coming-soon badge)
- `GalleryGrid.vue` — responsive multi-column layout (1→4 columns via media queries), adapts column count to image count
- `GalleryItem.vue` — image card with `NuxtImg` lazy loading, hover effects on desktop, always-visible title on mobile
- `LightboxOverlay.vue` — fullscreen viewer teleported to body, with keyboard navigation (arrows, ESC), touch swipe, body scroll lock. Uses unscoped styles due to Teleport and native `<img>` with baseURL prefix for static hosting compatibility
- `IconGithub.vue` — GitHub SVG icon component

**Modules:** `@unocss/nuxt` for atomic CSS utilities; `@nuxt/image` configured for WebP format at 80% quality.

## Conventions

- Vue Composition API with `<script setup lang="ts">`
- UnoCSS utility classes for styling (mobile-first with `sm:` / `md:` / `xl:` breakpoints at 480/768/1280px). Minimal `<style scoped>` only for things utility classes cannot express (e.g., responsive gradients). `LightboxOverlay.vue` keeps unscoped `<style>` for Vue transition classes
- Composables use arrow functions and `useState()` for shared state
- Theme colors defined as CSS custom properties in `uno.config.ts` preflights (e.g., `--color-text`, `--color-bg`), mapped to UnoCSS theme colors (e.g., `text-text`, `bg-surface`) — use utility classes instead of hardcoded hex values
- Commit messages follow Conventional Commits, no AI signature (`/commit` skill available)
