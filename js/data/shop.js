// Shopping list — specific brands for Lider app search
// Updated: no pasta, no arroz integral, no stevia, no mostaza
// One weekly purchase on Saturday or Sunday

const shopData = [
  { cat:'Proteínas', rows:[
    { p:'Pechuga de pollo sin piel', br:'Agrosuper Pechuga sin Hueso sin Piel — fresco', q:'1 kg', n:'Nana hace batch el martes. Buscar "Agrosuper pechuga" en Lider.' },
    { p:'Pechuga pavo laminada', br:'San Jorge Pechuga de Pavo Ahumada — sobre 200g', q:'200g', n:'Desayuno Lun + complemento almuerzos. Sección fiambrería. Buscar "San Jorge pavo".' },
    { p:'Huevos', br:'Cintazul Mediano Blanco — bandeja x30 (o cualquier bandeja x30)', q:'30 unidades', n:'Nana usa 11 duros + 9 tortilla = 20. Restantes 10 para desayunos de Edwin. Buscar "bandeja x30" en Lider.' },
    { p:'Reineta filetes sin piel (congelada)', br:'Reineta Filetes Sin Piel Lider — bolsa congelada 500g', q:'1 bolsa (500g)', n:'Nana hornea 300g el martes: 150g tupper Mar cena + 150g tupper Jue cena. Restante 200g al freezer crudo. Buscar "Reineta filetes" en Lider congelados.' },
    { p:'Atún al natural (lata)', br:'Buen Mar Atún al Natural en Agua — lata 160g', q:'3 latas', n:'Lun almuerzo (1 lata) + Dom cena (1 lata) + backup. Solo "al natural" o "en agua". Buscar "Buen Mar atún".' },
    { p:'Posta negra (vacuno magro)', br:'Sección carnicería Lider — pedir exactamente 200g en un trozo', q:'200g', n:'Si viene trozo grande (ej. 729g): dividir crudo antes de cocinar, congelar exceso en bolsas separadas. Nana guisa solo 200g y congela. Edwin descongela sábado noche para dom almuerzo.' },
    { p:'Carne molida magra (3–4% MG)', br:'Sección carnicería Lider — pedir "carne molida magra"', q:'300g', n:'Nana la guisa el martes como alternativa al pollo 1–2 veces en la semana.' },
    { p:'Lentejas secas', br:'Carozzi Lentejas — bolsa 500g', q:'1 bolsa', n:'Nana cocina batch grande el martes: cubre Mié almuerzo (día 2) y Sáb almuerzo (día 5, límite 5 días refri). Buscar "Carozzi lentejas".' },
    { p:'Lentejas cocidas (tarro)', br:'Carozzi Lentejas Cocidas — tarro 400g', q:'1 tarro', n:'Lun almuerzo (día 7) — lentejas frescas no duran 7 días, usar tarro. Solo escurrir, sin cocción. Buscar "Carozzi lentejas cocidas".' },
  ]},

  { cat:'Carbohidratos', rows:[
    { p:'Arroz basmati', br:'Tucapel Basmati — bolsa 1 kg', q:'1 bolsa (1 kg)', n:'400g seco = suficiente para toda la semana. Buscar "Tucapel basmati" en Lider.' },
    { p:'Avena cruda tradicional', br:'Quaker Avena Tradicional — caja azul 500g (NO instantánea)', q:'1 caja', n:'IMPORTANTE: solo avena tradicional — la instantánea tiene mayor IG y se deshace en overnight oats. Nana prepara Dom y Mar en la noche (3 tarros). Edwin prepara tarro Sáb el jue en la noche. Buscar "Quaker avena tradicional".' },
    { p:'Pan integral molde', br:'Ideal Artesano Integral — bolsa', q:'1 bolsa', n:'Desayuno Mar, Vie, Dom. Máx 2 rebanadas = 1C. Verificar <155 kcal/porción en etiqueta. Buscar "Ideal Artesano Integral".' },
    { p:'Papa corriente', br:'Sin marca — feria o granel Lider sección verduras', q:'2 unidades medianas', n:'Cenas Jue y Vie — 100g por cena (½ papa mediana = 0.5C). Regla: nunca más de 100g por porción.' },
    { p:'Tortillas de maíz mini Saniito', br:'Tortilla De Maíz Sin Glúten Mini Saniito — paquete 24 und. (240g)', q:'1 paquete (24 und / 240g)', n:'Son MINI (10g c/u). 6 mini = 60g = ½C. Usos: Lun cena + Mié cena + Dom almuerzo + Dom cena = 4 ocasiones × 6 = 24. 1 paquete exacto. Si no hay Saniito normal, buscar "Tortilla Maíz Sin Glúten Mini".' },
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
    { p:'Arándanos', br:"Driscoll's Arándanos — pack 125g (fresco o congelado Lider)", q:'5 packs (625g)', n:'Mejor fruta del plan. Bajo índice glicémico. Llevar en tupper. Mar AM + Lun almuerzo + Mié almuerzo + Jue almuerzo + Sáb PM. Buscar "Driscoll blueberry".' },
    { p:'Kiwi', br:'Sin marca — granel Lider', q:'6 unidades', n:'Colaciones Mar, Jue, Dom.' },
    { p:'Frutillas', br:'Sin marca — pack 750g temporada o congelado Lider', q:'1 pack 750g', n:'Mar almuerzo + Mié PM + Vie AM. Llevar en tupper al trabajo.' },
    { p:'Mandarina', br:'Sin marca — bolsa malla feria o Lider', q:'14 unidades', n:'Fácil de pelar en oficina. Lun PM, Mié AM, Vie almuerzo + Vie PM, Sáb almuerzo, Dom almuerzo. 2 unidades por ocasión.' },
    { p:'Mango', br:'Sin marca — granel Lider (1 unidad semi maduro)', q:'1 unidad', n:'Solo Sáb colación. Comprar semi maduro.' },
  ]},

  { cat:'Lácteos', rows:[
    { p:'Yogurt sin azúcar', br:'Colun Light Sin Azúcar Sabor Frutilla — 120g individual', q:'10 unidades', n:'Esta semana: Colun Light Frutilla (sin azúcar, cumple Lista 5). PRÓXIMA SEMANA: cambiar a Colun Skyr Natural (más proteína). Buscar "Colun light" en Lider.' },
    { p:'Leche descremada tetrapak 200ml', br:'Soprole Descremada Tetrapak 200ml individual', q:'7 cajas mínimo', n:'⚠️ CRÍTICO — faltó esta semana. Sin esto: avena va con agua y no hay lácteo en colación tarde. 1 caja/día (colación PM + overnight oats). Buscar "Soprole tetrapak 200ml".' },
  ]},

  { cat:'Aceites y Grasas', rows:[
    { p:'Palta', br:'Sin marca — malla Hass o granel Lider', q:'5 unidades medianas', n:'Plan usa ~300g/semana (50g × 6 días). Si viene en malla (ej. 748g = 7 paltas pequeñas), usar toda la semana o aumentar porción a 70g. 3 maduras + 2 verdes para que maduren.' },
    { p:'Nueces mariposa', br:'Florida Nueces Mariposa — bolsa 200g', q:'200g', n:'Cenas + desayunos. Buscar "Florida nueces mariposa" en Lider. Bolsa dura 2–3 semanas.' },
    { p:'Almendras naturales', br:'Florida Almendras Naturales — bolsa 200g', q:'100g', n:'Desayuno Mié. Buscar "Florida almendras" en Lider.' },
    { p:'Semillas de chía', br:'Nutriseed Chía — bolsa 200g / o granel Lider', q:'200g', n:'Desayuno Jue. Bolsa dura meses.' },
    { p:'Aceite de oliva extra virgen', br:'Borges Aceite Oliva Extra Virgen — botella 500ml', q:'500ml', n:'Todos los almuerzos. Buscar "Borges oliva extra virgen" en Lider. Si tienes, no comprar.' },
  ]},

  { cat:'Condimentos y extras', rows:[
    { p:'Salsa de soya baja en sodio', br:'Kikkoman Salsa de Soya Baja en Sodio — botella pequeña 150ml', q:'1 botella', n:'Aliño libre para salteados y pescados. Buscar "Kikkoman bajo sodio" en Lider.' },
    { p:'Aceite en spray (para sartén nana)', br:'Mazola Aceite Vegetal Spray / o Bertolli Oliva Spray', q:'1 lata', n:'Para que nana engrase la sartén sin exceso. Si ya hay, no comprar.' },
  ]},
];
