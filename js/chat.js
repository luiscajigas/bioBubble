// ========================================
// DATOS DE PRODUCTOS (Sincronizado con productos.js)
// ========================================
const productos = [
    {
        id: 1,
        nombre: "LYCHEE",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Delicioso helado de lychee envuelto en una suave masa de mochi. Un sabor exótico y refrescante que te transportará al paraíso tropical.",
        icons: "🌸💗🍑",
        image: "images/lychee.png",
        keywords: ["frutal", "exótico", "dulce", "refrescante", "tropical"]
    },
    {
        id: 2,
        nombre: "MANZANA VERDE",
        categoria: "frutas",
        color: "color-green",
        descripcion: "Refrescante helado de manzana verde con un toque ácido y dulce, perfectamente equilibrado en una suave capa de mochi.",
        icons: "🍏💚✨",
        image: "images/manzana-verde.png",
        keywords: ["frutal", "ácido", "refrescante", "dulce", "clásico"]
    },
    {
        id: 3,
        nombre: "MARACUYÁ",
        categoria: "frutas",
        color: "color-orange",
        descripcion: "Helado tropical de maracuyá con un sabor intenso y refrescante. La combinación perfecta entre dulce y ácido.",
        icons: "🥭🧡🌟",
        image: "images/maracuya.png",
        keywords: ["frutal", "ácido", "intenso", "tropical", "exótico"]
    },
    {
        id: 4,
        nombre: "LIMÓN",
        categoria: "frutas",
        color: "color-vanilla",
        descripcion: "Helado de limón natural con un toque cítrico refrescante. Perfecto para los amantes de los sabores intensos y naturales.",
        icons: "🍋💛✨",
        image: "images/limon.png",
        keywords: ["frutal", "ácido", "intenso", "refrescante", "cítrico"]
    },
    {
        id: 5,
        nombre: "FRAMBUESA",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Delicado helado de frambuesa con trozos de fruta natural. Un sabor dulce y ligeramente ácido que encanta.",
        icons: "🍓💗🌸",
        image: "images/frambuesa.png",
        keywords: ["frutal", "dulce", "ácido", "delicado", "natural"]
    },
    {
        id: 6,
        nombre: "FRUTOS ROJOS MARACUYÁ",
        categoria: "frutas",
        color: "color-purple",
        descripcion: "Una explosión de sabores frutales combinando frutos rojos con el toque tropical del maracuyá.",
        icons: "🍒💜🥭",
        image: "images/frutos-rojos.png",
        keywords: ["frutal", "intenso", "exótico", "tropical", "dulce"]
    },
    {
        id: 7,
        nombre: "CAFÉ NATILLA",
        categoria: "especial",
        color: "color-brown",
        descripcion: "Helado de café colombiano premium mezclado con suave natilla. Para los verdaderos amantes del café.",
        icons: "☕🤎✨",
        image: "images/cafe-natilla.png",
        keywords: ["cremoso", "intenso", "café", "sofisticado", "especial"]
    },
    {
        id: 8,
        nombre: "CHOCOLATE MENTA",
        categoria: "chocolate",
        color: "color-mint",
        descripcion: "Refrescante combinación de chocolate premium con menta. Un clásico que nunca falla.",
        icons: "🍫🌿💚",
        image: "images/chocolate-menta.png",
        keywords: ["chocolate", "refrescante", "clásico", "cremoso", "menta"]
    },
    {
        id: 9,
        nombre: "NUTELLA AVELLANA",
        categoria: "chocolate",
        color: "color-brown",
        descripcion: "Cremoso helado de Nutella con trozos de avellana tostada. Irresistible para los amantes del chocolate.",
        icons: "🍫🌰🤎",
        image: "images/nutella.png",
        keywords: ["chocolate", "cremoso", "intenso", "dulce", "especial"]
    },
    {
        id: 10,
        nombre: "AREQUIPE",
        categoria: "dulce",
        color: "color-vanilla",
        descripcion: "Tradicional helado de arequipe colombiano con ese sabor casero que te encanta. Dulce y cremoso.",
        icons: "🍯💛✨",
        image: "images/arequipe.png",
        keywords: ["dulce", "cremoso", "clásico", "tradicional", "suave"]
    },
    {
        id: 11,
        nombre: "OREO VAINILLA DE ARÁNDANOS",
        categoria: "especial",
        color: "color-vanilla",
        descripcion: "Helado de vainilla con trozos de galleta Oreo y un toque de arándanos frescos.",
        icons: "🍪💙✨",
        image: "images/oreo-arandanos.png",
        keywords: ["dulce", "cremoso", "especial", "galleta", "frutal"]
    },
    {
        id: 12,
        nombre: "BROWNIE CHOCOLATE",
        categoria: "chocolate",
        color: "color-brown",
        descripcion: "Intenso helado de chocolate con trozos de brownie casero. El sueño de todo amante del chocolate.",
        icons: "🍫🤎🍰",
        image: "images/brownie.png",
        keywords: ["chocolate", "intenso", "cremoso", "dulce", "especial"]
    },
    {
        id: 13,
        nombre: "PISTACHOS",
        categoria: "especial",
        color: "color-green",
        descripcion: "Elegante helado de pistacho con frutos secos naturales. Un sabor sofisticado y único.",
        icons: "🌰💚✨",
        image: "images/pistacho.png",
        keywords: ["cremoso", "sofisticado", "especial", "suave", "único"]
    },
    {
        id: 14,
        nombre: "FRESA CON GALLETA",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Helado de fresa natural con trozos crujientes de galleta. Dulce, fresco y delicioso.",
        icons: "🍓💗🍪",
        image: "images/fresa-galleta.png",
        keywords: ["frutal", "dulce", "fresco", "clásico", "galleta"]
    },
    {
        id: 15,
        nombre: "LUCUMA DE COCO",
        categoria: "especial",
        color: "color-orange",
        descripcion: "Exótico helado de lúcuma peruana combinado con coco cremoso. Un viaje de sabores únicos.",
        icons: "🥥🧡✨",
        image: "images/lucuma-coco.png",
        keywords: ["exótico", "cremoso", "tropical", "especial", "único"]
    }
];

// ========================================
// ESTADO DEL CHAT
// ========================================
let chatState = {
    userName: '',
    currentStep: 'greeting',
    answers: {},
    messageHistory: []
};

// ========================================
// RESPUESTAS AUTOMÁTICAS DE LA IA
// ========================================
const botResponses = {
    greeting: [
        "¡Hola! 🍡 Soy Mochi Bot, tu asistente personal para encontrar el mochi perfecto.",
        "¿Cómo te llamas?"
    ],
    
    // Respuestas a preguntas comunes
    common: {
        "hola": ["¡Hola! 👋 ¿En qué puedo ayudarte hoy?"],
        "como estas": ["¡Estoy genial! 😊 Listo para ayudarte a encontrar tu mochi perfecto. ¿Y tú cómo estás?"],
        "bien": ["¡Me alegro mucho! 🎉 ¿Quieres que te ayude a encontrar tu mochi ideal?"],
        "cual es tu nombre": ["Soy Mochi Bot 🍡, tu asistente personal de mochis. ¿Y tú, cómo te llamas?"],
        "que eres": ["Soy un asistente virtual especializado en ayudarte a encontrar el mochi perfecto según tus gustos. ✨"],
        "ayuda": ["¡Claro! Puedo ayudarte a encontrar el mochi perfecto haciéndote algunas preguntas sobre tus preferencias. ¿Empezamos?"],
        "si": ["¡Perfecto! Comencemos 🎉"],
        "no": ["No hay problema. Si cambias de opinión, aquí estaré 😊"],
        "gracias": ["¡De nada! 😊 Es un placer ayudarte. ¿Necesitas algo más?"],
        "adios": ["¡Hasta pronto! 👋 Vuelve cuando quieras probar más mochis deliciosos 🍡"],
        "chao": ["¡Chao! 👋 Que tengas un excelente día ✨"],
        "precio": ["Los precios varían según el pack que elijas (6, 12 o 24 mochis). ¿Te gustaría ver nuestros productos?"],
        "envio": ["¡Enviamos a todo el país! 🚚 El costo de envío depende de tu ubicación."],
        "donde estan": ["Puedes encontrarnos en línea. ¡Hacemos envíos a todo el país! 📦"],
    },
    
    unknown: [
        "Hmm, esa es una buena pregunta pero no estoy seguro. ¿Quieres que te ayude a encontrar tu mochi perfecto? 🍡",
        "No tengo esa información ahora, pero puedo ayudarte a elegir el mejor mochi para ti ✨",
        "Interesante pregunta! Aunque no soy experto en eso, sí soy experto en mochis. ¿Te ayudo a encontrar tu sabor ideal?",
        "No estoy seguro de cómo responder a eso 😅 Pero lo que sí sé es ayudarte a encontrar el mochi perfecto. ¿Quieres intentarlo?"
    ]
};

// ========================================
// PREGUNTAS DEL CUESTIONARIO
// ========================================
const questions = [
    {
        id: 'flavor_type',
        question: "¿Qué tipo de sabor prefieres?",
        options: [
            { text: "🍓 Sabores frutales", value: "frutal", keywords: ["frutal", "fresco"] },
            { text: "🍫 Chocolate y cremosos", value: "cremoso", keywords: ["chocolate", "cremoso"] },
            { text: "✨ Algo especial y único", value: "especial", keywords: ["especial", "único"] }
        ]
    },
    {
        id: 'intensity',
        question: "¿Qué intensidad de sabor buscas?",
        options: [
            { text: "💪 Intenso y fuerte", value: "intenso", keywords: ["intenso"] },
            { text: "😊 Suave y delicado", value: "suave", keywords: ["suave", "delicado"] },
            { text: "⚖️ Equilibrado", value: "equilibrado", keywords: ["clásico", "tradicional"] }
        ]
    },
    {
        id: 'sweet_sour',
        question: "¿Dulce o ácido?",
        options: [
            { text: "🍬 Más dulce", value: "dulce", keywords: ["dulce"] },
            { text: "🍋 Más ácido", value: "ácido", keywords: ["ácido", "cítrico"] },
            { text: "🤝 Combinación de ambos", value: "mixto", keywords: ["dulce", "ácido"] }
        ]
    },
    {
        id: 'style',
        question: "¿Qué estilo prefieres?",
        options: [
            { text: "🌴 Tropical y exótico", value: "exotico", keywords: ["exótico", "tropical"] },
            { text: "📖 Clásico y tradicional", value: "clasico", keywords: ["clásico", "tradicional"] },
            { text: "🎨 Innovador y especial", value: "innovador", keywords: ["especial", "único", "sofisticado"] }
        ]
    },
    {
        id: 'texture',
        question: "¿Qué experiencia buscas?",
        options: [
            { text: "❄️ Refrescante", value: "refrescante", keywords: ["refrescante", "fresco"] },
            { text: "🧈 Cremoso", value: "cremoso", keywords: ["cremoso"] },
            { text: "💥 Intenso", value: "intenso", keywords: ["intenso"] }
        ]
    }
];

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initChat();
    
    // Event Listeners
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    console.log('🍡 Chat Mochi Bot iniciado correctamente');
});

// ========================================
// INICIALIZAR CHAT
// ========================================
function initChat() {
    addBotMessage(botResponses.greeting[0]);
    setTimeout(() => {
        addBotMessage(botResponses.greeting[1]);
    }, 1000);
}

// ========================================
// ENVIAR MENSAJE
// ========================================
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Agregar mensaje del usuario
    addUserMessage(message);
    input.value = '';
    
    // Procesar mensaje
    setTimeout(() => {
        processMessage(message);
    }, 800);
}

// ========================================
// PROCESAR MENSAJE
// ========================================
function processMessage(message) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Si no tiene nombre, cualquier mensaje es su nombre
    if (chatState.currentStep === 'greeting') {
        chatState.userName = message;
        chatState.currentStep = 'ready';
        addBotMessage(`¡Encantado de conocerte, ${chatState.userName}! 😊`);
        setTimeout(() => {
            addBotMessage("Voy a hacerte algunas preguntas para encontrar el mochi perfecto para ti. ¿Listo?");
            showQuickReplies([
                { text: "¡Sí, empecemos! 🎉", value: "start" },
                { text: "¿Qué mochis tienen?", value: "ver_productos" }
            ]);
        }, 1000);
        return;
    }
    
    // Comandos especiales
    if (lowerMessage.includes('recomienda') || lowerMessage.includes('recomendacion')) {
        startQuestionnaire();
        return;
    }
    
    if (lowerMessage.includes('ver productos') || lowerMessage.includes('que mochis')) {
        addBotMessage("Tenemos 15 sabores deliciosos de mochi. ¿Quieres que te recomiende algunos según tus gustos?");
        showQuickReplies([
            { text: "Sí, por favor", value: "start" },
            { text: "Ver todos los productos", value: "ver_productos" }
        ]);
        return;
    }
    
    // Buscar respuestas comunes
    for (let key in botResponses.common) {
        if (lowerMessage.includes(key)) {
            const responses = botResponses.common[key];
            addBotMessage(responses[Math.floor(Math.random() * responses.length)]);
            return;
        }
    }
    
    // Respuesta por defecto
    const unknownResponses = botResponses.unknown;
    addBotMessage(unknownResponses[Math.floor(Math.random() * unknownResponses.length)]);
    showQuickReplies([
        { text: "Sí, ayúdame", value: "start" },
        { text: "No, gracias", value: "no" }
    ]);
}

// ========================================
// INICIAR CUESTIONARIO
// ========================================
let currentQuestionIndex = 0;

function startQuestionnaire() {
    currentQuestionIndex = 0;
    chatState.answers = {};
    chatState.currentStep = 'questionnaire';
    addBotMessage(`Perfecto, ${chatState.userName}. Te haré 5 preguntas rápidas:`);
    setTimeout(() => {
        askQuestion(0);
    }, 800);
}

function askQuestion(index) {
    if (index >= questions.length) {
        // Terminó el cuestionario
        generateRecommendations();
        return;
    }
    
    const question = questions[index];
    addBotMessage(question.question);
    
    setTimeout(() => {
        showQuickReplies(question.options);
    }, 500);
}

// ========================================
// GENERAR RECOMENDACIONES
// ========================================
function generateRecommendations() {
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        
        // Calcular puntuación para cada producto
        const scores = productos.map(producto => {
            let score = 0;
            
            // Comparar con las respuestas del usuario
            for (let questionId in chatState.answers) {
                const answer = chatState.answers[questionId];
                const question = questions.find(q => q.id === questionId);
                const selectedOption = question.options.find(o => o.value === answer);
                
                if (selectedOption && selectedOption.keywords) {
                    selectedOption.keywords.forEach(keyword => {
                        if (producto.keywords.includes(keyword)) {
                            score += 10;
                        }
                    });
                }
            }
            
            return { producto, score };
        });
        
        // Ordenar por puntuación
        scores.sort((a, b) => b.score - a.score);
        
        // Obtener top 3
        const top3 = scores.slice(0, 3);
        
        addBotMessage(`¡Listo, ${chatState.userName}! Basándome en tus respuestas, estos son los 3 mochis perfectos para ti:`);
        
        setTimeout(() => {
            top3.forEach((item, index) => {
                setTimeout(() => {
                    addProductRecommendation(item.producto, index + 1);
                }, index * 800);
            });
            
            setTimeout(() => {
                addBotMessage("¿Te gustaría probar alguno de estos? 😊");
                showQuickReplies([
                    { text: "Ver en productos", value: "ver_productos" },
                    { text: "Empezar de nuevo", value: "start" }
                ]);
            }, 3000);
        }, 1000);
    }, 2000);
}

// ========================================
// AGREGAR MENSAJES AL CHAT
// ========================================
function addBotMessage(text) {
    const messagesContainer = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">🍡</div>
        <div class="message-bubble">${text}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function addUserMessage(text) {
    const messagesContainer = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-bubble">${text}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function addProductRecommendation(producto, rank) {
    const messagesContainer = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">🍡</div>
        <div class="message-bubble">
            <strong>#${rank} - ${producto.nombre}</strong>
            <div class="product-recommendation">
                <div class="product-rec-header">
                    <div class="product-rec-image ${producto.color}"></div>
                    <div class="product-rec-info">
                        <h4>${producto.nombre}</h4>
                        <div class="product-rec-icons">${producto.icons}</div>
                    </div>
                </div>
                <p class="product-rec-description">${producto.descripcion}</p>
                <div class="product-rec-buttons">
                    <button class="btn-view-product" onclick="window.location.href='productos.html'">Ver Producto</button>
                    <button class="btn-add-cart-chat" onclick="addToCartFromChat(${producto.id})">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

// ========================================
// QUICK REPLIES
// ========================================
function showQuickReplies(options) {
    const quickRepliesContainer = document.getElementById('quickReplies');
    quickRepliesContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = option.text;
        btn.onclick = () => handleQuickReply(option);
        quickRepliesContainer.appendChild(btn);
    });
}

function handleQuickReply(option) {
    // Agregar como mensaje del usuario
    addUserMessage(option.text);
    
    // Limpiar quick replies
    document.getElementById('quickReplies').innerHTML = '';
    
    // Procesar respuesta
    setTimeout(() => {
        if (option.value === 'start') {
            startQuestionnaire();
        } else if (option.value === 'ver_productos') {
            window.location.href = 'productos.html';
        } else if (chatState.currentStep === 'questionnaire') {
            // Guardar respuesta
            const currentQuestion = questions[currentQuestionIndex];
            chatState.answers[currentQuestion.id] = option.value;
            
            // Siguiente pregunta
            currentQuestionIndex++;
            setTimeout(() => {
                askQuestion(currentQuestionIndex);
            }, 800);
        } else {
            processMessage(option.text);
        }
    }, 500);
}

// ========================================
// UTILIDADES
// ========================================
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🍡</div>
        <div class="message-bubble">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

function scrollToBottom() {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addToCartFromChat(productId) {
    // Esta función se conectará con el carrito de productos.html
    alert(`Producto ${productId} agregado al carrito! (Funcionalidad completa en desarrollo)`);
    addBotMessage("¡Genial! He agregado ese mochi a tu carrito. ¿Quieres seguir explorando?");
}