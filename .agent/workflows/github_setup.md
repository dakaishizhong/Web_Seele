---
description: Initialize Git and Push to GitHub
---

# Push to GitHub Guide

Follow these steps to upload your local project to GitHub.

## 0. Install Git (Pre-requisite)

It seems **Git** is not installed on your computer (or not in your PATH).

1. Download Git for Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run the installer (you can just click "Next" through all options).
3. **Restart your terminal** (or VS Code) after installation for the command to work.
4. Verify by running `git --version`.

## 1. Initialize Git

Open your terminal in the project folder (`d:\VS\seele`) and run:

```bash
git init
```

## 2. Add Files and Commit

Add all your project files to the staging area and save them:

```bash
git add .
git commit -m "Initial commit: Personal Dashboard"
```

## 3. Create a Repository on GitHub

1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **+** icon in the top-right corner -> **New repository**.
3. Name it (e.g., `personal-dashboard`).
4. **Important**: Do NOT check "Initialize with README", .gitignore, or license (keep it empty).
5. Click **Create repository**.

## 4. Connect and Push

GitHub will show you a page with commands. Look for the section **"…or push an existing repository from the command line"**.

Copy and run those commands. They usually look like this (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-dashboard.git
git push -u origin main
```

> **Note**: If it asks for a password, you might need to use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) if you haven't set up SSH keys.

## 5. Done!

Refresh your GitHub repository page, and you should see your files. Now you can connect this repo to Cloudflare Pages, Vercel, or Netlify.
