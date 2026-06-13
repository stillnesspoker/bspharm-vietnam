# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static product landing page for **EVE EYES PRO+** by BSPHARM Korea, targeted at the Vietnamese market. No framework, no build step — plain HTML, CSS, and JS.

## Deployment

Pushes to `main` automatically deploy via GitHub Actions (`.github/workflows/pages.yml`) to GitHub Pages. The entire repo root is uploaded as the artifact.

Local dev server: `npm run dev` — opens `http://localhost:3000` and auto-reloads on file save.

## File structure

- `index.html` — single page: header nav, product image gallery, accordion details panel, footer
- `styles.css` — all styling (referenced with `?v=N` cache-bust query string)
- `script.js` — two behaviors: thumbnail gallery switcher and single-open accordion
- `_headers` — Cloudflare Pages security headers (no effect on GitHub Pages)

## Cache busting

CSS and JS are referenced with version query strings (`styles.css?v=2`, `script.js?v=2`). **Increment the version number in `index.html` whenever `styles.css` or `script.js` changes**, or browsers will serve stale cached files.

## Key design decisions

- All product images are hosted externally on `bsp-korea.com` (WordPress CDN) — no images live in this repo.
- Nav and footer links point to the official `bsp-korea.com` site.
- The page is production content targeting the Vietnamese market.
- Content language is Vietnamese (`<html lang="vi">`).
