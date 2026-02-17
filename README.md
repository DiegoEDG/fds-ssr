# fds-ssr

Server-side rendering (SSR) setup for serving `homepage.html` with Tailwind CSS compiled at build time.

## Features

- **Express SSR server** serves `homepage.html` at `/lab/homepage`
- **Tailwind CSS v4** compiled at build time to `public/css/outputLab.css`
- **Static assets** served from `public/assets/` (mirrors the `../assets/` paths used in `homepage.html`)
- **Dev mode**: Tailwind watch + server live-reload
- **Production build**: minified CSS output

## Project structure

```
├── homepage.html          # HTML file to render (uses ../css/ and ../assets/ paths)
├── server.js              # Express SSR server
├── src/
│   └── tailwind.css       # Tailwind input file
├── public/
│   ├── css/
│   │   └── outputLab.css  # Compiled CSS (generated)
│   └── assets/            # Static assets (copy your assets here)
├── tailwind.config.js     # Tailwind config (scans homepage.html)
├── package.json
└── README.md
```

## Quick start

### 1) Install dependencies

```sh
pnpm install
```

### 2) Add your assets

Copy your existing assets into `public/assets/` so that `../assets/...` paths in `homepage.html` resolve correctly.

### 3) Build Tailwind CSS

```sh
pnpm run build
```

### 4) Start the server

```sh
pnpm run start
```

Visit `http://localhost:3000/lab/homepage`

## Scripts

| Command          | What it does                                      |
|------------------|---------------------------------------------------|
| `pnpm run build` | Compiles Tailwind CSS to `public/css/outputLab.css` (minified) |
| `pnpm run start` | Starts the Express SSR server                     |
| `pnpm run dev`   | Runs Tailwind in watch mode + starts the server   |
| `pnpm run dev:css` | Watches Tailwind CSS and rebuilds on changes    |
| `pnpm run build:css` | One-off Tailwind build (minified)             |
| `pnpm run prepare:public` | Ensures `public/css` and `public/assets` directories exist |

## URLs

- Homepage: `http://localhost:3000/` (redirects to `/homepage`)
- Page route: `http://localhost:3000/homepage`
- Static CSS: `http://localhost:3000/css/outputLab.css`
- Static assets: `http://localhost:3000/assets/...`

## Environment variables

- `PORT` – Server port (default: `3000`)

## Notes

- `homepage.html` uses `../css/` and `../assets/` relative paths. By serving the page at `/homepage`, those resolve to `/css/` and `/assets/` respectively.
- Tailwind config scans `homepage.html` for class names, so all used classes are included in the compiled CSS.
- The server serves `homepage.html` as-is (no templating variables). If you need template injection, modify `server.js`.
