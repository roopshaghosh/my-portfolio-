A modern, responsive personal portfolio website built with React, Tailwind CSS, and TanStack Start.
---
## Prerequisites
Before you begin, make sure you have the following installed on your machine:
- **Node.js** `18.x` or higher — [Download here](https://nodejs.org/)
- **Bun** (recommended) or **npm** — [Install Bun](https://bun.sh/docs/installation)
> **Tip:** This project uses `bun` by default (see `bun.lock` and `bunfig.toml`). If you don't have Bun installed, you can use `npm` instead — just replace `bun` with `npm` in the commands below.
---
## Getting Started
### 1. Download & Extract the Project
If you received this as a ZIP file:
1. Extract the ZIP to a folder on your computer.
2. Open the folder in **VS Code** (or your preferred editor).
### 2. Install Dependencies
Open a terminal inside the project folder and run:
```bash
bun install
```
Or if you're using **npm**:
```bash
npm install
```
This will download all the required packages listed in `package.json` (React, Tailwind CSS, Framer Motion, TanStack Start, etc.).
### 3. Start the Development Server
Run the following command to start the local dev server:
```bash
bun run dev
```
Or with **npm**:
```bash
npm run dev
```
The terminal will display a local URL, typically:
```
http://localhost:3000
```
Open this URL in your browser to view the portfolio. The page will **auto-reload** whenever you save changes to any file.
---
## Available Scripts
| Command | Description |
|---------|-------------|
| `bun run dev` | Start the development server with hot reload |
| `bun run build` | Build the project for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint to check code quality |
| `bun run format` | Run Prettier to auto-format all files |
---
## Project Structure
```
├── public/              # Static assets (resume.pdf, favicon, images)
├── src/
│   ├── components/      # Reusable UI components
│   │   └── portfolio/   # Portfolio-specific sections (Hero, About, Skills, etc.)
│   ├── routes/          # TanStack Start routes
│   ├── styles.css       # Global styles & Tailwind CSS imports
│   └── assets/          # Images and media files
├── package.json         # Project dependencies & scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```
---
## Tech Stack
| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library |
| [TanStack Start](https://tanstack.com/start) | Full-stack React framework |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & scroll reveals |
| [Lucide React](https://lucide.dev/) | Icons |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
---
## Troubleshooting
### Port 3000 is already in use
If you see an error like `Port 3000 is already in use`, Vite will automatically try the next available port (e.g., `3001`). Check the terminal output for the correct URL.
### `bun` command not found
Make sure Bun is installed. You can install it with:
```bash
npm install -g bun
```
Alternatively, use `npm` instead of `bun` for all commands.
### Changes not reflecting in browser
- Make sure the dev server is running (`bun run dev`).
- Hard refresh the browser (`Ctrl + Shift + R` or `Cmd + Shift + R`).
- Check the terminal for any build errors.
---
## Deployment
To create a production build:
```bash
bun run build
```
The optimized output will be in the `dist/` folder. You can deploy this folder to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.
---
## License
This project is for personal portfolio use
