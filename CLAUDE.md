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
- `pages/index.vue` — hero landing page with dot-grid background and glow orbs (`HeroBgGrid`), section entry cards
- `pages/gallery.vue` — photo gallery with brand logo top bar, gradient page header, grid layout and lightbox viewer

**Global elements (`app.vue`):** locale toggle button (中/EN), GitHub icon link (via `SOCIAL_LINKS` constant), ambient gradient background on non-homepage routes (`.page-ambient`) — shared across all pages.

**Data flow:** `pages/gallery.vue` fetches `GET /api/images` via `useAsyncData` → server API (`server/api/images.get.ts`) scans `public/images/` directory, reads dimensions with `image-size`, converts filenames to titles → returns `GalleryImage[]` → shared state managed by `composables/useGallery.ts` using `useState()` for SSR safety.

**Adding images:** Drop files into `public/images/` — the server API auto-discovers them. Supported formats: jpg, jpeg, png, webp, avif. Filenames become titles (e.g., `crimson-winter-forest.jpg` → "Crimson Winter Forest").

**Components** are organized by domain under `components/`:
- `icon/` — SVG icon components (e.g., `icon/Github.vue` → `<IconGithub />`)
- `hero/` — landing page components: `BgGrid.vue` (CSS dot-grid with animated glow orbs), `SectionCard.vue` (entry cards with border and backdrop-blur)
- `gallery/` — gallery page components: `Grid.vue`, `Item.vue`, `LightboxOverlay.vue` (fullscreen viewer with keyboard/touch navigation, unscoped styles due to Teleport)

**i18n:** `composables/useLocale.ts` provides `t(key)` translation and `switchLocale()` toggle. JSON message files in `locales/en.json` and `locales/zh.json`. Types in `types/locale.ts`. Keys are English strings used as fallback (e.g., `t("Gallery")`).

**Constants:** `constants/index.ts` exports `SOCIAL_LINKS` (GitHub URL etc.), imported in `app.vue`.

**Types:** `types/gallery.ts` (`GalleryImage`), `types/locale.ts` (`Locale`, `Messages`).

**Modules:** `@unocss/nuxt` for atomic CSS utilities; `@nuxt/image` configured for WebP format at 80% quality.

## Conventions

- Vue Composition API with `<script setup lang="ts">`
- UnoCSS utility classes for styling (mobile-first with `sm:` / `md:` / `xl:` breakpoints at 480/768/1280px). Minimal `<style scoped>` only for things utility classes cannot express (e.g., keyframe animations). `gallery/LightboxOverlay.vue` keeps unscoped `<style>` for Vue transition classes
- Composables use arrow functions and `useState()` for shared state
- Theme colors defined as CSS custom properties in `uno.config.ts` preflights (e.g., `--color-text`, `--color-bg`), mapped to UnoCSS theme colors (e.g., `text-text`, `bg-surface`) — use utility classes instead of hardcoded hex values
- No comments unless the logic is non-obvious. Code structure and naming should be self-explanatory. Avoid section markers (`<!-- Top bar -->`) and restating what code does (`// Random micro-drift`)
- Commit messages follow Conventional Commits, no AI signature (`/commit` skill available)
