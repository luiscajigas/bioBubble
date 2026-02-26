// ========================================
// DATOS DE PRODUCTOS
// ========================================
const productos = [
    { id: 1, nombre: "PEPINO",              categoria: "hidratante",  color: "color-green",   descripcion: "Jabón refrescante de pepino con propiedades hidratantes y calmantes. Ideal para pieles sensibles y piel grasa. Ayuda a refrescar y tonificar la piel.",         image: "images/pepino.jpg" },
    { id: 2, nombre: "AVENA",               categoria: "exfoliante",  color: "color-vanilla", descripcion: "Jabón exfoliante de avena natural que limpia profundamente mientras nutre tu piel. Perfecto para exfoliar suavemente y eliminar impurezas.",                     image: "images/avena.jpg" },
    { id: 3, nombre: "SEMILLAS DE CHÍA",    categoria: "nutritivo",   color: "color-brown",   descripcion: "Jabón con semillas de chía ricas en omega-3. Proporciona nutrición profunda y ayuda a mantener la elasticidad de la piel.",                                     image: "images/semillas-chia.jpg" },
    { id: 4, nombre: "ALOE VERA",           categoria: "hidratante",  color: "color-green",   descripcion: "Jabón de aloe vera con propiedades hidratantes y cicatrizantes. Ideal para calmar irritaciones y mantener la piel suave e hidratada.",                          image: "images/aloe-vera.jpg" },
    { id: 5, nombre: "CARBÓN ACTIVADO",     categoria: "purificante", color: "color-dark",    descripcion: "Jabón purificante con carbón activado que elimina impurezas profundas y toxinas. Perfecto para piel grasa y con tendencia al acné.",                            image: "images/carbon-activado.jpg" },
    { id: 6, nombre: "HIERBAS MEDICINALES", categoria: "terapeutico", color: "color-mint",    descripcion: "Jabón con mezcla de hierbas medicinales que calman y equilibran la piel. Propiedades antibacterianas y antiinflamatorias naturales.",                           image: "images/hierbas-medicinales.jpg" },
    { id: 7, nombre: "FLORES SECAS",        categoria: "aromatico",   color: "color-purple",  descripcion: "Jabón aromático decorado con flores secas naturales. Suave fragancia que relaja y embellece tu ritual de cuidado personal.",                                    image: "images/flores-secas.jpg" },
    { id: 8, nombre: "CAFÉ",                categoria: "exfoliante",  color: "color-brown",   descripcion: "Jabón exfoliante de café que remueve células muertas y estimula la circulación. Reduce la celulitis y da firmeza a la piel.",                                   image: "images/cafe.jpg" },
    { id: 9, nombre: "MANZANILLA",          categoria: "calmante",    color: "color-yellow",  descripcion: "Jabón de manzanilla con propiedades calmantes y antiinflamatorias. Ideal para pieles sensibles y delicadas, especialmente piel de bebé.",                      image: "images/manzanilla.jpg" }
];

// ========================================
// CARRITO
// ========================================
let carrito = [];

// ========================================
// RENDERIZAR PRODUCTOS
// ========================================
function renderProductos(filtro = 'all') {
    const grid = document.getElementById('productosGrid');
    grid.innerHTML = '';

    const filtrados = filtro === 'all'
        ? productos
        : productos.filter(p => p.categoria === filtro);

    filtrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <img src="${producto.image}" alt="${producto.nombre}" class="producto-image">
            <h3 class="producto-name">${producto.nombre}</h3>
        `;
        card.addEventListener('click', () => abrirModal(producto));
        grid.appendChild(card);
    });
}

// ========================================
// FILTROS
// ========================================
function initFiltros() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProductos(btn.getAttribute('data-filter'));
        });
    });
}

// ========================================
// MODAL PRODUCTO
// ========================================
function abrirModal(producto) {
    const circle = document.getElementById('modalImgCircle');
    circle.className = 'modal-img-circle';
    circle.innerHTML = `<img src="${producto.image}" alt="${producto.nombre}">`;

    document.getElementById('modalTitle').textContent = producto.nombre;
    document.getElementById('modalDescription').textContent = producto.descripcion;
    document.getElementById('modalIcons').textContent = producto.icons;
    document.getElementById('quantity').value = 1;
    document.getElementById('addToCartBtn').onclick = () =>
        agregarAlCarrito(producto, parseInt(document.getElementById('quantity').value));

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// CONTROLES CANTIDAD
// ========================================
function initQuantityControls() {
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const q = document.getElementById('quantity');
        if (parseInt(q.value) > 1) q.value = parseInt(q.value) - 1;
    });
    document.getElementById('increaseQty').addEventListener('click', () => {
        const q = document.getElementById('quantity');
        q.value = parseInt(q.value) + 1;
    });
}

// ========================================
// CARRITO - FUNCIONES
// ========================================
function agregarAlCarrito(producto, cantidad) {
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito ✓`);
    cerrarModal();
}

function actualizarContadorCarrito() {
    document.getElementById('cartCount').textContent =
        carrito.reduce((s, i) => s + i.cantidad, 0);
}

function mostrarCarrito() {
    const cartBody = document.getElementById('cartBody');

    if (carrito.length === 0) {
        cartBody.innerHTML = '<div class="cart-empty">🛒 Tu carrito está vacío</div>';
    } else {
        cartBody.innerHTML = carrito.map((item, i) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.nombre}" class="cart-item-circle">
                <div class="cart-item-info">
                    <h3>${item.nombre}</h3>
                    <p class="cart-item-quantity">Cantidad: ${item.cantidad}</p>
                </div>
                <button class="cart-item-remove" onclick="eliminarDelCarrito(${i})">×</button>
            </div>
        `).join('');
    }

    document.getElementById('totalItems').textContent =
        carrito.reduce((s, i) => s + i.cantidad, 0);

    document.getElementById('cartModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
    document.getElementById('cartModalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    mostrarCarrito();
}

// ========================================
// WHATSAPP
// ========================================
function enviarWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío', 'error');
        return;
    }

    const numero = '573502046225'; // ← CAMBIA ESTE NÚMERO
    let msg = '¡Hola! Me gustaría hacer el siguiente pedido de Jabones BioBubble:\n\n';
    carrito.forEach(item => {
        msg += `*${item.nombre}*\n   Cantidad: ${item.cantidad}\n\n`;
    });
    msg += `Total: ${carrito.reduce((s, i) => s + i.cantidad, 0)} items\n\n¡Gracias!`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================================
// NOTIFICACIONES
// ========================================
function mostrarNotificacion(msg, tipo = 'success') {
    const n = document.createElement('div');
    n.className = 'notification';
    n.textContent = msg;
    n.style.backgroundColor = tipo === 'success' ? '#2C5F6F' : '#e74c3c';
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => n.remove(), 300);
    }, 3000);
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    initFiltros();
    initQuantityControls();

    document.getElementById('modalClose').addEventListener('click', cerrarModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target.id === 'modalOverlay') cerrarModal();
    });

    document.getElementById('cartBtn').addEventListener('click', e => {
        e.preventDefault();
        mostrarCarrito();
    });

    document.getElementById('cartModalClose').addEventListener('click', cerrarCarrito);
    document.getElementById('cartModalOverlay').addEventListener('click', e => {
        if (e.target.id === 'cartModalOverlay') cerrarCarrito();
    });

    document.getElementById('sendWhatsApp').addEventListener('click', enviarWhatsApp);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { cerrarModal(); cerrarCarrito(); }
});