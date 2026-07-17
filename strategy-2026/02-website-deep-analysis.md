# 02 · Website Deep Analysis (current state → gaps)

Scope reviewed: `index.html`, `about-us.html`, `contact.html`, `portfolio.html`,
`cv/resume*.html`, `services/*` (4), `blog/*` (20 posts), schema, config, tooling.

Legend: ✅ present/good · ⚠️ present but weak · ❌ missing

---

## A. What's already GOOD (don't rebreak these)

- ✅ **Rich structured data** — `Person`, `Organization`, `ProfessionalService`, `Service`,
  `FAQPage`, `AggregateRating`, `BreadcrumbList`, `Offer`, `SoftwareApplication` across pages.
  This is *ahead* of most freelancer sites. Keep and extend it.
- ✅ **Open Graph / Twitter cards** present (18 tags on homepage).
- ✅ **Canonical tags** present.
- ✅ **GA4 installed** (`G-VYYY10HF4L`).
- ✅ **Sitemap.xml, robots.txt, manifest, favicons, PWA icons** — technical hygiene done.
- ✅ **Blog with 20 posts** — raw material for topical authority already exists.
- ✅ **4 service pages** with FAQ schema.
- ✅ **Testimonials** on homepage (Paras Mukadam, Azizi Jazmi, Trini Amador).
- ✅ **Own products** (Chrome extensions, WordPress plugin) featured.

**Implication:** You do NOT need a rebuild. This is an *optimization + conversion-layer* project,
not a redesign. That's good news for "least effort."

---

## B. Conversion gaps (the reason there are no leads)

| # | Gap | Impact | Fix (phase) |
|---|-----|--------|-------------|
| B1 | **Contact form has no working backend/handler** — static site, no `action`/Web3Forms/Formspree found | Submissions may silently fail | P0 |
| B2 | **No email capture / lead magnet** anywhere | 97% of visitors leave with no follow-up path | P0 |
| B3 | **No "book a call" scheduler** | High-intent visitors can't self-serve | P0 |
| B4 | **No sticky/persistent CTA** on scroll | Intent lost mid-page | P0 |
| B5 | **No exit-intent or scroll-triggered offer** | No second chance to capture | P1 |
| B6 | **Trust signals not above the fold** (5★, MSME, 18 yrs) | Weak first impression | P0 |
| B7 | **Generic CTAs** ("Get in touch") vs. outcome CTAs | Lower click rate | P1 |
| B8 | **Blog posts are conversion dead-ends** — no inline CTA/lead magnet on 20 posts | Traffic doesn't convert | P1 |
| B9 | **Portfolio lacks outcomes/metrics** — projects listed, results not quantified | No proof of ROI | P2 |
| B10 | **No live chat fallback** beyond WhatsApp | Miss desktop/quiet visitors | P2 |

---

## C. SEO gaps (the reason there's little traffic to convert)

| # | Gap | Impact | Fix (phase) |
|---|-----|--------|-------------|
| C1 | **Weak local SEO** — no dedicated "web developer in Kolkata / West Bengal" landing pages | Missing highest-intent buyers | P1 |
| C2 | **No Google Business Profile integration/embed** on site | Local pack + reviews unused | P1 |
| C3 | **`sameAs` entity graph incomplete** — not all profiles linked in schema | Weaker entity recognition | P0 |
| C4 | **Not verified in Bing Webmaster / Search Console coverage unknown** | AI answer engines (Copilot) & Bing miss you | P0 |
| C5 | **Blog lacks topical clusters / internal linking hubs** | No topical authority signal | P1 |
| C6 | **Content not optimized for AI Overviews / GEO** — no concise answer blocks, definitions, "key takeaways" | Not cited by AI search | P1 |
| C7 | **Thin service pages** vs. what ranks in 2026 (need depth, process, pricing, proof, FAQ) | Outranked by detailed competitors | P1 |
| C8 | **No location + service combo pages** ("SEO services in Kolkata", "eCommerce developer India") | Missing programmatic long-tail | P2 |
| C9 | **Image SEO partial** — verify descriptive `alt`, filenames, lazy-loading everywhere | Minor traffic + a11y | P2 |
| C10 | **No hreflang / geo clarity** for India vs. international targeting | Ambiguous targeting | P3 |

---

## D. UI/UX gaps (see doc 05 for the full checklist)

| # | Gap | Impact |
|---|-----|--------|
| D1 | CTA not persistent in header on mobile | Lost conversions |
| D2 | No visible response-time / availability signal | Reduces inquiry confidence |
| D3 | Testimonials not tied to project results | Lower trust |
| D4 | No clear "3-step how we work" section | Buyer uncertainty |
| D5 | Verify Core Web Vitals (LCP/CLS/INP) on real devices | Ranking + UX |
| D6 | Forms could be shorter / progressive | Higher completion |

---

## E. Measurement gaps

| # | Gap | Fix |
|---|-----|-----|
| E1 | GA4 present but **no conversion events** defined (form submit, WhatsApp click, booking) | P0 |
| E2 | No heatmap/session insight | Add Microsoft Clarity (free) — P0 |
| E3 | Search Console coverage/keywords not being reviewed | P0 |
| E4 | No UTM convention for off-site links (LinkedIn/YouTube/Freelancer) | P1 |
| E5 | No simple lead log/CRM | Google Sheet/Notion — P1 |

---

## F. Page-by-page verdict

| Page | Verdict | Top action |
|------|---------|-----------|
| `index.html` | Good bones, no capture | Add hero CTA + trust bar + lead magnet + sticky bar |
| `services/*` (4) | Decent schema, thin content | Expand to full "money page" template (doc 03 §5) + per-service lead magnet |
| `about-us.html` | Strong for E-E-A-T | Add credentials, MSME, timeline, `sameAs`; link to booking |
| `portfolio.html` | Lists projects | Convert 3–5 into metric-driven case studies |
| `contact.html` | Form exists, backend unclear | Wire Web3Forms + add Cal.com + WhatsApp + response-time promise |
| `blog/*` (20) | Traffic potential wasted | Add inline CTA + newsletter box + cluster internal links |
| `cv/resume*.html` | Good for credibility/E-E-A-T | Keep; link from About; add `Person` schema consistency |
| **Missing pages** | — | Location pages, `/free-seo-audit`, `/book-a-call`, `/case-studies`, `/tools` hub |

---

## G. Bottom line

- **Technical foundation:** 8/10 — keep it.
- **Content depth & topical authority:** 4/10 — the main SEO work.
- **Local SEO:** 3/10 — cheapest, fastest win.
- **Conversion/lead capture:** 2/10 — the main revenue work.
- **Trust surfacing:** 4/10 — you have the assets, just show them.

Do **conversion (B) + local/entity SEO (C1–C4) first** — highest ROI for least effort.
