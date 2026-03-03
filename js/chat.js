// ========================================
// DATOS DE JABONES BIOBUBBLE
// ========================================
const productos = [
    { id: 1, nombre: "PEPINO",              categoria: "hidratante",  color: "color-green",   descripcion: "Jabón refrescante de pepino con propiedades hidratantes y calmantes. Ideal para pieles sensibles y piel grasa.",         image: "images/pepino.jpg",               keywords: ["hidratante", "refrescante", "calmante", "sensible", "grasa"] },
    { id: 2, nombre: "AVENA",               categoria: "exfoliante",  color: "color-vanilla", descripcion: "Jabón exfoliante de avena natural que limpia profundamente mientras nutre tu piel.",                                     image: "images/avena.jpg",                keywords: ["exfoliante", "nutritivo", "suave", "limpieza", "natural"] },
    { id: 3, nombre: "SEMILLAS DE CHÍA",    categoria: "nutritivo",   color: "color-brown",   descripcion: "Jabón con semillas de chía ricas en omega-3. Proporciona nutrición profunda y elasticidad.",                            image: "images/semillas-chia.jpg",        keywords: ["nutritivo", "omega", "elasticidad", "natural", "seca"] },
    { id: 4, nombre: "ALOE VERA",           categoria: "hidratante",  color: "color-green",   descripcion: "Jabón de aloe vera con propiedades hidratantes y cicatrizantes. Ideal para calmar irritaciones.",                       image: "images/aloe-vera.jpg",            keywords: ["hidratante", "cicatrizante", "calmante", "sensible", "seca"] },
    { id: 5, nombre: "CARBÓN ACTIVADO",     categoria: "purificante", color: "color-dark",    descripcion: "Jabón purificante con carbón activado que elimina impurezas profundas. Perfecto para piel grasa y con acné.",           image: "images/carbon-activado.jpg",      keywords: ["purificante", "detox", "limpieza", "grasa", "acne"] },
    { id: 6, nombre: "HIERBAS MEDICINALES", categoria: "terapeutico", color: "color-mint",    descripcion: "Jabón con mezcla de hierbas medicinales que calman y equilibran la piel. Propiedades antibacterianas.",                 image: "images/hierbas-medicinales.jpg",  keywords: ["medicinal", "calmante", "antibacterial", "natural", "mixta"] },
    { id: 7, nombre: "FLORES SECAS",        categoria: "aromatico",   color: "color-purple",  descripcion: "Jabón aromático decorado con flores secas naturales. Suave fragancia que relaja tu ritual de cuidado.",                 image: "images/flores-secas.jpg",         keywords: ["aromatico", "relajante", "suave", "normal", "natural"] },
    { id: 8, nombre: "CAFÉ",                categoria: "exfoliante",  color: "color-brown",   descripcion: "Jabón exfoliante de café que remueve células muertas y estimula la circulación. Reduce la celulitis.",                  image: "images/cafe.jpg",                 keywords: ["exfoliante", "estimulante", "circulacion", "cuerpo", "normal"] },
    { id: 9, nombre: "MANZANILLA",          categoria: "calmante",    color: "color-yellow",  descripcion: "Jabón de manzanilla con propiedades calmantes y antiinflamatorias. Ideal para pieles sensibles y bebés.",               image: "images/manzanilla.jpg",           keywords: ["calmante", "antiinflamatorio", "sensible", "bebe", "natural"] },
    { id: 10, nombre: "NARANJA",            categoria: "aromatico",   color: "color-orange",  descripcion: "Jabón revitalizante de naranja con propiedades antioxidantes y energizantes. Ideal para pieles opacas y mixtas. Ayuda a iluminar y refrescar la piel.",                                         image: "images/naranja.jpg",              keywords: ["aromatico", "revitalizante", "antioxidante", "iluminador", "mixta"] },
    { id: 11, nombre: "EUCALIPTO",          categoria: "purificante", color: "color-green",   descripcion: "Jabón purificante de eucalipto con propiedades refrescantes y antibacteriales. Ideal para piel grasa y con tendencia al acné. Ayuda a limpiar profundamente y equilibrar la piel.",                     image: "images/eucalipto.jpg",            keywords: ["purificante", "refrescante", "antibacterial", "grasa", "acne"] },
    { id: 12, nombre: "CALENDULA",          categoria: "calmante",    color: "color-orange",  descripcion: "Jabón suave de caléndula con propiedades calmantes y regeneradoras. Ideal para piel sensible y delicada. Ayuda a aliviar irritaciones y suavizar la piel.",                                     image: "images/calendula.jpg" ,           keywords: ["calmante", "regenerador", "sensible", "delicada"] },
    { id: 13, nombre: "ACEITE DE COCO",     categoria: "hidratante",  color: "color-vanilla", descripcion: "Jabón hidratante de glicerina vegetal con propiedades humectantes y suavizantes. Ideal para todo tipo de piel. Ayuda a mantener la piel flexible y protegida.",                          image: "images/aceite-coco.jpg" ,          keywords: ["hidratante", "humectante", "suavizante","todo tipo de piel"] },
    { id: 14, nombre: "GLICERINA VEGETAL",  categoria: "nutritivo",   color: "color-green",   descripcion: "Jabón nutritivo de aceite de coco con propiedades hidratantes y limpiadoras. Ideal para piel seca y normal. Ayuda a suavizar y proteger la piel.",                            image:"images/glicerina-vegetal.jpg" ,     keywords : ["nutritivo","hidratante","limpia","normal","seca"] },
    { id: 15, nombre:"ACEITE DE ALMENDRAS" ,categoria:"nutritivo" ,   color: "color-brown" ,  descripcion:"Jabón nutritivo de aceite de almendras con propiedades suavizantes y reparadoras. Ideal para piel seca y sensible. Ayuda a mejorar la elasticidad y dar luminosidad.",                           image:"images/almendras.jpg" ,             keywords : ["nutritivo","suavizante","reparador","sensible","seca"] },
    { id : 16, nombre:"AZUFRE" ,            categoria:"purificante" , color: "color-yellow" , descripcion:"Jabón purificante de azufre con propiedades antibacteriales y reguladoras. Ideal para piel grasa y con acné. Ayuda a controlar el exceso de grasa y reducir imperfecciones.",                                    image:"images/azufre.jpg" ,               keywords : ["purificante","antibacterial","regulador","grasa","acne"] },
    { id: 17, nombre: "NEUTRO",             categoria: "equilibrante",color: "color-white",   descripcion: "Jabón neutro de limpieza suave con fórmula equilibrada y sin fragancias fuertes. Ideal para piel sensible y uso diario. Ayuda a limpiar sin alterar el pH natural de la piel.",              image: "images/neutro.jpg",           keywords: ["calmante", "suave", "sensible", "antiinflamatorio", "bebe"] }
];

// ========================================
// PREGUNTAS DEL CUESTIONARIO
// ========================================
const preguntas = [
    {
        id: 'tipo_piel',
        pregunta: "¿Cuál es tu tipo de piel? 🧬",
        opciones: [
            { texto: "💧 Piel seca",       valor: "seca",      keywords: ["seca", "hidratante", "nutritivo"] },
            { texto: "✨ Piel grasa",       valor: "grasa",     keywords: ["grasa", "purificante", "limpieza"] },
            { texto: "🌸 Piel sensible",    valor: "sensible",  keywords: ["sensible", "calmante", "suave"] },
            { texto: "⚖️ Piel mixta",       valor: "mixta",     keywords: ["mixta", "natural", "equilibrio"] }
        ]
    },
    {
        id: 'necesidad',
        pregunta: "¿Qué necesita principalmente tu piel? Cuéntame todo 💬",
        opciones: [
            { texto: "💦 Hidratación profunda",     valor: "hidratante",  keywords: ["hidratante", "seca", "nutritivo"] },
            { texto: "🧹 Limpieza y purificación",  valor: "limpieza",    keywords: ["purificante", "limpieza", "detox"] },
            { texto: "🌿 Calmar irritaciones",       valor: "calmante",    keywords: ["calmante", "sensible", "antiinflamatorio"] },
            { texto: "🔄 Exfoliación y renovación", valor: "exfoliante",  keywords: ["exfoliante", "circulacion", "estimulante"] }
        ]
    },
    {
        id: 'preferencia',
        pregunta: "¿Qué ingrediente te atrae más? ¡No lo pienses mucho! 😄",
        opciones: [
            { texto: "🌱 Ingredientes naturales",   valor: "natural",   keywords: ["natural", "omega", "medicinal"] },
            { texto: "🌸 Flores y aromas suaves",   valor: "aromatico", keywords: ["aromatico", "relajante", "suave"] },
            { texto: "⚡ Activos potentes",          valor: "activo",    keywords: ["purificante", "detox", "estimulante"] },
            { texto: "🍃 Plantas medicinales",       valor: "herbal",    keywords: ["medicinal", "calmante", "antibacterial"] }
        ]
    },
    {
        id: 'sensibilidad',
        pregunta: "¿Tu piel es reactiva o sensible? Quiero conocerla bien 🤗",
        opciones: [
            { texto: "😌 Sí, muy sensible",    valor: "muy_sensible",  keywords: ["sensible", "calmante", "suave", "bebe"] },
            { texto: "🙂 Algo sensible",        valor: "algo_sensible", keywords: ["suave", "natural", "calmante"] },
            { texto: "💪 No, es resistente",    valor: "resistente",    keywords: ["exfoliante", "purificante", "detox"] }
        ]
    },
   {
    id: 'edad',
    pregunta: "¿En qué rango de edad estás? 🎂",
    opciones: [
        { 
            texto: "🧑 Entre 18 – 24 años", 
            valor: "18_24", 
            keywords: ["acne", "grasa", "purificante", "exfoliante", "regulador"] 
        },
        { 
            texto: "🧑 Entre 25 – 34 años", 
            valor: "25_34", 
            keywords: ["hidratante", "equilibrante", "natural", "antioxidante"] 
        },
        { 
            texto: "🧑 Entre 35 – 44 años", 
            valor: "35_44", 
            keywords: ["nutritivo", "hidratante", "elasticidad", "regenerador"] 
        },
        { 
            texto: "🧑 Entre 45 – 59 años", 
            valor: "45_59", 
            keywords: ["nutritivo", "regenerador", "suavizante", "seca"] 
        },
        { 
            texto: "🧓 60 años o más", 
            valor: "60_plus", 
            keywords: ["suave", "calmante", "hidratante", "sensible"] 
        }
    ]
}
];

// ========================================
// PERSONALIDAD Y RESPUESTAS DEL BOT
// ========================================

// Groserías detectables
const groseriasKeywords = [
    "mierda","hijueputa","hijueputa","puta","culo","carajo","gonorrea","marica",
    "verga","pendejo","idiota","estupido","maldito","joder","coño","perra",
    "bastardo","cabron","cabrón","puto","hp","malparido","hdp"
];

// Respuestas ante groserías (variadas y con humor)
const respuestasGroserias = [
    "¡Ey ey ey! 😅 ¡Aquí hablamos con amor, que somos jabones naturales! Cálmate un poco y cuéntame qué necesitas 🌿",
    "¡Oye! 😮 Eso estuvo fuerte... Yo soy un bot de jabones, no me merece ese vocabulario 🧼 ¿Empezamos de nuevo con buena vibra?",
    "¡Uf! 🫢 Ese lenguaje sí que pica más que el acné. Respira, relájate y dime ¿en qué puedo ayudarte? 💆",
    "Jajaja 😂 Entiendo que algo te frustró, pero aquí en BioBubble somos zona de paz y buena energía 🕊️ ¿Qué necesitas?",
    "¡Ay no! 🙈 Eso sí que no estaba en mi entrenamiento... Bueno, olvidemos eso y hablemos de cuidar tu piel, que es lo importante 🌸",
    "Mmm... ese vocabulario 😬 ¿Sabes qué? El Jabón de Manzanilla calma hasta el humor más bravo. ¿Quieres verlo? 😄"
];

// Respuestas ante elogios / piropos al bot
const respuestasElogios = [
    "¡Aww gracias! 🥹 Me ruborizaría si fuera posible hehe. ¡Sigamos encontrando tu jabón ideal!",
    "¡Qué amable! 😊 Me alegras el día. Ahora con más energía, ¡a encontrar tu jabón perfecto!",
    "💚 ¡Gracias! Tú también pareces muy buena persona. Los jabones naturales son para gente especial como tú 🌿"
];

// Respuestas cuando el usuario parece frustrado
const respuestasFrustrado = [
    "Parece que algo te tiene un poco frustrado/a 😟 No te preocupes, estoy aquí para ayudarte. ¿Qué pasó?",
    "Hey, todo bien 🤗 Si algo no quedó claro, cuéntame y lo resolvemos juntos.",
    "¡No pasa nada! 💪 A veces uno anda ocupado. Dime qué necesitas y te ayudo en un momento."
];

// Respuestas ante preguntas existenciales / filosóficas
const respuestasFilosoficas = [
    "Esa es una pregunta muy profunda para un bot de jabones 🤔✨ Lo que sí sé es que tu piel merece lo mejor.",
    "Hmm... Yo soy Bubble Bot, no soy filósofo 😂 Pero sí soy experto en jabones artesanales, ¿eso cuenta?",
    "¡Buena pregunta! 🌌 Aunque mi universo gira alrededor de los jabones naturales... ¿Te ayudo a encontrar el tuyo?"
];

// Chistes sobre jabones
const chistes = [
    "¿Por qué el jabón nunca está triste? 🧼 ¡Porque siempre está en la ducha, es decir, siempre está *lavado* de problemas! 😄",
    "¿Qué le dijo el jabón a la esponja? 🫧 ¡Te tengo bien calada! jaja 😂",
    "¿Sabes por qué los jabones son tan populares? ¡Porque siempre caen bien! 🧼✨",
    "Un jabón entra a un bar... el bartender le dice: 'Lo siento, aquí no admitimos burbujas.' 🫧😂"
];

// Curiosidades sobre jabones / piel
const curiosidades = [
    "¿Sabías que el jabón artesanal retiene la glicerina natural? Los jabones industriales la eliminan, por eso resecan más la piel 🌿",
    "¿Curiosidad del día? El carbón activado puede absorber hasta 1000 veces su propio peso en toxinas. ¡Imagina lo que hace en tu piel! 🖤",
    "El aloe vera tiene más de 75 nutrientes activos, incluyendo vitaminas A, B, C y E. ¡Es el multivitamínico de tu piel! 🌵",
    "El café usado en jabones estimula la circulación y ayuda a reducir la apariencia de la celulitis. ¡Doble uso para tu café! ☕",
    "La avena tiene avenantramidas, unos compuestos que calman la picazón y la inflamación. ¡La naturaleza sabe mucho! 🌾"
];

// Saludos variados
const saludosVariados = [
    "¡Hola! ¡Qué bueno que llegaste! 👋",
    "¡Hey! ¡Bienvenido/a! 🌿",
    "¡Hola hola! 🫧 Me alegra verte por aquí",
    "¡Ey! ¡Qué pena que tardaste tanto en llegar! 😄 ¡Bienvenido/a!"
];

// Despedidas variadas
const despedidasVariadas = [
    "¡Hasta pronto! 🫧 Que tu piel brille como merece ✨",
    "¡Chao chao! 👋 Recuerda: la piel feliz es piel cuidada 🌿",
    "¡Nos vemos! 🌸 Fue un placer ayudarte hoy",
    "¡Cuídate mucho! 💚 Y cuida tu piel con BioBubble 🧼"
];

// Respuestas a "cómo estás" variadas
const comoEstasVariadas = [
    "¡Súper bien, gracias por preguntar! 🫧 Llevo todo el día ayudando a encontrar jabones perfectos. ¿Y tú cómo andas?",
    "¡Excelente! 🌟 Cada día aprendo más sobre pieles y jabones. ¿En qué puedo ayudarte hoy?",
    "¡Muy bien! 💚 Un poco ocupado porque muchas personas están descubriendo nuestros jabones. ¿Qué necesitas tú?",
    "¡De maravilla! ✨ Aunque confieso que mi jabón favorito es el de Flores Secas 🌸 ¿Tienes ya el tuyo?"
];

// Comentarios motivacionales al iniciar cuestionario
const motivacionCuestionario = [
    "¡Vamos allá! Prometo que en menos de 2 minutos sabrás exactamente qué jabón es para ti 🎯",
    "¡Excelente decisión! Tu piel te lo va a agradecer 🌿 Vamos con las preguntas:",
    "¡Me encanta cuando alguien quiere cuidarse! Aquí vamos 🚀",
    "¡Perfecto! Soy muy bueno en esto, no te vas a arrepentir 😄 Empecemos:"
];

// Reacciones durante el cuestionario
const reaccionesCuestionario = [
    "¡Anotado! 📝", "¡Perfecto! 🌟", "¡Genial! 💚", "¡Muy bien! ✨", 
    "¡Interesante! 🤔", "¡Estupendo! 🎯", "¡Buena elección! 🌿"
];

const respuestasBot = {
    bienvenida: [
        "¡Hola! 🫧 Soy <strong>Bubble Bot</strong>, tu asistente personal de <strong>BioBubble</strong>.",
        "Estoy aquí para ayudarte a encontrar el jabón artesanal perfecto para tu piel. Antes que nada... ¿cómo te llamas? 😊"
    ],
    comunes: {
        "hola":             saludosVariados,
        "buenos dias":      ["¡Buenos días! ☀️ Empezar el día pensando en el cuidado de la piel es lo mejor que puedes hacer 🌿 ¿En qué te ayudo?"],
        "buenas tardes":    ["¡Buenas tardes! 🌤️ Qué bueno que te pasas por aquí. ¿Buscamos tu jabón ideal?"],
        "buenas noches":    ["¡Buenas noches! 🌙 El ritual de la noche es súper importante para la piel. ¿Te ayudo a encontrar el jabón perfecto?"],
        "como estas":       comoEstasVariadas,
        "como te llamas":   ["¡Me llamo Bubble Bot! 🫧 Soy el asistente oficial de BioBubble. Fui creado especialmente para ayudarte a encontrar el jabón perfecto para tu piel. ¿Cómo te llamas tú?"],
        "que eres":         ["Soy <strong>Bubble Bot</strong> 🤖🧼 Un asistente virtual experto en jabones artesanales naturales. ¡Conozco cada ingrediente y beneficio de los jabones de BioBubble al dedillo!"],
        "bien":             ["¡Qué bueno! 🌿 La buena vibra siempre ayuda. ¿Te animas a encontrar tu jabón ideal hoy?"],
        "mal":              ["¡Ay no! 😔 Espero que te mejores pronto. Aunque... un buen baño con jabón artesanal siempre levanta el ánimo 🛁✨ ¿Quieres que te recomiende uno?"],
        "aburrido":         ["¡Pues yo te puedo entretener! 😄 ¿Quieres escuchar un chiste de jabones o mejor te cuento una curiosidad sobre tu piel?", "¡Ven que te cuento algo interesante! 🌟"],
        "chiste":           chistes,
        "curiosidad":       curiosidades,
        "que haces":        ["Ayudo a las personas a encontrar el jabón artesanal perfecto según su tipo de piel y necesidades. ✨ También puedo contarte curiosidades sobre ingredientes, resolver dudas... ¡y hasta contarte chistes de jabones! 😄"],
        "que jabones tienen":["¡Tenemos 9 jabones artesanales increíbles! 🧼✨\n\n🥒 <strong>Pepino</strong> · 🌾 <strong>Avena</strong> · 🌿 <strong>Chía</strong> · 🌵 <strong>Aloe Vera</strong> · ⬛ <strong>Carbón Activado</strong> · 🍃 <strong>Hierbas Medicinales</strong> · 🌸 <strong>Flores Secas</strong> · ☕ <strong>Café</strong> · 🌼 <strong>Manzanilla</strong>\n\nCada uno con ingredientes 100% naturales. ¿Quieres que te recomiende el ideal para tu piel?"],
        "cuantos jabones":  ["¡Tenemos <strong>9 jabones artesanales</strong> en nuestra colección! 🧼 Desde hidratantes hasta purificantes. ¿Te ayudo a encontrar el tuyo?"],
        "precio":           ["Nuestros jabones son artesanales, 100% naturales y hechos con mucho amor en Pasto 💚 Para ver precios actualizados, visita nuestra sección de productos. ¿Te llevo ahí?"],
        "cuanto cuesta":    ["Los precios están en nuestra tienda online 🛒 ¡Son jabones artesanales de muy buena calidad a precios justos! ¿Quieres verlos?"],
        "envio":            ["¡Enviamos a toda la ciudad de Pasto! 🚚 Para más información sobre envíos y pedidos, contáctanos por WhatsApp. ¿Necesitas algo más?"],
        "donde estan":      ["¡Somos de Pasto, Nariño! 🏔️ Fabricamos nuestros jabones artesanales aquí con mucho amor. Para pedidos y envíos, escríbenos por WhatsApp 💚"],
        "whatsapp":         ["Para contactarnos por WhatsApp o conocer más sobre pedidos, visita nuestra página de inicio 📱 ¡Con gusto te atendemos!"],
        "ingredientes":     ["Todos nuestros jabones están hechos con ingredientes 100% naturales 🌿 Aceites vegetales, extractos naturales, sin parabenos, sin sulfatos agresivos, sin conservantes artificiales. ¡Lo que le pones a tu piel importa!"],
        "son naturales":    ["¡Absolutamente! 🌱 Todos nuestros jabones son artesanales, elaborados con ingredientes naturales, sin químicos agresivos, sin conservantes artificiales. Tu piel lo nota desde el primer uso."],
        "para que sirve":   ["Cada jabón tiene superpoderes específicos 💪 Algunos hidratan, otros exfolian, algunos purifican... ¿Quieres que te recomiende uno según tu tipo de piel?"],
        "gracias":          ["¡De nada, con mucho gusto! 😊 Para eso estoy. ¿Necesitas algo más?", "¡Es un placer ayudarte! 💚", "¡Siempre! 🌿 Cualquier pregunta más, aquí estaré."],
        "adios":            despedidasVariadas,
        "chao":             despedidasVariadas,
        "hasta luego":      despedidasVariadas,
        "no":               ["No hay problema 😊 Si cambias de opinión, aquí estaré. ¡Un jabón nunca sobra! 🧼", "Está bien, sin presiones 🌿 Cuando quieras, con gusto te ayudo."],
        "si":               ["¡Perfecto! 🎉 ¿Por dónde empezamos?", "¡Vamos! 💚", "¡Excelente! ✨"],
        "ayuda":            ["¡Aquí estoy! Puedo ayudarte a:\n\n🎯 Encontrar tu jabón ideal (cuestionario personalizado)\n🧼 Contarte sobre ingredientes y beneficios\n💬 Responder preguntas sobre nuestros productos\n😄 ¡Hasta contarte un chiste!\n\n¿Por dónde empezamos?"],
        "acne":             ["Para el acné tengo dos candidatos estrella 🌟\n\n⬛ <strong>Carbón Activado</strong>: desintoxica los poros en profundidad, elimina bacterias y controla el sebo.\n🍃 <strong>Hierbas Medicinales</strong>: propiedades antibacterianas y antiinflamatorias naturales.\n\n¿Quieres que te cuente más sobre alguno?"],
        "piel seca":        ["¡Para piel seca tengo las mejores opciones! 💧\n\n🌵 <strong>Aloe Vera</strong>: hidratación intensa y cicatrizante natural.\n🌿 <strong>Chía</strong>: omega-3 que nutre profundamente.\n🌾 <strong>Avena</strong>: nutre y calma al mismo tiempo.\n\n¿Hacemos el cuestionario para afinar la recomendación?"],
        "piel grasa":       ["¡Para piel grasa tengo dos campeones! ✨\n\n⬛ <strong>Carbón Activado</strong>: absorbe el exceso de grasa y limpia los poros.\n🥒 <strong>Pepino</strong>: refresca y regula el sebo sin resecar.\n\n¿Te hago el cuestionario completo para una recomendación más precisa?"],
        "piel sensible":    ["¡Para piel sensible hay que ir con calma y los mejores ingredientes! 🌸\n\n🌼 <strong>Manzanilla</strong>: el más suave de todos, perfecto incluso para bebés.\n🌵 <strong>Aloe Vera</strong>: calma irritaciones al instante.\n🌾 <strong>Avena</strong>: antiinflamatorio natural.\n\n¿Quieres el cuestionario completo?"],
        "piel mixta":       ["¡La piel mixta necesita equilibrio! ⚖️\n\n🍃 <strong>Hierbas Medicinales</strong>: equilibra las zonas grasas y secas.\n🌿 <strong>Avena</strong>: nutre sin obstruir los poros.\n\n¿Hacemos el cuestionario para darte la mejor recomendación?"],
        "celulitis":        ["☕ ¡El Jabón de Café es tu mejor aliado! La cafeína estimula la circulación y ayuda a reducir la apariencia de la celulitis. ¡Resultados desde las primeras semanas! ¿Quieres saber más?"],
        "bebes":            ["🌼 Para bebés y pieles muy delicadas, el <strong>Jabón de Manzanilla</strong> es perfecto. Es suave, antiinflamatorio y libre de ingredientes agresivos. ¡Mamás y bebés lo aman!"],
        "regalo":           ["¡Qué detalle tan bonito! 🎁 Para regalos, los más populares son:\n\n🌸 <strong>Flores Secas</strong>: hermoso visualmente, aroma relajante.\n🌼 <strong>Manzanilla</strong>: universal, para cualquier tipo de piel.\n🌵 <strong>Aloe Vera</strong>: un clásico que nunca falla.\n\n¿Para quién es el regalo? ¡Te ayudo a elegir mejor!"],
        "eres real":        ["¡Soy tan real como los ingredientes naturales de nuestros jabones! 🤖💚 Soy un bot, sí, pero con mucho amor programado. ¿En qué te puedo ayudar?"],
        "eres humano":      ["¡No! 😄 Soy <strong>Bubble Bot</strong>, un asistente virtual. Pero te prometo que mis recomendaciones son tan buenas como las de un experto humano. ¿Me dejas demostrártelo?"],
        "bonito":           respuestasElogios,
        "lindo":            respuestasElogios,
        "bueno":            respuestasElogios,
        "genial":           ["¡Gracias! 🌟 Hago lo que puedo para ser útil. ¿Seguimos buscando tu jabón perfecto?"],
        "te quiero":        ["¡Aww! 🥹 Yo también te quiero, aunque sea virtualmente. Ahora sí, ¡a encontrar tu jabón ideal! 💚"],
        "cansado":          ["¡Ay! 😴 El agotamiento también afecta la piel. Un buen ritual de baño con jabón natural puede relajarte mucho. ¿Te ayudo a encontrar el indicado?"],
        "estres":           ["El estrés se nota en la piel: granitos, opacidad, resequedad... 😟 Pero tenemos jabones con ingredientes que ayudan a calmar. ¿Quieres una recomendación especial?"],
        "no se":            ["¡Tranquilo/a! Para eso estoy yo 😊 Con el cuestionario te guío paso a paso. ¿Empezamos?"],
        "no entiendo":      ["No hay problema, con calma 🌿 ¿Qué parte no quedó clara? Cuéntame y te explico mejor."],
        "que recomiendas":  ["¡Mi recomendación favorita es hacer el cuestionario! 🎯 Son solo 5 preguntas y te doy los 3 jabones perfectos para tu piel. ¿Lo hacemos?"],
        "tengo":            ["Cuéntame más 👂 ¿Qué problema tiene tu piel? Puede que tenga el jabón perfecto para ti."],
        "problema":         ["¡Cuéntame! 👂 Soy todo oídos. ¿Qué le pasa a tu piel? Seguro que tengo algo que te puede ayudar 🌿"]
    },
    desconocido: [
        "Hmm, eso sí me agarró off guard 🤔 No tengo esa info, pero sí soy experto en jabones artesanales. ¿Te ayudo a encontrar el tuyo?",
        "¡Interesante! 😮 Eso escapa un poco de mis conocimientos jaboneros... Pero puedo ayudarte a cuidar tu piel. ¿Empezamos?",
        "No sé mucho de eso 😅 ¡Pero de jabones naturales sí que sé bastante! ¿Quieres que te recomiende uno?",
        "Mmm, esa pregunta me supera un poco 🌊 Soy más fuerte con temas de piel y jabones. ¿Me dejas ayudarte con eso?",
        "¡Uy! Eso sí que no lo tengo en mi base de datos 🤷 Pero lo que sí tengo son los mejores jabones naturales de Pasto. ¿Vemos cuál es para ti?"
    ]
};

// ========================================
// ESTADO
// ========================================
let estado = {
    nombre: '',
    paso: 'bienvenida',
    respuestas: {},
    indicePregunta: 0,
    groseriasCount: 0,
    ultimaPreguntaIdx: -1
};

// ========================================
// HELPERS
// ========================================
function aleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function contieneGroseria(texto) {
    const lower = texto.toLowerCase();
    return groseriasKeywords.some(g => lower.includes(g));
}

function detectarEmocion(texto) {
    const lower = texto.toLowerCase();
    if (lower.includes('frustrad') || lower.includes('molest') || lower.includes('enojad') || lower.includes('hartad')) return 'frustrado';
    if (lower.includes('triste') || lower.includes('deprimid') || lower.includes('llorand')) return 'triste';
    if (lower.includes('feliz') || lower.includes('contento') || lower.includes('alegre') || lower.includes('emocionad')) return 'feliz';
    return null;
}

function reaccionEmocional(emocion) {
    const mapa = {
        frustrado: "Oye, noto que estás un poco frustrado/a 😟 Respira profundo... y cuéntame qué pasa, ¿en qué te ayudo?",
        triste: "¡Ay! 💙 Lo siento. A veces un buen baño con un jabón especial ayuda a levantar el ánimo. ¿Te recomiendo algo relajante?",
        feliz: "¡Me contagias esa energía! 🌟 ¡Eso es! ¿Ahora sí buscamos tu jabón perfecto?"
    };
    return mapa[emocion];
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initChat();
    renderSidebarProducts();

    document.getElementById('sendBtn').addEventListener('click', enviarMensaje);
    document.getElementById('chatInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') enviarMensaje();
    });
    document.getElementById('clearChatBtn').addEventListener('click', limpiarChat);
});

// ========================================
// INICIAR CHAT
// ========================================
function initChat() {
    agregarMensajeBot(respuestasBot.bienvenida[0]);
    setTimeout(() => agregarMensajeBot(respuestasBot.bienvenida[1]), 900);
}

// ========================================
// ENVIAR MENSAJE
// ========================================
function enviarMensaje() {
    const input = document.getElementById('chatInput');
    const texto = input.value.trim();
    if (!texto) return;

    agregarMensajeUsuario(texto);
    input.value = '';
    document.getElementById('quickReplies').innerHTML = '';

    setTimeout(() => procesarMensaje(texto), 700);
}

// ========================================
// PROCESAR MENSAJE
// ========================================
function procesarMensaje(texto) {
    const lower = texto.toLowerCase().trim();

    // ---- Detección de groserías ----
    if (contieneGroseria(lower)) {
        estado.groseriasCount++;
        mostrarIndicador();
        setTimeout(() => {
            ocultarIndicador();
            if (estado.groseriasCount >= 3) {
                agregarMensajeBot("Bueno bueno... 😅 Ya van varias. Entiendo que algo te frustró, pero sigamos con buena energía ¿sí? 🌿 ¿En qué te ayudo?");
            } else {
                agregarMensajeBot(aleatorio(respuestasGroserias));
            }
            setTimeout(() => {
                mostrarRespuestasRapidas([
                    { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" },
                    { texto: "Ver productos 🧼",          valor: "ver_productos" },
                    { texto: "Tengo una pregunta 💬",     valor: "pregunta" }
                ]);
            }, 600);
        }, 900);
        return;
    }

    // ---- Detección de emoción ----
    const emocion = detectarEmocion(lower);
    if (emocion && estado.paso !== 'cuestionario') {
        const resp = reaccionEmocional(emocion);
        if (resp) {
            mostrarIndicador();
            setTimeout(() => {
                ocultarIndicador();
                agregarMensajeBot(resp);
                setTimeout(() => {
                    mostrarRespuestasRapidas([
                        { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" },
                        { texto: "Ver productos 🧼",          valor: "ver_productos" }
                    ]);
                }, 600);
            }, 900);
            return;
        }
    }

    // ---- PASO 1: Obtener nombre ----
    if (estado.paso === 'bienvenida') {
        estado.nombre = texto.charAt(0).toUpperCase() + texto.slice(1);
        estado.paso = 'listo';
        mostrarIndicador();
        setTimeout(() => {
            ocultarIndicador();
            agregarMensajeBot(`¡Qué nombre tan bonito, <strong>${estado.nombre}</strong>! 🌸 Un gusto conocerte.`);
            setTimeout(() => {
                agregarMensajeBot(`Voy a hacerte <strong>5 preguntas rápidas</strong> para encontrar el jabón artesanal que tu piel está esperando. ¿Listo/a?`);
                mostrarRespuestasRapidas([
                    { texto: "¡Claro, empecemos! 🌿",       valor: "iniciar" },
                    { texto: "Ver todos los jabones 🧼",     valor: "ver_productos" },
                    { texto: "Tengo una pregunta primero 💬", valor: "pregunta" },
                    { texto: "Cuéntame un chiste 😄",         valor: "chiste_cmd" }
                ]);
            }, 900);
        }, 1200);
        return;
    }

    // ---- INTENCIONES: grupos de frases/sinónimos que activan la misma acción ----
    const intenciones = [
        {
            // Cuestionario / recomendación
            check: t => t.includes('recomiend') || t.includes('sugerir') || t.includes('sugier')
                     || t.includes('que jabon me') || t.includes('cual jabon') || t.includes('que jabon usar')
                     || t.includes('que jabon necesito') || t.includes('busco un jabon') || t.includes('necesito un jabon')
                     || t.includes('ayudame a elegir') || t.includes('ayuda a elegir') || t.includes('no se cual')
                     || (t.includes('ayuda') && t.includes('jabon')) || (t.includes('necesito') && t.includes('jabon')),
            accion: () => iniciarCuestionario()
        },
        {
            // Ver catálogo
            check: t => t.includes('ver producto') || t.includes('todos los jabones') || t.includes('catalogo')
                     || t.includes('tienda') || t.includes('ver tienda') || t.includes('mostrar productos'),
            accion: () => { window.location.href = 'productos.html'; }
        },
        {
            // Reiniciar
            check: t => t.includes('de nuevo') || t.includes('reiniciar') || t.includes('otra vez')
                     || t.includes('repetir') || t.includes('volver a empezar') || t.includes('empezar de nuevo'),
            accion: () => iniciarCuestionario()
        },
        {
            // Chiste / broma
            check: t => t.includes('chiste') || t.includes('algo gracioso') || t.includes('hazme reir')
                     || t.includes('broma') || t.includes('cuentame algo gracioso'),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(aleatorio(chistes));
                    setTimeout(() => mostrarRespuestasRapidas([
                        { texto: "¡Otro chiste! 😂",         valor: "chiste_cmd" },
                        { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" }
                    ]), 500);
                }, 700);
            }
        },
        {
            // Curiosidad / dato / algo interesante
            check: t => t.includes('curiosidad') || t.includes('sabias que') || t.includes('dato')
                     || t.includes('algo interesante') || t.includes('cuentame algo') || t.includes('dime algo')
                     || t.includes('que me cuentas') || t.includes('informacion') || t.includes('aprend')
                     || t.includes('interesante'),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(aleatorio(curiosidades));
                    setTimeout(() => mostrarRespuestasRapidas([
                        { texto: "Otra curiosidad 🔍",        valor: "curiosidad_cmd" },
                        { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" }
                    ]), 500);
                }, 800);
            }
        },
        {
            // El usuario quiere hacer UNA pregunta (frase corta)
            check: t => t === 'una pregunta' || t === 'tengo una pregunta' || t === 'quiero preguntar'
                     || t === 'te pregunto algo' || t === 'una duda' || t === 'tengo una duda'
                     || t === 'tengo una consulta' || t.includes('puedo preguntar')
                     || (t.includes('pregunta') && t.length < 25 && !t.includes('que pregunta')),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(`¡Por supuesto${estado.nombre ? ', <strong>' + estado.nombre + '</strong>' : ''}! 😊 Cuéntame, ¿qué quieres saber? Estoy aquí para ayudarte 👂`);
                }, 800);
            }
        },
        {
            // Preguntar la hora / fecha / día
            check: t => t.includes('que dia') || t.includes('qué día') || t.includes('que hora')
                     || t.includes('que fecha') || t.includes('dia es') || t.includes('hoy es'),
            accion: () => {
                const ahora = new Date();
                const dia = ahora.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(`¡Hoy es <strong>${dia}</strong>! 📅 Aunque para la hora exacta mira tu dispositivo 😄 ¿En qué más te ayudo?`);
                }, 700);
            }
        },
        {
            // Quién creó el bot
            check: t => t.includes('quien te hizo') || t.includes('quien te creo') || t.includes('quien te programo')
                     || t.includes('como fuiste creado') || t.includes('quien te diseno'),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(`¡Fui creado por el equipo de <strong>BioBubble</strong> con mucho cariño! 💚 Soy Bubble Bot y mi única misión es ayudarte a encontrar el jabón perfecto para tu piel 🫧`);
                }, 800);
            }
        },
        {
            // Cuántos productos
            check: t => t.includes('cuantos producto') || t.includes('cuántos producto') || t.includes('cuantos jabones') || t.includes('cuántos jabones'),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(`¡Tenemos <strong>${productos.length} jabones artesanales</strong> en nuestra colección! 🧼 Cada uno hecho con ingredientes 100% naturales. ¿Quieres que te recomiende el ideal para ti?`);
                    setTimeout(() => mostrarRespuestasRapidas([
                        { texto: "¡Sí, recomiéndame! 🌿",     valor: "iniciar" },
                        { texto: "Ver todos los productos 🧼", valor: "ver_productos" }
                    ]), 500);
                }, 800);
            }
        },
        {
            // Naturales / orgánicos / veganos / sin químicos
            check: t => t.includes('organic') || t.includes('vegan') || t.includes('sin quimic') || t.includes('sin conserv') || (t.includes('artesanal') && t.includes('son')),
            accion: () => {
                mostrarIndicador();
                setTimeout(() => {
                    ocultarIndicador();
                    agregarMensajeBot(`¡Sí! 🌱 Todos nuestros jabones son:

✅ <strong>Artesanales</strong>: hechos a mano en Pasto
✅ <strong>100% naturales</strong>: sin parabenos ni sulfatos agresivos
✅ <strong>Sin conservantes artificiales</strong>
✅ <strong>Amigables con la piel</strong>

¡Tu piel lo nota desde el primer uso! 💚`);
                }, 800);
            }
        }
    ];

    // Probar cada intención
    for (const intencion of intenciones) {
        if (intencion.check(lower)) {
            intencion.accion();
            return;
        }
    }

    // ---- Buscar en diccionario de claves ----
    for (let clave in respuestasBot.comunes) {
        if (lower.includes(clave)) {
            mostrarIndicador();
            setTimeout(() => {
                ocultarIndicador();
                const opciones = respuestasBot.comunes[clave];
                agregarMensajeBot(aleatorio(opciones));

                const tieneContextoPiel = ['acne','piel seca','piel grasa','piel sensible','piel mixta','celulitis','bebes','regalo','que recomiendas','para que sirve','que jabones'].some(c => lower.includes(c));
                if (tieneContextoPiel || lower.includes('tipo de piel') || lower.includes('sirve')) {
                    setTimeout(() => {
                        mostrarRespuestasRapidas([
                            { texto: "¡Quiero el cuestionario! 🎯", valor: "iniciar" },
                            { texto: "Ver todos los productos 🧼",   valor: "ver_productos" }
                        ]);
                    }, 500);
                }
            }, 800);
            return;
        }
    }

    // ---- Respuesta desconocida ----
    mostrarIndicador();
    setTimeout(() => {
        ocultarIndicador();
        agregarMensajeBot(aleatorio(respuestasBot.desconocido));
        setTimeout(() => {
            mostrarRespuestasRapidas([
                { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" },
                { texto: "Ver productos 🧼",          valor: "ver_productos" },
                { texto: "Cuéntame un chiste 😄",     valor: "chiste_cmd" }
            ]);
        }, 500);
    }, 900);
}

// ========================================
// CUESTIONARIO
// ========================================
function iniciarCuestionario() {
    estado.indicePregunta = 0;
    estado.respuestas = {};
    estado.paso = 'cuestionario';
    const motiv = aleatorio(motivacionCuestionario);
    agregarMensajeBot(`¡Perfecto${estado.nombre ? ', <strong>' + estado.nombre + '</strong>' : ''}! ${motiv}`);
    setTimeout(() => hacerPregunta(0), 800);
}

function hacerPregunta(idx) {
    if (idx >= preguntas.length) {
        generarRecomendaciones(); return;
    }
    const pregunta = preguntas[idx];
    // Reacción de transición si no es la primera
    if (idx > 0) {
        const reaccion = aleatorio(reaccionesCuestionario);
        agregarMensajeBot(reaccion);
        setTimeout(() => {
            agregarMensajeBot(`<strong>Pregunta ${idx + 1} de ${preguntas.length}:</strong> ${pregunta.pregunta}`);
            setTimeout(() => mostrarRespuestasRapidas(
                pregunta.opciones.map(o => ({ texto: o.texto, valor: o.valor, esPregunta: true }))
            ), 400);
        }, 600);
    } else {
        agregarMensajeBot(`<strong>Pregunta ${idx + 1} de ${preguntas.length}:</strong> ${pregunta.pregunta}`);
        setTimeout(() => mostrarRespuestasRapidas(
            pregunta.opciones.map(o => ({ texto: o.texto, valor: o.valor, esPregunta: true }))
        ), 400);
    }
}

// ========================================
// GENERAR RECOMENDACIONES
// ========================================
function generarRecomendaciones() {
    agregarMensajeBot(`${aleatorio(reaccionesCuestionario)} ¡Analizando tu perfil de piel... 🔍`);
    mostrarIndicador();

    setTimeout(() => {
        ocultarIndicador();

        const scores = productos.map(producto => {
            let score = 0;
            for (let id in estado.respuestas) {
                const val = estado.respuestas[id];
                const pregunta = preguntas.find(p => p.id === id);
                const opcion = pregunta.opciones.find(o => o.valor === val);
                if (opcion) {
                    opcion.keywords.forEach(kw => {
                        if (producto.keywords.includes(kw)) score += 10;
                    });
                }
            }
            return { producto, score };
        });

        scores.sort((a, b) => b.score - a.score);
        const top3 = scores.slice(0, 3);
        const maxScore = top3[0].score;

        const frasesFin = [
            `¡Listo, <strong>${estado.nombre || 'amigo/a'}</strong>! 🎯 Después de analizar tu perfil, encontré los <strong>3 jabones hechos para ti</strong>:`,
            `¡Eureka! 🌟 Tu piel me contó todo lo que necesita. Aquí van tus <strong>3 jabones perfectos</strong>:`,
            `¡Ya tengo tu resultado! 💚 Basándome en tus respuestas, estos son los <strong>jabones que tu piel va a amar</strong>:`
        ];

        agregarMensajeBot(aleatorio(frasesFin));

        setTimeout(() => {
            top3.forEach((item, i) => {
                setTimeout(() => {
                    const porcentaje = maxScore > 0 ? Math.round((item.score / maxScore) * 100) : 75;
                    const matchFinal = Math.min(99, Math.max(72, porcentaje));
                    agregarTarjetaProducto(item.producto, i + 1, matchFinal);
                }, i * 900);
            });

            setTimeout(() => {
                const mensajesFin = [
                    "¿Qué te parecen? Si quieres saber más sobre alguno o tienes dudas, ¡pregúntame! 😊",
                    "¿Alguno te llamó la atención? ¡Todos son naturales y artesanales! 🌿",
                    "¡Tu piel lo va a notar desde el primer uso! 💚 ¿Alguna pregunta sobre los jabones?"
                ];
                agregarMensajeBot(aleatorio(mensajesFin));
                mostrarRespuestasRapidas([
                    { texto: "Ver todos los productos 🧼", valor: "ver_productos" },
                    { texto: "Repetir cuestionario 🔄",    valor: "iniciar" },
                    { texto: "Tengo otra pregunta 💬",      valor: "pregunta" },
                    { texto: "Cuéntame un chiste 😄",       valor: "chiste_cmd" }
                ]);
            }, top3.length * 900 + 1000);
        }, 800);
    }, 2200);
}

// ========================================
// MENSAJES AL CHAT
// ========================================
function agregarMensajeBot(html) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message bot';
    div.innerHTML = `
        <div class="message-avatar">🫧</div>
        <div>
            <div class="message-bubble">${html}</div>
            <div class="message-time">${horaActual()}</div>
        </div>
    `;
    container.appendChild(div);
    scrollAbajo();
}

function agregarMensajeUsuario(texto) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message user';
    div.innerHTML = `
        <div class="message-avatar">👤</div>
        <div>
            <div class="message-bubble">${texto}</div>
            <div class="message-time">${horaActual()}</div>
        </div>
    `;
    container.appendChild(div);
    scrollAbajo();
}

function agregarTarjetaProducto(producto, rank, match) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message bot';
    div.innerHTML = `
        <div class="message-avatar">🫧</div>
        <div class="message-bubble" style="max-width:85%">
            <strong>#${rank} — ${producto.nombre}</strong>
            <div class="product-card-chat">
                <div class="match-badge">✓ ${match}% compatible con tu piel</div>
                <div class="product-card-header">
                    <img 
                        src="${producto.image}" 
                        alt="${producto.nombre}" 
                        class="product-card-img"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                    >
                    <div class="product-card-img-fallback ${producto.color}" style="display:none"></div>
                    <div>
                        <div class="product-card-title">${producto.nombre}</div>
                        <div class="product-card-cat">${producto.categoria}</div>
                    </div>
                </div>
                <p class="product-card-desc">${producto.descripcion}</p>
                <div class="product-card-btns">
                    <a href="productos.html" class="btn-chat-ver">Ver en tienda →</a>
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
    scrollAbajo();
}

// ========================================
// RESPUESTAS RÁPIDAS
// ========================================
function mostrarRespuestasRapidas(opciones) {
    const container = document.getElementById('quickReplies');
    container.innerHTML = '';
    opciones.forEach(opcion => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = opcion.texto;
        btn.onclick = () => manejarRespuestaRapida(opcion);
        container.appendChild(btn);
    });
}

function manejarRespuestaRapida(opcion) {
    agregarMensajeUsuario(opcion.texto);
    document.getElementById('quickReplies').innerHTML = '';

    setTimeout(() => {
        if (opcion.valor === 'iniciar') {
            iniciarCuestionario();
        } else if (opcion.valor === 'ver_productos') {
            window.location.href = 'productos.html';
        } else if (opcion.valor === 'pregunta') {
            agregarMensajeBot(`¡Claro, ${estado.nombre ? estado.nombre : 'dime'}! Escribe tu pregunta y con gusto te respondo 😊`);
        } else if (opcion.valor === 'chiste_cmd') {
            mostrarIndicador();
            setTimeout(() => {
                ocultarIndicador();
                agregarMensajeBot(aleatorio(chistes));
                setTimeout(() => {
                    mostrarRespuestasRapidas([
                        { texto: "¡Otro chiste! 😂",              valor: "chiste_cmd" },
                        { texto: "Recomiéndame un jabón 🌿",     valor: "iniciar" }
                    ]);
                }, 500);
            }, 700);
        } else if (opcion.valor === 'curiosidad_cmd') {
            mostrarIndicador();
            setTimeout(() => {
                ocultarIndicador();
                agregarMensajeBot(aleatorio(curiosidades));
                setTimeout(() => {
                    mostrarRespuestasRapidas([
                        { texto: "Otra curiosidad 🔍",           valor: "curiosidad_cmd" },
                        { texto: "Recomiéndame un jabón 🌿",     valor: "iniciar" }
                    ]);
                }, 500);
            }, 700);
        } else if (opcion.esPregunta && estado.paso === 'cuestionario') {
            const preguntaActual = preguntas[estado.indicePregunta];
            estado.respuestas[preguntaActual.id] = opcion.valor;
            estado.indicePregunta++;
            setTimeout(() => hacerPregunta(estado.indicePregunta), 600);
        } else {
            procesarMensaje(opcion.texto);
        }
    }, 400);
}

// ========================================
// INDICADOR DE ESCRITURA
// ========================================
function mostrarIndicador() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message bot';
    div.id = 'typing-indicator';
    div.innerHTML = `
        <div class="message-avatar">🫧</div>
        <div class="message-bubble">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    container.appendChild(div);
    scrollAbajo();
}

function ocultarIndicador() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// ========================================
// LIMPIAR CHAT
// ========================================
function limpiarChat() {
    document.getElementById('chatMessages').innerHTML = '';
    document.getElementById('quickReplies').innerHTML = '';
    estado = { nombre: '', paso: 'bienvenida', respuestas: {}, indicePregunta: 0, groseriasCount: 0 };
    initChat();
}

// ========================================
// SIDEBAR PRODUCTOS
// ========================================
function renderSidebarProducts() {
    const container = document.getElementById('sidebarProducts');
    if (!container) return;
    const destacados = productos.slice(0, 4);
    destacados.forEach(p => {
        const item = document.createElement('a');
        item.href = 'productos.html';
        item.className = 'sidebar-product-item';
        item.innerHTML = `
            <img src="${p.image}" alt="${p.nombre}" class="sidebar-product-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
            <div class="sidebar-product-img-fallback ${p.color}" style="display:none"></div>
            <div>
                <div class="sidebar-product-name">${p.nombre}</div>
                <div class="sidebar-product-cat">${p.categoria}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// ========================================
// UTILIDADES
// ========================================
function scrollAbajo() {
    const container = document.getElementById('chatMessages');
    container.scrollTop = container.scrollHeight;
}

function horaActual() {
    return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}