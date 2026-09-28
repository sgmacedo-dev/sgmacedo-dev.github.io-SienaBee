# Google AdSense — Siena Bee

**Status:** Reserved HTML slots only. **No** `ca-pub-…` ID in the repo yet.  
**Do not invent or paste a fake publisher ID.**

Live Pages base (until custom domain):  
`https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/`

---

## 1. Apply

1. Open [Google AdSense](https://www.google.com/adsense/start/) and sign in with the Google account Silvana will use for the House.
2. Add the site URL (Pages base above, or `https://sienabee.com` once DNS is live).
3. Complete the AdSense application / site review. Approval can take days or weeks.
4. When approved, copy the **publisher client ID**: `ca-pub-XXXXXXXXXXXXXXXX` (16 digits after `pub-`).

Also useful after approval:

- [AdSense Help — get started](https://support.google.com/adsense/answer/10162)
- [ads.txt for AdSense](https://support.google.com/adsense/answer/7532444)

---

## 2. Where to paste `ca-pub-…`

| Place | What to do |
|-------|------------|
| `.env.example` → `ADSENSE_CLIENT=` | Mirror the public client ID for local docs (Pages does **not** read `.env`). |
| Site `<head>` (once, shared pattern) | Official AdSense loader, e.g. `…/pagead/js/adsbygoogle.js?client=ca-pub-…` with `crossorigin="anonymous"`. Prefer one include path later; for now paste into templates that show units. |
| Reserved `.ad-slot` divs | Replace each reserved block with official `<ins class="adsbygoogle" … data-ad-client="ca-pub-…" data-ad-slot="…">` + `(adsbygoogle = window.adsbygoogle \|\| []).push({});`. Snippet pattern: `docs/snippets/ad-slot.html`. |
| `legal/privacy-policy/` + `legal/cookie-policy/` | Update “when enabled” language to state that AdSense **is** active; note Google as advertising partner; add consent if required. |
| Root `ads.txt` | Create **only** when you have a real pub ID (see §3). |

**Never commit secrets.** The AdSense client ID is a public site key Google expects in HTML; still do not invent placeholders that look like real IDs.

Search for reserved markers:

```bash
rg -n 'data-ad-slot="reserved"|adsbygoogle|ca-pub-' .
```

---

## 3. `ads.txt` (GitHub Pages) — create only with a real pub ID

**Do not ship an empty or commented `ads.txt`.** The ads.txt format does not safely support explanatory comments the way HTML does; a broken file can fail crawler checks.

When Silvana has `pub-XXXXXXXXXXXXXXXX`:

1. Create **`/ads.txt`** at the **site root** (same folder as `index.html`), so it is served at:

   `https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/ads.txt`

   After custom domain DNS, also ensure:

   `https://sienabee.com/ads.txt`

   (GitHub project Pages serve the file under the project path; a custom domain apex must map so `/ads.txt` is reachable at the root visitors use.)

2. File contents — **one line**, real ID only:

```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

Replace `XXXXXXXXXXXXXXXX` with the digits from `ca-pub-XXXXXXXXXXXXXXXX` (the `ca-` prefix is **not** used in ads.txt; use `pub-…`).

3. Commit, push `main`, wait for Pages rebuild, then verify the URL returns `text/plain` with that line.

Authorized Sellers (ads.txt) certification ID `f08c47fec0942fa0` is Google’s standard DIRECT entry for AdSense — confirm in current AdSense docs if Google ever rotates it.

---

## 4. Reserved slots (current)

Empty, zero-height-friendly placeholders:

```html
<!-- AdSense: reserved slot. … See docs/ADSENSE.md. -->
<div class="ad-slot" aria-hidden="true" data-ad-slot="reserved"></div>
```

Styled in `css/style.css` (`.ad-slot`). Present on home, about, editor, letters, library, shop, music, House Journal index + flat essays, and the philosophy essay. **No** fake `ca-pub` attributes.

---

## 5. Checklist when enabling

- [ ] AdSense approval + real `ca-pub-…`
- [ ] Root `ads.txt` with real `pub-…` line
- [ ] Loader script in `<head>` (or shared include)
- [ ] Replace `.ad-slot` reserved divs with live `<ins class="adsbygoogle">` units
- [ ] Privacy Policy + Cookie Policy updated for active advertising
- [ ] Smoke-test: no console errors; ads appear only where intended; maison tone preserved (discreet placement)

---

*SHIP > perfection. Do not invent publisher IDs.*
