// Weekly meal plan — nana prepara todo el martes en batch para la semana completa
// Tú solo sirves y armas el plato (frutas, yogurt, ensaladas, cosas frías)

const days = [
  { name:'Lun', sport:'padel', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro en refri)', a:'40g avena cruda + 150ml leche desc.', b:'c' },
      { n:'Pechuga pavo laminada San Jorge', a:'100g (fiambrería, sin cocción)', b:'p' },
      { n:'Nueces', a:'10 unidades (30g)', b:'f' },
      { n:'Agua o té sin azúcar', a:'libre', b:'' },
    ], note:'Nana deja el tarro preparado la noche del domingo. Tú solo lo sacas del refri.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Yogurt Colun Skyr natural', a:'1 und. (110g)', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Pollo mechado (nana — tupper)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g (¾ taza)', b:'c' },
      { n:'Brócoli al vapor (nana)', a:'libre', b:'' },
      { n:'Aceite oliva (agregar al servir)', a:'2 cdtas — llevar gotero', b:'f' },
    ], note:'Nana arma el tupper la noche anterior: pollo + arroz + brócoli. Llevar gotero aceite.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Mandarina', a:'2 unidades', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml individual', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos duros (nana)', a:'3 unidades — ya cocidos en el refri', b:'p' },
      { n:'Papa cocida (nana)', a:'1 und. mediana (200g) = 1C', b:'c' },
      { n:'Zapallo italiano + espinaca', a:'libre — ensalada cruda o salteada', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ], note:'Post-padel: papa más saciante. Solo armar el plato con lo que hay en el refri.' },
  ]},

  { name:'Mar', sport:'fútbol', ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Pan integral Ideal Artesano', a:'2 rebanadas (60g)', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua o mate', a:'libre', b:'' },
    ], note:'Solo tostar el pan y armar. Los huevos ya están listos.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Arándanos', a:'¾ taza (110g) en tupper pequeño', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Pollo guisado (nana — tupper)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g (¾ taza)', b:'c' },
      { n:'Espinaca + tomate', a:'libre', b:'' },
      { n:'Aceite oliva', a:'2 cdtas (llevar en gotero)', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla de huevos (nana)', a:'2 porciones (~200g)', b:'p' },
      { n:'Papa cocida (nana)', a:'1 und. chica (150g) ≈ ½C', b:'c' },
      { n:'Lechuga + tomate', a:'libre', b:'' },
      { n:'Frutos secos', a:'15g', b:'f' },
    ], note:'Semana fútbol: cena antes de ir o post-partido máx 21h.' },
  ]},

  { name:'Mié', sport:null, ofic:true, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro en refri)', a:'40g avena cruda + 150ml leche desc.', b:'c' },
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Almendras', a:'15g', b:'f' },
      { n:'Agua o té sin azúcar', a:'libre', b:'' },
    ], note:'Nana deja el tarro la noche del martes. Tú solo sacas del refri y armas.' },
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Pera', a:'1 unidad (100g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und. individual', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', tupper:true, foods:[
      { n:'Lentejas cocidas (nana)', a:'¾ taza (150g) = 1P+1C', b:'p' },
      { n:'Pechuga pavo laminada', a:'50g = 1P extra → total 2P', b:'p' },
      { n:'Zanahoria + pimentón (nana)', a:'libre', b:'' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'NO agregar arroz — las lentejas ya tienen 1C incluido.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', tupper:true, foods:[
      { n:'Frutillas', a:'1¼ taza (200g) en tupper', b:'fr' },
      { n:'Leche descremada Soprole tetrapak', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla de huevos (nana)', a:'2 porciones', b:'p' },
      { n:'2 tortillas maíz Saniito', a:'60g = ½C', b:'c' },
      { n:'Ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ]},
  ]},

  { name:'Jue', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'Avena remojada en leche (nana — tarro en refri)', a:'40g avena cruda + 150ml leche desc.', b:'c' },
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Semillas chía', a:'3 cdas (30g)', b:'f' },
      { n:'Agua o mate', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'2 unidades', b:'fr' },
      { n:'Yogurt natural descremado', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Pollo salteado (nana)', a:'150g', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'120g (¾ taza)', b:'c' },
      { n:'Coliflor + brócoli (nana)', a:'libre', b:'' },
      { n:'Arándanos', a:'¾ taza', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Tortilla de huevos (nana)', a:'2 porciones', b:'p' },
      { n:'Papa cocida (nana)', a:'200g', b:'c' },
      { n:'Ensalada lechuga + tomate', a:'libre', b:'' },
      { n:'Frutos secos mix', a:'15g', b:'f' },
    ]},
  ]},

  { name:'Vie', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
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
      { n:'Arroz basmati cocido (nana)', a:'120g', b:'c' },
      { n:'Mix verduras', a:'libre', b:'' },
      { n:'Mandarina x2', a:'120g', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ]},
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Pera', a:'1 unidad', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'Salmón al horno (nana)', a:'150g — del refri, 3 días desde el martes', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'60g = ½C', b:'c' },
      { n:'Espárragos o porotos verdes', a:'libre', b:'' },
      { n:'Nueces', a:'15g', b:'f' },
    ], note:'Post-padel viernes: si fue intenso, sube arroz a 120g (1C completo).' },
  ]},

  { name:'Sáb', sport:'padel', ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Avena remojada en leche (nana — tarro en refri)', a:'40g avena + 150ml leche desc.', b:'c' },
      { n:'Nueces', a:'30g', b:'f' },
      { n:'Agua o té', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Mango', a:'½ unidad (100g)', b:'fr' },
      { n:'Yogurt Colun Skyr', a:'1 und.', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Garbanzos Carozzi (tarro — sin cocción)', a:'¾ taza (125g) = 1P+1C — solo escurrir', b:'p' },
      { n:'Pechuga pavo laminada San Jorge', a:'100g = 2P extra → total 3P', b:'p' },
      { n:'Pimentón + zanahoria', a:'libre', b:'' },
      { n:'Mandarina x2', a:'120g', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'Garbanzos del tarro = sin cocción, solo escurrir. Pavo laminado = sin cocción.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Arándanos', a:'¾ taza', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'3 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Arroz basmati cocido (nana)', a:'60g = ½C', b:'c' },
      { n:'Verduras ensalada libre', a:'libre', b:'' },
      { n:'Palta', a:'50g', b:'f' },
    ]},
  ]},

  { name:'Dom', sport:null, ofic:false, meals:[
    { type:'Desayuno', time:'7–9h', icon:'🌅', bg:'#E8F5E9', foods:[
      { n:'2 huevos duros (nana)', a:'ya cocidos en el refri', b:'p' },
      { n:'Pan masa madre', a:'1–2 rebanadas', b:'c' },
      { n:'Palta', a:'50g', b:'f' },
      { n:'Agua', a:'libre', b:'' },
    ]},
    { type:'Colación', time:'10–11h', icon:'🍎', bg:'#FCE4EC', foods:[
      { n:'Kiwi x2', a:'100g', b:'fr' },
      { n:'Yogurt natural descremado', a:'120g', b:'l' },
    ]},
    { type:'Almuerzo', time:'14–15h', icon:'🍽', bg:'#E3F2FD', foods:[
      { n:'Posta negra guisada (nana — descongelar noche anterior)', a:'150g', b:'p' },
      { n:'Papa cocida (nana)', a:'1 unidad grande (200g)', b:'c' },
      { n:'Ensalada colorida (betarraga, lechuga, tomate)', a:'libre', b:'' },
      { n:'Mandarina x2', a:'', b:'fr' },
      { n:'Aceite oliva', a:'2 cdtas', b:'f' },
    ], note:'Nana congela la posta el martes. Sacar del freezer el sábado en la noche para que descongele.' },
    { type:'Colación', time:'16h', icon:'🍊', bg:'#FCE4EC', foods:[
      { n:'Manzana verde', a:'1 mediana', b:'fr' },
      { n:'Leche descremada', a:'200ml', b:'l' },
    ]},
    { type:'Cena', time:'20–21h', icon:'🌙', bg:'#EDE7F6', foods:[
      { n:'2 latas atún Buen Mar al natural', a:'sin cocción', b:'p' },
      { n:'1 huevo duro (nana)', a:'ya cocido en el refri', b:'p' },
      { n:'2 tortillas maíz Saniito', a:'60g = ½C', b:'c' },
      { n:'Lechuga + pepino + tomate', a:'libre', b:'' },
      { n:'Nueces', a:'15g', b:'f' },
    ], note:'Domingo liviano. Atún directo de la lata, sin cocción.' },
  ]},
];
