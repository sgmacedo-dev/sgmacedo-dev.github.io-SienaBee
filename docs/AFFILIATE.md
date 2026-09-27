# Amazon Affiliate — how Silvana fills ASINs

**Status:** Associates tag is set to **`4bee-20`** (confirmed by Silvana; Social Media tag).  
**ASINs:** still pending Silvana — keep `data-asin="YOUR_ASIN"`; do **not** invent ASINs.

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

---

## 2. Set each product ASIN (pending Silvana)

Library and Shop CTAs use:

```html
<a class="button affiliate-cta"
   href="#"
   data-affiliate-placeholder="pending-asin"
   data-asin="YOUR_ASIN"
   target="_blank"
   rel="nofollow sponsored noopener">
  Configure ASIN
</a>
```

Replace `YOUR_ASIN` on each product with the real Amazon ASIN (10 characters).  
When the ASIN is real, `initAffiliatePlaceholders()` rewrites `href` to:

`https://www.amazon.com/dp/{ASIN}?tag=4bee-20`

Until then, the CTA stays disabled (`href="#"`, label “Configure ASIN”, class `is-pending`).

---

## 3. Reusable card snippet

See `docs/snippets/affiliate-card.html`. Copy into Library/Shop grids.  
Keep path depth correct for the disclosure link (`../legal/…` from `/library/` or `/shop/`; `../../legal/…` from deeper pages).

---

## 4. Disclosure (required near CTAs)

- Footer / page disclaimer copy already exists.
- Visible note beside product grids: `.affiliate-disclosure-note` linking to Affiliate Disclosure.
- Full policy page: `/legal/affiliate-disclosure/` (relative to Pages path depth).
- JS also injects a note once per section if markup was omitted.

---

## 5. Prime banner

Home / Library / Shop use the existing `amzn.to` short link with `rel="nofollow sponsored noopener"`.  
Silvana should verify that short link still maps to her Associates account.

---

## Checklist

1. [x] Associates tag confirmed → `4bee-20` in `js/script.js`.
2. [ ] Replace each `data-asin="YOUR_ASIN"` on Library + Shop (Silvana).
3. [ ] Smoke-test one CTA → lands on Amazon with `tag=4bee-20`.
4. [ ] Confirm disclosure note + `/legal/affiliate-disclosure/` are reachable from Library and Shop.
