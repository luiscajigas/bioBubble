// ========================================
// DATOS DE PRODUCTOS
// ======================================== 
const productos = [
    {
        id: 1,
        nombre: "LYCHEE",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Delicioso helado de lychee envuelto en una suave masa de mochi. Un sabor exótico y refrescante que te transportará al paraíso tropical.",
        icons: "🌸💗🍑",
        image: "images/lychee.png"
    },
    {
        id: 2,
        nombre: "MANZANA VERDE",
        categoria: "frutas",
        color: "color-green",
        descripcion: "Refrescante helado de manzana verde con un toque ácido y dulce, perfectamente equilibrado en una suave capa de mochi.",
        icons: "🍏💚✨",
        image: "images/manzana-verde.png"
    },
    {
        id: 3,
        nombre: "MARACUYÁ",
        categoria: "frutas",
        color: "color-orange",
        descripcion: "Helado tropical de maracuyá con un sabor intenso y refrescante. La combinación perfecta entre dulce y ácido.",
        icons: "🥭🧡🌟",
        image: "images/maracuya.png"
    },
    {
        id: 4,
        nombre: "LIMÓN",
        categoria: "frutas",
        color: "color-vanilla",
        descripcion: "Helado de limón natural con un toque cítrico refrescante. Perfecto para los amantes de los sabores intensos y naturales.",
        icons: "🍋💛✨",
        image: "images/limon.png"
    },
    {
        id: 5,
        nombre: "FRAMBUESA",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Delicado helado de frambuesa con trozos de fruta natural. Un sabor dulce y ligeramente ácido que encanta.",
        icons: "🍓💗🌸",
        image: "images/frambuesa.png"
    },
    {
        id: 6,
        nombre: "FRUTOS ROJOS MARACUYÁ",
        categoria: "frutas",
        color: "color-purple",
        descripcion: "Una explosión de sabores frutales combinando frutos rojos con el toque tropical del maracuyá.",
        icons: "🍒💜🥭",
        image: "images/frutos-rojos.png"
    },
    {
        id: 7,
        nombre: "CAFÉ NATILLA",
        categoria: "especial",
        color: "color-brown",
        descripcion: "Helado de café colombiano premium mezclado con suave natilla. Para los verdaderos amantes del café.",
        icons: "☕🤎✨",
        image: "images/cafe-natilla.png"
    },
    {
        id: 8,
        nombre: "CHOCOLATE MENTA",
        categoria: "chocolate",
        color: "color-mint",
        descripcion: "Refrescante combinación de chocolate premium con menta. Un clásico que nunca falla.",
        icons: "🍫🌿💚",
        image: "images/chocolate-menta.png"
    },
    {
        id: 9,
        nombre: "NUTELLA AVELLANA",
        categoria: "chocolate",
        color: "color-brown",
        descripcion: "Cremoso helado de Nutella con trozos de avellana tostada. Irresistible para los amantes del chocolate.",
        icons: "🍫🌰🤎",
        image: "images/nutella.png"
    },
    {
        id: 10,
        nombre: "AREQUIPE",
        categoria: "dulce",
        color: "color-vanilla",
        descripcion: "Tradicional helado de arequipe colombiano con ese sabor casero que te encanta. Dulce y cremoso.",
        icons: "🍯💛✨",
        image: "images/arequipe.png"
    },
    {
        id: 11,
        nombre: "OREO VAINILLA DE ARÁNDANOS",
        categoria: "especial",
        color: "color-vanilla",
        descripcion: "Helado de vainilla con trozos de galleta Oreo y un toque de arándanos frescos.",
        icons: "🍪💙✨",
        image: "images/oreo-arandanos.png"
    },
    {
        id: 12,
        nombre: "BROWNIE CHOCOLATE",
        categoria: "chocolate",
        color: "color-brown",
        descripcion: "Intenso helado de chocolate con trozos de brownie casero. El sueño de todo amante del chocolate.",
        icons: "🍫🤎🍰",
        image: "images/brownie.png"
    },
    {
        id: 13,
        nombre: "PISTACHOS",
        categoria: "especial",
        color: "color-green",
        descripcion: "Elegante helado de pistacho con frutos secos naturales. Un sabor sofisticado y único.",
        icons: "🌰💚✨",
        image: "images/pistacho.png"
    },
    {
        id: 14,
        nombre: "FRESA CON GALLETA",
        categoria: "frutas",
        color: "color-pink",
        descripcion: "Helado de fresa natural con trozos crujientes de galleta. Dulce, fresco y delicioso.",
        icons: "🍓💗🍪",
        image: "images/fresa-galleta.png"
    },
    {
        id: 15,
        nombre: "LUCUMA DE COCO",
        categoria: "especial",
        color: "color-orange",
        descripcion: "Exótico helado de lúcuma peruana combinado con coco cremoso. Un viaje de sabores únicos.",
        icons: "🥥🧡✨",
        image: "images/lucuma-coco.png"
    }
];

// ========================================
// CARRITO DE COMPRAS
// ======================================== 
let carrito = [];

// ========================================
// RENDERIZAR PRODUCTOS
// ======================================== 
function renderProductos(filtro = 'all') {
    const grid = document.getElementById('productosGrid');
    grid.innerHTML = '';

    const productosFiltrados = filtro === 'all' 
        ? productos 
        : productos.filter(p => p.categoria === filtro);

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-image ${producto.color}"></div>
            <h3 class="producto-name">${producto.nombre}</h3>
            <div class="producto-icons">${producto.icons}</div>
        `;
        
        card.addEventListener('click', () => abrirModal(producto));
        grid.appendChild(card);
    });
}

// ========================================
// SISTEMA DE FILTROS
// ======================================== 
function initFiltros() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            // Agregar active al clickeado
            btn.classList.add('active');
            
            // Filtrar productos
            const filtro = btn.getAttribute('data-filter');
            renderProductos(filtro);
        });
    });
}

// ========================================
// MODAL DE PRODUCTO
// ======================================== 
function abrirModal(producto) {
    const modal = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalIcons = document.getElementById('modalIcons');
    const quantity = document.getElementById('quantity');

    // Establecer contenido del modal
    modalImg.src = producto.image;
    modalImg.alt = producto.nombre;
    modalImg.className = producto.color;
    modalTitle.textContent = producto.nombre;
    modalDescription.textContent = producto.descripcion;
    modalIcons.textContent = producto.icons;
    quantity.value = 1;

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Configurar botón de agregar al carrito
    const addBtn = document.getElementById('addToCartBtn');
    addBtn.onclick = () => agregarAlCarrito(producto, parseInt(quantity.value));
}

function cerrarModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// CONTROLES DE CANTIDAD
// ======================================== 
function initQuantityControls() {
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantity = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', () => {
        let value = parseInt(quantity.value);
        if (value > 1) {
            quantity.value = value - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let value = parseInt(quantity.value);
        quantity.value = value + 1;
    });
}

// ========================================
// FUNCIONES DEL CARRITO
// ======================================== 
function agregarAlCarrito(producto, cantidad) {
    // Buscar si el producto ya está en el carrito
    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({
            ...producto,
            cantidad: cantidad
        });
    }

    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    cerrarModal();
}

function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

function mostrarCarrito() {
    const cartModal = document.getElementById('cartModalOverlay');
    const cartBody = document.getElementById('cartBody');

    if (carrito.length === 0) {
        cartBody.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
    } else {
        cartBody.innerHTML = carrito.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image ${item.color}"></div>
                <div class="cart-item-info">
                    <h3>${item.nombre}</h3>
                    <p class="cart-item-quantity">Cantidad: ${item.cantidad}</p>
                </div>
                <button class="cart-item-remove" onclick="eliminarDelCarrito(${index})">×</button>
            </div>
        `).join('');
    }

    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('totalItems').textContent = totalItems;

    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
    const cartModal = document.getElementById('cartModalOverlay');
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    mostrarCarrito(); // Refrescar la vista del carrito
}

// ========================================
// ENVIAR A WHATSAPP
// ======================================== 
function enviarWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío', 'error');
        return;
    }

    // Número de WhatsApp (cambia este número por el tuyo)
    const numeroWhatsApp = '573502046225'; // Formato: código país + número sin +
    
    // Construir el mensaje
    let mensaje = '¡Hola! Me gustaría hacer el siguiente pedido de Mochis:\n\n';
    
    carrito.forEach(item => {
        mensaje += `🍡 *${item.nombre}*\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   ${item.icons}\n\n`;
    });

    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    mensaje += `\n📦 Total de items: ${totalItems}\n\n`;
    mensaje += '¡Gracias!';

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear el enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
}

// ========================================
// NOTIFICACIONES
// ======================================== 
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = mensaje;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 1.5rem;
        background-color: ${tipo === 'success' ? 'var(--dark-teal)' : '#e74c3c'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ======================================== 
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar productos iniciales
    renderProductos();

    // Inicializar filtros
    initFiltros();

    // Inicializar controles de cantidad
    initQuantityControls();

    // Cerrar modal de producto
    document.getElementById('modalClose').addEventListener('click', cerrarModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') {
            cerrarModal();
        }
    });

    // Abrir carrito
    document.getElementById('cartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        mostrarCarrito();
    });

    // Cerrar modal de carrito
    document.getElementById('cartModalClose').addEventListener('click', cerrarCarrito);
    document.getElementById('cartModalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'cartModalOverlay') {
            cerrarCarrito();
        }
    });

    // Enviar a WhatsApp
    document.getElementById('sendWhatsApp').addEventListener('click', enviarWhatsApp);

    // Mensaje de bienvenida
    console.log('🍡 Página de productos Mochimochi cargada correctamente');
});

// Cerrar modales con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
        cerrarCarrito();
    }
});

// Añadir animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);