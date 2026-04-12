// Nana cooking guide — batch cooking session every Tuesday
// She cooks lunch for the whole week + tortilla de huevos
// Venezuelan living in Chile — instructions in simple Spanish

const nanaData = {
  intro: {
    title: 'Guía de cocina semanal',
    sub: 'Todo se prepara el martes en una sola sesión',
    note: 'Gracias por cocinar para la semana. Todo lo que hay abajo es lo que necesita Edwin según su plan nutricional. La idea es cocinar todo el martes y guardar en el refri. Así él puede servirse solo durante la semana.',
  },

  sections: [
    {
      title: 'Pollo mechado',
      icon: '🍗',
      badge: 'Para almuerzos Lun–Vie (5 porciones)',
      qty: '700g de pechuga de pollo sin piel, sin hueso',
      steps: [
        'Hervir las pechugas en agua con 1 diente de ajo, 1 ramita de cilantro, sal y comino al gusto.',
        'Cocinar 20–25 minutos a fuego medio hasta que estén bien cocidas. Sacar y dejar enfriar.',
        'Desmechar el pollo con dos tenedores.',
        'En sartén grande con un chorrito de aceite: sofreír ½ cebolla, ½ pimentón rojo y ½ pimentón verde en cubitos hasta que ablanden.',
        'Agregar el pollo desmechado. Condimentar con ají de color, comino y sal. Revolver bien.',
        'Opcional: agregar 2 cucharadas de salsa de soya baja en sodio para más sabor.',
        'Cocinar 5 minutos más. Apagar y dejar enfriar antes de guardar.',
      ],
      storage: 'Dividir en 5 porciones de 150g en tuppers individuales. Guardar en el refri. Dura hasta 4 días.',
      tip: 'Si un día queda poca cantidad, la carne molida guisada (ver más abajo) puede reemplazar el pollo.',
    },
    {
      title: 'Arroz basmati',
      icon: '🍚',
      badge: 'Para todos los almuerzos y algunas cenas',
      qty: '400g de arroz basmati seco (rinde aprox. 1 kg cocido)',
      steps: [
        'Lavar el arroz con agua fría hasta que el agua salga clara.',
        'Preparar con el sazonador de arroz que acostumbras usar — está perfecto así.',
        'Cocinar según las instrucciones del paquete. El basmati queda más suelto que el arroz blanco normal, es normal.',
        'Dejar enfriar completamente antes de guardar.',
      ],
      storage: 'Guardar todo junto en un recipiente grande tapado en el refri. Edwin sirve su porción con una cuchara (¾ taza = 1 porción). Dura 4–5 días.',
      tip: 'Edwin necesita ¾ taza (120g cocido) en el almuerzo. Para la cena usa un poco menos. Él mismo se sirve.',
    },
    {
      title: 'Tortilla de huevos',
      icon: '🍳',
      badge: 'Cenas martes a viernes (4 porciones)',
      qty: '10–12 huevos, 2 zapallos italianos, 2 tazas de espinaca, ½ cebolla, 1 pimentón rojo',
      steps: [
        'Cortar en cubitos pequeños: zapallo italiano, cebolla y pimentón.',
        'Calentar sartén grande con aceite spray. Saltear las verduras a fuego medio hasta que ablanden (5–7 minutos).',
        'Agregar la espinaca. Revolver hasta que se marchite (2–3 minutos).',
        'Batir los huevos con sal y pimienta en un tazón. Verter la mezcla sobre las verduras en la sartén.',
        'Bajar el fuego. Poner tapa y cocinar 10–12 minutos hasta que cuaje bien por arriba.',
        'No hay que darle vuelta. Si el centro queda crudo, meter la sartén al horno 2–3 minutos.',
        'Dejar enfriar y cortar en 4 partes iguales como una pizza.',
      ],
      storage: 'Las 4 porciones en el refri tapadas. Edwin saca 2 porciones por cena. Dura 3–4 días.',
      tip: 'Si los 4 días no alcanza, preparar otra tortilla el jueves con los huevos que quedan.',
    },
    {
      title: 'Carne molida guisada',
      icon: '🥩',
      badge: 'Opcional — reemplaza pollo 1–2 veces por semana',
      qty: '200–250g de carne molida (pedir 3–4% materia grasa)',
      steps: [
        'En sartén, dorar la carne molida a fuego alto revolviendo hasta que cambie de color completamente.',
        'Agregar ½ cebolla y ½ pimentón en cubitos. Condimentar con ají de color, comino y sal.',
        'Cocinar 10 minutos a fuego medio. La carne tiene su propia grasa, no agregar aceite extra.',
        'Guardar en tupper.',
      ],
      storage: 'En el refri, dura 3 días. Usar máximo 1–2 veces en la semana (no todos los días).',
      tip: '150g de carne molida en el almuerzo = 3 porciones de proteína. Está perfecto con el arroz.',
    },
  ],

  extras: [
    {
      title: 'Verduras del almuerzo',
      icon: '🥦',
      note: 'Brócoli y zanahoria: cocinar al vapor o saltear con aceite spray y sal. Guardar aparte en un recipiente. Edwin las agrega solo al plato. No mezclar con el pollo.',
    },
    {
      title: 'Avena remojada en leche (noche anterior)',
      icon: '🌾',
      note: 'Los lunes y miércoles el desayuno es avena remojada en leche fría. La noche anterior (domingo y martes), preparar 2 tarros o vasos: poner 40g de avena Quaker cruda + 150ml de leche descremada en cada uno. Tapar y meter al refri. No necesita cocción, a la mañana siguiente la avena ya está blanda y lista para comer.',
    },
    {
      title: 'Armado del tupper para el almuerzo',
      icon: '📦',
      note: 'Para los días de oficina (Lun, Mar, Mié): dejar el tupper armado la noche anterior en el refri. Tupper = 150g de pollo + ¾ taza arroz + verdura. Sin aceite (Edwin lo lleva en un gotero). Así solo agarra el tupper y sale.',
    },
    {
      title: 'Lo que NO prepara la nana',
      icon: '📋',
      note: 'El desayuno, las colaciones (frutas y yogurt) y los fines de semana Edwin se arregla solo. La nana solo hace almuerzos de semana (Lun–Vie) y la tortilla para las cenas. Eso es todo.',
    },
  ],
};
