const regions = {
    minas: {
        title: "Minas",
        description: "."
    },
    ridranthic: {
        title: "Ridranthic",
        description: "."
    },
    galadhbo: {
        title: "Galadhbo",
        description: "."
    },
    lin: {
        title: "Lin",
        description: "."
    },
    arzmania: {
        title: "Arzmania",
        description: "."
    },
    mesthoman: {
        title: "Mesthoman",
        description: "."
    },
    rogrok: {
        title: "Rogrok",
        description: "."
    },
    itris: {
        title: "Itris",
        description: "."
    },
    grottes: {
        title: "Grottes d'Asteros",
        description: "."
    }
};

function showRegion(regionKey) {
    const region = regions[regionKey];
    document.getElementById('region-title').textContent = region.title;
    document.getElementById('region-description').textContent = region.description;
    document.getElementById('region-info').classList.remove('hidden');
    
    document.getElementById('region-info').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

document.querySelectorAll('.zone').forEach(zone => {
    zone.addEventListener('click', function() {
        const regionKey = this.getAttribute('data-region');
        showRegion(regionKey);
    });
});

document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const regionKey = this.getAttribute('data-region');
        showRegion(regionKey);
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('region-info').classList.add('hidden');
});
