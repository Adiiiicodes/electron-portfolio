# 🚀 My First Electron.js Project — Learning Playground

> NOTE: This is my first Electron.js project — built purely for learning and out of a ensem-exam boredom curiosity. It's not intended for contributions; it's a fun exploration of how web skills can build desktop apps. 🧠✨

---

## TL;DR

- What: A small Electron + React portfolio app (desktop) built to learn Electron and bundling with Webpack + Babel.
- Why: Because it’s wild and awesome that we can package a Chromium browser + Node runtime and build desktop apps the same way we build web pages. 😄
- Where to look: Key files are `src/index.js` (main process), `src/preload.js`, `src/react/*` (renderer React app), `webpack.config.js`, and `.babelrc`.

---

## Why Electron? (Basic concepts) 🧩

- Electron bundles a Chromium browser + Node.js into a desktop app. That means the UI is an HTML/CSS/JS web app (the renderer) running in a Chromium instance, and a separate Node-powered main process manages windows, native integrations and system-level tasks.
- Main process: runs Node and controls application lifecycle, windows, menus, IPC. In this repo that's `src/index.js`.
- Renderer process: where your React app runs — essentially a web page rendered by the embedded Chromium. The React code lives under `src/react/`.
- Preload script: a safe place to expose a narrow API from Node to renderer when `contextIsolation` is enabled. This repo has `src/preload.js` exposing `ipcRenderer`.
- IPC: Use `ipcMain` (main) and `ipcRenderer` (renderer) to send messages between processes. Example in this repo: `ipcMain.on('contact-form-submit', ...)` in `src/index.js` and renderer submission in `src/react/components/Contact.js`.

> Important note on security: This repo currently enables `nodeIntegration: true` and `contextIsolation: false` in a few places for simplicity. That's fine for learning, but not recommended for production. A more secure setup uses `contextIsolation: true`, `nodeIntegration: false`, and a strict `preload.js` that exposes only required APIs.

---

## Chromium — do you need to install it? 🧭

Short answer: Electron already bundles a compatible Chromium for you. You do NOT need to separately install Chromium to run the packaged Electron app.

Why you might want Chromium installed on your machine:

- For debugging or visually comparing behavior in a desktop Chromium installation.
- For running a separate browser instance when developing direct HTML pages outside of Electron.

Install Chromium (optional) — commands (pick the one for your OS):

Linux (Debian/Ubuntu):

```bash
sudo apt update
sudo apt install -y chromium-browser
```

Linux (Ubuntu Snap alternative):

```bash
sudo snap install chromium
```

Fedora:

```bash
sudo dnf install chromium
```

Arch Linux:

```bash
sudo pacman -S chromium
```

macOS (Homebrew):

```bash
brew install --cask chromium
```

Windows (chocolatey):

```powershell
choco install chromium
```

Again: none of the above is required to run the Electron app — Electron bundles Chromium internally.

---

## Project setup — quick start (how to run locally) 🛠️

Prerequisites:

- Node.js (I recommend Node 16+ or whatever your local environment supports).
- npm (or yarn).

Clone + install:

```bash
git clone <this-repo-url> my-electron-portfolio
cd my-electron-portfolio
npm install
```

Available npm scripts (from `package.json`):

- `npm run start` — start Electron and load the built files (uses `./node_modules/.bin/electron . --no-sandbox`).
- `npm run dev` — run `webpack --watch` and then start Electron (good for development hot rebuilds).
- `npm run build` — run `webpack` and then `electron-builder` to create platform packages (AppImage / deb configured for Linux in `package.json`).
- `npm run build:webpack` — only run `webpack`.

Common dev flow:

1. Install dependencies: `npm install`
2. Start development (watch + electron):

```bash
npm run dev
```

3. Or build and run once:

```bash
npm run build:webpack
npm run start
```

If you want a single-shot packaging step:

```bash
npm run build
```

Note: `electron-builder` configuration is in the `build` property of `package.json`. This repo targets `AppImage` and `deb` for Linux. Adjust as needed for macOS / Windows.

---

## Files & Structure (where the pieces live) 📁

- `src/index.js` — Electron main process. Creates `BrowserWindow`, sets `preload` and listens for `ipcMain` events (e.g., contact form submit).
- `src/preload.js` — preload script. Exposes `ipcRenderer` on `window` for the renderer. (Simple example: `window.ipcRenderer = require('electron').ipcRenderer;`)
- `src/react/` — React app (renderer):
  - `src/react/index.js` — React entry, mounts `<App />` to `#root`.
  - `src/react/App.js` — App component that imports `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Education`, `Contact`, `Footer`, `CustomCursor`.
  - `src/react/components/` — components (e.g., `Hero.js`, `Contact.js`, `Skills.js`, `ParallaxBackground.js`).
- `src/build/` — generated by `webpack` (contains `bundle.js` and `index.html` output). `src/index.js` loads `src/build/index.html` in dev/run.
- `assets/` — static assets such as resume PDF and images referenced in components.

---

## Tech details & architecture (deep dive) 🧱

1) High-level architecture

- Single main process (`src/index.js`) manages windows and system-level events.
- One renderer process (the React app) is loaded by a `BrowserWindow` and served from `src/build/index.html`. The React app is bundled with Webpack.
- Communication: `ipcMain` (main) <-> `ipcRenderer` (renderer). Example contact form flow:
  - Renderer sends `contact-form-submit` with form data.
  - Main logs it and replies with `contact-form-result` after a simulated timeout.

2) React approach

- Functional components + hooks (`useState`, `useEffect`). Clean, modern React.
- Framer Motion is used for animations (`framer-motion`) in a few components (e.g., `CustomCursor`, parallax elements).
- Tailwind CSS used for styling via `src/react/index.css` and `tailwind.config.js`.
- Assets (images, pdf) are loaded via Webpack asset/resource rules and referenced from components.

3) Bundling: `.babelrc` and `webpack.config.js`

- `.babelrc` (present in the repo) uses presets: `@babel/preset-env` and `@babel/preset-react`. This allows using modern JS features and JSX.

- `webpack.config.js` key points:
  - Entry: `./src/react/index.js` (the React app entrypoint).
  - Output: writes to `src/build/bundle.js` (and `index.html` via `HtmlWebpackPlugin`). The Electron main process loads `src/build/index.html`.
  - Module rules:
    * `babel-loader` for `.js`/`.jsx` (transpiles JSX and modern JS using `.babelrc`).
    * `style-loader`, `css-loader`, `postcss-loader` for CSS (Tailwind runs via PostCSS).
    * `asset/resource` for images so they are copied into `assets/` under `src/build`.
  - Plugins: `HtmlWebpackPlugin` to generate `index.html` from `src/index.html`.

Why this setup:

- Webpack + Babel lets us write modern React code and output a single bundle that the Electron renderer can load easily.
- Using `postcss-loader` + `tailwindcss` enables Tailwind utility classes without adding heavy runtime frameworks.

4) Packaging

- `electron-builder` is configured via `package.json -> build` for packaging. `productName`, `appId`, and Linux targets (`AppImage`, `deb`) are defined.

5) Example security considerations in this repo

- `nodeIntegration: true` and `contextIsolation: false` are convenient for development (lets renderer require electron directly), but they allow full Node access from the renderer — dangerous for production. Prefer `contextIsolation: true` + `preload` to only expose required functions.

---

## Notable files (quick reference)

- `src/index.js` — main process & IPC handlers.
- `src/preload.js` — exposes `ipcRenderer` to the renderer (simple approach used here).
- `src/react/index.js` — React renderer entrypoint.
- `src/react/App.js` — top-level React component.
- `src/react/components/Contact.js` — contact form that uses `window.require('electron')`/`ipcRenderer`.
- `webpack.config.js` — bundling rules (babel, css, assets, html plugin).
- `.babelrc` — Babel presets for JSX and modern JS.
- `package.json` — scripts and `electron-builder` configuration.

---

## Quick troubleshooting & tips ⚙️

- If you see a blank window: check that `src/build/index.html` exists (output of `webpack`). Run `npm run build:webpack` to build.
- If you modify `preload.js` or `src/index.js` (main process), you must restart Electron to pick up changes.
- When using `npm run dev`, `webpack --watch` rebuilds bundles — keep an eye on the terminal for build errors.
- If you encounter permission or sandbox issues on Linux, try removing `--no-sandbox` from `start` scripts only if you understand the tradeoffs.

---

## This repo is a learning artifact 🎓

This project was built purely out of curiosity and a post-exam boredom urge to learn Electron. It's not a library or production template — it's a personal sandbox. The whole point was: "isn't it interesting that we can build desktop apps just like the way we build webpages?" — so I experimented and documented it here.

If you poke around, you'll find lots of small learning-focused patterns (explicit IPC messages, Framer Motion examples, Tailwind usage) and some shortcuts taken for convenience during learning. If you plan to turn this into a production app later, please follow security best practices first.

---

## What's next / suggestions for improvement ⤴️

- Harden security: set `contextIsolation: true`, `nodeIntegration: false`, and expose only minimal APIs via `preload.js`.
- Add hot-reload for the main process (tools exist to restart main when files change).
- Add tests for key components.
- Expand `electron-builder` config for macOS/Windows targets if you want cross-platform distributors.

---

Thanks for checking this out — building a desktop app with web skills is surprisingly fun. If you want, I can:

- convert the `preload`/IPC to a safer pattern,
- add a small packaging CI step,
- or make a minimal, production-ready starter based on this learning repo.

Happy hacking! ⚡️

— Built for learning & curiosity

---

## Packaging — exact commands for Ubuntu and Windows (what changed & how to build)

I made a couple small changes to the repo to make packaging smoother:

- Added an `author` field to `package.json` (electron-builder requires maintainer info for `.deb`). Please replace the placeholder email with your real email.
- Added a `files` array to the `build` block in `package.json` so `src/build` (webpack output) and main/preload files are explicitly included in the packaged app.

Below are the step-by-step commands you can run from the project root to produce Linux (AppImage + .deb) and Windows installers. I also include code-signing options for Windows installers.

Important: run these from the project root.

Packaging prerequisites (one time):

```bash
# Install electron-builder locally (dev dependency)
npm install --save-dev electron-builder

# Optional helpers for building .deb on Ubuntu
sudo apt update
sudo apt install -y fakeroot dpkg-dev
```

Build + package for Ubuntu (AppImage + .deb)

1) Build the renderer (webpack):

```bash
npm run build:webpack
```

2) Package the app (electron-builder):

```bash
# Option A: use your package.json `build` script (runs webpack && electron-builder)
npm run build

# Option B: run electron-builder directly (if you already ran webpack)
npx electron-builder --linux deb --linux AppImage --x64
```

3) Test the artifacts (in `dist/` by default):

```bash
ls -la dist
chmod +x dist/*.AppImage
./dist/*.AppImage

# Install the .deb
sudo dpkg -i dist/*.deb
sudo apt-get install -f  # fix dependencies if needed
```

Notes for Linux packaging

- Make sure `src/build` contains `index.html`, `bundle.js` and `assets/` (webpack emits these when you run `npm run build:webpack`).
- If assets are missing at runtime, either import images in your components (recommended) or use CopyWebpackPlugin to copy `src/assets` into `src/build/assets`.
- If you see warnings about icon or category, add `linux.icon` (path to .png/.ico) and `linux.category` in `package.json` build config.

Build + package for Windows (recommended: run on Windows or use CI)

Best practice: build on a Windows machine or via CI (GitHub Actions) running on `windows-latest`.

1) Add a Windows icon and update `package.json` build block. Example snippet:

```json
"win": {
  "icon": "assets/icon.ico",
  "target": ["nsis"]
}
```

2) Build on Windows (PowerShell):

```powershell
npm install
npm run build:webpack
npx electron-builder --win nsis --x64
```

Windows signing (production-ready installers)

Option A — Let electron-builder sign during build (recommended):

- Set these environment variables before running electron-builder:
  - `CSC_LINK` — path or URL to your `.p12`/`.pfx` certificate
  - `CSC_KEY_PASSWORD` — the password for the certificate

Example (PowerShell):

```powershell
$env:CSC_LINK = "C:\path\to\certificate.pfx"
$env:CSC_KEY_PASSWORD = "pfxPassword"
npx electron-builder --win nsis --x64
```

Option B — Sign manually after build with SignTool (Windows SDK):

```powershell
# sign the installer produced by electron-builder
signtool sign /f "C:\path\to\certificate.pfx" /p "pfxPassword" /tr http://timestamp.digicert.com /td sha256 /fd sha256 "dist\YourInstaller.exe"
```

Notes on signing

- Use a trusted code-signing certificate (PFX) from a CA. For wide distribution, EV (Extended Validation) certs reduce SmartScreen prompts.
- electron-builder can automatically sign if `CSC_LINK` / `CSC_KEY_PASSWORD` are set. In CI, store these as secrets.
- Cross-signing from Linux is possible (osslsigncode / Wine) but fragile — prefer Windows or CI.

CI recommendation (GitHub Actions)

Use a Windows runner to build and sign. Example outline:

1. Add a GitHub Actions workflow that runs on `windows-latest`.
2. Use repository secrets for `CSC_LINK` and `CSC_KEY_PASSWORD` (or upload PFX as a secure artifact).
3. Run `npm ci`, `npm run build:webpack`, then `npx electron-builder --win nsis --x64`.

If you want, I can add a GitHub Actions workflow file and a `win` block to `package.json`, and I can create a short helper to convert a PNG to `.ico` (or show commands to do that locally).

---

If you'd like, I can next:

- replace the placeholder email in `package.json` with the one you provide,
- add `win` metadata (icon + NSIS settings) to `package.json`,
- create a simple GitHub Actions workflow to build Windows installers automatically.

Tell me which of the above you'd like me to commit next and I'll apply the change.
