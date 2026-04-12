// Shopping list — specific brands for Lider app search
// Updated: no pasta, no arroz integral, no stevia, no mostaza
// One weekly purchase on Saturday or Sunday

const shopData = [
  { cat:'Proteínas', rows:[
    { p:'Pechuga de pollo sin piel', br:'Agrosuper Pechuga sin Hueso sin Piel — fresco', q:'1 kg', n:'Nana hace batch el martes. Buscar "Agrosuper pechuga" en Lider.' },
    { p:'Pechuga pavo laminada', br:'San Jorge Pechuga de Pavo Ahumada — sobre 200g', q:'200g', n:'Desayuno Lun + complemento almuerzos. Sección fiambrería. Buscar "San Jorge pavo".' },
    { p:'Huevos', br:'Don Pollo Huevos Blancos — bandeja x30', q:'30 unidades', n:'El ítem que más se usa. Desayunos + tortilla nana + cenas. Buscar "Don Pollo bandeja".' },
    { p:'Salmón fresco o reineta', br:'Sección pescadería Lider — salmón filete o reineta fresca', q:'400g', n:'Para cena Vie (y backup). Pedir sin piel. Reineta más económica.' },
    { p:'Atún al natural (lata)', br:'Buen Mar Atún al Natural en Agua — lata 160g', q:'4 latas', n:'Cena Dom + backup semana. Solo "al natural" o "en agua". Buscar "Buen Mar atún".' },
    { p:'Vacuno magro (posta negra o filete)', br:'Sección carnicería Lider — posta negra o filete', q:'200g', n:'Solo Dom almuerzo. Máx 1–2x/semana.' },
    { p:'Lentejas', br:'Carozzi Lentejas — bolsa 500g', q:'1 bolsa', n:'Mié almuerzo = 1P+1C. Dura varias semanas. Buscar "Carozzi lentejas".' },
    { p:'Garbanzos cocidos (tarro)', br:'Carozzi Garbanzos Cocidos — tarro 400g', q:'1 tarro', n:'Sáb almuerzo. Tarro ya cocido = más práctico. Buscar "Carozzi garbanzos".' },
  ]},

  { cat:'Carbohidratos', rows:[
    { p:'Arroz basmati', br:'Tucapel Basmati — bolsa 1 kg', q:'1.5 kg (2 bolsas)', n:'Base de TODOS los almuerzos y algunas cenas. Buscar "Tucapel basmati" en Lider.' },
    { p:'Avena cruda tradicional', br:'Quaker Avena Tradicional — caja o bolsa 500g', q:'1 caja', n:'Overnight oats Lun y Mié, porridge Jue/Sáb. Buscar "Quaker avena tradicional".' },
    { p:'Pan integral molde', br:'Ideal Artesano Integral — bolsa', q:'1 bolsa', n:'Desayuno Mar, Vie, Dom. Máx 2 rebanadas = 1C. Verificar <155 kcal/porción en etiqueta. Buscar "Ideal Artesano Integral".' },
    { p:'Papa corriente', br:'Sin marca — feria o granel Lider sección verduras', q:'6 unidades medianas', n:'Cenas Lun, Jue + Dom almuerzo. 1 mediana ≈ 200g.' },
    { p:'Tortillas de maíz Saniito', br:'Saniito Tortillas de Maíz — paquete 8 und.', q:'1 paquete', n:'Cenas Mié y Dom. Buscar exactamente "Saniito tortillas" en Lider.' },
  ]},

  { cat:'Verduras (sin restricción)', rows:[
    { p:'Zapallo italiano', br:'Sin marca — feria o granel Lider', q:'4–5 unidades', n:'Principal vegetal tortilla nana. Toda la semana.' },
    { p:'Espinaca', br:'Dole Espinaca Baby — bolsa 200g', q:'2 bolsas', n:'Tortilla nana + almuerzos. Buscar "Dole espinaca" en Lider.' },
    { p:'Brócoli', br:'Sin marca — feria o granel Lider', q:'1 cabeza grande', n:'Almuerzo Lun + Jue. Nana cocina al vapor.' },
    { p:'Pimentón rojo y verde', br:'Sin marca — feria o granel Lider', q:'4 unidades (2 rojos, 2 verdes)', n:'Tortilla nana + almuerzos toda la semana.' },
    { p:'Cebolla', br:'Sin marca — bolsa 1 kg Lider', q:'1 bolsa 1 kg', n:'Nana usa en tortilla y en todos los guisos.' },
    { p:'Lechuga', br:'Sin marca — cogolla grande', q:'1 cogolla', n:'Cenas y ensaladas variadas.' },
    { p:'Tomate', br:'Sin marca — feria o granel Lider', q:'500g', n:'Ensaladas diarias.' },
    { p:'Zanahoria', br:'Sin marca — bolsa 500g Lider', q:'1 bolsa 500g', n:'Almuerzo Mié + Sáb.' },
    { p:'Betarraga', br:'Sin marca — granel Lider', q:'2–3 unidades', n:'Ensalada Dom almuerzo.' },
  ]},

  { cat:'Frutas', rows:[
    { p:'Manzana verde (Granny Smith)', br:'Sin marca — feria o granel Lider', q:'7 unidades', n:'Más práctica: no se aplasta en mochila. Colación AM varios días.' },
    { p:'Arándanos', br:"Driscoll's Arándanos — pack 125g (fresco o congelado Lider)", q:'3 packs (375g)', n:'Mejor fruta del plan. Bajo índice glicémico. Llevar en tupper. Buscar "Driscoll blueberry".' },
    { p:'Kiwi', br:'Sin marca — granel Lider', q:'6 unidades', n:'Colaciones Mar, Jue, Dom.' },
    { p:'Frutillas', br:'Sin marca — pack 500g temporada o congelado Lider', q:'1 pack 500g', n:'Colaciones Mié y Vie. Llevar en tupper al trabajo.' },
    { p:'Mandarina', br:'Sin marca — bolsa malla feria o Lider', q:'10 unidades', n:'Fácil de pelar en oficina. Lun, Vie, Sáb, Dom.' },
    { p:'Pera', br:'Sin marca — granel Lider', q:'4 unidades', n:'Colaciones Mié y Vie.' },
    { p:'Mango', br:'Sin marca — granel Lider (1 unidad semi maduro)', q:'1 unidad', n:'Solo Sáb colación. Comprar semi maduro.' },
  ]},

  { cat:'Lácteos', rows:[
    { p:'Yogurt Skyr natural sin azúcar', br:'Colun Skyr Natural — individual 110g', q:'7 unidades', n:'Colación AM diaria. Más proteína que yogurt griego regular. Buscar "Colun Skyr" en Lider.' },
    { p:'Yogurt natural descremado', br:'Colun Natural Descremado — 120g o Nestlé Natural sin azúcar', q:'3 unidades', n:'Para días en casa (Jue, Dom). Sin azúcar agregada.' },
    { p:'Leche descremada tetrapak 200ml', br:'Soprole Descremada Tetrapak 200ml individual', q:'7 cajas', n:'Colación tarde en oficina. No necesita frío hasta abrir. Buscar "Soprole tetrapak 200ml".' },
  ]},

  { cat:'Aceites y Grasas', rows:[
    { p:'Palta', br:'Sin marca — feria o granel Lider', q:'5 unidades', n:'3 maduras + 2 verdes para que maduren en la semana. Desayunos + cenas.' },
    { p:'Nueces mariposa', br:'Granel Lider nueces / o Carozzi Nueces — bolsa 200g', q:'200g', n:'Cenas + desayunos. Bolsa dura 2–3 semanas.' },
    { p:'Almendras', br:'Granel Lider almendras / o Carozzi Almendras 200g', q:'100g', n:'Desayuno Mié. Buscar granel en Lider.' },
    { p:'Semillas de chía', br:'Nutriseed Chía — bolsa 200g / o granel Lider', q:'200g', n:'Desayuno Jue. Bolsa dura meses.' },
    { p:'Aceite de oliva extra virgen', br:'Borges Aceite Oliva Extra Virgen — botella 500ml', q:'500ml', n:'Todos los almuerzos. Buscar "Borges oliva extra virgen" en Lider. Si tienes, no comprar.' },
  ]},

  { cat:'Condimentos y extras', rows:[
    { p:'Salsa de soya baja en sodio', br:'Kikkoman Salsa de Soya Baja en Sodio — botella pequeña 150ml', q:'1 botella', n:'Aliño libre para salteados y pescados. Buscar "Kikkoman bajo sodio" en Lider.' },
    { p:'Aceite en spray (para sartén nana)', br:'Mazola Aceite Vegetal Spray / o Bertolli Oliva Spray', q:'1 lata', n:'Para que nana engrase la sartén sin exceso. Si ya hay, no comprar.' },
  ]},
];
