# 04 · Lead-Generation Funnel & Digital Marketing

Objective: turn organic visitors into qualified inquiries with a **simple, mostly-free, low-maintenance
funnel** that suits a solo consultant on static hosting. Least effort, best outcome.

---

## 1. The funnel (keep it simple — 4 stages)

```
        ATTRACT                CAPTURE               NURTURE              CONVERT
   ┌───────────────┐    ┌──────────────────┐   ┌────────────────┐   ┌───────────────┐
   │ Organic SEO   │    │ Lead magnet:     │   │ 5-email        │   │ Book a call   │
   │ (local + blog)│──▶ │ "Free SEO Audit" │──▶│ welcome series │──▶│ (Cal.com)     │
   │ GBP, LinkedIn │    │ + newsletter box │   │ (MailerLite)   │   │ + WhatsApp    │
   │ YouTube, tools│    │ + WhatsApp CTA   │   │ + broadcasts   │   │ → proposal    │
   └───────────────┘    └──────────────────┘   └────────────────┘   └───────────────┘
        impressions          email/contact          trust                paid client
```

**Golden path:** Google search → local/service page → *Book a free 15-min call* (Cal.com) OR
*Get free SEO audit* (email) → automated welcome emails → call → proposal → client.

---

## 2. Lead magnets (pick 1 to start — don't build all)

Rank by effort. **Start with #1** — you can literally deliver it with your own tools.

| Lead magnet | Effort | Why it fits you |
|-------------|--------|-----------------|
| **1. Free 5-point SEO/website audit** (you review their site, send a Loom/PDF) | Low | Uses your SEO Checklist + Smart SEO Booster; positions you as expert; naturally leads to a paid fix |
| 2. "Local SEO Checklist for Kolkata businesses" (PDF) | Low | Repurpose your existing SEO Checklist extension content |
| 3. "Website cost & timeline calculator" (simple HTML tool) | Med | You build tools already; interactive = shares/backlinks |
| 4. "Is your website losing you customers?" scorecard/quiz | Med | High engagement, qualifies leads |

Each magnet → a dedicated landing page (`/free-seo-audit`) → email capture → auto-delivery.

---

## 3. Capture mechanics (where + how)

Place capture at **every level of intent**:

| Placement | Type | Tool |
|-----------|------|------|
| Homepage hero | Primary CTA "Book a free call" + secondary "Get free audit" | Cal.com + form |
| Sticky header/footer bar | "Free 15-min consultation →" | HTML/CSS |
| End of every service page | Book-a-call + lead magnet | Cal.com + Web3Forms |
| Inside every blog post (mid + end) | Newsletter box + relevant lead magnet | MailerLite embed |
| Exit-intent (desktop) / scroll 60% (mobile) | Lead magnet offer | lightweight JS |
| Contact page | Web3Forms form + WhatsApp + Cal.com embed | all three |
| Footer (site-wide) | Newsletter signup | MailerLite |

Form rule: **3–4 fields max** (Name, Email, WhatsApp, one-line need). Every extra field costs conversions.

---

## 4. The free/low-cost tool stack (setup order)

| Order | Tool | Job | Setup time |
|-------|------|-----|-----------|
| 1 | **Web3Forms** | Wire the contact form to your email (no backend) | 20 min |
| 2 | **GA4 events + Microsoft Clarity** | Track form submits, WhatsApp clicks, booking; heatmaps | 45 min |
| 3 | **Cal.com** (or Calendly free) | `/book-a-call` self-serve scheduling | 30 min |
| 4 | **MailerLite** (free ≤1,000) | Newsletter form + 5-email welcome automation | 2 hrs |
| 5 | **Tawk.to** (optional) | Web live chat fallback to WhatsApp | 30 min |
| 6 | **Google Sheet / Notion** | Lead log + simple pipeline (New→Contacted→Call→Proposal→Won) | 20 min |
| 7 | **Make.com** (optional, later) | Auto-route form → Sheet → email alert | 1 hr |

Total: one focused weekend. Recurring cost: **$0** until you outgrow free tiers.

---

## 5. Email nurture — the 5-email welcome series (write once, runs forever)

Triggered when someone downloads the audit/checklist or subscribes:

1. **Instant:** Deliver the magnet + who you are (18 yrs, MSME, 5★) + soft "reply with your site URL."
2. **Day 2:** A quick win / common mistake (from your blog) — pure value, no pitch.
3. **Day 4:** Mini case study with a metric (e.g., a Sundarban/BongTrendz/Krins result) + testimonial.
4. **Day 6:** "How I work" (process, pricing transparency, MSME/registered reassurance) + book-a-call CTA.
5. **Day 9:** Direct offer — free 15-min strategy call, limited slots, Cal.com link.

Then: **1 value broadcast every 1–2 weeks** (repurpose that week's blog post). Keep it human, short, useful.

---

## 6. Marketing channels — ranked by ROI-for-effort (do top-down)

| Rank | Channel | Effort | Why | Cadence |
|------|---------|--------|-----|---------|
| 1 | **Local SEO + Google Business Profile** | Low | Highest-intent buyers; you're local; free | Weekly GBP post + reviews |
| 2 | **Organic blog + SEO** | Med | Compounds forever; feeds AI search | 1 post/week |
| 3 | **LinkedIn** (personal + company) | Low | B2B buyers + startups; repurpose blog | 3×/week |
| 4 | **YouTube** (@viewanupam) | Med | Tool demos, tutorials → backlinks + trust | 2×/month |
| 5 | **Product-led** (extensions + plugin) | Low | Passive top-of-funnel; link to site | Maintain listings |
| 6 | **Freelancer/PeoplePerHour** | Med | Existing income; use site to close & de-platform | Ongoing |
| 7 | **Email newsletter** | Low | Owns the audience; nurtures | Bi-weekly |
| 8 | **Directories/communities** | Low | Backlinks + local discovery | One-time + upkeep |
| 9 | **Paid ads (Google/Meta)** | High cost | ONLY after funnel converts organically | Optional, later |

> "Least effort, best outcome" = channels 1–3 first. Don't touch paid ads until the free funnel
> is proven to convert — otherwise you pay to fill a leaky bucket.

---

## 7. The "one content → four channels" repurposing engine

For each weekly blog post, spend 30 extra minutes to get 4× the reach:

```
1 Blog post (SEO)
   ├─▶ LinkedIn post (hook + link)
   ├─▶ Google Business Profile update
   ├─▶ YouTube short or community answer
   └─▶ Newsletter broadcast
```

This is the single highest-leverage habit for a solo operator's marketing.

---

## 8. Conversion tracking (so you know what works)

Define these **GA4 conversion events** (and mark as key events):

- `generate_lead` — contact form submit
- `book_call` — Cal.com booking / click
- `whatsapp_click` — WhatsApp CTA click
- `newsletter_signup` — MailerLite subscribe
- `magnet_download` — audit/checklist request

Review weekly: sessions → leads (target ≥2%), source of leads, top landing pages.
Use **Microsoft Clarity** heatmaps to see where visitors drop, then fix that one thing.

---

## 9. Simple lead-handling SOP (so leads don't leak)

1. Lead arrives (email/WhatsApp/booking) → auto-logged to Google Sheet.
2. **Respond within a few hours** (put your real avg response time on the site — it converts).
3. Qualify: budget, timeline, fit vs. ICP (doc 01).
4. Book the call → send agenda → show up with 1–2 tailored ideas.
5. Send proposal within 24h → follow up twice → move to Won/Lost in the sheet.
6. Won → ask for a review (GBP + Freelancer) + testimonial + backlink. Loop closes the funnel.

---

## 10. What NOT to do (avoid wasted effort)

- ❌ Don't build all 4 lead magnets — ship one, iterate.
- ❌ Don't buy HubSpot/ConvertKit/Hotjar yet — free tools cover you to ~1,000 subs.
- ❌ Don't run ads before the organic funnel converts.
- ❌ Don't chase every keyword — win local + a few clusters deeply.
- ❌ Don't redesign the site — add the conversion layer to what works.
