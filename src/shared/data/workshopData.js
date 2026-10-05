/**
 * Datos centralizados de Mecánica Integral Espinosa (MIE)
 * Pasaje Florida 920 - La Rioja Capital
 */

export const WORKSHOP_INFO = {
  name: "Mecánica Integral Espinosa",
  shortName: "MIE",
  tagline: "Diagnóstico transparente, evidencia en video y garantía por escrito",
  description: "Taller mecánico especializado en diagnóstico computarizado, mantenimiento preventivo y mecánica general en La Rioja Capital. Atención de confianza con fotos y videos de tus repuestos antes de cambiarlos.",
  
  // Modificar este número con el WhatsApp real del taller
  whatsappNumber: "5493804123456",
  phoneDisplay: "+54 9 380 412-3456",
  email: "contacto@mecanicaespinosa.com",
  
  // Ubicación física y Google Maps
  address: "Pasaje Florida 920",
  city: "La Rioja Capital",
  province: "La Rioja",
  country: "Argentina",
  googleMapsUrl: "https://maps.app.goo.gl/DfeQPR3kEsBV3Hgc9",
  coordinates: {
    lat: -29.4072331,
    lng: -66.8619793
  },
  
  // Calificación
  googleRating: 4.9,
  googleReviewsCount: "120+",
  yearsExperience: "15+",
  vehiclesRepaired: "+3.500",

  // Horarios de atención en La Rioja (Lunes a Viernes 8:30 a 13:00 y 16:30 a 20:30; Sábados 8:30 a 13:00)
  schedules: [
    { day: "Lunes a Viernes", hours: "08:30 a 13:00 hs &bull; 16:30 a 20:30 hs" },
    { day: "Sábados", hours: "08:30 a 13:00 hs" },
    { day: "Domingos", hours: "Cerrado (Guardias de urgencia por WhatsApp)" }
  ]
};

export const SERVICES_DATA = [
  {
    id: "preventivo",
    category: "preventivo",
    title: "Mantenimiento Preventivo",
    subtitle: "Service Integral & Afinación",
    icon: "OilCan",
    description: "Cuidá la vida útil de tu motor y evitá gastos innecesarios con fluidos y filtros de primeras marcas certificadas.",
    items: [
      "Cambio de aceite sintético / semisintético",
      "Filtros de aceite, aire, habitáculo y combustible",
      "Control de 30 puntos críticos de seguridad",
      "Revisión y reposición de fluidos y refrigerante"
    ]
  },
  {
    id: "mecanica-general",
    category: "mecanica",
    title: "Mecánica General & Motor",
    subtitle: "Mecánica Pesada y Liviana",
    icon: "Wrench",
    description: "Reparación integral de componentes motrices con precisión milimétrica, torquímetros calibrados y garantía por escrito.",
    items: [
      "Kit de distribución (correa/cadena y bomba de agua)",
      "Embrague: placa, disco, crapodina y volante",
      "Tapa de cilindros, juntas y rectificación de motor",
      "Circuitos de refrigeración, radiador y termostatos"
    ]
  },
  {
    id: "diagnostico",
    category: "electronica",
    title: "Diagnóstico Computarizado",
    subtitle: "Electrónica Automotriz Multimarca",
    icon: "Cpu",
    description: "Escaneo OBD-II multimarca para identificar fallas en sensores, inyección electrónica, ABS y borrado de Check Engine sin conjeturas.",
    items: [
      "Lectura de códigos de error y reseteo de Check Engine",
      "Prueba y limpieza de inyectores por ultrasonido",
      "Diagnóstico de sonda lambda, caudalímetro y MAF",
      "Calibración de cuerpos mariposa y aceleración electrónica"
    ]
  },
  {
    id: "frenos-suspension",
    category: "mecanica",
    title: "Frenos & Tren Delantero",
    subtitle: "Seguridad Activa y Dirección",
    icon: "Disc",
    description: "Mantené el control total de tu vehículo ante cualquier frenada de emergencia o baches en el camino riojano.",
    items: [
      "Pastillas, discos ventilados y cintas de freno",
      "Líquido de freno DOT 4/5.1 y purga electrónica",
      "Amortiguadores, espirales, cazoletas y bujes",
      "Extremos, rótulas y cremalleras de dirección hidráulica"
    ]
  },
  {
    id: "climatizacion",
    category: "electronica",
    title: "Climatización A/C & Electricidad",
    subtitle: "Confort & Baterías",
    icon: "Snowflake",
    description: "Carga y prueba de fugas de aire acondicionado para soportar el calor de La Rioja, junto al sistema eléctrico completo.",
    items: [
      "Carga de gas ecológico R134a y prueba de vacío",
      "Detección de fugas con contraste ultravioleta",
      "Diagnóstico y reemplazo de baterías con garantía",
      "Reparación de alternadores y motores de arranque"
    ]
  },
  {
    id: "pre-vtv",
    category: "preventivo",
    title: "Revisión Pre-VTV / RTO",
    subtitle: "Aprobación Técnica Garantizada",
    icon: "ClipboardCheck",
    description: "Inspección técnica integral simulada para que tu vehículo supere la Revisión Técnica Obligatoria sin rechazos ni demoras.",
    items: [
      "Eficacia y desequilibrio de frenada en las 4 ruedas",
      "Juegos y holguras en rótulas, extremos y cremallera",
      "Luces reglamentarias, balizas y alineación de faros",
      "Emisión de gases y estado de silenciadores"
    ]
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Carlos Mercado",
    initials: "CM",
    car: "Ford Focus",
    date: "Hace 2 semanas",
    rating: 5,
    text: "Excelente atención de Espinosa y su equipo. Me mandaron videos de los frenos y embrague antes de desarmar y cambiar piezas. Muy honestos con el presupuesto y el auto quedó como nuevo. Es mi taller de cabecera en La Rioja.",
    serviceTag: "Embrague y Frenos completos"
  },
  {
    id: 2,
    name: "Luciana Fernández",
    initials: "LF",
    car: "VW Gol Trend",
    date: "Hace 1 mes",
    rating: 5,
    text: "Tenía una falla intermitente en la luz del motor que en dos talleres anteriores no supieron resolver. En MIE lo conectaron al escáner computarizado y en 20 minutos me dijeron exactamente qué sensor era. Ahorré tiempo y plata.",
    serviceTag: "Diagnóstico OBD-II e Inyección"
  },
  {
    id: 3,
    name: "Marcos Romero",
    initials: "MR",
    car: "Toyota Hilux",
    date: "Hace 3 meses",
    rating: 5,
    text: "Llevé la camioneta para distribución, suspensión y chequeo antes de la RTO. Cumplieron con el horario exacto pactado y la técnica pasó sin ningún problema. Me dieron la factura y la garantía escrita en mano.",
    serviceTag: "Distribución y Tren Delantero"
  }
];

