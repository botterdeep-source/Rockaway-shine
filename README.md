# Rockaway Shine

A mobile-friendly static website for Rockaway Shine, built with Next.js and prepared for GitHub Pages.

## Run it locally

1. Install Node.js 20 or newer.
2. From this folder, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local address printed by Next.js.

Create the static production site with:

```bash
npm run build
```

The finished static site is written to `out/`.

## Publish with GitHub Pages

1. Upload the **contents** of this folder to the root of your GitHub repository.
2. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Push to the `main` branch. The included workflow builds the site and publishes the `out/` directory.
4. The `public/CNAME` file carries `rockawayshine.com` into the static export. Your existing GitHub Pages domain setting remains managed in the repository settings.

If your repository uses a different default branch, edit the branch name in `.github/workflows/pages.yml`.

## Project map

- `components/site.tsx` — shared navigation, footer, service data, reviews, and before/after slider
- `pages/` — home, services, about, contact, service areas, gallery, FAQ, and legal pages
- `styles/global.css` — responsive visual styles
- `public/` — GitHub Pages domain marker and Jekyll bypass
- `tests/tests.json` — AppDeploy page and interaction coverage
- `.github/workflows/pages.yml` — GitHub Pages build and publish workflow

## Form submissions

- Contact and instant quote requests are submitted to Formspree from pages/contact.tsx.
- Review submissions send the visitor's name, rating, and review text to the Google Apps Script endpoint in components/site.tsx. Submissions are for moderation and do not publish themselves to the site.

## Photo sources

The regular service and hero photos reference Unsplash stock images. The before/after comparison photos reference Rockaway Shine's published gallery. These image URLs are external and are not bundled as local image files; update the URLs in `components/site.tsx` if you replace them.
