# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Belle Güzellik — a single-page marketing/landing site for a Turkish hair salon, built with
TanStack Start (React 19 + Vite). All UI copy is in **Turkish** (`<html lang="tr">`). There is no
backend or booking system; the call-to-action funnels to WhatsApp/phone links.

## Commands

This project uses **Bun** (`bun.lock`). The README says `npm`, but prefer `bun`.

- `bun install` — install dependencies
- `bun run dev` — dev server on **port 3000**
- `bun run build` — production build (Nitro server output)
- `bun run preview` — preview the production build
- `bun run test` — run the Vitest suite once (`vitest run`); there is no separate vitest config — it runs through `vite.config.ts`
- `bun run lint` — ESLint (TanStack config)
- `bun run format` — Prettier write + `eslint --fix`
- `bun run check` — Prettier check only (no writes)

Run a single test file: `bun run vitest run <path>`; watch mode: `bun run vitest <path>`.
There are currently **no test files** in the repo.

Add shadcn components with: `pnpm dlx shadcn@latest add <component>` (new-york style, zinc base, lucide icons).

## Architecture

- **Routing**: file-based via TanStack Router under `src/routes/`. `routeTree.gen.ts` is
  auto-generated — never edit it by hand. The app is effectively one page:
  - `src/routes/__root.tsx` — app shell: `<head>` meta/OG/SEO, Google Fonts (Fraunces serif + Manrope sans), devtools (dev only). Light mode only.
  - `src/routes/index.tsx` — the home page; composes all section components in order.
- **Content is data-driven** — edit copy/content here, not in components:
  - `src/data/site.ts` — business info: name, tagline, phone/WhatsApp, email, address, opening hours, nav items, social links, and the `whatsappLink` helper.
  - `src/data/content.ts` — services, stats, features, gallery images, testimonials, FAQ. Images come from Unsplash via an `img()` helper (no local image assets).
- **Components** (`src/components/`): one component per landing section (hero, services, features, gallery, about, testimonials, faq, cta-section, stats-bar, site-header, site-footer, floating-contact, section-heading). To change a section's content, edit `src/data/`; to change its layout, edit the matching component.
- **UI primitives** (`src/components/ui/`): `button.tsx` (CVA variants: `solid`/`gold`/`outline`/`ghost`/`whatsapp`), `figure.tsx` (image with gradient/monogram fallback), `reveal.tsx` (IntersectionObserver scroll-reveal wrapper).
- No global state, no custom hooks, no data fetching — static content rendered top-down.

## Conventions

- **Import aliases**: `#/*` and `@/*` both map to `./src/*`. Prefer these over relative paths (e.g. `import { cn } from '#/lib/utils'`).
- **Class merging**: use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional Tailwind classes.
- **Styling**: Tailwind v4 configured entirely in `src/styles.css` via `@theme` — there is no `tailwind.config`. The design system lives here:
  - Warm salon palette as CSS variables: `--ink`, `--cream`, `--blush`, `--rose-deep`, `--gold` (+ soft/deep variants), surfaces, lines.
  - Custom utility classes: `.display-title`, `.island-kicker`, `.island-shell` (glassmorphic card), `.feature-card`, `.nav-link`, plus animations `.rise-in`, `.reveal`, `.soft-pulse`.
  - A dark-mode palette is defined but not activated.
  Reuse these tokens/classes instead of hardcoding new colors.
- React Compiler is enabled (babel plugin in `vite.config.ts`) — don't add manual `useMemo`/`useCallback` purely for memoization.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` — remove unused code rather than leaving it.

## Commits

- Split work into **focused, logical commits** grouped by concern (e.g. data/content, design
  system, a section's redesign, new sections, routing/SEO) — not one giant catch-all commit.
- Order commits so each one builds on its own where practical (data → design system → components →
  composition).
- Use **Conventional Commit** prefixes: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`.
- Write subjects in **English**, imperative mood, concise — even though the UI copy is Turkish.
