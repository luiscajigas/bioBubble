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
    { id: 9, nombre: "MANZANILLA",          categoria: "calmante",    color: "color-yellow",  descripcion: "Jabón de manzanilla con propiedades calmantes y antiinflamatorias. Ideal para pieles sensibles y bebés.",               image: "images/manzanilla.jpg",           keywords: ["calmante", "suave", "sensible", "antiinflamatorio", "bebe"] }
];

// ========================================
// PREGUNTAS DEL CUESTIONARIO
// ========================================
const preguntas = [
    {
        id: 'tipo_piel',
        pregunta: "¿Cuál es tu tipo de piel?",
        opciones: [
            { texto: "💧 Piel seca",       valor: "seca",      keywords: ["seca", "hidratante", "nutritivo"] },
            { texto: "✨ Piel grasa",       valor: "grasa",     keywords: ["grasa", "purificante", "limpieza"] },
            { texto: "🌸 Piel sensible",    valor: "sensible",  keywords: ["sensible", "calmante", "suave"] },
            { texto: "⚖️ Piel mixta",       valor: "mixta",     keywords: ["mixta", "natural", "equilibrio"] }
        ]
    },
    {
        id: 'necesidad',
        pregunta: "¿Qué necesita principalmente tu piel?",
        opciones: [
            { texto: "💦 Hidratación profunda",     valor: "hidratante",  keywords: ["hidratante", "seca", "nutritivo"] },
            { texto: "🧹 Limpieza y purificación",  valor: "limpieza",    keywords: ["purificante", "limpieza", "detox"] },
            { texto: "🌿 Calmar irritaciones",       valor: "calmante",    keywords: ["calmante", "sensible", "antiinflamatorio"] },
            { texto: "🔄 Exfoliación y renovación", valor: "exfoliante",  keywords: ["exfoliante", "circulacion", "estimulante"] }
        ]
    },
    {
        id: 'preferencia',
        pregunta: "¿Qué ingrediente te atrae más?",
        opciones: [
            { texto: "🌱 Ingredientes naturales",   valor: "natural",   keywords: ["natural", "omega", "medicinal"] },
            { texto: "🌸 Flores y aromas suaves",   valor: "aromatico", keywords: ["aromatico", "relajante", "suave"] },
            { texto: "⚡ Activos potentes",          valor: "activo",    keywords: ["purificante", "detox", "estimulante"] },
            { texto: "🍃 Plantas medicinales",       valor: "herbal",    keywords: ["medicinal", "calmante", "antibacterial"] }
        ]
    },
    {
        id: 'sensibilidad',
        pregunta: "¿Tu piel es reactiva o sensible?",
        opciones: [
            { texto: "😌 Sí, muy sensible",    valor: "muy_sensible",  keywords: ["sensible", "calmante", "suave", "bebe"] },
            { texto: "🙂 Algo sensible",        valor: "algo_sensible", keywords: ["suave", "natural", "calmante"] },
            { texto: "💪 No, es resistente",    valor: "resistente",    keywords: ["exfoliante", "purificante", "detox"] }
        ]
    },
    {
        id: 'uso',
        pregunta: "¿Para quién es el jabón?",
        opciones: [
            { texto: "👤 Para mí (adulto)",     valor: "adulto",    keywords: ["normal", "hidratante", "exfoliante"] },
            { texto: "👶 Para un bebé o niño",  valor: "bebe",      keywords: ["bebe", "suave", "calmante", "sensible"] },
            { texto: "👨‍👩‍👧 Para toda la familia", valor: "familia",   keywords: ["suave", "natural", "calmante"] }
        ]
    }
];

// ========================================
// RESPUESTAS AUTOMÁTICAS
// ========================================
const respuestasBot = {
    bienvenida: [
        "¡Hola! 🫧 Soy <strong>Bubble Bot</strong>, tu asistente personal de <strong>BioBubble</strong>.",
        "Estoy aquí para ayudarte a encontrar el jabón artesanal perfecto para tu piel. ¿Cómo te llamas?"
    ],
    comunes: {
        "hola":             ["¡Hola! 👋 ¿En qué puedo ayudarte hoy?"],
        "como estas":       ["¡Estoy genial! 🫧 Listo para encontrar tu jabón perfecto. ¿Y tú cómo estás?"],
        "bien":             ["¡Me alegra mucho! 🌿 ¿Quieres que te ayude a encontrar tu jabón ideal?"],
        "que haces":        ["Ayudo a las personas a encontrar el jabón artesanal perfecto según el tipo de piel y necesidades. ✨"],
        "que jabones tienen":["Tenemos 9 jabones artesanales: Pepino, Avena, Semillas de Chía, Aloe Vera, Carbón Activado, Hierbas Medicinales, Flores Secas, Café y Manzanilla. 🧼 ¿Quieres que te recomiende alguno?"],
        "precio":           ["Nuestros jabones son artesanales y 100% naturales. Para conocer los precios actuales, visita nuestra sección de productos. 🛒"],
        "envio":            ["¡Enviamos a toda la ciudad de Pasto! 🚚 Para más información contáctanos por WhatsApp."],
        "ingredientes":     ["Todos nuestros jabones están hechos con ingredientes 100% naturales: aceites vegetales, extractos naturales, sin químicos agresivos. 🌿"],
        "son naturales":    ["¡Sí! 🌱 Todos nuestros jabones son artesanales, libres de químicos agresivos y conservantes artificiales."],
        "para que sirve":   ["Cada jabón tiene propiedades específicas: hidratación, exfoliación, purificación o calmar la piel. ¿Quieres que te recomiende uno para tu tipo de piel?"],
        "gracias":          ["¡De nada! 😊 Es un placer ayudarte. ¿Necesitas algo más?"],
        "adios":            ["¡Hasta pronto! 🫧 Cuida tu piel con BioBubble 🌿"],
        "chao":             ["¡Chao! 👋 Que tengas un día hermoso ✨"],
        "no":               ["No hay problema. Si cambias de opinión, aquí estaré 😊"],
        "si":               ["¡Perfecto! 🎉"],
        "ayuda":            ["Puedo ayudarte a: encontrar tu jabón ideal, contarte sobre ingredientes, o resolver dudas sobre nuestros productos. ¿Por dónde empezamos?"],
        "acne":             ["Para el acné te recomendaría el Carbón Activado o las Hierbas Medicinales. Ambos tienen propiedades purificantes y antibacterianas. ¿Quieres ver más detalles?"],
        "piel seca":        ["Para piel seca son ideales el Aloe Vera, la Avena o las Semillas de Chía, ricos en nutrientes hidratantes. 💧"],
        "piel grasa":       ["Para piel grasa te recomiendo el Carbón Activado o el Pepino, excelentes para controlar el exceso de grasa y limpiar los poros. ✨"],
        "piel sensible":    ["Para piel sensible la Manzanilla o el Aloe Vera son perfectos, son suaves y calmantes. 🌸"]
    },
    desconocido: [
        "Hmm, no tengo esa información ahora mismo 🤔 Pero puedo ayudarte a encontrar el jabón ideal para tu piel. ¿Te animas?",
        "No estoy seguro de eso, pero soy todo un experto en jabones artesanales 🧼 ¿Quieres que te recomiende uno?",
        "Interesante pregunta 😊 No sé responderla, pero sí puedo ayudarte a cuidar tu piel. ¿Empezamos?"
    ]
};

// ========================================
// ESTADO
// ========================================
let estado = {
    nombre: '',
    paso: 'bienvenida',   // bienvenida | listo | cuestionario
    respuestas: {},
    indicePregunta: 0
};

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

    // PASO 1: Obtener nombre
    if (estado.paso === 'bienvenida') {
        estado.nombre = texto.charAt(0).toUpperCase() + texto.slice(1);
        estado.paso = 'listo';
        mostrarIndicador();
        setTimeout(() => {
            ocultarIndicador();
            agregarMensajeBot(`¡Encantado de conocerte, <strong>${estado.nombre}</strong>! 🌿`);
            setTimeout(() => {
                agregarMensajeBot("Voy a hacerte <strong>5 preguntas rápidas</strong> para encontrar el jabón artesanal perfecto para ti. ¿Empezamos?");
                mostrarRespuestasRapidas([
                    { texto: "¡Sí, empecemos! 🌿",        valor: "iniciar" },
                    { texto: "Ver todos los jabones 🧼",   valor: "ver_productos" },
                    { texto: "Tengo una pregunta 💬",       valor: "pregunta" }
                ]);
            }, 800);
        }, 1200);
        return;
    }

    // Comandos especiales
    if (lower.includes('recomiend') || lower.includes('ayuda') && lower.includes('jabon')) {
        iniciarCuestionario(); return;
    }
    if (lower.includes('ver producto') || lower.includes('todos los jabones')) {
        window.location.href = 'productos.html'; return;
    }
    if (lower.includes('de nuevo') || lower.includes('reiniciar') || lower.includes('otra vez')) {
        iniciarCuestionario(); return;
    }

    // Buscar respuesta en diccionario
    for (let clave in respuestasBot.comunes) {
        if (lower.includes(clave)) {
            mostrarIndicador();
            setTimeout(() => {
                ocultarIndicador();
                const opciones = respuestasBot.comunes[clave];
                agregarMensajeBot(opciones[Math.floor(Math.random() * opciones.length)]);
                if (lower.includes('recomiend') || lower.includes('tipo de piel') || lower.includes('sirve')) {
                    setTimeout(() => {
                        mostrarRespuestasRapidas([
                            { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" },
                            { texto: "Ver productos 🧼",          valor: "ver_productos" }
                        ]);
                    }, 500);
                }
            }, 800);
            return;
        }
    }

    // Respuesta desconocida
    mostrarIndicador();
    setTimeout(() => {
        ocultarIndicador();
        const idx = Math.floor(Math.random() * respuestasBot.desconocido.length);
        agregarMensajeBot(respuestasBot.desconocido[idx]);
        setTimeout(() => {
            mostrarRespuestasRapidas([
                { texto: "Recomiéndame un jabón 🌿", valor: "iniciar" },
                { texto: "Ver productos 🧼",          valor: "ver_productos" }
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
    agregarMensajeBot(`¡Perfecto, ${estado.nombre}! Te haré <strong>5 preguntas rápidas</strong>:`);
    setTimeout(() => hacerPregunta(0), 700);
}

function hacerPregunta(idx) {
    if (idx >= preguntas.length) {
        generarRecomendaciones(); return;
    }
    const pregunta = preguntas[idx];
    agregarMensajeBot(pregunta.pregunta);
    setTimeout(() => mostrarRespuestasRapidas(
        pregunta.opciones.map(o => ({ texto: o.texto, valor: o.valor, esPregunta: true }))
    ), 400);
}

// ========================================
// GENERAR RECOMENDACIONES
// ========================================
function generarRecomendaciones() {
    agregarMensajeBot("Analizando tu perfil de piel... 🔍");
    mostrarIndicador();

    setTimeout(() => {
        ocultarIndicador();

        // Calcular score para cada producto
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

        agregarMensajeBot(`¡Listo, <strong>${estado.nombre}</strong>! 🎯 Basándome en tu tipo de piel, estos son los <strong>3 jabones perfectos</strong> para ti:`);

        setTimeout(() => {
            top3.forEach((item, i) => {
                setTimeout(() => {
                    const porcentaje = maxScore > 0 ? Math.round((item.score / maxScore) * 100) : 75;
                    const matchFinal = Math.min(99, Math.max(72, porcentaje));
                    agregarTarjetaProducto(item.producto, i + 1, matchFinal);
                }, i * 900);
            });

            setTimeout(() => {
                agregarMensajeBot("¿Quieres saber más sobre alguno de estos jabones? 😊");
                mostrarRespuestasRapidas([
                    { texto: "Ver todos los productos 🧼", valor: "ver_productos" },
                    { texto: "Repetir cuestionario 🔄",    valor: "iniciar" },
                    { texto: "Tengo otra pregunta 💬",      valor: "pregunta" }
                ]);
            }, top3.length * 900 + 1000);
        }, 800);
    }, 2000);
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
            agregarMensajeBot("¡Claro! Escribe tu pregunta y con gusto te ayudo 😊");
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
    estado = { nombre: '', paso: 'bienvenida', respuestas: {}, indicePregunta: 0 };
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