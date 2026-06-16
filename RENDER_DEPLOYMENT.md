# Render Deployment Guide

Created: 2026-06-15  
Repository: `hartmanh14/Par-Tee-Trailer`  
Blueprint file: `render.yaml`

## What This Deploys

The repository is configured to deploy two separate Render static sites:

| Render Service | Purpose | Publish Path |
|---|---|---|
| `par-tee-trailer-customer-site` | Customer-facing marketing draft for Triple Play Mobile Golf | `./draft_website` |
| `par-tee-trailer-internal-hub` | Private/internal project-management hub for Hayden | `./render_build/project_hub` |

These are intentionally separate sites. The internal hub should not be shared as the customer website.

## How The Internal Hub Build Works

The internal hub links to generated project docs, photos, workbook, and the customer draft site. Because Render deploys static sites from a single publish directory, the hub uses:

`scripts/build-project-hub.sh`

That script:

1. Creates `render_build/project_hub`.
2. Copies `project_hub` into that folder.
3. Copies the generated docs, workbook, zip files, `draft_website`, and `shareable_photos`.
4. Rewrites local `../` links so they work when the hub is deployed as the root of its own Render static site.

## Deploy With Render Blueprint

1. Confirm `render.yaml` is pushed to GitHub on `main`.
2. Open Render Blueprint deploy:

   https://dashboard.render.com/blueprint/new?repo=https://github.com/hartmanh14/Par-Tee-Trailer

3. Connect GitHub if prompted.
4. Review the two services:
   - `par-tee-trailer-customer-site`
   - `par-tee-trailer-internal-hub`
5. Click **Apply**.
6. Wait for both deploys to finish.

## After Deployment

Customer site:
- Share carefully only when the copy is ready for public review.
- Replace generated images with real trailer photos after build.
- Add real contact, scheduler, deposit flow, privacy/terms, and production lead capture before launch.

Internal hub:
- Keep this URL private.
- It stores checklist/prospect status in browser `localStorage`; it is not a shared database.
- If multiple people use it, each browser will have its own local status state.

## Notes

- No database, worker, or environment variables are needed.
- Both services are static HTML/CSS/JS.
- No catch-all rewrite routes are used, so Markdown, workbook, zip, and image links in the internal hub can be opened directly.
- Render will rebuild from GitHub whenever `main` changes.
- The internal hub is an operations dashboard, not a customer-facing website.
