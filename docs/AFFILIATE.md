# Amazon Affiliate — how Silvana fills tags & ASINs

**Status:** placeholders only. Do **not** invent ASINs or Associate tags.  
**Unverified teammate note:** `4bee-20` may be the Associates tag — treat as **unverified** until Silvana confirms in Amazon Associates.

Live Pages base (canonical until custom domain):  
`https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/`

---

## 1. Set the Associates tag (one place)

In `js/script.js`, find:

```js
SienaBee.amazon = {
    associateTag: "YOUR_ASSOCIATE_TAG",
    marketplace: "www.amazon.com",
    disclosurePath: "legal/affiliate-disclosure/"
};
```

Replace `YOUR_ASSOCIATE_TAG` with the real tag (e.g. `yourtag-20`) **only after confirmation**.  
Also mirror the value in `.env.example` / local `.env` as `AMAZON_ASSOCIATE_TAG=` for documentation (Pages does not read `.env`).

---

## 2. Set each product ASIN

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
When **both** tag and ASIN are real, `initAffiliatePlaceholders()` rewrites `href` to:

`https://www.amazon.com/dp/{ASIN}?tag={TAG}`

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

1. Confirm Associates tag in Amazon Central (do not assume `4bee-20`).
2. Set `SienaBee.amazon.associateTag` in `js/script.js`.
3. Replace each `data-asin="YOUR_ASIN"` on Library + Shop.
4. Smoke-test one CTA → lands on Amazon with `tag=` query param.
5. Confirm disclosure note + `/legal/affiliate-disclosure/` are reachable from Library and Shop.
