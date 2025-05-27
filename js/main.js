document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Slider de Depoimentos
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Efeito de digitação no hero (opcional)
    const heroTitle = document.querySelector('.hero h2');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Inicia o efeito de digitação após 1s
    setTimeout(typeWriter, 1000);
    
    // Efeito de parallax
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const lightEffects = document.querySelectorAll('.light-effect');
        
        lightEffects.forEach((effect, index) => {
            const speed = 0.1 * (index + 1);
            effect.style.transform = `translate(${scrollPosition * speed * 0.5}px, ${scrollPosition * speed}px)`;
        });
    });
    
    // Adiciona classe de flicker aleatoriamente em elementos
    function randomFlicker() {
        const elements = document.querySelectorAll('.feature-icon, .cta-button, .logo');
        elements.forEach(element => {
            if (Math.random() > 0.7) {
                element.classList.add('flicker-effect');
                setTimeout(() => {
                    element.classList.remove('flicker-effect');
                }, 3000);
            }
        });
    }
    
    setInterval(randomFlicker, 5000);
    
    // Efeito de hover brilhante
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.7)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 170, 255, 0.3)';
    });
    
    // Animação de entrada suave para seções
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurações iniciais para animação
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});
// Adiciona efeito de digitação ao título
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitle = document.querySelector('.section-title');
    const originalText = sectionTitle.textContent;
    sectionTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            sectionTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Observador de interseção para animar quando a seção for visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                entry.target.querySelectorAll('.about-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('.about-section'));
    
    // Configuração inicial para animação
    document.querySelectorAll('.about-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
    });
});
// Efeito de aparecimento suave
document.addEventListener('DOMContentLoaded', function() {
    const founderSection = document.querySelector('.founder-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.founder-image').style.opacity = '1';
                entry.target.querySelector('.founder-image').style.transform = 'translateX(0)';
                entry.target.querySelector('.founder-info').style.opacity = '1';
                entry.target.querySelector('.founder-info').style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Configuração inicial para animação
    const founderImage = document.querySelector('.founder-image');
    const founderInfo = document.querySelector('.founder-info');
    
    founderImage.style.opacity = '0';
    founderImage.style.transform = 'translateX(-50px)';
    founderImage.style.transition = 'all 0.8s ease 0.3s';
    
    founderInfo.style.opacity = '0';
    founderInfo.style.transform = 'translateX(50px)';
    founderInfo.style.transition = 'all 0.8s ease 0.6s';
    
    observer.observe(founderSection);
});
document.addEventListener('DOMContentLoaded', function() {
    // Animação de aparecimento suave
    const solutionCards = document.querySelectorAll('.solution-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar cada card
    solutionCards.forEach(card => {
        observer.observe(card);
    });
    
    // Efeito de hover dinâmico 3D
    solutionCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) { // Apenas em desktop
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 15;
                const angleY = (centerX - x) / 15;
                
                card.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                card.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
            } else {
                card.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Efeito de clique para mobile
    solutionCards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-item, .reason-item, .include-item, .result-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    const animatedElements = document.querySelectorAll('.benefit-item, .reason-item, .include-item, .result-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
