# Hosting Your Portfolio
## From a local folder to a live URL

This is a static site — pure HTML, CSS, and JavaScript with no backend.
That means hosting is free, fast, and takes about 20 minutes the first time.
The recommended path is GitHub → Netlify. It's the industry standard for
exactly this type of site.

---

## What You'll Need
- A free GitHub account (github.com)
- A free Netlify account (netlify.com)
- Git installed on your computer
- About 20 minutes

---

## Step 1: Install Git

Git is the version control tool that lets you push your files to GitHub.

**Check if you already have it:**
```bash
git --version
```
If you see a version number, you're good. If not:
- **Windows:** Download from git-scm.com → install with defaults
- **Mac:** Run `git --version` in Terminal — it'll prompt you to install if missing

**Configure it (one time only):**
```bash
git config --global user.name "Ryan Pawloski"
git config --global user.email "your@email.com"
```

---

## Step 2: Create a GitHub Repository

1. Go to github.com and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `portfolio` (or `ryanpawloski.github.io` if you want a free
   GitHub Pages URL instead — more on that below)
4. Set it to **Public**
5. Do NOT check "Add a README" — your folder already has files
6. Click **Create repository**

GitHub will show you a page with commands. Keep this tab open.

---

## Step 3: Push Your Portfolio to GitHub

Open a terminal (Command Prompt, PowerShell, or Terminal) and navigate
to your Portfolio folder:

```bash
cd "/home/ryanpawloski/Development/Portfolio"
```

Then run these commands in order:

```bash
# Initialize git in this folder
git init

# Stage all your files
git add .

# Create your first commit
git commit -m "Initial portfolio build"

# Connect to your GitHub repo (copy the exact URL from GitHub)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your files up
git branch -M main
git push -u origin main
```

Refresh your GitHub repo page — you should see all your files there.

---

## Step 4: Deploy with Netlify

Netlify watches your GitHub repo and automatically republishes your site
every time you push a change. This is the magic.

1. Go to netlify.com → **Sign up** (use "Sign up with GitHub" for easiest setup)
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** → authorize Netlify to access your repos
4. Find and select your `portfolio` repo
5. Build settings — leave everything blank (this is a static site, no build step):
   - Build command: *(leave empty)*
   - Publish directory: *(leave empty or type `.`)*
6. Click **Deploy site**

Netlify will give you a URL like `https://amazing-ferret-abc123.netlify.app`.
Your site is live.

---

## Step 5: Set a Custom Subdomain (Optional, Free)

The auto-generated URL is ugly. Change it:

1. In Netlify, go to **Site configuration** → **Domain management**
2. Click **Options** next to the auto-generated name → **Edit site name**
3. Type something like `ryanpawloski` → save
4. Your URL becomes: `https://ryanpawloski.netlify.app`

Free, takes 30 seconds.

---

## Step 6: Custom Domain (Optional, ~$12/year)

If you want `ryanpawloski.com` or similar:

1. Buy a domain at Namecheap, Google Domains, or Cloudflare Registrar
   (~$12/year for a .com)
2. In Netlify → **Domain management** → **Add a domain**
3. Enter your domain → Netlify gives you DNS records to add
4. Log into your domain registrar → update the DNS records as instructed
5. Wait 10–30 minutes for DNS to propagate
6. Netlify automatically provisions an SSL certificate (HTTPS) — free

---

## Making Updates

This is the part that makes the whole setup worthwhile.

When you want to update the site — edit a file, add a blog post, change
your bio — just:

```bash
# From your Portfolio folder
git add .
git commit -m "Add new blog post"
git push
```

Netlify detects the push and redeploys automatically. Your live site
is updated in about 30 seconds. No FTP. No drag-and-drop upload.
No logging into a dashboard. Just push and it's done.

---

## Adding a New Blog Post

Each post is an HTML file in the `writing/` folder. To add one:

1. Copy `writing/why-i-built-a-documentation-tool.html`
2. Rename the copy to match your new post title
   (e.g. `writing/30-days-of-coding.html`)
3. Update the `<title>`, `<meta name="description">`, and article content
4. Add a link to it in `writing.html` (follow the existing pattern)
5. Add it to the homepage (`index.html`) if it's a featured post
6. Push to GitHub

The post is live in 30 seconds.

---

## Alternative: Deploy Without Git (Drag and Drop)

If you want to skip Git entirely for now:

1. Go to netlify.com → **Sign up**
2. On the dashboard there's a box that says
   **"Want to deploy a new site without connecting to Git? Drag and drop
   your site folder here."**
3. Drag your entire `Portfolio/` folder onto that box
4. Done — your site is live instantly

The downside: you have to drag and drop every time you make a change.
Use this to get the site live today, then set up Git properly when you're
ready (Stage 5 in your learning track).

---

## Alternative: GitHub Pages (Also Free)

If you named your repo `YOUR_USERNAME.github.io` in Step 2:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Save

Your site is live at `https://YOUR_USERNAME.github.io` in a few minutes.
No Netlify needed. Slightly less flexible but one fewer account to manage.

---

## Summary

| Task | Time | Cost |
|---|---|---|
| GitHub account | 2 min | Free |
| Netlify account | 2 min | Free |
| First deploy | 15 min | Free |
| Custom subdomain (netlify.app) | 1 min | Free |
| Custom domain (.com) | 30 min | ~$12/year |
| Future updates | 30 seconds | Free |

---

## Checklist Before Going Live

- [ ] Update `mailto:your@email.com` in `about.html` with your real email
- [ ] Update GitHub links from `https://github.com` to your actual profile URL
- [ ] Read through the blog post — edit anything that doesn't sound like you
- [ ] Update the "Right Now" section in `about.html`
- [ ] Open the site locally in a browser and check all pages look right
- [ ] Check it on your phone (resize the browser window or use Chrome DevTools)

---

*Related: learning-track.md Stage 5 covers Git and deployment in detail.*
*The Git & Github Bootcamp (Colt Steele) on Udemy covers Git thoroughly.*
