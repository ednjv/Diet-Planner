// Nutritional plan — Dra. Laura Prieto Parra, Benefit Health
// Date: 11.04.2026 | Next control: 30.04.2026 16:30h
// This file is the source of truth for plan modifications in future sessions.

const userProfile = {
  // Daily portion targets
  dailyPortions: {
    proteina:     8,
    lacteo:       2,
    carbohidrato: 2.5,
    verdura:      2,
    fruta:        3,
    aceite:       1.5,
  },
  macros: { prot: 25, cho: 45, lip: 30 },
  kcalApprox: 1700,

  // Meal schedule from doctor
  mealSchedule: [
    { meal: 'Desayuno', time: '7–9h',   portions: { proteina: 2, carbo: 1, aceite: 0.5 } },
    { meal: 'Colación', time: '10–11h', portions: { fruta: 1, lacteo: 1 } },
    { meal: 'Almuerzo', time: '14–15h', portions: { proteina: 3, carbo: 1, verdura: 1, fruta: 1, aceite: 0.5 } },
    { meal: 'Colación', time: '16h',    portions: { fruta: 1, lacteo: 1 } },
    { meal: 'Cena',     time: '20–21h', portions: { proteina: 3, carbo: 0.5, verdura: 1, aceite: 0.5 } },
  ],

  goal: '20% grasa corporal (~500g pérdida mensual estimada)',
  nextControl: '30.04.2026 16:30h',
  doctor: 'Dra. Laura Prieto Parra — lprieto@benefithealth.cl — Benefit Nutrición, Lo Fontecilla 201 of 633, Las Condes',

  activity: [
    'Lunes: padel',
    'Martes (semanas alternas): fútbol',
    'Viernes o Sábado: padel',
    'Frecuencia promedio: 3x/semana',
  ],

  // Key dietary rules from doctor
  keyRules: [
    'Legumbres = 1P + 1C por porción (no agregar otro carbo)',
    'No dejar pasar más de 4h sin comer',
    '2L agua diaria — solo agua, sin infusiones, sin café, sin mate',
    'Carnes rojas máx 1–2x/semana',
    'Pescado mín 1–2x/semana',
    'Legumbres 2–3x/semana',
    'Sin alcohol, sin procesados, sin azúcar añadida',
    'SOS: agregar 1 porción de fruta extra si hay mucha hambre',
    '1 taza de guiso casero ≈ 1P + 1C',
  ],

  // Food preferences and restrictions
  preferences: {
    rice:            'Solo arroz basmati (índice glicémico más bajo)',
    noPasta:         true,
    noArrozIntegral: true,
    noStevia:        true,
    noMostaza:       true,
    noPera:          true,  // Edwin no le gustan las peras — reemplazadas con mandarina (2 unidades = 1 porción)
    noNaranja:       true,  // reemplazar siempre con mandarina (2 unidades = 1 porción de fruta)
    noQuinoa:        true,  // reemplazar con arroz basmati, papa, o tortillas maíz
    noHuevosAlmuerzo: true, // NUNCA huevos en el almuerzo — ni duros ni tortilla ni revueltos
    preferLentejas:  true,  // preferir lentejas sobre garbanzos en todo el plan; agregar arroz basmati como alternativa donde haya lentejas
    noCafe:          true,
    noTe:            true,
    noMate:          true,
    drinks:          'Solo agua',
    nanaCooks: 'Martes (batch semanal — todo cocinado de una vez, dura mar→lun)',
    nanaMakes: ['pollo mechado', 'arroz basmati', 'tortilla de huevos (Mar+Mié cenas)', 'huevos duros (19 unidades — solo desayunos y cenas, NUNCA almuerzos)', 'papas cocidas (2 unidades — Jue+Vie cenas)', 'posta negra guisada (freezer — máx 200g)', 'reineta al horno (150g — Jue cena)', 'lentejas cocidas (preferir siempre — Jue almuerzo + Sáb almuerzo)', 'carne molida guisada (opcional)', 'avena remojada (dom noche: 2 tarros Lun+Mié; mar noche: 1 tarro Jue)'],
    nanaDoesNot: 'Armado de tuppers — Edwin los arma él mismo antes de salir al trabajo. Tarro avena Sáb lo prepara Edwin el jue en la noche.',
    shopping:  'Sábado o Domingo en Lider (una compra semanal — usar app Lider, buscar por marca exacta)',
  },

  // Critical portion rules (to avoid common mistakes)
  portionRules: [
    'Tortillas de maíz: usar tortillas MINI Saniito (10g c/u) — 6 unidades = 60g = ½C. NO 2 unidades.',
    'Papa: 100g por porción = ½C. Media papa mediana. NUNCA 200g en una porción.',
    'Legumbres: ¾ taza = 1P + 1C simultáneamente. NO agregar arroz, papa ni tortilla ese tiempo.',
    'Nueces: 15g = 5 unidades = ½A en desayuno. NO 30g (eso es 1A completo).',
    'Posta negra: pedir máximo 200g. Si viene trozo grande, dividir crudo y congelar exceso inmediatamente.',
  ],

  // Context for future modifications
  context: [
    'El objetivo de la nutrióloga es enseñar a comer, no dieta estricta.',
    'El cuerpo entró en modo emergencia por ayuno intermitente + poca comida.',
    'Comiendo bien primero, después se agregará gym boutique.',
    'El plan actual establece la base. Los controles mensuales ajustan.',
    'Nana cocina cada martes. Comida debe durar mar→lun (7 días). Orden del plan por perecibilidad: lo más fresco primero, lo más durable de último (huevos duros/latas lun).',
    'Edwin arma sus propios tuppers. Lunes en oficina = solo productos no perecederos (atún lata + lentejas tarro Carozzi). NUNCA huevos en almuerzo — ni lunes ni ningún día.',
    'Atún permitido en: Dom cena, Lun almuerzo (día 7), Sáb almuerzo (día 5). No en otros almuerzos ni cenas entre semana.',
    'Dom almuerzo usa 12 tortillas mini Saniito (1C completo), no 6 (que sería solo ½C — insuficiente para almuerzo).',
  ],
};
