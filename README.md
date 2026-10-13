# Sina Baradaran — Portfolio

Personal portfolio of Sina Baradaran, Front-End Developer in Mashhad, Iran.

**Stack:** React 19 · TypeScript · Tailwind CSS v4 · React Router 7 · Vite

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `pnpm dev`        | Start the dev server                   |
| `pnpm build`      | Type-check and build to `dist/`        |
| `pnpm preview`    | Serve the production build             |
| `pnpm type-check` | TypeScript only                        |
| `pnpm lint`       | ESLint                                 |
| `pnpm format`     | Prettier (also sorts Tailwind classes) |

## Structure

```
src/
├── app/          router, root layout, scroll handling
├── config/       site identity, links, navigation, API settings
├── types/        shared domain types
├── content/      all site text — the only place to edit your data
├── api/          repositories: the only code that reads content or calls the network
├── shared/       components, hooks and utilities with no feature knowledge
├── features/     one folder per feature: components + index.ts public API
├── pages/        route components that compose features
└── styles/       Tailwind theme tokens and global CSS
```

Dependencies point one way: `pages → features → shared / api → content / config / types`.
Features import each other only through their `index.ts`.

## Patterns

- **Repository pattern.** Components read data through `contentRepository` and
  `githubRepository` (`src/api`), never from `src/content` or `fetch` directly. Moving content to
  a CMS means replacing one implementation, not touching components.
- **React 19.** `use()` with Suspense for the GitHub data, `<title>`/`<meta>` rendered from pages
  (hoisted to `<head>` by React), and ref callbacks that return their own cleanup.
- **Lazy routes.** Every page is its own chunk loaded through the router's `lazy`, and React lives
  in a separate long-cached vendor chunk.

## Motion

| Effect                      | Where                   | How                                                                     |
| --------------------------- | ----------------------- | ----------------------------------------------------------------------- |
| Target cursor               | everywhere (mouse only) | `features/cursor`: one frame loop, direct style writes                  |
| Velocity strips             | hero, skills            | `VelocityMarquee`: speeds up with scroll, flips with direction          |
| Section rail                | every page              | finds any `[data-section][id]` in `<main>`; active from scroll position |
| Reading progress            | every page              | CSS `scroll()` timeline, no JS                                          |
| Scroll-scrubbed words       | about                   | `ScrollWords`, CSS `view()` timeline, no JS                             |
| Hero exit                   | hero                    | `.scroll-exit`, CSS `view()` timeline, no JS                            |
| Magnetic buttons            | hero, contact           | `Magnet`                                                                |
| Blur-in                     | hero name               | `BlurText`                                                              |
| Pill nav, staggered menu    | navigation              | `RollingLabel` + CSS transitions                                        |
| Flowing / edge-slide rows   | work                    | `useEdgeSlide` + `FlowingBand`                                          |
| Underline links, arrow fill | links, footer           | `.underline-grow`, `ArrowLink`                                          |
| Reveal, page entrance       | everywhere              | shared IntersectionObserver, CSS                                        |

Every scroll-linked effect shares one `requestAnimationFrame` loop (`shared/lib/frame.ts`) that
only runs while something on screen needs it. To list a new section in the rail, give it an `id`
and a `data-section="Label"`.

## Typography

The fluid scale lives in `styles/index.css` as utilities: `display-h1`, `display-h2`,
`display-h3`, `eyebrow`, and `container-x` for page width. Use them instead of fixed sizes.

## Performance

The site animates a lot, so every animation is built to stay cheap:

- **No animation library.** Every effect is CSS on `opacity`, `transform` and `translate`, plus one
  small frame loop for the cursor. The cursor is off for touch screens and reduced motion.
- **One IntersectionObserver per root margin** (`shared/lib/viewport.ts`) is shared by every
  reveal, marquee and section tracker, instead of one observer per element.
- **No re-renders for animation.** Reveals and marquee pausing write a `data-*` attribute from a
  stable ref callback, so React never re-renders to animate.
- **Marquees pause off screen**, and the clock updates once a minute, aligned to the minute.
- **`prefers-reduced-motion`** turns every animation off.
- **Above-the-fold content is never hidden**, so Largest Contentful Paint isn't delayed by a fade.
- **Self-hosted variable fonts**, split by `unicode-range` so only the subsets a page uses download.

## Adding things

| To add…             | Edit                                                                              |
| ------------------- | --------------------------------------------------------------------------------- |
| A project           | an entry in `src/content/projects.ts` (`featured: true` puts it on the home page) |
| A role              | an entry in `src/content/experience.ts`                                           |
| A skill group       | an entry in `src/content/skills.ts`                                               |
| An open-source repo | an entry in `src/content/open-source.ts`                                          |
| A home section      | a feature in `src/features/`, then `pages/HomePage.tsx` and its `sections` list   |
| A page              | a component in `src/pages/` and a lazy route in `src/app/router.tsx`              |

## Deployment

It's a static single-page app. Deploy `dist/` anywhere, with every unknown path rewritten to
`index.html` so deep links such as `/works/helium-park` load the app.

## License

The code is [MIT](LICENSE). The personal content in `src/content/` and the resume in `public/`
is not covered by the license and stays all rights reserved.
