# Happy Birthday Website — Naman ❤️

A cinematic, animated birthday-surprise website built with **React + Vite +
Tailwind CSS + Framer Motion + React Router**.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a production-ready static bundle:

```bash
npm run build
npm run preview   # serve the built files locally to double check
```

`npm run build` outputs static files into `dist/` — you can upload that
folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## What's already wired up

| Page | Route | File |
|---|---|---|
| 1. Password gate | `/` | `src/pages/Landing.jsx` |
| 2. Excited? Yes/No | `/excited` | `src/pages/Excited.jsx` |
| 3. Choose your surprise | `/choose` | `src/pages/ChooseSurprise.jsx` |
| 4. Letter | `/letter` | `src/pages/Letter.jsx` |
| 5. Cake | `/cake` | `src/pages/Cake.jsx` |
| 6. Invitation | `/invitation` | `src/pages/Invitation.jsx` |
| 7. Final surprise | `/final` | `src/pages/FinalSurprise.jsx` |

The password is **030903** (edit in `src/utils/constants.js`).

Pages 2–7 are guarded by `src/components/RequireUnlock.jsx` — typing their
URL directly redirects back to `/` unless the password was already entered
in this browser tab (tracked via `sessionStorage`, so it resets on a fresh
visit/tab close, which is what you want for a "surprise").

## Adding your real content

**Photos & music** — see the README files inside:
- `src/assets/photos/README.md`
- `src/assets/music/README.md`

They're both placeholder gradients / silence right now, with the exact
import lines you need to paste in once you have the real files.

**Text (name, date, invitation details, timeline)** — all in one place:
`src/utils/constants.js`. Nothing else needs to change.

**Colors / fonts** — `tailwind.config.js` defines the `navy`, `royal`,
`gold`, `crimson`, `silver` palette and the `display` / `script` / `body`
font families, used consistently across every page.

## Project structure

```
src/
  components/   shared UI: SkyBackground, MusicToggle, BackButton,
                PageTransition, RequireUnlock
  pages/        one file per page, matches the table above
  context/      MusicContext — keeps one <audio> element alive across
                route changes so the song doesn't restart on navigation
  hooks/        useConfetti — canvas-confetti presets (fireworks, bursts)
  utils/        constants.js — all editable text lives here
  assets/       photos/, music/, icons/, backgrounds/ (with READMEs)
```

## Notes on a few implementation choices

- **Why `sessionStorage` and not `localStorage`** for the unlock flag:
  `localStorage` persists forever, so the surprise would stay "spoiled" on
  a shared device forever. `sessionStorage` clears when the tab closes.
- **Why the music lives in a Context, not inside a page component**:
  React Router unmounts the old page component on every navigation. An
  `<audio>` tag inside a page would restart from 0:00 on every page change.
  Lifting it into `MusicProvider` (which wraps the whole `<App>` and never
  unmounts) keeps one continuous audio stream.
- **`prefers-reduced-motion`** is respected globally (see `src/index.css`)
  — visitors who've asked their OS for reduced motion get near-instant
  transitions instead of the full animation set.
