# Amazon Affiliate — ASINs wired

**Status:** Associates tag **`4bee-20`** set in `js/script.js`.  
**ASINs:** wired on Library + Shop from Silvana’s `link.amazon` short links (resolved 2026-09-27).  
**Music (Shop):** Spotify outbound only — no Amazon affiliate for tracks.

Live Pages base (canonical until custom domain):  
`https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/`

---

## 1. Associates tag (done)

In `js/script.js`:

```js
SienaBee.amazon = {
    associateTag: "4bee-20",
    marketplace: "www.amazon.com",
    disclosurePath: "legal/affiliate-disclosure/"
};
```

Documented mirror: `.env.example` → `AMAZON_ASSOCIATE_TAG=4bee-20` (Pages does not read `.env`).

JS builds: `https://www.amazon.com/dp/{ASIN}?tag=4bee-20`

---

## 2. Product ASINs (Library + Shop books / goods)

Library and Shop CTAs use:

```html
<a class="button affiliate-cta"
   href="#"
   data-affiliate-placeholder="ready"
   data-asin="0141395869"
   target="_blank"
   rel="nofollow sponsored noopener">
  View at Amazon
</a>
```

`initAffiliatePlaceholders()` rewrites `href` when `data-asin` is a real 10-character ASIN.

### ASIN map (title → ASIN)

| Title | ASIN |
|-------|------|
| Meditations | 0141395869 |
| Letters from a Stoic | 0141395850 |
| Discourses | 0241764068 |
| Essays (Montaigne) | 0140446044 |
| The Brothers Karamazov | 0140449248 |
| Anna Karenina | 014119961X |
| One Hundred Years of Solitude | 0060531045 |
| To the Lighthouse | 9815202278 |
| Walden | 0140390448 |
| My First Summer in the Sierra | 1643890956 |
| Silent Spring | 0141184949 |
| Ecology, Community and Lifestyle | 0521348730 |
| The Art of Stillness | 1476784728 |
| The Consolations of Philosophy | B00ATLA8RU |
| Leisure, the Basis of Culture | 1586172565 |
| Mere Christianity | 0060652926 |
| French Lavender | B09XKQPTVD |
| Cedarwood | B09XKNWZ1C |
| Bergamot | B07KYS7V2F |
| Fountain Pen | B09Q98FHDP |
| Hardcover Notebook | B0GWJ27BFN |
| Reading Lamp | B09N8LMPSP |
| Earl Grey Tea | B0B36FTHB6 |
| Single-Origin Coffee | B08VKMBSNT |
| Porcelain Cup | B0D7X35452 |

**Note:** Short links resolve via GET redirect to `amazon.com.br/dp/{ASIN}` (Associates share links with `tag=4bee-20`). Site marketplace remains `www.amazon.com` per `SienaBee.amazon`.

**Mismatch note (2026-09-28):** The Library cards now use the supplied title-matching ASINs: *Mere Christianity* → `0060652926` and *The Consolations of Philosophy* → `B00ATLA8RU`. The Shop has no cards for these titles.

---

## 3. Music — Spotify only (Shop)

Shop “Listening Room” items are **not** Amazon affiliates:

- As Time Goes By → Spotify track  
- The Essential Bach → Spotify track  
- An Evening with Enya → Spotify track  

CTA: plain `<a class="button">` with `rel="noopener noreferrer"` and label **Listen on Spotify**. No `data-asin`, no `tag=`.

---

## 4. Reusable card snippet

See `docs/snippets/affiliate-card.html`. Copy into Library/Shop grids.  
Keep path depth correct for the disclosure link (`../legal/…` from `/library/` or `/shop/`).

---

## 5. Disclosure (required near CTAs)

- Footer / page disclaimer copy already exists.
- Visible note beside product grids: `.affiliate-disclosure-note` linking to Affiliate Disclosure.
- Full policy page: `/legal/affiliate-disclosure/`.
- JS also injects a note once per section if markup was omitted.

---

## 6. Prime banner

Home / Library / Shop keep a discreet `.prime-banner` linking to `https://amzn.to/3RnesWB` (`rel="nofollow sponsored noopener"`).

**Checked 2026-09-28:** short link resolves (not fake) to Amazon BR Associates Prime (`associadosprime`) with tag **`sgmacedo03-20`** — not the product tag **`4bee-20`**. Destination can 503 from some bots/regions; leave as-is (do not invent a new short link). Silvana: confirm the short link still belongs to her Associates account, or replace with a `4bee-20` Prime deep link when she has one.

---

## Checklist

1. [x] Associates tag confirmed → `4bee-20` in `js/script.js`.
2. [x] Real ASINs on Library + Shop Amazon cards; music via Spotify.
3. [x] Smoke-test sample CTAs → Amazon `tag=4bee-20` URL shape.
4. [ ] Confirm disclosure note + `/legal/affiliate-disclosure/` are reachable from Library and Shop (ongoing).
