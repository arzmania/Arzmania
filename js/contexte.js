document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('no-scroll');
    
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 4000);

    const audio = document.getElementById('ambient-music');
    const audioToggle = document.getElementById('audio-toggle');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.getElementById('volume-label');
    let isPlaying = false;

    if (audio && audioToggle) {
        audio.volume = 0.2;

        audioToggle.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause();
                audioToggle.innerHTML = '<span class="icon">♪</span>';
                audioToggle.style.transform = 'scale(0.9)';
                setTimeout(() => audioToggle.style.transform = 'scale(1)', 100);
                isPlaying = false;
            } else {
                audio.play().catch(e => console.log('Audio playback failed:', e));
                audioToggle.innerHTML = '<span class="icon">⏸</span>';
                audioToggle.style.transform = 'scale(0.9)';
                setTimeout(() => audioToggle.style.transform = 'scale(1)', 100);
                isPlaying = true;
            }
        });

        if (volumeSlider && volumeLabel) {
            volumeSlider.addEventListener('input', function() {
                const volume = this.value / 100;
                audio.volume = volume;
                volumeLabel.textContent = this.value + '%';
                volumeSlider.style.setProperty('--volume-percent', this.value + '%');
            });

            volumeSlider.style.setProperty('--volume-percent', '20%');
        }

        setTimeout(() => {
            audio.play().catch(e => console.log('Auto-play blocked:', e));
            audioToggle.innerHTML = '<span class="icon">⏸</span>';
            isPlaying = true;
        }, 4500);
    }

    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();

    const particles = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 15));

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
            this.color = `rgba(171, 47, 253, ${Math.random() * 0.5 + 0.2})`;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) {
                this.speedX *= -1;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.speedY *= -1;
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
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

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(171, 47, 253, ${(1 - distance / 120) * 0.2})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
        }, 250);
    });

    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');

    if (cursor && cursorTrail && window.innerWidth > 1024) {
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateTrail() {
            trailX += (mouseX - trailX) * 0.15;
            trailY += (mouseY - trailY) * 0.15;
            
            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';
            
            requestAnimationFrame(animateTrail);
        }
        animateTrail();

        const clickables = document.querySelectorAll('a, button, .nav-dot, .highlight');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = '#fff';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = '#ab2ffd';
            });
        });
    }

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
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

    const navDots = document.querySelectorAll('.nav-dot');
    const chapters = document.querySelectorAll('.story-chapter');

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetChapter = chapters[index];
            if (targetChapter) {
                targetChapter.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });

        dot.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dot.click();
            }
        });
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let currentChapter = '0';
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;

            chapters.forEach(chapter => {
                const chapterTop = chapter.offsetTop;
                const chapterBottom = chapterTop + chapter.clientHeight;
                
                if (scrollPosition >= chapterTop && scrollPosition < chapterBottom) {
                    currentChapter = chapter.getAttribute('data-chapter');
                }
            });

            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-chapter') === currentChapter) {
                    dot.classList.add('active');
                }
            });
        }, 50);
    });

    const typewriterElements = document.querySelectorAll('.typewriter');
    
    const typeWriter = (element, text, speed = 20, delay = 0) => {
        setTimeout(() => {
            let i = 0;
            element.textContent = '';
            element.style.opacity = '1';
            
            const type = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            };
            
            type();
        }, delay);
    };

    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.typed) {
                const text = entry.target.textContent;
                const speed = parseInt(entry.target.dataset.speed) || 20;
                const delay = parseInt(entry.target.dataset.delay) || 0;
                entry.target.dataset.typed = 'true';
                typeWriter(entry.target, text, speed, delay);
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    typewriterElements.forEach(el => {
        el.style.opacity = '0';
        typeObserver.observe(el);
    });

    const colorRanges = [
        { max: 0.16, color: 'rgba(100, 200, 100, 0.4)' },
        { max: 0.32, color: 'rgba(171, 47, 253, 0.4)' },
        { max: 0.48, color: 'rgba(200, 0, 0, 0.4)' },
        { max: 0.64, color: 'rgba(100, 0, 0, 0.5)' },
        { max: 0.80, color: 'rgba(255, 69, 0, 0.5)' },
        { max: 1.00, color: 'rgba(171, 47, 253, 0.5)' }
    ];

    let lastColorIndex = -1;
    
    function updateParticleColors() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.max(0, Math.min(1, scrollY / docHeight));

        let currentColorIndex = -1;
        for (let i = 0; i < colorRanges.length; i++) {
            if (scrollPercent <= colorRanges[i].max) {
                currentColorIndex = i;
                break;
            }
        }

        if (currentColorIndex !== lastColorIndex && currentColorIndex >= 0) {
            lastColorIndex = currentColorIndex;
            const targetColor = colorRanges[currentColorIndex].color;
            changeParticleColor(targetColor);
        }
    }

    function changeParticleColor(colorTemplate) {
        particles.forEach((particle, index) => {
            setTimeout(() => {
                const opacity = Math.random() * 0.3 + 0.2;
                particle.color = colorTemplate.replace(/[\d.]+\)$/, opacity + ')');
            }, index * 10);
        });
    }

    let colorTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(colorTimeout);
        colorTimeout = setTimeout(updateParticleColors, 50);
    });

    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        highlight.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const epicTitle = document.querySelector('.epic-title');
    if (epicTitle) {
        const epicObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const words = entry.target.querySelectorAll('.word');
                    words.forEach((word, index) => {
                        word.style.animationDelay = `${index * 0.2}s`;
                    });
                }
            });
        }, { threshold: 0.5 });

        epicObserver.observe(epicTitle);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

    const images = document.querySelectorAll('.parallax-image');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    images.forEach(img => {
        if (img.complete) return;
        imageObserver.observe(img);
    });

    document.documentElement.style.scrollBehavior = 'smooth';

    console.log('%c✨ Arzmania Story Loaded ✨', 'color: #ab2ffd; font-size: 20px; font-weight: bold;');
    console.log(`Chapters: ${chapters.length}`);
    console.log(`Navigation dots: ${navDots.length}`);
    console.log(`Particles: ${particles.length}`);
});