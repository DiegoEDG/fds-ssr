# fds-ssr 🚀

Server-side rendering (SSR) setup for serving `homepage.html` with Tailwind CSS v4 compiled at build time.

## Overview 📖

This project provides a lightweight Express server that serves a static HTML homepage with server-side rendering capabilities. It uses Tailwind CSS v4 for styling with custom color schemes and includes development workflow optimizations.

## Features ✨

- **Express SSR server** serves `homepage.html` at `/homepage` 🖥️
- **Tailwind CSS v4** compiled at build time to `public/css/outputLab.css` 🎨
- **Static assets** served from `public/assets/` (mirrors the `../assets/` paths used in `homepage.html`) 📁
- **Dev mode**: Tailwind watch + server live-reload ⚡
- **Production build**: minified CSS output 🗜️
- **Custom color scheme** with primary blue variants and monochrome colors 🎨
- **Health check endpoint** at root path `/` 💚

## Project structure 📂

```
├── homepage.html          # HTML file to render (uses ../css/ and ../assets/ paths)
├── server.js              # Express SSR server with health check endpoint
├── src/
│   └── tailwind.css       # Tailwind input file (imports tailwindcss)
├── public/
│   ├── css/
│   │   └── outputLab.css  # Compiled CSS (generated)
│   └── assets/            # Static assets (copy your assets here)
├── tailwind.config.js     # Tailwind config with custom colors
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml         # Lock file for pnpm
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Technology stack 🛠️

- **Node.js** - JavaScript runtime ⚙️
- **Express.js** - Web framework for SSR server 🌐
- **Tailwind CSS v4** - Utility-first CSS framework 🎯
- **pnpm** - Package manager (v10.7.1) 📦

## Quick start 🏃‍♂️

### Prerequisites 📋

- **Node.js** (v18 or higher recommended)
- **pnpm** (v10.7.1 or higher)

### 1) Install dependencies 📦

```sh
pnpm install
```

### 2) Add your assets 🖼️

Copy your existing assets into `public/assets/` so that `../assets/...` paths in `homepage.html` resolve correctly.

### 3) Build Tailwind CSS 🔨

```sh
pnpm run build
```

### 4) Start the server 🚀

```sh
pnpm run start
```

Visit `http://localhost:3000/homepage` 🌍

## Development workflow 🔄

For development with live-reload:

```sh
pnpm run dev
```

This will:
- Start Tailwind CSS in watch mode
- Start the Express server
- Automatically rebuild CSS when changes are made
- Serve the updated files immediately

## Scripts 📜

| Command          | What it does                                      |
|------------------|---------------------------------------------------|
| `pnpm run build` | Compiles Tailwind CSS to `public/css/outputLab.css` (minified) |
| `pnpm run start` | Starts the Express SSR server                     |
| `pnpm run dev`   | Runs Tailwind in watch mode + starts the server   |
| `pnpm run dev:css` | Watches Tailwind CSS and rebuilds on changes    |
| `pnpm run build:css` | One-off Tailwind build (minified)             |
| `pnpm run prepare:public` | Ensures `public/css` and `public/assets` directories exist |

## API endpoints 🔌

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check endpoint returns service status and uptime |
| GET | `/homepage` | Serves the homepage.html with SSR |
| GET | `/css/*` | Static CSS files from `public/css/` |
| GET | `/assets/*` | Static assets from `public/assets/` |

## URLs 🔗

- **Health check**: `http://localhost:3000/` (JSON status response) 💚
- **Homepage**: `http://localhost:3000/homepage` 🏠
- **Static CSS**: `http://localhost:3000/css/outputLab.css` 🎨
- **Static assets**: `http://localhost:3000/assets/...` 📁

## Configuration ⚙️

### Environment variables 🌍

- `PORT` – Server port (default: `3000`)

### Custom Tailwind colors 🎨

The project includes a custom color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  'primary-blue': '#0066cc',
  'primary-blue_dark': '#004a99', 
  'primary-blue_light': '#a3c7ff',
  monochromes: {
    grey_xlight: '#e5e7eb'
  }
}
```

Use these classes in your HTML: `bg-primary-blue`, `text-primary-blue_dark`, etc.

## How it works 🔧

1. **SSR Server**: The Express server reads `homepage.html` from the filesystem and serves it at `/homepage`
2. **CSS Compilation**: Tailwind CSS scans `homepage.html` for class names and compiles only used utilities
3. **Asset Resolution**: Relative paths `../css/` and `../assets/` in the HTML resolve to `/css/` and `/assets/` when served
4. **Development Mode**: File watching automatically rebuilds CSS when changes are detected

## Production deployment 🚀

### Building for production 🔨

```sh
pnpm run build
```

This creates a minified CSS file at `public/css/outputLab.css`.

### Running in production 🏭

```sh
PORT=80 pnpm run start
```

The server will run on port 80 (or any port specified via the PORT environment variable).

## Troubleshooting 🔧

### Common issues ❌

- **404 errors for assets**: Ensure assets are copied to `public/assets/` 📁
- **CSS not updating**: Run `pnpm run build` to regenerate the CSS file 🔄
- **Server won't start**: Check if the port is already in use or specify a different PORT 🔌

### Health check 💚

The root endpoint `/` returns a JSON response with service status:

```json
{
  "status": "ok",
  "service": "fds-ssr", 
  "uptimeSeconds": 123,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `pnpm run dev`
5. Submit a pull request

## License 📄

ISC License
