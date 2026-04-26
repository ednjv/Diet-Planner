// Weekly meal plan — nana cocina cada martes, comida dura martes a martes
// Orden por perecibilidad: lo más fresco primero (Mar), lo más durable de último (Lun)
// Tú solo sirves el plato — tuppers los armas tú antes de salir

const days = [
  // ── LUNES (día 7 desde el martes anterior — solo productos duraderos) ────────
  { name:'Lun', sport:'padel', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro prep dom. en la noche)', a:'40g avena cruda Quaker + 150ml leche descremada reconstituida (20g polvo Colun + agua)', b:'c' },
      { n:'Pechuga pavo laminada San Jorge', a:'100g (fiambrería — sin cocción)', b:'p' },
      { n:'Nueces Florida Mariposa', a:'5 unidades (15g)', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ], note:'Tarro del domingo en la noche — 1 día de remojo, listo para sacar del refri. Mezclar polvo de leche con agua fría la noche anterior en el tarro. Agregar avena. Tapar y refrigerar.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Yogurt Colun Skyr natural', a:'1 und. (110g)', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Atún Buen Mar al natural (lata)', a:'1 lata = 2P — sin cocción, shelf stable', b:'p' },
      { n:'Lentejas Carozzi cocidas (tarro)', a:'¾ taza (150g) = 1P+1C — solo escurrir, sin cocción', b:'p' },
      { n:'Arándanos', a:'¾ taza (110g)', b:'fr' },
      { n:'Ensalada libre (lechuga, tomate, pepino)', a:'libre', b:'' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ], note:'Día 7 — todo shelf-stable: atún lata (2P) + lentejas tarro (1P+1C) = 3P+1C ✓. Atún permitido en Lun almuerzo (único día sin proteína fresca ni huevos). | Alt CHO: no aplica (arroz del martes ya expiró — usar siempre lentejas tarro).' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Mandarina', a:'2 unidades', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos duros (nana)', a:'día 7 — los huevos duros son lo único que aguanta 7 días', b:'p' },
      { n:'6 mini tortillas maíz Saniito', a:'60g = ½C — sin cocción', b:'c' },
      { n:'Ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ], note:'Post-padel lunes: cena liviana. Solo armar con lo que hay. Mañana la nana cocina todo de nuevo.' },
  ]},

  // ── MARTES (día 1 — recién cocinado, lo más fresco) ──────────────────────────
  { name:'Mar', sport:'fútbol', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'día 1 — recién cocidos', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas (60g)', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ], note:'Solo tostar el pan. Los huevos ya están listos en el refri.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Arándanos', a:'¾ taza (110g) en tupper pequeño', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Pollo guisado (nana — recién hecho)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g (¾ taza)', b:'c' },
      { n:'Frutillas', a:'1¼ taza (200g) en tupper', b:'fr' },
      { n:'Espinaca + tomate', a:'libre', b:'' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla de huevos (nana)', a:'2 piezas (~250g = 3P) — día 1, recién hecha', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'60g = ½C', b:'c' },
      { n:'Ensalada libre (lechuga, tomate, pepino)', a:'libre', b:'' },
      { n:'Nueces Florida Mariposa', a:'15g', b:'f' },
    ], note:'Tortilla recién hecha el martes — comer inmediatamente (día 1). Las otras 2 piezas van para mié cena (día 2).' },
  ]},

  // ── MIÉRCOLES (día 2) ─────────────────────────────────────────────────────────
  { name:'Mié', sport:null, ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro prep dom. en la noche)', a:'40g avena cruda Quaker + 150ml leche descremada reconstituida (20g polvo Colun + agua)', b:'c' },
      { n:'2 huevos duros (nana)', a:'día 2', b:'p' },
      { n:'Florida Almendras Naturales', a:'15g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ], note:'Tarro del domingo en la noche — 3 días de remojo, todavía está bien. Mezclar polvo de leche con agua fría la noche anterior en el tarro. Agregar avena. Tapar y refrigerar.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Mandarina x2', a:'2 unidades (120g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:false, foods:[
      { n:'TRADICIÓN MIÉRCOLES — SIEMPRE en la calle', a:'No llevar tupper este día', b:'' },
      { n:'Hamburguesa (opción principal)', a:'Sin papas fritas. Sin salsas (mayo/golf/ketchup). Sin doble carne. Agua.', b:'' },
      { n:'Alternativa casino', a:'Pollo a la plancha + ensalada, sin papas ni salsas', b:'' },
    ], note:'SIEMPRE comer en la calle con el equipo. ~600–700 kcal ≈ 3P + 1C estimado. Sin papas fritas. Sin salsas. Agua o bebida sin azúcar. Contar como 1C consumido → cena sin carbohidrato.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Frutillas', a:'1¼ taza (200g) en tupper', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla de huevos (nana)', a:'2 piezas (~250g = 3P) — día 2, última porción', b:'p' },
      { n:'Ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ], note:'Sin carbohidrato en cena — ya lo consumiste al almuerzo en la calle. Solo proteína + verdura + grasa. Última porción de tortilla: usarla hoy.' },
  ]},

  // ── JUEVES (día 3) ────────────────────────────────────────────────────────────
  { name:'Jue', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro prep mar. en la noche)', a:'40g avena cruda Quaker + 150ml leche descremada reconstituida (20g polvo Colun + agua)', b:'c' },
      { n:'2 huevos duros (nana)', a:'día 3', b:'p' },
      { n:'Semillas chía', a:'3 cdas (30g)', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ], note:'Tarro del martes en la noche. Mezclar polvo de leche con agua fría la noche anterior en el tarro. Agregar avena. Tapar y refrigerar.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Yogurt natural descremado Colun', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Pollo salteado (nana)', a:'150g — día 3', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g (¾ taza) — día 3', b:'c' },
      { n:'Coliflor + brócoli (nana)', a:'libre', b:'' },
      { n:'Arándanos', a:'¾ taza (110g)', b:'fr' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ], note:'OPCIONAL lentejas: si nana preparó, usar ¾ taza lentejas (1P+1C) + pollo 100g (2P) = 3P+1C total. Sin arroz — lentejas ya aportan el CHO. | Alt sin lentejas: pollo 150g (3P) + arroz basmati 120g (1C) como está arriba.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Reineta al horno (nana)', a:'150g — día 3, dentro del límite de 3 días (2do pescado semana)', b:'p' },
      { n:'Papa cocida (nana)', a:'100g = 0.5C — día 3', b:'c' },
      { n:'Ensalada lechuga + tomate', a:'libre', b:'' },
      { n:'Nueces Florida Mariposa', a:'15g', b:'f' },
    ], note:'2do pescado de la semana — reineta del martes aguanta hasta hoy (día 3). Cumple prescripción médica 1–2x pescado/semana.' },
  ]},

  // ── VIERNES (día 4 — último día de pollo, tortilla y papas) ──────────────────
  { name:'Vie', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'día 4', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Frutillas', a:'1¼ taza (200g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und.', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Pollo mechado/salteado (nana)', a:'150g — día 4, último día del pollo', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g — día 4, último día del arroz', b:'c' },
      { n:'Mix verduras', a:'libre', b:'' },
      { n:'Mandarina x2', a:'120g', b:'fr' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Mandarina x2', a:'2 unidades (120g)', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Pollo mechado (nana)', a:'150g — día 4, último día del pollo', b:'p' },
      { n:'Papa cocida (nana)', a:'100g = ½C — día 4, última papa', b:'c' },
      { n:'Ensalada libre (lechuga, tomate, pepino)', a:'libre', b:'' },
      { n:'Nueces Florida Mariposa', a:'15g', b:'f' },
    ], note:'Post-padel viernes. Último día del pollo (día 4) — usar hoy. Última papa también.' },
  ]},

  // ── SÁBADO (día 5 — huevos duros y arroz aguantan, pollo y tortilla ya no) ───
  { name:'Sáb', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (Edwin — tarro prep jue. en la noche)', a:'40g avena cruda Quaker + 150ml leche descremada reconstituida (20g polvo Colun + agua)', b:'c' },
      { n:'2 huevos duros (nana)', a:'día 5 — huevos aguantan 7 días', b:'p' },
      { n:'Nueces Florida Mariposa', a:'15g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ], note:'Tarro del jueves en la noche (Edwin). Mezclar polvo de leche con agua fría la noche anterior en el tarro. Agregar avena. Tapar y refrigerar.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Mango', a:'100g (⅕ del mango entero ~500g) — cortar en porciones, guardar resto en tupper refri', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und.', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Atún Buen Mar al natural (lata)', a:'1 lata = 2P — sin cocción', b:'p' },
      { n:'Lentejas nana (día 5, último día) o tarro Carozzi', a:'¾ taza (150g) = 1P+1C — sin cocción', b:'p' },
      { n:'Pimentón + zanahoria', a:'libre', b:'' },
      { n:'Mandarina x2', a:'2 unidades (120g)', b:'fr' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ], note:'No usar pollo (expiró día 4). Sin huevos en almuerzo. Proteína: atún (2P) + lentejas (1P+1C) = 3P+1C ✓. Si lentejas nana ya no quedan, usar tarro Carozzi. | Alt CHO: si usas arroz basmati en lugar de lentejas, lentejas aportan 1P que queda sin cubrir — preferir siempre lentejas.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Arándanos', a:'¾ taza (110g)', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos duros (nana)', a:'día 5', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'60g = ½C — día 5, último día del arroz', b:'c' },
      { n:'Verduras ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ], note:'Sacar la posta del freezer esta noche para que descongele en el refri para mañana.' },
  ]},

  // ── DOMINGO (día 6 — posta descongelada, sin arroz ni papa del martes) ────────
  { name:'Dom', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'día 6', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas (60g = 1C)', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'100g', b:'fr' },
      { n:'Yogurt natural descremado Colun', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Posta negra guisada (Edwin descongela sábado en la noche)', a:'150g', b:'p' },
      { n:'12 mini tortillas maíz Saniito', a:'120g = 1C — sin cocción (arroz y papa del martes ya expiraron)', b:'c' },
      { n:'Ensalada colorida (betarraga, lechuga, tomate)', a:'libre', b:'' },
      { n:'Mandarina x2', a:'2 unidades (120g)', b:'fr' },
      { n:'Aceite oliva Borges', a:'2 cdtas', b:'f' },
    ], note:'Arroz y papa del martes ya no son seguros al día 6. Usar 12 tortillas mini = 1C completo (no 6 — eso sería solo ½C, insuficiente para almuerzo).' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Yoghurt Soprole Protein+ Frutilla (155g)', a:'155g individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Atún Buen Mar al natural (lata)', a:'1 lata = 2P — sin cocción', b:'p' },
      { n:'1 huevo duro (nana)', a:'día 6 — sin cocción = 1P → total 3P', b:'p' },
      { n:'6 mini tortillas maíz Saniito', a:'60g = ½C', b:'c' },
      { n:'Lechuga + pepino + tomate', a:'libre', b:'' },
      { n:'Nueces Florida Mariposa', a:'15g', b:'f' },
    ], note:'Domingo liviano. Todo sin cocción.' },
  ]},
];
