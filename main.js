// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Funcionalidad para el menú lateral
    const sidebar = document.getElementById('sidebar');
    const toggleMenu = document.getElementById('toggle-menu');
    const closeMenu = document.getElementById('close-menu');

    toggleMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Scroll suave para los enlaces de cursos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicializar Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#3498db'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3498db',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Efecto de tipeo
    const typingTitle = document.getElementById('typing-title');
    const text = "Matías Prestes | Profesor de Informática y Tecnología";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Velocidad de tipeo
        } else {
            // Reiniciar después de 3 segundos
            setTimeout(() => {
                typingTitle.textContent = '';
                index = 0;
                typeText();
            }, 3000);
        }
    }

    typeText();

    // Cambio de tema (claro/oscuro)
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verificar si hay una preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        // Actualizar partículas según el tema
        const particlesColor = (theme === 'dark') ? '#4fa3d1' : '#3498db';
        window.pJSDom[0].pJS.particles.color.value = particlesColor;
        window.pJSDom[0].pJS.particles.line_linked.color = particlesColor;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    });
});