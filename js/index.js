// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.sabor-card, .feature-card');
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

// ========================================
// SCROLL TO TOP FUNCTIONALITY
// ========================================
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--dark-teal);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(44, 95, 111, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll suave al hacer click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbarScrollEffect() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
}

// ========================================
// CLICK HANDLERS PARA BOTONES
// ========================================
function initButtonHandlers() {
    // Botones "Comprar Ahora" de los mochis
    const buyButtons = document.querySelectorAll('.btn-comprar-mochi');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sabor = this.parentElement.querySelector('.sabor-name').textContent;
            alert(`¡Has seleccionado ${sabor}! Pronto podrás añadir al carrito.`);
            // Aquí puedes agregar la lógica para añadir al carrito
        });
    });

    // Botón principal "Comprar Ahora" del header
    const mainBuyBtn = document.querySelector('.btn-comprar');
    if (mainBuyBtn) {
        mainBuyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirigir a página de productos o mostrar catálogo
            window.location.href = 'productos.html';
        });
    }

    // Botón CTA final
    const ctaBtn = document.querySelector('.btn-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            window.location.href = 'productos.html';
        });
    }
}

// ========================================
// LAZY LOADING DE IMÁGENES
// ========================================
function initLazyLoading() {
    const images = document.querySelectorAll('.mochi-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// ANIMACIÓN DE NÚMEROS (PARA FUTURAS ESTADÍSTICAS)
// ========================================
function animateNumbers(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// MOBILE MENU TOGGLE (PREPARADO PARA FUTURO)
// ========================================
function initMobileMenu() {
    // Esta función estará lista para cuando agregues un menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// ========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initSmoothScroll();
    initScrollAnimations();
    createScrollToTop();
    initNavbarScrollEffect();
    initButtonHandlers();
    initLazyLoading();
    initMobileMenu();

    // Mensaje de bienvenida en consola
    console.log('🍡 Bienvenido a Mochimochi - Tu tienda de helados de mochi favorita');
});

// ========================================
// UTILIDADES ADICIONALES
// ========================================

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 1.5rem;
        background-color: var(--dark-teal);
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Exportar funciones para uso global si es necesario
window.mochiApp = {
    showNotification,
    animateNumbers
};