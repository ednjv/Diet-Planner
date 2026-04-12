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
| Mié | Oficina | Tupper day + posible almuerzo calle (hamburguesa tradición) |
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
- Pollo mechado (700g pechuga → 5 portions × 150g, days 1–4)
- Arroz basmati (400g dry → ~1kg cooked, days 1–5)
- Reineta al horno (300g of 500g bag → 150g Mar cena + 150g Jue cena; freeze remaining 200g raw)
- Tortilla de huevos con verduras (**9 huevos**, cut into **4** pieces → 2 pieces per cena × 2 cenas: Mié + Vie only)
- Huevos duros (**11 unidades** — last 7 days unpeeled; 11 duros + 9 tortilla = 20 total from bandeja x30)
- Papas cocidas (2 unidades medianas — **100g per serving** = 0.5C; Jue cena day 3 + Vie cena day 4)
- Lentejas cocidas (1¾ cup dry — Mié almuerzo day 2 + Sáb almuerzo day 5; tarro Carozzi for Lun day 7)
- Posta negra guisada (**exactly 200g** — if piece is larger, divide raw first, freeze excess; guised portion goes to freezer, thaw Saturday night for Sunday lunch)
- Carne molida guisada (300g — optional pollo substitute 1–2x/week)
- Avena remojada: 1 jar **Sunday night** (Mon only); 1 jar **Tuesday night** (Thu only) — uses 150ml leche reconstituida desde polvo Colun (Edwin manages milk powder himself, nana only preps the oats jars)

**Edwin does himself:**
- Arms tuppers before leaving for work
- Preps **Saturday overnight oats jar Thursday night** (4-day soak limit — nana's Tuesday jar would over-ferment by Saturday)
- Thaws posta Saturday night for Sunday
- All shopping

---

## Weekly exceptions

### Miércoles — tradición oficina

Edwin has a weekly Wednesday lunch tradition with coworkers (hamburgers). This is a planned exception, not a cheat.

- Hamburger **replaces** the Wednesday tupper almuerzo entirely — do not eat both
- Order: no fries, no extra sauces (mayo/golf/ketchup), no double meat, water only
- Estimated: ~600–700 kcal, counts as ~3P + 1C
- Wednesday cena: **remove tortillas maíz** — protein + vegetables only (CHO already consumed at lunch)
- Wednesday tupper: nana prepares it anyway — moves to Thursday as backup almuerzo if not eaten Wednesday (day 3 fridge limit is safe)
- Frequency: maximum 1× per week
- **Doctor:** to be disclosed at 30.04.2026 control for official integration into plan

---

## Perishability logic (critical for meal scheduling)

Nana cooks Tuesday. Food must last Tuesday → Monday (7 days). Meals ordered freshest-first.

| Food | Max fridge days | Assigned days |
|---|---|---|
| Reineta al horno | 3 days | Mar cena (day 1) + Jue cena (day 3) — day 3 is the hard limit |
| Pollo mechado | 3–4 days | Mar–Vie almuerzos (days 1–4) |
| Tortilla de huevos | 3–4 days | Mié cena (day 2) + Vie cena (day 4) — NOT Jue (Jue has reineta) |
| Papas cocidas | 4–5 days | Jue cena (day 3) + Vie cena (day 4) |
| Lentejas | 4–5 days | Mié almuerzo (day 2) + Sáb almuerzo (day 5, limit) |
| Arroz basmati | 4–5 days | Mar–Sáb (days 1–5, last serving Sáb cena) |
| Posta negra | frozen → thaw Sat | Dom almuerzo (day 6) |
| Huevos duros (unpeeled) | 7 days | All week; Lun cena = last (day 7) |
| Atún lata / lentejas tarro | shelf stable | Lun (day 7 — nothing fresh survives) |

**Rule:** Lunes (day 7) uses only shelf-stable or 7-day items. No cooked protein or cooked carbs from the previous Tuesday.

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
- 2L water/day — only water (no coffee, no tea, no mate)
- Red meat max 1–2x/week
- Fish **min 1–2x/week** (plan covers: Mar cena reineta + Jue cena reineta)
- Legumbres 2–3x/week
- No alcohol, no processed foods, no added sugar
- SOS: add 1 extra fruit portion if very hungry
- 1 cup of home-cooked stew ≈ 1P + 1C

### Critical portion rules (common mistakes)
- **Tortillas de maíz mini:** 6 unidades (10g each) = 60g = ½C. NOT 2 unidades.
- **Papa:** 100g per serving = ½C = half a medium potato. NEVER 200g.
- **Nueces:** 15g = 5 unidades = ½A (desayuno only has 0.5A slot).
- **Legumbres:** ¾ taza = 1P + 1C combined — no additional rice, potato, or tortilla that meal.
- **Posta negra:** max 200g purchase; if piece is larger, divide raw and freeze excess immediately.

### Food restrictions
- No naranja → replace with **mandarina (2 unidades = 1 fruta portion)**
- No pasta
- No arroz integral (only basmati — lower glycemic index)
- No quinoa → replace with arroz basmati, papa, or tortillas maíz
- No stevia
- No mostaza
- No peras
- No café, no té, no mate — only water
- No leche tetrapak (not available locally)
- Prefer lentejas over garbanzos (nana makes one single batch of lentejas; tarro Carozzi for Lun day 7)
- Avena: must be **traditional Quaker** (caja azul) — NOT instantánea (higher GI, dissolves poorly in overnight oats)
- **Leche descremada en polvo Colun 800g** for overnight oats at home (20g powder + water = 150ml reconstituted milk per jar) — monthly purchase
- **Soprole Protein+ Frutilla 155g** for daily PM colación at 16h (replaces tetrapak) — 10g protein per unit, 7 units/week

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

## Key brand confirmations (Lider app search names)

| Item | Exact search term | Notes |
|---|---|---|
| Tortillas maíz | `Tortilla De Maíz Sin Glúten Mini Saniito` | Mini (10g c/u). 1 paquete 24 und = 1 semana |
| Reineta | `Reineta Filetes Sin Piel Lider` | Bolsa congelada 500g. Nana usa 300g, freezes 200g raw |
| Arroz | `Tucapel basmati` | 1 bolsa 1kg = suficiente |
| Huevos | `bandeja x30` | Cintazul o equivalente. 20 para nana, 10 para Edwin |
| Avena | `Quaker avena tradicional` | Caja azul — NO instantánea |
| Leche en polvo (oats) | `Colun descremada polvo` | 800g — compra mensual, no semanal |
| Yogurt PM (Protein+) | `Soprole Protein` | 7 unidades × 155g — compra semanal |
| Yogurt AM | `Colun light` | Colun Light Sin Azúcar Sabor Frutilla 120g. Próxima semana: cambiar a Colun Skyr Natural |
| Atún | `Buen Mar atún` | Solo "al natural" o "en agua" |
| Aceite oliva | `Borges oliva extra virgen` | Si hay stock, no comprar |

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
    profile.js      Doctor's prescription, daily portions, rules, preferences, portionRules
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
