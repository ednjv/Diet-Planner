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
    '2L agua diaria (infusiones cuentan)',
    'Carnes rojas máx 1–2x/semana',
    'Pescado mín 1–2x/semana',
    'Legumbres 2–3x/semana',
    'Sin alcohol, sin procesados, sin azúcar añadida',
    'SOS: agregar 1 porción de fruta extra si hay mucha hambre',
    '1 taza de guiso casero ≈ 1P + 1C',
  ],

  // Food preferences and restrictions
  preferences: {
    rice:      'Solo arroz basmati (índice glicémico más bajo)',
    noPasta:   true,
    noArrozIntegral: true,
    noStevia:  true,
    noMostaza: true,
    noPera:    true,   // Edwin no le gustan las peras — reemplazadas con naranja
    preferLentejas: true,  // preferir lentejas sobre garbanzos en todo el plan
    noCafe:    true,   // solo agua — no café, no té, no mate
    noTe:      true,
    drinks:    'Solo agua',
    nanaCooks: 'Martes (batch semanal — todo cocinado de una vez, dura mar→lun)',
    nanaMakes: ['pollo mechado', 'arroz basmati', 'tortilla de huevos', 'huevos duros', 'papas cocidas', 'posta negra guisada (freezer)', 'salmón al horno', 'lentejas cocidas', 'carne molida guisada', 'avena remojada (dom y mar noche)'],
    nanaDoesNot: 'Armado de tuppers — Edwin los arma él mismo antes de salir al trabajo',
    shopping:  'Sábado o Domingo en Lider (una compra semanal — usar app Lider, buscar por marca exacta)',
  },

  // Context for future modifications
  context: [
    'El objetivo de la nutrióloga es enseñar a comer, no dieta estricta.',
    'El cuerpo entró en modo emergencia por ayuno intermitente + poca comida.',
    'Comiendo bien primero, después se agregará gym boutique.',
    'El plan actual establece la base. Los controles mensuales ajustan.',
    'Nana cocina cada martes. Comida debe durar mar→lun (7 días). Orden del plan por perecibilidad: lo más fresco primero (salmón mar cena), lo más durable de último (huevos duros/latas lun).',
    'Edwin arma sus propios tuppers. Lunes en oficina = solo productos no perecederos (atún lata, garbanzos tarro, huevos duros).',
  ],
};
