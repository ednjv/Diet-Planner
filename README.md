# Diet Planner

Mobile-first web app to follow a personalized nutritional plan from Benefit Health (Dra. Laura Prieto Parra). No backend, no build step — open `index.html` directly.

---

## Quick context for future sessions

**User:** Edwin Vásquez  
**Doctor:** Dra. Laura Prieto Parra — lprieto@benefithealth.cl — Benefit Nutrición, Lo Fontecilla 201 of 633, Las Condes  
**First control:** 11.04.2026 | **Next control:** 30.04.2026 16:30h | **Frequency:** ~monthly  
**Goal:** Reach 20% body fat (~500g fat loss/month). First InBody: 70.5kg, 29.4kg muscle, 19.3kg fat, score 72.

---

## Edwin's schedule

| Day | Where | Notes |
|---|---|---|
| Lun | Oficina | Padel after work |
| Mar | Oficina | Fútbol (semanas alternas) |
| Mié | Oficina | Tupper day |
| Jue | Casa | More flexible — can heat food |
| Vie | Mixto | Padel Vie o Sáb |
| Sáb | Casa | Padel Vie o Sáb. Shopping day |
| Dom | Casa | Rest |

**Shopping:** Saturday or Sunday at Lider — one weekly purchase. Uses the Lider app to search, so brand names must be exact and searchable.  
**Drinks:** Only water. No coffee, no tea, no mate, no alcohol.

---

## Nana's role

Nana (Venezuelan housekeeper) comes **every Tuesday** for a single batch-cooking session (~2–2.5 hours). She cooks **everything for the week** — Edwin only plates/assembles.

**Nana cooks (every Tuesday):**
- Pollo mechado (5 portions × 150g)
- Arroz basmati (400g dry → ~1kg cooked)
- Tortilla de huevos con verduras (3 double portions — Mié/Jue/Vie cenas)
- Huevos duros (12 eggs — last 7 days unpeeled)
- Papas cocidas (7–8 medium — last 4–5 days)
- Salmón al horno (400g — eaten Tuesday cena, day 1, most perishable)
- Lentejas cocidas (1 cup dry — Mié almuerzo)
- Posta negra guisada (200g — **frozen**, thawed Saturday night for Sunday lunch)
- Carne molida guisada (300g — optional pollo substitute 1–2x/week)
- Avena remojada: 2 jars **Sunday night** (Mon + Wed); 2 jars **Tuesday night** (Thu + Sat)

**Edwin does himself:**
- Arms tuppers before leaving for work (previous night or morning)
- Thaws posta Saturday night for Sunday
- All shopping

---

## Perishability logic (critical for meal scheduling)

Nana cooks Tuesday. Food must last Tuesday → Monday (7 days). Meals are ordered so freshest food is eaten first.

| Food | Max fridge days | Assigned days |
|---|---|---|
| Salmón al horno | 2–3 days | Martes cena (day 1) |
| Pollo mechado | 3–4 days | Mar–Vie almuerzos (days 1–4) |
| Tortilla de huevos | 3–4 days | Mié–Vie cenas (days 2–4) |
| Lentejas | 4–5 days | Miércoles almuerzo (day 2) |
| Papas cocidas | 4–5 days | Jue–Vie cenas (days 3–4) |
| Arroz basmati | 4–5 days | Mar–Sáb (days 1–5, last serving Sáb) |
| Posta negra | frozen → thaw Sat | Domingo almuerzo (day 6) |
| Huevos duros (unpeeled) | 7 days | All week, Lunes cena = last (day 7) |
| Lata atún / tarro garbanzos | shelf stable | Lunes (day 7 — nothing fresh left) |

**Rule:** Lunes (day 7) uses only shelf-stable or 7-day items. No cooked protein or cooked carbs from the previous Tuesday survive to Monday.

---

## Doctor's prescription

**Daily portions:** 8P · 2L · 2.5C · 2V · 3F · 1.5A  
**Macros:** 25% Protein · 45% CHO · 30% Lipids · ~1700 kcal

### Meal schedule

| Meal | Time | Portions |
|---|---|---|
| Desayuno | 7–9h | 2P + 1C + 0.5A |
| Colación AM | 10–11h | 1Fr + 1L |
| Almuerzo | 14–15h | 3P + 1C + 1V + 1Fr + 0.5A |
| Colación PM | 16h | 1Fr + 1L |
| Cena | 20–21h | 3P + 0.5C + 1V + 0.5A |

### Key rules
- Legumbres = 1P + 1C per serving — do NOT add another carb that meal
- No more than 4h between meals
- 2L water/day
- Red meat max 1–2x/week
- Fish min 1–2x/week
- Legumbres 2–3x/week
- No alcohol, no processed foods, no added sugar
- SOS: add 1 extra fruit portion if very hungry
- 1 cup of home-cooked stew ≈ 1P + 1C

### Food restrictions
- No pasta
- No arroz integral (only basmati — lower glycemic index)
- No stevia
- No mostaza
- No café, no té, no mate — only water

### Doctor's context
- Goal is to teach healthy eating, not a strict diet.
- Body was in emergency mode from intermittent fasting + insufficient calories.
- Fix eating first → add boutique gym later.
- Monthly controls adjust the plan as body composition improves.

---

## Activity

- Lunes: padel
- Martes (alternate weeks): fútbol
- Viernes o Sábado: padel
- Average: ~3x/week

---

## Progress tracking

Implemented in **Progreso** tab. Stores InBody measurements in localStorage (`diet_progress_v1`).  
Tracks: weight, muscle kg, fat kg (→ auto % calculation), InBody score, notes.  
Features: trend chart (SVG), history list with edit/delete, JSON export/import.

---

## App architecture

```
index.html          Shell: HTML structure + all CSS
js/
  data/
    profile.js      Doctor's prescription, daily portions, rules, preferences
    plan.js         Weekly meal plan (7 days × 5 meals)
    shop.js         Shopping list with brands and quantities
    nana.js         Batch cooking guide data
    ofic.js         Office tips data
    progress.js     Seed InBody measurement data
  utils/
    emoji.js        Food → emoji mapping function
    storage.js      localStorage CRUD for progress entries
  render/
    plan.js         Day chips + meal cards renderer
    shop.js         Shopping list renderer
    nana.js         Nana cooking guide renderer
    ofic.js         Office tips renderer
    progress.js     Progress tab, chart, modal form renderer
  app.js            Tab routing + app init
```

**Load order matters:** data/* → utils/* → render/* → app.js (no bundler, plain `<script>` tags).

## Modifying the plan

All content lives in `js/data/`. No recompile — just refresh the browser.

For future Claude sessions: read `js/data/profile.js` for the nutritional prescription, and this README for the full context on Edwin's schedule, nana's role, and the perishability constraints that drive meal ordering.

## Running locally

```bash
npx serve .
# or open index.html directly (file://)
```
