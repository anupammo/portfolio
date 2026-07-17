# 08 · Phase 3 — The Content Engine (sustainable, solo-friendly)

Goal: keep organic traffic and leads compounding with **one focused hour or two per week** —
not a full-time content operation. Consistency beats volume. This is a *habit*, not a build.

> The rule: **1 post per week → repurposed to 4 channels.** One piece of work, maximum impressions.

---

## 1. The weekly workflow (≈2–3 hrs total)

| Step | Time | What |
|------|------|------|
| 1. Pick the keyword | 5 min | Take the next row from the calendar (§3) or the top query in Search Console you *don't* rank #1 for |
| 2. Draft the post | 60–90 min | Use the template (§4). Lead with the answer, write from experience |
| 3. Publish | 20 min | Add to `/blog/`, link it into the right cluster, update `sitemap.xml` |
| 4. Repurpose ×4 | 30 min | LinkedIn post · Google Business post · YouTube short/idea · newsletter broadcast (§5) |
| 5. Log it | 2 min | Add row to your content tracker (§6) |

Batch it: write 4 posts in one sitting each month, schedule one per week. Solo-operator sanity saver.

---

## 2. The repurposing engine (do this every time)

```
1 Blog post (SEO, evergreen)
   ├─▶ LinkedIn post  — hook + 3 takeaways + link (personal + company page)
   ├─▶ Google Business Profile post — 1 tip + link (feeds local SEO)
   ├─▶ YouTube (@viewanupam) — 60-sec talking-head or screen demo, link in description
   └─▶ Newsletter broadcast — short intro + link (MailerLite)
```

Every asset links back to the post; the post links to a service/local page + the free audit.
That's the whole funnel working on autopilot.

---

## 3. First 12-week content calendar

Mapped to your clusters (doc 03 §4), each targeting a real intent keyword and pushing the audit.
Reorder freely; pick what you can write with authority.

| Wk | Working title | Target keyword | Cluster → links to | Primary CTA |
|----|---------------|----------------|--------------------|-------------|
| 1 | How Much Does a Website Cost in India (2026)? | website cost india | Web dev → `/web-developer-kolkata` | Free audit |
| 2 | Local SEO Checklist for Kolkata Businesses | local seo kolkata | SEO → `/seo-services-kolkata` | Free audit |
| 3 | WordPress vs Next.js: Which Is Right for Your Business? | wordpress vs nextjs | Web dev → `/services/web-development` | Book a call |
| 4 | How to Get More Leads From Your Website | get leads from website | Marketing → `/services/digital-marketing` | Book a call |
| 5 | Why Your Google Business Profile Isn't Ranking (and Fixes) | google business profile optimization | SEO → `/seo-services-kolkata` | Free audit |
| 6 | 7 Signs Your Website Needs a Redesign | website redesign | Web design → `/services/web-design` | Free audit |
| 7 | How to Speed Up a Slow Website (2026 Guide) | speed up slow website | Web dev → `/services/web-development` | Free audit |
| 8 | The Small-Business Owner's Guide to SEO | seo for small business | SEO → `/seo-services-kolkata` | Newsletter |
| 9 | Do You Really Need a Custom Website or a Template? | custom website vs template | Web design → `/services/web-design` | Book a call |
| 10 | How to Choose a Web Developer in Kolkata | choose web developer kolkata | Web dev → `/web-developer-kolkata` | Book a call |
| 11 | Content That Ranks in the Age of AI Search (GEO) | ai search optimization / GEO | Marketing → `/services/website-seo` | Newsletter |
| 12 | eCommerce on Shopify vs WooCommerce: Honest Comparison | shopify vs woocommerce | Web dev → `/services/web-development` | Book a call |

> Keyword research on the cheap: Google autocomplete, "People also ask", Search Console queries,
> and your own **SEO Checklist / Smart SEO Booster** tools. Rank difficulty rule of thumb: if page 1
> is mostly big brands, pick a longer/more local variant.

---

## 4. Blog post template (copy this structure every time)

Optimised for both Google ranking and AI-answer citation (GEO). Order matters.

1. **H1** — contains the exact keyword, phrased naturally (question form works well).
2. **Direct answer block** (40–60 words) right under the H1 — the thing AI engines quote.
3. **"Key takeaways"** — 3–5 bullets near the top.
4. **Body** — H2s phrased as questions; short paragraphs; at least one **table** or **numbered list**
   (AI lifts these). Write from *experience* — real examples, real numbers, first-hand opinions.
5. **Internal links** — 2–4 contextual links to the relevant service/local page + one other post.
6. **FAQ** (3–5 Q&As) + `FAQPage` schema matching the on-page text.
7. **Author note** — 1 line: who you are + `Person`/author schema (E-E-A-T).
8. **The conversion block** is already auto-added at the end of every post (Phase 2). ✅

Length: 1,000–1,800 words is plenty for most of these. Depth and honesty > word count.

**On-page SEO checklist per post**
- [ ] Unique `<title>` ≤60 chars, keyword first
- [ ] `meta description` ≤155 chars with the keyword + a reason to click
- [ ] `canonical` tag; descriptive image `alt`; compressed images
- [ ] `Article` schema with `author`, `datePublished`, `dateModified`
- [ ] Added to `sitemap.xml` (bump `<lastmod>`)
- [ ] Linked from its pillar/cluster and from 1–2 older posts

---

## 5. Repurposing snippets (fill-in templates)

**LinkedIn** (post 2–3× / week):
> Most [audience] get this wrong: [contrarian hook].
> Here's what actually works:
> • [takeaway 1]
> • [takeaway 2]
> • [takeaway 3]
> I wrote the full breakdown → [link]
> (18 yrs building websites in Kolkata & worldwide. Questions? Drop a comment.)

**Google Business Profile** (post weekly):
> [1 quick tip in 2 sentences]. Full guide on the blog → [link]. Need help? Book a free call.

**YouTube (@viewanupam)** — 60-sec idea:
> Hook (problem) → 3 quick points from the post → "link in description." Screen-record using your
> own SEO Checklist / Framework Detector extensions for instant, credible visuals.

**Newsletter** (bi-weekly):
> Subject: [benefit-driven, e.g. "The 5-minute fix that speeds up your site"]
> 2–3 sentences of value → link → soft CTA (reply with your URL / book a call).

---

## 6. Simple content tracker (Google Sheet columns)

`Date | Title | URL | Target keyword | Cluster | LinkedIn ✓ | GBP ✓ | YouTube ✓ | Newsletter ✓ | GSC clicks (30d) | Leads`

Review monthly: which posts bring clicks/leads → write more like those; refresh the rest.

---

## 7. Refresh schedule (often beats writing new)

Quarterly, take your 5 oldest or best-potential posts and:
- [ ] Update the year/stats/dates; add a fresh GEO answer block if missing
- [ ] Add 1–2 new internal links to newer money pages
- [ ] Re-share on LinkedIn + newsletter; bump `<lastmod>` in sitemap

---

## 8. What "done" looks like for Phase 3

Phase 3 has no finish line — it's the flywheel. You're on track if, each month:
- [ ] 3–4 new posts published, each repurposed to 4 channels
- [ ] Search Console impressions/clicks trending up
- [ ] A few audit requests / calls attributable to blog or local pages
- [ ] One quarterly refresh batch done

Everything else (ads, more location pages, interactive tools) is optional and only worth it once
this habit is consistently producing leads.
