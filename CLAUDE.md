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

**Layouts:** `layouts/subpage.vue` — shared subpage layout with brand nav bar, gradient page header (title/subtitle from route meta), and content slot. Used by gallery and digest pages.

**Pages:**
- `pages/index.vue` — hero landing page with dot-grid background and glow orbs (`HeroDotGrid`), section entry cards. Uses `layout: false`
- `pages/gallery.vue` — photo gallery with grid layout and lightbox viewer. Uses `subpage` layout
- `pages/digest.vue` — tech digest with date-grouped timeline. Uses `subpage` layout

**Global elements (`app.vue`):** locale toggle button (中/EN), GitHub icon link (via `SOCIAL_LINKS` constant), ambient gradient background on non-homepage routes (`.page-ambient`) — shared across all pages.

**Data flow:**
- **Gallery:** `pages/gallery.vue` fetches `GET /api/images` via `useAsyncData` → server API (`server/api/images.get.ts`) scans `public/images/` directory, reads dimensions with `image-size`, converts filenames to titles → returns `GalleryImage[]` → shared state managed by `composables/useGallery.ts` using `useState()` for SSR safety.
- **Digest:** `pages/digest.vue` fetches `GET /api/digests` via `useAsyncData` → server API (`server/api/digests.get.ts`) reads all JSON files in `public/digests/`, merges and groups items into a year → month → day hierarchy (all sorted newest-first) → returns `DigestYearGroup[]` → shared state managed by `composables/useDigest.ts` (year groups, month-level collapsible expand/collapse state with current month expanded by default).

**Adding images:** Drop files into `public/images/` — the server API auto-discovers them. Supported formats: jpg, jpeg, png, webp, avif. Filenames become titles (e.g., `crimson-winter-forest.jpg` → "Crimson Winter Forest").

**Adding digest articles:** Add entries to monthly JSON files in `public/digests/YYYY-MM.json`. Each item has a semantic slug ID, bilingual title/summary, URL, source, and date. Use the `/digest` skill to auto-collect from RSS, GitHub Trending/Releases, and web search. Deduplication is by normalized URL, not by ID.

**Components** are organized by domain under `components/`:
- `icon/` — SVG icon components (e.g., `icon/Github.vue` → `<IconGithub />`)
- `hero/` — landing page components: `DotGrid.vue` (CSS dot-grid with animated glow orbs), `SectionCard.vue` (entry cards with border and backdrop-blur)
- `gallery/` — gallery page components: `Grid.vue`, `Item.vue`, `LightboxOverlay.vue` (fullscreen viewer with keyboard/touch navigation, unscoped styles due to Teleport)
- `digest/` — digest page components: `Timeline.vue` (year-section list), `YearSection.vue` (year label with horizontal rule + month list), `MonthGroup.vue` (collapsible month section with dot/chevron/label/count), `DayGroup.vue` (non-collapsible date label + article cards), `ArticleCard.vue` (single article entry)

**i18n:** `composables/useLocale.ts` provides `t(key)` translation and `switchLocale()` toggle. JSON message files in `locales/en.json` and `locales/zh.json`. Types in `types/locale.ts`. Keys are English strings used as fallback (e.g., `t("Gallery")`). i18n keys must match the actual English text — if the same copy appears in multiple places, reuse the same key rather than creating synonyms. When removing UI text, delete the corresponding keys from both locale files to avoid stale entries.

**Constants:** `constants/index.ts` exports `SOCIAL_LINKS` (GitHub URL etc.), imported in `app.vue`.

**Types:** `types/gallery.ts` (`GalleryImage`), `types/locale.ts` (`Locale`, `Messages`), `types/digest.ts` (`DigestItem`, `DigestDayGroup`, `DigestMonthGroup`, `DigestYearGroup`).

**Modules:** `@unocss/nuxt` for atomic CSS utilities; `@nuxt/image` configured for WebP format at 80% quality.

## Conventions

- Vue Composition API with `<script setup lang="ts">`
- UnoCSS utility classes for styling (mobile-first with `sm:` / `md:` / `xl:` breakpoints at 480/768/1280px). Minimal `<style scoped>` only for things utility classes cannot express (e.g., keyframe animations). `gallery/LightboxOverlay.vue` keeps unscoped `<style>` for Vue transition classes
- Composables use arrow functions and `useState()` for shared state
- Theme colors defined as CSS custom properties in `uno.config.ts` preflights (e.g., `--color-text`, `--color-bg`), mapped to UnoCSS theme colors (e.g., `text-text`, `bg-surface`) — use utility classes instead of hardcoded hex values
- No comments unless the logic is non-obvious. Code structure and naming should be self-explanatory. Avoid section markers (`<!-- Top bar -->`) and restating what code does (`// Random micro-drift`)
- File naming: composables use camelCase with `use` prefix (`useGallery.ts`); all other non-component files use kebab-case (`format-date.ts`, `gallery.ts`). Components use PascalCase (`SectionCard.vue`). Server API routes use Nuxt's HTTP method suffix (`images.get.ts`)
- Component naming: names describe the component's role, not visual structure; avoid abbreviations (`DotGrid` not `BgGrid`); domain-directory components should be understandable without the directory prefix (`DayGroup` not `Node`, `Timeline` not `Tree`)
- Commit messages follow Conventional Commits, no AI signature (`/commit` skill available)
