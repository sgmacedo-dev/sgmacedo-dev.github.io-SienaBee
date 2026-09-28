# Siena Bee — Launch Checklist (ops)

**For:** Silvana (accounts / DNS / dashboards)  
**Live (until custom domain):** https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/  
**Repo:** https://github.com/sgmacedo-dev/sgmacedo-dev.github.io-SienaBee  

Ordered for go-live. Items marked **[code ✓]** are already done in the repo; **[Silvana]** needs your account or decision.

---

## 0. Before you start

- [ ] Decide which Google / Amazon / email accounts own the House (one person, one recovery path).
- [ ] Confirm launch URL: keep GitHub Pages base **or** cut over to `sienabee.com` (see §1).

---

## 1. DNS + GitHub Pages custom domain — **[Silvana]**

1. [ ] Register / confirm `sienabee.com` (+ optional `www`).
2. [ ] In domain DNS, add GitHub Pages records (A / AAAA or CNAME per [GitHub Pages custom domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. [ ] Repo → Settings → Pages → Custom domain → `sienabee.com` (enforce HTTPS).
4. [ ] Add root `CNAME` file in repo **only when** domain is ready (not present yet — Pages base URLs stay correct until then).
5. [ ] After cutover: update canonical / `og:url` / `sitemap.xml` / `robots.txt` to the apex URL (code task — ask agents then).

**Code today:** all canonicals, OG URLs, sitemap, and robots use the **project Pages** base. No `CNAME` file yet.

---

## 2. Email inboxes — **[Silvana]**

| Address | Used in code | Status |
|---------|--------------|--------|
| `hello@sienabee.com` | Contact, Quiet Circle waitlist mailto | **[Silvana]** mailbox must receive mail |
| `partnerships@sienabee.com` | Contact / partnerships CTAs | **[Silvana]** |

1. [ ] Create both mailboxes (Google Workspace, Zoho, ImprovMX → Gmail, etc.).
2. [ ] Send a test to each from an external account.
3. [ ] Optional later: contact form + reCAPTCHA + form endpoint (mailto is live now — **[code ✓]**).

---

## 3. Amazon Associates tag verify — **[Silvana]** (+ **[code ✓]** wiring)

**Tag in code:** `4bee-20` (`js/script.js` → `SienaBee.amazon`).

1. [ ] Log into Amazon Associates (BR) and confirm tracking ID **`4bee-20`** is active.
2. [ ] Smoke-test a Library and Shop product link from the live site; confirm `tag=4bee-20` in the final URL.
3. [ ] Confirm Prime banner destination (direct Associates Prime URL with same tag — **[code ✓]**).
4. [ ] Optional: re-check Mere Christianity / Consolations editions if catalog drift.

**Code today:** real ASINs on Library/Shop; music via Spotify; affiliate disclosure page + in-page notes; see `docs/AFFILIATE.md`.

---

## 4. Google Search Console — **[Silvana]**

1. [ ] Add property for the **current** live URL (Pages base), or apex once DNS is live.
2. [ ] Verify ownership (HTML file, DNS TXT, or Google Analytics — your choice).
3. [ ] Submit `sitemap.xml`  
   Pages: `https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/sitemap.xml`
4. [ ] After domain cutover: add/move property + resubmit sitemap.

**Code today:** `sitemap.xml` + `robots.txt` aligned to Pages base — **[code ✓]**.

---

## 5. Google AdSense — **[Silvana]** (prep **[code ✓]**)

Full paste guide: **`docs/ADSENSE.md`**.

1. [ ] Apply at [Google AdSense](https://www.google.com/adsense/start/) with the live site URL.
2. [ ] Wait for approval; copy real `ca-pub-…` (never invent one).
3. [ ] Paste client ID into site `<head>` loader + convert reserved `.ad-slot` blocks (`docs/snippets/ad-slot.html`).
4. [ ] Create root **`ads.txt`** only with the real pub line (do not commit empty/fake ads.txt).
5. [ ] Update Privacy + Cookie from “when enabled” to active advertising.

**Code today:** reserved `.ad-slot` markers; Privacy/Cookie mention ads when enabled; **no** `ca-pub` and **no** root `ads.txt`.

---

## 6. Author bio + photo — **[Silvana]**

1. [ ] Final bio paragraph(s) for About / Editor’s Desk (voice: philosophy · silence · slow living; no astrology).
2. [ ] Author photo (rights cleared; preferred dimensions TBD — square or portrait).
3. [ ] Hand assets + approved copy to code for About / Editor pages (placeholders / incomplete copy may remain until then).

---

## 7. Soft launch extras (optional, after §1–6)

- [ ] Analytics choice + ID (Plausible / GA4 / none) — **[Silvana]** then **[code]**
- [ ] Quiet Circle ESP (Substack, Buttondown, etc.) or keep mailto waitlist — **[Silvana]**
- [ ] Legal comfort pass on `/legal/` (LGPD) — optional professional review
- [ ] Declare which essays are “launch set” vs draft
- [ ] Full Lighthouse pass on home + one deep essay (deeper a11y beyond crest dims / `lang`)

---

## Already done in code (do not redo)

| Area | Done |
|------|------|
| Semantic HTML + `lang="en"` | ✓ |
| Primary nav IA + mobile toggle | ✓ |
| Skip-link + `main#main-content` on key templates | ✓ |
| JSON-LD helper (Organization / WebSite / Article / Breadcrumb) | ✓ |
| Canonical + OG/twitter on home, about, contact, letters, shop, editor, music, library, legal, 404 | ✓ |
| OG/twitter + canonical on start, reading-room, topics, commonplace | ✓ |
| OG/twitter on House Journal category indexes (philosophy, literature, ecology, psychology, slow-living, policies) + journal index `og:url` | ✓ |
| Crest `width`/`height` (64) for CLS | ✓ |
| `sitemap.xml` / `robots.txt` / favicons / `og-cover.jpg` / hero | ✓ |
| Legal quartet + affiliate disclosure | ✓ |
| Associates tag `4bee-20` + Library/Shop ASINs + Prime banner | ✓ |
| Contact mailto (no fake form) | ✓ |
| Quiet Circle honest waitlist mailto | ✓ |
| AdSense reserved slots + `docs/ADSENSE.md` (no fake pub ID) | ✓ |

---

## Suggested order (one sitting)

1. Email inboxes working → 2. Associates tag smoke-test → 3. Search Console + sitemap → 4. AdSense apply (can run in parallel) → 5. Bio/photo → 6. DNS when ready → 7. Post-DNS URL rewrite in code.

*SHIP > perfection. Preserve maison voice.*
