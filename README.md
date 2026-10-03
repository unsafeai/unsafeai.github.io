# Unsafe AI — Next.js redesign

A modernized, monospace-first website for Unsafe AI, an organization dedicated to conscious intelligence.

## Direction

- Dark instrumentation / research-interface visual language.
- Monospace typography throughout the UI and display system.
- Existing Unsafe AI research questions retained as the content spine.
- More explicit hierarchy: Position → Research Program → Lab Readout → Recruitment / Contact.
- Static export so the site remains deployable on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static site is emitted to `out/` via Next.js `output: "export"`.

## GitHub Pages

The included workflow builds the static export and deploys it through GitHub Pages. Enable GitHub Pages for the repository with **GitHub Actions** as the source.

The workflow is intentionally serverless/static because the current site is a public research landing page; Next.js static export keeps the deployment close to the current GitHub Pages model while leaving room to add richer routes later.
