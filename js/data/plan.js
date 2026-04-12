// Weekly meal plan — reflects what nana actually makes + user's real week
// Protein: nana does pollo mechado/guisado/salteado/carne molida + tortilla
// Carb: only arroz basmati (no pasta, no arroz integral)

const days = [
  { name:'Lun', sport:'padel', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (prep noche anterior)', a:'40g avena cruda + 150ml leche desc. en tarro — nana deja en refri', b:'c' },
      { n:'Pechuga pavo laminada', a:'100g', b:'p' },
      { n:'Nueces', a:'10 unidades (30g)', b:'f' },
      { n:'Agua o té sin azúcar', a:'libre', b:'' },
    ], note:'La avena se remoja en leche desde la noche anterior, queda blanda y lista sin cocción. Nana deja el tarro en el refri.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Yogurt Colun Skyr natural', a:'1 und. (110g)', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Pollo mechado (nana — tupper)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido', a:'120g (¾ taza)', b:'c' },
      { n:'Brócoli cocido', a:'libre', b:'' },
      { n:'Aceite oliva (agregar al servir)', a:'2 cdtas', b:'f' },
    ], note:'Nana arma tupper con pollo mechado + arroz + brócoli. Llevar gotero aceite.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Mandarina', a:'2 unidades', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos enteros', a:'3 unidades', b:'p' },
      { n:'Papa cocida', a:'1 und. mediana (200g) = 1C', b:'c' },
      { n:'Zapallo italiano + espinaca', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ], note:'Post-padel: papa más saciante que cereal. Sin azúcar.' },
  ]},

  { name:'Mar', sport:'fútbol', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos revueltos', a:'2 unidades', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas (60g)', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua o mate', a:'libre', b:'' },
    ], note:'10 minutos. Pan tostado + huevos + palta.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Arándanos', a:'¾ taza (110g) en tupper pequeño', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Pollo guisado (nana — tupper)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido', a:'120g (¾ taza)', b:'c' },
      { n:'Espinaca + tomate', a:'libre', b:'' },
      { n:'Aceite oliva', a:'2 cdtas (llevar en gotero)', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla nana (zapallo italiano, espinaca, cebolla, pimentón)', a:'2 porciones (~200g)', b:'p' },
      { n:'Papa pequeña cocida', a:'1 und. chica (150g) ≈ ½C', b:'c' },
      { n:'Lechuga + tomate', a:'libre', b:'' },
      { n:'Frutos secos', a:'15g', b:'f' },
    ], note:'Semana fútbol: cena antes de ir o post-partido máx 21h.' },
  ]},

  { name:'Mié', sport:null, ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (prep noche anterior)', a:'40g avena cruda + 150ml leche desc. en tarro', b:'c' },
      { n:'1 huevo + 3 claras', a:'batido encima de la avena', b:'p' },
      { n:'Almendras', a:'15g', b:'f' },
      { n:'Agua o té sin azúcar', a:'libre', b:'' },
    ], note:'Segundo día de avena remojada. Nana deja el tarro en el refri la noche del martes.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Pera', a:'1 unidad (100g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Lentejas cocidas', a:'¾ taza (150g) = 1P+1C', b:'p' },
      { n:'Pechuga pavo', a:'50g extra = 1P → total 2P, ya tienes 1C de lentejas', b:'p' },
      { n:'Zanahoria + pimentón cocidos', a:'libre', b:'' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'Lentejas viajan bien en tupper. NO agregar arroz, ya tienen 1C incluido.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Frutillas', a:'1¼ taza (200g) en tupper', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla nana', a:'2 porciones', b:'p' },
      { n:'2 tortillas maíz Saniito', a:'60g = ½C', b:'c' },
      { n:'Ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ]},
  ]},

  { name:'Jue', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'1 huevo + 3 claras revueltos', a:'', b:'p' },
      { n:'Avena cocida (porridge)', a:'40g', b:'c' },
      { n:'Semillas chía', a:'3 cdas (30g)', b:'f' },
      { n:'Agua o mate', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Yogurt natural descremado', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Pollo salteado (nana)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido', a:'120g (¾ taza)', b:'c' },
      { n:'Coliflor + brócoli', a:'libre', b:'' },
      { n:'Arándanos', a:'¾ taza', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla nana', a:'2 porciones', b:'p' },
      { n:'Papa mediana cocida', a:'200g', b:'c' },
      { n:'Ensalada lechuga + tomate', a:'libre', b:'' },
      { n:'Frutos secos mix', a:'15g', b:'f' },
    ]},
  ]},

  { name:'Vie', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos enteros', a:'', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Frutillas', a:'1¼ taza (200g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und.', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Pollo mechado o salteado (nana)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido', a:'120g', b:'c' },
      { n:'Mix verduras colores', a:'libre', b:'' },
      { n:'Mandarina x2', a:'120g', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Pera', a:'1 unidad', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Salmón o reineta (a la plancha)', a:'150g', b:'p' },
      { n:'Arroz basmati', a:'60g cocido = ½C', b:'c' },
      { n:'Espárragos o porotos verdes', a:'libre', b:'' },
      { n:'Nueces', a:'15g', b:'f' },
    ], note:'Post-padel viernes: si fue intenso, sube arroz a 120g (1C completo).' },
  ]},

  { name:'Sáb', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos revueltos', a:'', b:'p' },
      { n:'Avena cocida', a:'40g', b:'c' },
      { n:'Nueces', a:'30g', b:'f' },
      { n:'Agua o té', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Mango', a:'½ unidad (100g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und.', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Garbanzos cocidos', a:'¾ taza (125g) = 1P+1C', b:'p' },
      { n:'Pechuga pavo', a:'100g = 2P extra → total 3P', b:'p' },
      { n:'Pimentón + zanahoria', a:'libre', b:'' },
      { n:'Mandarina x2', a:'120g', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'Alternativa: 2 empanadas cazón/pavo (caseras) ≈ 2P+1C+1F. Con ensalada. Sin Doritos.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Arándanos', a:'¾ taza', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos enteros', a:'', b:'p' },
      { n:'Arroz basmati', a:'60g cocido = ½C', b:'c' },
      { n:'Verduras salteadas', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ]},
  ]},

  { name:'Dom', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos revueltos', a:'', b:'p' },
      { n:'Pan masa madre', a:'1–2 rebanadas', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'100g', b:'fr' },
      { n:'Yogurt natural descremado', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Vacuno magro (posta/filete)', a:'150g', b:'p' },
      { n:'Papa cocida', a:'1 unidad grande (200g)', b:'c' },
      { n:'Ensalada colorida (betarraga, lechuga, tomate)', a:'libre', b:'' },
      { n:'Mandarina x2', a:'', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'1–2x/semana vacuno magro OK. Sin arroz adicional, papa ya es 1C.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'2 latas atún al natural + 1 huevo', a:'= 3P total', b:'p' },
      { n:'2 tortillas maíz Saniito', a:'60g = ½C', b:'c' },
      { n:'Lechuga + pepino + tomate', a:'libre', b:'' },
      { n:'Nueces', a:'15g', b:'f' },
    ], note:'Domingo liviano. Sin actividad al día siguiente.' },
  ]},
];
