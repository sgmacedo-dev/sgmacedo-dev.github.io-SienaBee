# Siena Bee — Project Status

**Updated:** 2026-09-27 (America/Sao_Paulo)  
**Repo:** https://github.com/sgmacedo-dev/sgmacedo-dev.github.io-SienaBee  
**Live (project Pages):** https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/  
**Stack:** Semantic HTML5 · CSS3 · vanilla JavaScript — no framework migration.  
**Identity:** Philosophy · Silence · Slow Living · *Pulchritudo · Silentium · Sapientia*  
**Editorial line:** no astrology / esotericism.

---

## Decisions (current)

| Decision | Choice |
|----------|--------|
| Public URL (until DNS) | GitHub project Pages base above |
| Canonical / sitemap / robots | Use Pages base URL |
| Asset paths | Relative (`../`, `../../`) — required for project Pages |
| CSS source of truth | `css/style.css` + `css/variables.css` |
| Duplicate CSS | `assets/css/style.css` is a deprecated `@import` shim |
| Amazon Prime banner | Discreet placement on **home, library, shop** only |
| Contact | Mailto CTA; form endpoint deferred |
| AdSense | Reserved `.ad-slot` + HTML comments only — **no publisher ID** |
| Library/Shop Amazon links | `.affiliate-cta` + `data-asin="YOUR_ASIN"` + tag `YOUR_ASSOCIATE_TAG` in `js/script.js` until Silvana confirms |
| Legal | `/legal/` privacy, terms, cookies, affiliate disclosure (informational templates) |

---

## P0 done (this launch pass)

- [x] Remove invalid `<section class="prime-banner">` from `<head>`; keep discreet banner on home/library/shop
- [x] Replace broken `images/hero.jpg`; generate favicon / apple-touch / icons / og-cover
- [x] Legal pages under `/legal/`
- [x] Fix `articles/policies/` dead links → `/legal/`
- [x] Replace empty category stubs with minimal essay indexes; remove `editor/essays` junk
- [x] CSS dedupe strategy
- [x] Full `sitemap.xml` + `robots.txt` aligned to live Pages base
- [x] Canonical / og:url updates on key pages toward Pages base
- [x] AdSense reserved slots (no fake IDs)
- [x] `docs/PROJECT_STATUS.md`, `docs/journalism/` skeleton
- [x] `.env.example`
- [x] Fix wrong `../` depths on House Journal flat essays + philosophy + slow-living duplicate
- [x] Contact: remove fake submit form → mailto
- [x] README structure soft-fix

---

## P1 done (2026-09-27)

- [x] JSON-LD via shared helper in `js/script.js` (`initSchema`): Organization + WebSite on all pages that load the script; Article when `og:type=article`; BreadcrumbList from canonical path. **No SearchAction** (no on-site search yet).
- [x] Accessible mobile nav: `.nav-toggle` injected when `.main-nav` exists; `aria-expanded`, Escape / outside-click / link close; CSS panel ≤900px (nav was previously `display:none` with no toggle).
- [x] Affiliate components: `.affiliate-cta` / `.affiliate-card` / `.affiliate-disclosure-note`; Library + Shop wired with `data-asin="YOUR_ASIN"` placeholders; tag stays `YOUR_ASSOCIATE_TAG` in `SienaBee.amazon` (see `docs/AFFILIATE.md` + `docs/snippets/affiliate-card.html`).
- [x] Disclosure note visible above product grids on Library/Shop; links use correct `../legal/affiliate-disclosure/` depth.

## P2+ (next)

- Unify nav IA across all templates
- Single canonical for *As Time Goes By* (prefer flat `.html`; redirect or drop nested duplicate)
- Expand Amazon product links with real Associates tag + ASINs (Silvana) — see `docs/AFFILIATE.md`
- Accessibility / Lighthouse pass
- Quiet Circle newsletter provider

---

## Depends on Silvana

1. Custom domain DNS + GitHub Pages `CNAME` for `sienabee.com` / `www`
2. Amazon Associates tag + real ASINs — set `SienaBee.amazon.associateTag` and each `data-asin` (see `docs/AFFILIATE.md`). Teammate note `4bee-20` is **unverified**. Verify `amzn.to` Prime link.
3. Working inboxes: `hello@sienabee.com`, `partnerships@sienabee.com`
4. Author bio text & photo for About / Editor’s Desk
5. AdSense account → paste real `ca-pub-…` when approved (into reserved slots)
6. reCAPTCHA + form endpoint if contact form returns
7. Analytics choice / ID
8. Legal comfort with `/legal/` templates (LGPD) — professional review optional
9. Search Console property for the live URL
10. Which essays are “launch set” vs draft

### How to add AdSense later

1. Get approved `ca-pub-…` client ID.  
2. Add the official AdSense script once in `<head>` of templates (or a tiny shared include later).  
3. Replace reserved `.ad-slot` divs with official `<ins class="adsbygoogle">` units.  
4. Update Privacy + Cookie pages.  
5. **Never commit secrets**; site keys that Google marks public may live in HTML.

---


### How to add Amazon Associates later

1. Confirm the tracking tag in Amazon Associates Central (do **not** assume `4bee-20`).
2. Set `associateTag` in `js/script.js` → `SienaBee.amazon`.
3. Replace each `data-asin="YOUR_ASIN"` on `library/index.html` and `shop/index.html`.
4. Optional: copy `docs/snippets/affiliate-card.html` for new cards.
5. Smoke-test one CTA and the Affiliate Disclosure link from Library and Shop.

## Deploy

- Host: GitHub Pages (project site)  
- Branch: `main`  
- Path prefix: `/sgmacedo-dev.github.io-SienaBee/`  
- After push: wait for Pages rebuild, then smoke-test CSS on a deep essay URL.

---

*SHIP > perfection. Preserve maison voice. Do not invent astrology content.*
