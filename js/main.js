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
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const daysGrid = document.querySelector('.days-grid');
    const currentMonthEl = document.querySelector('.current-month');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');
    const selectedDateEl = document.querySelector('.selected-date');
    const timeSlotsGrid = document.querySelector('.time-slots-grid');
    const selectedTimeEl = document.querySelector('.selected-time');
    const confirmBtn = document.querySelector('.confirm-button');
    
    // Data atual
    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;
    
    // Inicializa o calendário
    function initCalendar() {
        renderCalendar();
        renderTimeSlots();
        
        // Define a data inicial selecionada (hoje)
        const today = new Date();
        const todayCell = document.querySelector(`.day-cell[data-date="${formatDate(today)}"]`);
        if (todayCell) {
            todayCell.classList.add('selected');
            selectedDate = today;
            updateSelectedDateDisplay();
        }
    }
    
    // Renderiza o calendário
    function renderCalendar() {
        // Limpa o grid
        daysGrid.innerHTML = '';
        
        // Define o mês/ano atual no header
        currentMonthEl.textContent = `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;
        
        // Obtém o primeiro dia do mês
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const startingDay = firstDay.getDay();
        
        // Obtém o último dia do mês
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const totalDays = lastDay.getDate();
        
        // Dias do mês anterior (se necessário)
        const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const prevMonthDays = prevMonthLastDay.getDate();
        
        // Dias do próximo mês (se necessário)
        const daysInNextMonth = 42 - (totalDays + startingDay); // 6 semanas (42 dias)
        
        // Adiciona dias do mês anterior
        for (let i = startingDay - 1; i >= 0; i--) {
            const day = prevMonthDays - i;
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
            const dayCell = createDayCell(day, date, true);
            daysGrid.appendChild(dayCell);
        }
        
        // Adiciona dias do mês atual
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dayCell = createDayCell(i, date);
            daysGrid.appendChild(dayCell);
        }
        
        // Adiciona dias do próximo mês
        for (let i = 1; i <= daysInNextMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
            const dayCell = createDayCell(i, date, true);
            daysGrid.appendChild(dayCell);
        }
    }
    
    // Cria uma célula de dia
    function createDayCell(day, date, isDisabled = false) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        if (isDisabled) dayCell.classList.add('disabled');
        dayCell.textContent = day;
        dayCell.dataset.date = formatDate(date);
        
        // Verifica se é um dia passado
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date < today && !isDisabled) {
            dayCell.classList.add('disabled');
        }
        
        // Adiciona evento de clique
        if (!isDisabled && !dayCell.classList.contains('disabled')) {
            dayCell.addEventListener('click', () => {
                // Remove a seleção anterior
                document.querySelectorAll('.day-cell.selected').forEach(cell => {
                    cell.classList.remove('selected');
                });
                
                // Seleciona o novo dia
                dayCell.classList.add('selected');
                selectedDate = date;
                updateSelectedDateDisplay();
                renderTimeSlots();
            });
        }
        
        return dayCell;
    }
    
    // Atualiza a exibição da data selecionada
    function updateSelectedDateDisplay() {
        if (selectedDate) {
            selectedDateEl.textContent = formatDate(selectedDate, true);
            selectedTimeEl.textContent = `${formatDate(selectedDate, true)} às ${selectedTime || '--:--'}`;
        }
    }
    
    // Renderiza os horários disponíveis
    function renderTimeSlots() {
        // Limpa os horários
        timeSlotsGrid.innerHTML = '';
        
        if (!selectedDate) return;
        
        // Horários disponíveis (simulados)
        const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        
        // Cria os botões de horário
        availableTimes.forEach(time => {
            const timeSlot = document.createElement('button');
            timeSlot.classList.add('time-slot');
            timeSlot.textContent = time;
            
            // Verifica se o horário está ocupado (simulação)
            const isBooked = Math.random() < 0.2; // 20% de chance de estar ocupado
            
            if (isBooked) {
                timeSlot.classList.add('booked');
                timeSlot.disabled = true;
            } else {
                timeSlot.addEventListener('click', () => {
                    // Remove a seleção anterior
                    document.querySelectorAll('.time-slot.selected').forEach(slot => {
                        slot.classList.remove('selected');
                    });
                    
                    // Seleciona o novo horário
                    timeSlot.classList.add('selected');
                    selectedTime = time;
                    updateSelectedDateDisplay();
                });
            }
            
            timeSlotsGrid.appendChild(timeSlot);
        });
    }
    
    // Formata a data como string
    function formatDate(date, withYear = false) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        
        return withYear ? `${day}/${month}/${year}` : `${day}/${month}`;
    }
    
    // Obtém o nome do mês
    function getMonthName(monthIndex) {
        const months = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return months[monthIndex];
    }
    
    // Eventos dos botões de navegação
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
// No evento do botão de confirmação, substitua a última parte por:
confirmBtn.addEventListener('click', () => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
        alert('Por favor, preencha todos os campos e selecione uma data e horário.');
        return;
    }
    
    // Formata a mensagem para o WhatsApp
    const message = `Olá! Gostaria de confirmar meu agendamento:\n\n` +
                   `*Nome:* ${name}\n` +
                   `*Data:* ${formatDate(selectedDate, true)}\n` +
                   `*Horário:* ${selectedTime}\n` +
                   `*E-mail:* ${email}\n` +
                   `*WhatsApp:* ${phone}\n\n` +
                   `Por favor, confirme meu agendamento. Obrigado!`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abre o WhatsApp com a mensagem direcionada para o número 37 9959-3941
    window.open(`https://wa.me/553799593941?text=${encodedMessage}`, '_blank');
});
    
    // Inicializa o calendário
    initCalendar();
});