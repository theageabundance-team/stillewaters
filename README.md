# Still Waters — Meditation & Daily Prayer

Christian meditation and a daily prayer community: Scripture-centered
meditations for peace of mind, and a new prayer every day.

## Stack

- React + TypeScript (Vite)
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

## How access works

There's no password. On the login screen a visitor enters the **name and
email used at purchase**; that identity is stored in the browser
(`localStorage`) and used to unlock the app and personalize today's prayer
and streak. To wire this to real purchase verification (e.g. checking the
email against a buyers list from Stripe/Gumroad/etc.), replace the submit
handler in `src/components/Login.tsx` with a call to your backend.

## Project structure

- `src/components/Landing.tsx` — public marketing page
- `src/components/Login.tsx` — name + email gate
- `src/components/Dashboard.tsx` — daily prayer, streak, meditation library
- `src/components/MeditationPlayer.tsx` — guided meditation flow
- `src/data/content.ts` — meditations and the rotating daily prayers
- `src/lib/storage.ts` — localStorage-backed session/progress

## Build

```bash
npm run build
```
