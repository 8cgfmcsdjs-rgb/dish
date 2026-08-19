# DJILEN — Find Your Way.

CHIMEN 001 — The Origin Collection

A complete front-end e-commerce website for DJILEN: a premium streetwear
and minimalist luxury brand rooted in the Haitian Creole idea of *chimen*
— the path, the journey, the direction we choose.

## What's included

- `index.html` — homepage: announcement bar, full-screen editorial hero,
  category band (Men/Women/Kids), new arrivals, varsity jacket spotlight,
  bestsellers, brand manifesto + lookbook teaser, values, newsletter.
- `shop.html` — full catalog (44 SKUs) with department + category
  filtering, sorting, live search, and product count.
- `lookbook.html` — dedicated editorial lookbook grid.
- `about.html` — extended brand story, origin narrative, manifesto lines,
  quote band.
- `assets/css/style.css` — the full design system (colors, type,
  components, the diagonal "path" signature motif).
- `assets/js/products.js` — the product catalog across Men, Women, Kids ×
  varsity jackets, hoodies, oversized tees, sweatpants, caps, bags,
  jewelry, and accessories.
- `assets/js/main.js` — shared UI: mobile nav, search overlay, DJ
  monogram rendering, product card markup, toasts, newsletter validation.
- `assets/js/cart.js` — cart logic (add / remove / quantity), persisted
  in `localStorage` for the visitor's session across pages.
- `assets/js/shop.js` — filtering + sorting logic for the shop page.
- `assets/img/favicon.svg` — the DJ monogram as a favicon.

## Design direction

- **Palette:** warm cream, near-black ink/charcoal, washed gray, olive,
  and a sparing acid-lime accent — strong black-and-white branding with
  color used only where it earns its place.
- **Type:** Anton (bold display), Inter (body), Space Mono (labels,
  prices, utility text).
- **Signature motif:** a diagonal line/opening running through the DJ
  monogram, hero, product frames, and section dividers — representing
  the path (*chimen*) the brand is built around.
- Haitian influence is expressed through language, naming, and the
  path/journey motif — deliberately without flags, maps, or literal
  cultural imagery, per the brand's own direction.

## No image assets were uploaded

No DJILEN logo or photography files were present in the working
environment, so:

- The **DJ monogram** is a coded SVG: a connected D + J ligature cut by a
  diagonal opening, built to spec from the brief (see `djilenMark()` in
  `assets/js/main.js`).
- Every product "photo" is a coded placeholder: a gradient tile in the
  brand's palette with the monogram centered on it, clearly labeled.

### To drop in real photography or a real logo file:

1. Add your image files to `assets/img/` (e.g. `assets/img/products/`).
2. In `assets/js/products.js`, add an `img: 'assets/img/products/xyz.jpg'`
   field to any product object.
3. In `assets/js/main.js`, inside `djilenRenderCard()`, swap the `.swatch`
   div for an `<img>` tag when `p.img` is present.
4. Replace `assets/img/favicon.svg` and the `data-mark` monogram markup
   in the headers/footers with your real logo file if you'd like the
   exact brand mark instead of the coded monogram.

## Running it

Static site, no build step. Open `index.html` directly, or serve the
folder with any static server:

```bash
npx serve .
```

## Push this to GitHub

This folder is already a git repo. To get it onto GitHub:

**Option A — GitHub CLI (fastest)**
```bash
cd djilen
gh repo create djilen-website --public --source=. --remote=origin --push
```

**Option B — manual**
1. Create a new empty repository on GitHub (skip README/gitignore — this
   folder already has them).
2. In this folder:
   ```bash
   cd djilen
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

**Option C — no git/terminal**
Open your new empty repo on GitHub → "uploading an existing file" →
drag in every file/folder (keep `assets/` and `.github/` as folders) →
commit.

## Host it live with GitHub Pages (free)

A workflow at `.github/workflows/deploy.yml` is included — it deploys
automatically on every push to `main`.

After pushing:
1. Repo → **Settings → Pages**.
2. Under "Build and deployment," set **Source** to **GitHub Actions**.
3. Push (or re-run from the **Actions** tab) — live at
   `https://<your-username>.github.io/<repo-name>/` within a minute.

## Notes

- Cart persists via `localStorage` for the session — no backend included.
  "Checkout" shows a design-preview toast; wire it to your payment
  provider of choice.
- Search is client-side, matching against product name, department, and
  category.
- All colors, type, and spacing are token-driven in `style.css` — search
  for `:root` at the top of the file to re-theme.
- Fonts (Anton, Inter, Space Mono) load from Google Fonts via CDN.
