# Portfolio React Frontend

This `frontend` app ports the existing static portfolio into React (Vite + TypeScript) while preserving the original design and behaviors for the sidebar, navbar, About page, testimonials modal, and clients list.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 and verify the UI.

## Assets

Copy the original images into the Vite `public` folder so paths like `/assets/images/...` resolve:

- Source: `../assets/images/*` (root of repo)
- Destination: `frontend/public/assets/images/*`

Files expected:

- `my-avatar.png`, `avatar-1.png`..`avatar-4.png`
- `logo-1-color.png`..`logo-6-color.png`
- `icon-design.svg`, `icon-dev.svg`, `icon-app.svg`, `icon-photo.svg`, `icon-quote.svg`, `logo.ico`

## Notes

- Ionicons are loaded in `index.html` for `<ion-icon>` tags.
- Global styles are taken from the original `assets/css/style.css` and applied via `src/index.css`.
- Additional pages (Resume, Portfolio, Blog, Contact) have placeholders and can be implemented next.
