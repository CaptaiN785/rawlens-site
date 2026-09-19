# rawlens-site

Landing page and privacy policy for
[Rawlens](https://github.com/CaptaiN785/rawlens) — the Markdown, JSON & CSV
viewer browser extension (formerly *Markdown Viewer*).

Live at <https://rawlens.kryl.dev/> on Netlify (project `rawlens`;
`netlify.toml`: publish the repo root, no build). The project is **connected to
this repo** through Netlify's GitHub App — **a push to `main` deploys to
production**; other branches do not build. `privacy.html` is live the moment a
change to it reaches `main`, so review it before merging.

A manual deploy is still possible, from any directory:

```
node deploy.js --draft    # preview URL, production untouched
node deploy.js            # production — normally just push to main instead
```

**Never the bare `netlify deploy --dir . --site …`** — that publishes whatever
the shell's current directory is. Run from the parent folder it started
uploading every project there to this site (2026-09-20; caught mid-upload,
never published). `deploy.js` takes the directory from its own location and
refuses a folder that does not look like this site.

DNS: `rawlens.kryl.dev` is a proxied `CNAME` to `rawlens.netlify.app` in the
`kryl.dev` Cloudflare zone; Netlify's default certificate sits behind it.

`privacy.html` is the
privacy-policy URL the Chrome Web Store listing depends on — once the listing
is live, do not move that page, drop the custom domain, or let `kryl.dev`
lapse.

Static: `index.html`, `privacy.html`, `style.css`, `favicon.svg`,
`favicon.png`, `shots/`. No build. (`deploy.js`, `netlify.toml`, and this
README are published along with them — nothing in them is private.)

- `privacy.html` mirrors the extension repo's `PRIVACY.md` — change both
  together.
- `shots/` and the favicons come from the extension repo (`store-assets/`,
  `icons/icon.svg`, `icons/icon128.png`); regenerate there, copy here.
