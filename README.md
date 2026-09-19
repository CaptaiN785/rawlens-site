# rawlens-site

Landing page and privacy policy for
[Rawlens](https://github.com/CaptaiN785/rawlens) — the Markdown, JSON & CSV
viewer browser extension (formerly *Markdown Viewer*).

Live at <https://rawlens.kryl.dev/> on Netlify (project `rawlens`;
`netlify.toml`: publish the repo root, no build). The Netlify project is **not
connected to this repo** — a push does not deploy. Deploy by hand after merging
to `main`:

```
netlify deploy --prod --dir . --site d2726fcf-7428-4e2f-ab56-6307414d702c
```

DNS: `rawlens.kryl.dev` is a proxied `CNAME` to `rawlens.netlify.app` in the
`kryl.dev` Cloudflare zone; Netlify's default certificate sits behind it.

`privacy.html` is the
privacy-policy URL the Chrome Web Store listing depends on — once the listing
is live, do not move that page, drop the custom domain, or let `kryl.dev`
lapse.

Static: `index.html`, `privacy.html`, `style.css`, `favicon.svg`,
`favicon.png`, `shots/`. No build.

- `privacy.html` mirrors the extension repo's `PRIVACY.md` — change both
  together.
- `shots/` and the favicons come from the extension repo (`store-assets/`,
  `icons/icon.svg`, `icons/icon128.png`); regenerate there, copy here.
