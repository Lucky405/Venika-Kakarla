# Signal — Personal Portfolio & Research Log

A portfolio/blog site for a student researcher working at the intersection of
AI and medicine. Built with plain HTML/CSS/JS — no build step, no framework,
deploys directly to GitHub Pages.

## ✏️ How to edit your content

Open **`js/content.js`**. That single file holds everything:

- Your name, tagline, location, email, GitHub/LinkedIn links
- Your "About Me" paragraphs and current skills/tools
- Your **Activities** tab (add/remove entries freely — just copy a `{ ... }` block)
- Your **Awards** tab (same pattern)
- Your **Education** tab (timeline entries with courses)

Each entry is a simple object like:

```js
{
  title: "Independent Research: Early DDH Detection",
  org: "Self-directed, mentored by Dr. Jane Lee (UT Austin)",
  period: "2025 — Present",
  description: "Training a CNN classifier on pediatric hip ultrasound images...",
  tags: ["PyTorch", "Medical imaging", "Pediatrics"]
}
```

To add a new activity/award, copy one of the existing `{ ... }` blocks inside
the `activities` or `awards` array, paste it as a new item, and edit the
text. To remove one, delete its block. Don't forget commas between entries.

You should not need to touch `index.html`, `css/style.css`, or `js/main.js`
unless you want to change the structure or visual design.

### A note on HTML in your text
The `about.paragraphs` and any `description` fields support a few basic HTML
tags if you want emphasis, e.g. `"I love <strong>research</strong>."` — but
everything else is automatically treated as plain text (so symbols like `&`
or `<` in titles are safe to type normally).

## 👀 Preview locally

Just open `index.html` directly in your browser — there's no build process.
If your browser blocks local file requests, run a tiny local server instead:

```bash
# from inside the project folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `your-portfolio`).
2. Push this folder's contents to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch."
5. Set **Branch** to `main` and folder to `/ (root)`. Save.
6. Wait a minute or two — your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

   (If your repo is named exactly `YOUR_USERNAME.github.io`, your site will
   instead live at the root: `https://YOUR_USERNAME.github.io/`.)

Every time you edit `js/content.js` and push to `main`, the live site
updates automatically within a minute or so.

## 🎨 Design notes

The visual language is a "diagnostic monitor" motif — waveform traces that
read as both an ECG and a neural signal, a phosphor-green/coral palette
borrowed from clinical displays, and tabs styled like switching a channel
on a monitor. Fonts: Fraunces (display), IBM Plex Sans (body), IBM Plex Mono
(data/labels). There's a light/dark display toggle in the header.

## 📁 File structure

```
.
├── index.html        ← page structure (rarely needs editing)
├── css/style.css      ← all styling/design tokens
├── js/content.js       ← ⭐ YOUR CONTENT — edit this
├── js/main.js          ← rendering + interaction logic
├── .nojekyll           ← tells GitHub Pages to skip Jekyll processing
└── README.md
```
