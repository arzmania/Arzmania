const regions = {
    minas: {
        title: "Minas",
        description: "Autrefois une grande cité peuplé par les Nazguls, cette dernière à été partiellement détruite et abandonnée lors de la Grande Guerre. Elle est située dans les terres du nord, dans une véritable toundra. Des immenses ruines de ce châteaux d'un autre temps surplombes les montagnes autour de la plaine. Voici une image de la cité avant sa destruction."
    },
    ridranthic: {
        title: "Ridranthic",
        description: "Ridranthic est la ville des Golems de glace, elle à comme particularité d'être construire entièrement en glace et en neige compactée et presque aussi résistance que de la pierre. Les Golems de glace y vivent retranchés dans des quartiers représentants les différentes familles."
    },
    galadhbo: {
        title: "Galadhbo",
        description: "Galadhbo est la ville des Elfes Lumineux, implantée dans la forêt magique. Elle est constitués de maisons en bois construites au pieds d'arbres ou même directement sur des branches ou dans la cime des arbres. Une succession de petites maisonnettes très chaleureuses et charmantes reliées entre elles par des petits pontons. La végétation y est maître en ces lieux, elle vit en symbiose avec ces habitants qui se servent des plantes pour la médecine qui est très développée. Mais aussi pour la magie et la spiritualité de la nature. Le centre ville reste tout de même non loin de la lisière de la forêt."
    },
    lin: {
        title: "Lin",
        description: "Lin est la ville des Ondins, elle est situé sur les côtes de la mer des Léviathans. À moitié sur la plage, à moitié sous l'eau, elle sert de point central au commerce mondial des terres d'Arzmania.Les bâtiments ont pour particularités d'être tous faits à partir de marbre, d'or et de lapis lazuli.  "
    },
    arzmania: {
        title: "Arzmania",
        description: "Arzmania est la capitale et plus grande métropole de toutes les terres. Elle y abrite tout les peuples du globe même si ces habitants sont majoritairement des humains. La ville est entourée d'une première muraille défensive. Au delà de la première muraille se dresse les secteurs agricoles de la ville qui s'étendent sur des kilomètres, parfois parsemés de petits villages jumelés à Arzmania. La deuxième muraille englobe tout ça et fait plusieurs centaines de kilomètres de circonférence afin de protéger toute cette région."
    },
    mesthoman: {
        title: "Mesthoman",
        description: "Mesthoman est la ville des Strix, elle est située sur l'archipel des rochers volants. C'est une véritable ville aérienne, les rochers tiennent en lévitation pour une raison inconnue. Étrangement, il y a tout de même de la terre juste en bas, l'apparition de ces rochers volants sont ainsi un des mystères les plus tenaces des terres d'Arzmania."
    },
    rogrok: {
        title: "Rogrok",
        description: "Rogrok est la ville des Magmariens, construite à partir de roches volcaniques, elle est située dans une vallée entourée par une chaîne de volcans et de montagnes arides. C'est une ville connue pour abriter les forgerons les plus talentueux de toutes les terres d'Arzmania, et aussi les bains chauds où les touristes ainsi que les habitants aiment venir se relaxer. Il y a aussi un grande arène où des champions du monde entier viennent s'affronter dans des tournois amicaux que les magmariens suivent attentivement comme s'il s'agissait d'un sport."
    },
    itris: {
        title: "Itris",
        description: "Itris est la capitale du continent d'Arasil, c'est une grande métropole assez avancée adoptant une architecture plutôt orientale. Siège du palais de la reine, elle représente le pouvoir ainsi que le progrès. "
    },
    grottes: {
        title: "Grottes d'Asteros",
        description: "Les Grottes d'Asteros sont un immense réseaux de grottes situé en dessous de la forêt magique de Galadhbo. Grand, spectaculaire et tentaculaire, ces grottes sont presques aussi grandes qu'un véritable pays de la surface.Elle est ainsi habitée en majorité par les Efles Obscurs, mais on peut aussi y trouver tout un tas de guildes criminelles telles que la célèbre guilde des assassins."
    },
    plaine: {
        title : "Plaine Féerique",
        description : "La Plaine Féerique est un lieu magnifique peuplé par les êtres magiques que sont les fées. Ici, la végétation y est reine et elle vit en harmonie avec les animaux qui la peuplent. Il y fait bon vivre, la température est bien souvent très agréable et le vent semble même s'adapter au habitants. Le village où habitent les fées se trouve au centre même de la plaine. Les maisons fabriquées à partir de bois, de plantes et de champignons.",
    },
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

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('region-info').classList.add('hidden');
    document.getElementById('exit').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
});
