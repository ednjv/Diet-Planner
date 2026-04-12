# Diet Planner

A mobile-first web app to follow a personalized nutritional plan from Benefit Health (Dra. Laura Prieto Parra). No backend, no build step — just open `index.html`.

## What it does

| Tab | Description |
|---|---|
| **Plan** | Weekly meal plan by day. Shows meals, portions, and macro badges. |
| **Compras** | Shopping list with specific Chilean brand names for Lider app. One weekly purchase. |
| **Nana** | Batch cooking guide for Tuesday cooking session. Simple step-by-step recipes. |
| **Oficina** | Tips for carrying food to the office + what to do if you forget the tupper. |

## Architecture

```
index.html          Shell: HTML structure + all CSS
js/
  data/
    profile.js      Doctor's prescription, daily portions, rules, preferences
    plan.js         Weekly meal plan (7 days × 5 meals)
    shop.js         Shopping list with brands and quantities
    nana.js         Batch cooking guide data
    ofic.js         Office tips data
  utils/
    emoji.js        Food → emoji mapping function
  render/
    plan.js         Day chips + meal cards renderer
    shop.js         Shopping list renderer
    nana.js         Nana cooking guide renderer
    ofic.js         Office tips renderer
  app.js            Tab routing + app init
```

## Modifying the plan

All content lives in `js/data/`. To update a meal, edit `js/data/plan.js`. To change the shopping list, edit `js/data/shop.js`. No recompile needed — just refresh the browser.

When sharing context with Claude in future sessions, point to `js/data/profile.js` — it contains the full nutritional prescription, food preferences, and restrictions.

## Key plan rules (from doctor)

- **Portions/day:** 8P · 2L · 2.5C · 2V · 3F · 1.5A
- **Macros:** 25% Prot · 45% CHO · 30% Lip · ~1700 kcal
- Legumbres = 1P + 1C (don't add another carb)
- Max 4h between meals
- 2L water/day
- Red meat max 1–2x/week; fish min 1–2x/week
- Only arroz basmati (lower glycemic index)
- SOS: add 1 fruit portion if very hungry

## Progress tracking (planned)

Future section will track monthly control results:
- Body fat % over time
- Weight trend
- Portion compliance notes
- Lab results per control date

Controls are every ~30 days with Dra. Laura Prieto Parra.

## Running locally

```bash
# Any static server works, e.g.:
npx serve .
# or just open index.html directly in browser (file://)
```
