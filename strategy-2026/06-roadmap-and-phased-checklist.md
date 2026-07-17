# 06 · Roadmap & Phased Checklist

Priority-ordered. **P0 = do first** (biggest lead lift, least effort — one weekend gets ~80% of the
near-term value). Check items off as you go. Commit after each phase (see doc 07).

Priority key: 🔴 P0 critical · 🟠 P1 high · 🟡 P2 medium · 🟢 P3 ongoing/nice-to-have

---

## PHASE 0 — Foundation & Quick Wins (Weekend 1) 🔴
*Goal: make the site capable of capturing and measuring leads. Highest ROI in the whole plan.*

**Lead capture**
- [ ] Wire the contact form to **Web3Forms** (or Formspree) so submissions reach your inbox
- [ ] Add **Cal.com / Calendly** "Book a free 15-min call" — create `/book-a-call` + header button
- [ ] Verify **WhatsApp click-to-chat** with a prefilled message on all key CTAs
- [ ] Add a **sticky CTA** (header desktop + bottom bar mobile: Call · WhatsApp · Book)

**Trust (surface existing assets)**
- [ ] Add an above-the-fold **trust bar** (⭐5.0 · Udyam/MSME · 18+ yrs · 24+ projects · 5 countries)
- [ ] Rewrite homepage **H1 + sub-headline** to the outcome-led positioning (doc 01)
- [ ] Add **MSME/Udyam registered** badge to footer

**Measurement**
- [ ] Define **GA4 key events**: form submit, WhatsApp click, booking, newsletter signup
- [ ] Install **Microsoft Clarity** (free heatmaps/recordings)
- [ ] Verify/submit site in **Google Search Console** + **Bing Webmaster Tools**

**Entity SEO**
- [ ] Complete the **`sameAs` array** in schema (LinkedIn, YouTube, Facebook, Freelancer, PeoplePerHour, GBP, WordPress.org, 3 Chrome listings)
- [ ] Add/verify **`LocalBusiness`/`ProfessionalService`** schema with full NAP + geo + areaServed

*Phase 0 outcome: every visitor now has a way to convert, and you can measure it.*

---

## PHASE 1 — Local SEO + Money Pages + Lead Magnet (Weeks 1–3) 🟠
*Goal: bring in high-intent local buyers and give them somewhere that converts.*

**Local SEO (cheapest wins)**
- [ ] Build `/web-developer-kolkata` pillar page (money-page template, doc 03 §5)
- [ ] Build `/seo-services-kolkata` pillar page
- [ ] Optimize **Google Business Profile** (categories, services, photos, first post, request reviews)
- [ ] Add GBP embed + reviews to home/contact
- [ ] Add site to India directories (Justdial, Sulekha, Clutch, GoodFirms)

**Expand the 4 service pages** to full money-page template
- [ ] `services/web-design` — add GEO answer block, process, pricing, case study, stronger CTA
- [ ] `services/web-development` — same
- [ ] `services/website-seo` — same + link to `/free-seo-audit`
- [ ] `services/digital-marketing` — same

**Lead magnet + funnel**
- [ ] Build `/free-seo-audit` landing page (lead magnet #1)
- [ ] Set up **MailerLite** (free) — newsletter form + 5-email welcome automation (doc 04 §5)
- [ ] Add newsletter box to footer + blog posts

**Conversion CTAs**
- [ ] Replace generic CTAs with outcome CTAs across site (doc 04 / EXEC table)
- [ ] Add "How I work" 3–5 step section + FAQ to homepage

*Phase 1 outcome: ranking for local intent + a working capture→nurture funnel.*

---

## PHASE 2 — Content Authority + Proof + Blog Conversion (Weeks 3–6) 🟡

**Topical clusters (turn 20 posts into authority)**
- [ ] Group existing 20 posts under 3 pillars; add pillar-to-post + post-to-pillar internal links
- [ ] Add **inline + end CTA** and newsletter box to all 20 posts
- [ ] Add GEO answer block + "Key takeaways" to top-performing posts
- [ ] Publish 2–3 new cluster posts filling gaps (WP vs Next.js, website cost India, local SEO checklist)

**Proof**
- [ ] Build `/case-studies` with 3–5 metric-driven case studies (doc 05 §6)
- [ ] Upgrade testimonials with name/role/result
- [ ] Build `/tools` hub (extensions + plugin) with `SoftwareApplication` schema → backlinks

**Extra service surface**
- [ ] Add `/services/ecommerce` (Shopify/WooCommerce) — you have the experience

*Phase 2 outcome: topical authority building; traffic now converts; more backlinks.*

---

## PHASE 3 — Optimization, Scale & Ongoing 🟢

**Ongoing content engine (sustainable)**
- [ ] Publish **1 SEO post/week**, each repurposed to LinkedIn + GBP + YouTube + newsletter (doc 04 §7)
- [ ] Post to **GBP weekly**, **LinkedIn 3×/week**, **YouTube 2×/month**
- [ ] Refresh old posts quarterly (dates, GEO blocks)

**Programmatic long-tail**
- [ ] Add location+service combo pages (`/seo-services-kolkata`, `/wordpress-developer-kolkata`, etc.)
- [ ] Build 1–2 interactive tools (cost calculator / scorecard) as lead magnets + link bait

**Optimize with data**
- [ ] Monthly: review GA4 conversions + Clarity heatmaps → fix the biggest drop-off
- [ ] A/B test hero CTA copy, form length, lead-magnet offer (one test at a time)
- [ ] Pursue backlinks (guest posts, client links, HARO-style answers)
- [ ] Only after organic converts: test a small **Google Ads** campaign on Tier-1 local keywords

**Housekeeping**
- [ ] Quarterly technical audit (CWV, broken links, schema validation, sitemap freshness)
- [ ] Consider domain email `hello@anupammondal.in` for professionalism

---

## 90-Day Roadmap (visual)

```
Week:      0    1    2    3    4    5    6    7    8    9   10   11   12
        ┌───┐
P0      │███│  Foundation + quick wins (capture, trust, tracking)
        └───┘
P1           ├────────────────┤  Local pages + service expansion + lead magnet + email
                        ├───────────────────────┤  P2: clusters, case studies, tools, blog CTAs
                                             ├──────────────────────────────▶  P3: weekly content + optimize (ongoing)
```

---

## Effort vs. Impact summary (do the top-left first)

| Task group | Effort | Lead impact | Priority |
|------------|--------|-------------|----------|
| Wire form + booking + WhatsApp + sticky CTA | Low | Very High | 🔴 P0 |
| Trust bar + headline rewrite | Low | High | 🔴 P0 |
| GA4 events + Clarity + Search Console | Low | High (visibility) | 🔴 P0 |
| Local pillar pages + GBP | Med | Very High | 🟠 P1 |
| Lead magnet + email series | Med | High | 🟠 P1 |
| Expand 4 service pages | Med | High | 🟠 P1 |
| Blog CTAs + clusters | Med | Med | 🟡 P2 |
| Case studies + tools hub | Med | Med | 🟡 P2 |
| Weekly content engine | Ongoing | Compounding | 🟢 P3 |
| Paid ads | High $ | Variable | 🟢 P3 (last) |

---

## Definition of "done" for the near-term goal (lead engine live)

You've succeeded on the core ask when ALL of these are true:
- [ ] A stranger on any page can book a call or get the audit in ≤2 clicks
- [ ] Every lead is captured to your inbox + logged automatically
- [ ] The homepage proves trust (5★, MSME, 18 yrs) above the fold
- [ ] You rank on page 1 for at least 2 local Tier-1 keywords
- [ ] GA4 shows conversion events firing and you review them weekly
- [ ] One lead magnet + 5-email nurture runs automatically
