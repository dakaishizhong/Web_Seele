---
description: Deploy the Personal Dashboard
---

# Deployment Guide

This project is a **Static Site** built with React and Vite. This means it can be hosted on any static hosting service (Vercel, Netlify, GitHub Pages, etc.) or served by any web server (Nginx, Apache).

## 1. Local Build

To create the production-ready static files:

1. Open a terminal.
2. Run the build command:
   ```bash
   npm run build
   ```
3. The output files will be in the `dist/` folder.
   - `dist/index.html` (Entry point)
   - `dist/assets/` (Bundled CSS/JS/Images)

You can test the build locally before deploying:
```bash
npm run preview
```

## 2. Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Vite/React apps.

1. Create a GitHub repository for your code and push it.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New Project" -> Select your GitHub repo.
4. Framework Preset should auto-detect as `Vite`.
5. Click **Deploy**.

## 3. Deploy to Netlify

1. Drag and drop the `dist` folder (created in Step 1) into the Netlify Drop zone manually.
2. Or connect your GitHub repo to Netlify similar to Vercel.

## 4. Deploy to Cloudflare Pages (Excellent Speed)

Cloudflare Pages is a fantastic free option with global CDN.

1. Push your code to GitHub.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com) > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. **Build Settings**:
   - **Framework preset**: Select `Vite` (or `React` if Vite isn't listed, but Vite is preferred).
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
5. Click **Save and Deploy**.

## 4. Manual / Generic Hosting

Upload the contents of the `dist/` folder to the `public_html` or root directory of your web server / shared hosting.
