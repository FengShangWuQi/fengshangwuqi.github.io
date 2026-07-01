# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start development server (auto-opens browser)
pnpm build         # Build for production (GitHub Pages preset → .output/public)
pnpm generate      # Static site generation
pnpm preview       # Preview production build locally
```

After `pnpm install`, `nuxt prepare` runs automatically via postinstall.

## Architecture

Single-page Nuxt 4 personal site with TypeScript, deployed to GitHub Pages at `/`. Pure black background; the entire page is one "flame in a glass" branding element.

- `app.vue` — bare `<NuxtPage />`, no global chrome.
- `pages/index.vue` — centers a single `<FlameButton text="枫上雾棋" />` in the viewport; sets the document title.
- `components/FlameButton.vue` — the centerpiece. A horizontal pill (`aspect-ratio: 900 / 324`, `border-radius: 999px`, `overflow: hidden` + `clip-path` so the media is clipped to the capsule) that plays a pre-rendered **`public/flame-button.mp4`** — the "flame in a glass" effect baked to video — via an `autoplay muted loop playsinline` `<video>` (`object-fit: contain`). A static **`public/flame-poster.jpg`** (a representative full-flame frame, extracted from the mp4) doubles as the video's `poster` and as a separate `.flame-poster` `<img>` used for the reduced-motion still. The white brand label (`.flame-copy-text`, a handwriting-style gradient font with a soft glow) sits in a DOM layer above them. The video/poster are `aria-hidden` and the root is `role="img"` with `:aria-label="text"`, so assistive tech announces the element once by its text rather than as an actionable control.

**FlameButton internals:** `videoSrc`/`posterSrc` are built from `useRuntimeConfig().app.baseURL` (normalized to a trailing slash) plus a `?v=…` cache-bust query, so the assets resolve under the GitHub Pages base path. Graceful degradation is layered so the button is never a bare label: the `<video>` carries `autoplay` (plays without waiting on JS) and a `poster` still (shown before the first frame decodes and if the mp4 fails to load); **`prefers-reduced-motion` is handled in CSS** — the media query hides `.flame-video` and reveals the `.flame-poster` `<img>`, so reduced-motion users get the full-flame still with no JS and no motion flash. `onMounted` additionally watches `matchMedia('(prefers-reduced-motion: reduce)')` and `applyMotionPreference()` pauses the (now-hidden) video to save CPU, or calls `play()` — its rejection swallowed — to recover if the browser blocked autoplay; the `change` listener is removed in `onBeforeUnmount`. The brand font is aliased via `@font-face` to `local()` system handwriting faces (`HanziPen SC`, etc.), so there is no webfont download.

## Conventions

- Vue Composition API with `<script setup lang="ts">`
- UnoCSS utility classes for layout (mobile-first with `sm:` / `md:` / `xl:` breakpoints at 480/768/1280px). `<style scoped>` is used in `FlameButton.vue` for the video/label styling that utility classes cannot express
- Theme background/text are CSS custom properties (`--color-bg`, `--color-text`) defined in `uno.config.ts` preflights
- No comments unless the logic is non-obvious. Code structure and naming should be self-explanatory
- File naming: non-component files use kebab-case; components use PascalCase (`FlameButton.vue`)
- Commit messages follow Conventional Commits, no AI signature
