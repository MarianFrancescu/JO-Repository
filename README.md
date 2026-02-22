# Johnut Portfolio

Portfolio website built with **React + TypeScript + Vite + MUI + Tailwind**.

## How To Run The Application

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

`http://localhost:5173`

Useful scripts:

- `npm run dev` - run dev server
- `npm run build` - production build (outputs to `dist/`)
- `npm run preview` - preview production build locally
- `npm run typecheck` - TypeScript project type-check

## How To Edit Data Displayed In The UI

All editable content is in the top-level `data/` folder (outside `src`):

- `data/profile.ts` - name, role, institution, headline, about
- `data/experiences.ts` - Experience section
- `data/studies.ts` - Studies section
- `data/publications.ts` - Publications section
- `data/contact.ts` - Contact section
- `data/materials.ts` - Materials page links
- `data/portfolioData.ts` - re-exports (import hub)

After editing data:

```bash
npm run dev
```

or rebuild:

```bash
npm run build
```

Routes:

- `/` and `/portfolio` -> main portfolio
- `/materials` -> materials page

## How To Deploy App To GitHub Pages

### Option A: GitHub Actions (recommended)

1. In GitHub repository settings:
   - Go to `Settings -> Pages`
   - Set `Source` to `GitHub Actions`

2. Create workflow file: `.github/workflows/deploy.yml`

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. If this is a **project page** (`https://<user>.github.io/<repo>/`), set Vite base:
   - in `vite.config.ts`:
   - `base: '/<repo>/'`

For user/org pages (`https://<user>.github.io/`), keep default base.

### Option B: Manual deploy with `gh-pages` package

1. Install:

```bash
npm i -D gh-pages
```

2. Add script in `package.json`:

```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Run:

```bash
npm run deploy
```
