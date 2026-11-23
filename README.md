# Deepanshu — DevOps Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step or package installation is required.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

Edit `config.js` and add the public contact details you want to show:

```js
window.PORTFOLIO_CONFIG = {
  name: "Deepanshu",
  email: "your-email@example.com",
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  location: "India"
};
```

The email, GitHub and LinkedIn buttons appear automatically when valid values are supplied. Keep a value empty to hide that button.

Also review the experience title, project descriptions and technology list in `index.html` so they match your exact public profile. Project descriptions are intentionally generalized and avoid client names, internal hostnames and confidential environment details.

## Deploy

This is a static site. You can publish the folder with GitHub Pages, Netlify, Cloudflare Pages or any static web host. Upload the contents of this folder as the site root.

## Files

- `index.html` — page structure and portfolio content
- `styles.css` — responsive visual design
- `script.js` — mobile navigation, contact links and subtle reveal effects
- `config.js` — public contact details
