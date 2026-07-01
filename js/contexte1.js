document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('ambient-music');
    const audioToggle = document.getElementById('audio-toggle');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    let isPlaying = false;

    audioToggle.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            isPlaying = true;
        }
    });

    // Démarrage automatique de la musique,commentez = démarrage non-auto

    setTimeout(() => {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        isPlaying = true;
     }, 500);


    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);


    const sections = document.querySelectorAll(
        '.section-image-center, .section-text, .section-image-right, .section-image-left, .section-title-center, .section-finale'
    );
    
    sections.forEach((section, index) => {
        section.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(section);
    });
});