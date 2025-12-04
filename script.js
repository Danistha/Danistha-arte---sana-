// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensar navbar fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background al hacer scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(253, 251, 248, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(121, 85, 72, 0.1)';
            } else {
                navbar.style.background = 'rgba(253, 251, 248, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});

// Filtros de productos en la tienda
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Filtrar productos
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'todos' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.product-card, .course-card, .value-card, .about-text, .about-image');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Función para agregar al carrito
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Animación del botón
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Simulación de añadir al carrito
            this.textContent = '¡Añadido!';
            this.style.backgroundColor = '#28A745';
            
            setTimeout(() => {
                this.textContent = 'Añadir al carrito';
                this.style.backgroundColor = '#287C6F';
            }, 2000);
            
            // Aquí se integraría con un sistema real de carrito
            console.log(`Producto añadido: ${productName} - ${productPrice}`);
        });
    });
});

// Formulario de inscripción a cursos
document.addEventListener('DOMContentLoaded', function() {
    const courseForm = document.getElementById('courseForm');
    
    if (courseForm) {
        courseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validación básica
            if (!data.studentName || !data.studentEmail || !data.courseInterest) {
                alert('Por favor completa todos los campos requeridos.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.studentEmail)) {
                alert('Por favor ingresa un email válido.');
                return;
            }
            
            // Simulación de envío
            const submitButton = this.querySelector('.btn-enroll');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('¡Gracias por tu interés! Te contactaremos pronto con más información sobre el curso.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
            
            console.log('Datos del formulario:', data);
        });
    }
});

// Botón de contacto para tejedoras
document.addEventListener('DOMContentLoaded', function() {
    const joinButtons = document.querySelectorAll('.btn-join');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phone = '[Tu WhatsApp]';
            const message = encodeURIComponent('Hola! Me interesa unirme como tejedora a Danistha Arte-Sana. ¿Podrían darme más información?');
            const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
});

// Newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Por favor ingresa tu email.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un email válido.');
                return;
            }
            
            // Simulación de suscripción
            const submitButton = this.querySelector('button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Suscribiendo...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('¡Gracias! Te has suscrito exitosamente a nuestro newsletter.');
                emailInput.value = '';
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    });
});

// Carrito de compras (simulado)
let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price,
        id: Date.now()
    });
    cartCount++;
    
    updateCartDisplay();
    
    // Aquí se mostraría una notificación o actualizaría el carrito
    console.log('Carrito actualizado:', cart);
}

function updateCartDisplay() {
    // Crear o actualizar contador del carrito en el navbar
    let cartCounter = document.querySelector('.cart-counter');
    
    if (!cartCounter) {
        cartCounter = document.createElement('span');
        cartCounter.className = 'cart-counter';
        cartCounter.style.cssText = `
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #DC3545;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        `;
        
        // Buscar icono del carrito en el navbar
        let cartIcon = document.querySelector('.nav-cart-icon');
        if (!cartIcon) {
            // Crear icono de carrito si no existe
            cartIcon = document.createElement('div');
            cartIcon.className = 'nav-cart-icon';
            cartIcon.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="m1 1 4 4 14 14-4 4L1 1z"/>
                </svg>
            `;
            cartIcon.style.cssText = `
                position: relative;
                cursor: pointer;
                margin-left: 20px;
            `;
            document.querySelector('.nav-container').appendChild(cartIcon);
            cartIcon.appendChild(cartCounter);
        } else {
            cartIcon.appendChild(cartCounter);
        }
    }
    
    cartCounter.textContent = cartCount;
    cartCounter.style.display = 'flex';
}

// Lazy loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Detectar elementos en viewport para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.product-card, .course-card, .value-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos con opacidad 0 para animación
    const animatedElements = document.querySelectorAll('.product-card, .course-card, .value-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar
});

// Función para modo oscuro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Función para compartir en redes sociales
function shareOnSocial(platform, url, text) {
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
}

// Optimización de rendimiento
document.addEventListener('DOMContentLoaded', function() {
    // Preload de recursos críticos
    const preloadLinks = [
        { href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap', as: 'style' },
        { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', as: 'style' }
    ];
    
    preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        document.head.appendChild(linkElement);
    });
});

// Gestión de errores de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Crear placeholder si la imagen falla
            this.style.display = 'none';
            
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, #6B8EAD 0%, #287C6F 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
                border-radius: 8px;
            `;
            placeholder.textContent = 'Imagen no disponible';
            
            this.parentNode.insertBefore(placeholder, this);
        });
    });
});

// Analytics básico (simulado)
function trackEvent(eventName, eventData) {
    console.log('Analytics Event:', eventName, eventData);
    // Aquí se integraría con Google Analytics, Facebook Pixel, etc.
}

// Rastrear clicks en productos
document.addEventListener('click', function(e) {
    if (e.target.closest('.product-card')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        trackEvent('product_view', { product: productName });
    }
    
    if (e.target.closest('.btn-add-cart')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        trackEvent('add_to_cart', { product: productName, price: productPrice });
    }
});
