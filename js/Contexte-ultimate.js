document.addEventListener('DOMContentLoaded', function() {
    // Bloquer le scroll pendant l'intro
    document.body.classList.add('no-scroll');
    
    // Débloquer après l'intro
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 4000);

    // Audio control
    const audio = document.getElementById('ambient-music');
    const audioToggle = document.getElementById('audio-toggle');
    let isPlaying = false;

    audioToggle.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            audioToggle.innerHTML = '<span class="icon">♪</span>';
            isPlaying = false;
        } else {
            audio.play();
            audioToggle.innerHTML = '<span class="icon">⏸</span>';
            isPlaying = true;
        }
    });

    // Démarrage auto musique après intro
    setTimeout(() => {
        audio.play();
        audioToggle.innerHTML = '<span class="icon">⏸</span>';
        isPlaying = true;
    }, 4500);

    // Canvas particules
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(171, 47, 253, ${Math.random() * 0.5})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Curseur custom
    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 100);
    });

    // Parallax images - DÉSACTIVÉ pour éviter les débordements
    /*
    const parallaxImages = document.querySelectorAll('.parallax-image');
    
    window.addEventListener('scroll', () => {
        parallaxImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.transform = `translateY(${rate}px)`;
            }
        });
    });
    */

    // Scroll reveal avec IntersectionObserver
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Navigation chapitres
    const navDots = document.querySelectorAll('.nav-dot');
    const chapters = document.querySelectorAll('.story-chapter');

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            chapters[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Activation auto des dots au scroll
    window.addEventListener('scroll', () => {
        let current = '';
        chapters.forEach(chapter => {
            const chapterTop = chapter.offsetTop;
            const chapterHeight = chapter.clientHeight;
            if (pageYOffset >= chapterTop - 200) {
                current = chapter.getAttribute('data-chapter');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-chapter') === current) {
                dot.classList.add('active');
            }
        });
    });

    // Typewriter effect
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    const typeWriter = (element, text, speed = 30) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };

    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.typed) {
                const text = entry.target.textContent;
                entry.target.dataset.typed = 'true';
                typeWriter(entry.target, text);
            }
        });
    }, { threshold: 0.5 });

    typewriterElements.forEach(el => typeObserver.observe(el));

    // Changement couleur particules selon section
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollY / docHeight;

        if (scrollPercent < 0.2) {
            changeParticleColor('rgba(100, 200, 100, 0.5)');
        } else if (scrollPercent < 0.4) {
            changeParticleColor('rgba(171, 47, 253, 0.5)');
        } else if (scrollPercent < 0.6) {
            changeParticleColor('rgba(139, 0, 0, 0.5)');
        } else if (scrollPercent < 0.8) {
            changeParticleColor('rgba(255, 69, 0, 0.5)');
        } else {
            changeParticleColor('rgba(171, 47, 253, 0.5)');
        }
    });

    function changeParticleColor(color) {
        particles.forEach(particle => {
            particle.color = color;
        });
    }

    // Hover effects sur highlights
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', () => {
            highlight.style.transform = 'scale(1.1)';
            highlight.style.transition = 'transform 0.3s';
        });
        highlight.addEventListener('mouseleave', () => {
            highlight.style.transform = 'scale(1)';
        });
    });
});