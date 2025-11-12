const racesData = {
    humain: {
        name: "Humain(e)",
        image: "../img/races/humain.jpg",
        description: ""
    },
    elfel: {
        name: "Elfe Lumineux",
        image: "../img/races/elfes_lumineux.jpg",
        description: ""
    },
    elfeo: {
        name: "Elfes Obscurs",
        image: "../img/races/elfes_obscurs.png",
        description: ""
    },
    fee: {
        name: "Fée",
        image: "../img/races/fée.jpg",
        description: ""
    },
    magmarien: {
        name: "Magmarien",
        image: "../img/races/magmarien.jpg",
        description: ""
    },
    ondin: {
        name: "Ondin",
        image: "../img/races/ondin.jpg",
        description: ""
    },
    golem: {
        name: "Golem de Glace",
        image: "../img/races/golem de glace.png",
        description: ""
    },
    stryx: {
        name: "Stryx",
        image: "../img/races/stryx.jpg",
        description: ""
    },
    nazgul: {
        name: "Nazgul",
        image: "../img/races/nazgul.jpg",
        description: ""
    },
    démon: {
        name: "Démon",
        image: "../img/races/démon.png",
        description: ""
    },
    arasilien: {
        name: "Arasilien",
        image: "../img/races/arasilien.png",
        description: ""
    },
    hybride: {
        name: "Hybrides & Espèces ésotériques",
        image: "../img/races/hybrides & autres.png",
        description: ""
    }
};

const modal = document.getElementById('race-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal-content');
const transitionOverlay = document.getElementById('transition-overlay');

const raceEffects = {
    humain: null,
    elfel: 'effect-elfe',
    elfeo: 'effect-obscur',
    fee: 'effect-fee',
    magmarien: 'effect-magmarien',
    ondin: 'effect-ondin',
    golem: 'effect-golem',
    stryx: 'effect-stryx',
    nazgul: 'effect-nazgul',
    démon: 'effect-demon',
    arasilien: null,
    hybride: null
};

const transitionClasses = {
    humain: 'transition-humain',
    elfel: 'transition-elfel',
    elfeo: 'transition-elfeo',
    fee: 'transition-fee',
    magmarien: 'transition-magmarien',
    ondin: 'transition-ondin',
    golem: 'transition-golem',
    stryx: 'transition-stryx',
    nazgul: 'transition-nazgul',
    démon: 'transition-demon',
    arasilien: 'transition-humain',
    hybride: 'transition-humain'
};

function createParticles(effectClass, count) {
    const particles = [];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particles.push(particle);
    }
    return particles;
}

function clearParticles() {
    document.querySelectorAll('.particle').forEach(p => p.remove());
    modalContent.className = 'modal-content';
}

function showTransition(race) {
    const transitionClass = transitionClasses[race];
    transitionOverlay.className = `transition-overlay ${transitionClass} active`;
    
    setTimeout(() => {
        transitionOverlay.classList.remove('active');
        transitionOverlay.className = 'transition-overlay';
    }, 3000);
}

document.querySelectorAll('.race-card').forEach(card => {
    card.addEventListener('click', function() {
        const race = this.getAttribute('data-race');
        const raceInfo = racesData[race];
        
        showTransition(race);
        
        setTimeout(() => {
            modalImg.src = raceInfo.image;
            modalTitle.textContent = raceInfo.name;
            modalDesc.textContent = raceInfo.description;
            
            clearParticles();
            
            const effectClass = raceEffects[race];
            if (effectClass) {
                modalContent.classList.add(effectClass);
                const particleCount = effectClass === 'effect-nazgul' ? 8 : 15;
                const particles = createParticles(effectClass, particleCount);
                particles.forEach(p => modalContent.appendChild(p));
            }
            
            modal.style.display = 'block';
        }, 2000);
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    clearParticles();
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        clearParticles();
    }
});