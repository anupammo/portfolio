# 07 · Git Commands (you run these — I won't commit/push)

Current branch: **v2026**. The only new/untracked item right now is the `strategy-2026/` folder
(these planning docs). Nothing else was modified.

---

## 1. Review what will be committed (optional but recommended)

```bash
git status
git diff --stat
```

## 2. Commit just the strategy documents

```bash
# stage the new strategy folder
git add strategy-2026/

# commit
git commit -m "docs: add 2026 lead-generation strategy & phased roadmap"
```

## 3. Push to your remote (v2026 branch)

```bash
git push origin v2026
```

---

## Later — when you implement site changes per phase

Commit each phase separately so history stays clean and reversible:

```bash
# Phase 0
git add -A
git commit -m "feat(p0): lead capture, booking, trust bar, GA4 events, entity schema"
git push origin v2026

# Phase 1
git add -A
git commit -m "feat(p1): local Kolkata SEO pages, service page expansion, lead magnet + email funnel"
git push origin v2026

# Phase 2
git add -A
git commit -m "feat(p2): blog clusters + CTAs, case studies, tools hub"
git push origin v2026
```

---

## If/when you want this live on the main site

Your site deploys from GitHub Pages (CNAME: `anupammondal.in`). If Pages serves from `master`,
merge `v2026` when ready:

```bash
git checkout master
git merge v2026
git push origin master
git checkout v2026   # go back to working branch
```

> Confirm which branch GitHub Pages actually builds from (repo → Settings → Pages) before merging,
> so you don't publish half-finished work.

---

## Handy safety commands

```bash
# see exactly what changed in a file before committing
git diff strategy-2026/06-roadmap-and-phased-checklist.md

# undo staging (keeps your file changes)
git restore --staged strategy-2026/

# discard the strategy folder entirely (WARNING: deletes the docs)
# rm -rf strategy-2026/
```
