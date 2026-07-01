// =============================================================
//  classes-popup.js — Données et logique des popups de classes
//  Pour ajouter/modifier une classe : éditez uniquement CLASS_DATA
// =============================================================

// ---------------------------------------------------------------
//  CLASS_DATA
//  Clé = data-class dans le HTML
//  Champs :
//    name        — Nom affiché dans le popup
//    type        — "Avancée" | "À Compétence" | "Basique"
//    category    — "Combat" | "Magie" | "Agilité"
//    description — Texte de présentation (obligatoire)
//    skills      — Tableau de compétences { name, desc } (optionnel)
// ---------------------------------------------------------------
const CLASS_DATA = {

    // ═══════════════════════════════════════
    //  CLASSES AVANCÉES — COMBAT
    // ═══════════════════════════════════════
    "chevalier-noir": {
        name: "Chevalier Noir",
        type: "Avancée",
        category: "Combat",
        description: "Combattant en armure sombre qui n'a pas forcément la protection comme vocation.",
        skills: []
    },
    "paladin": {
        name: "Paladin",
        type: "Avancée",
        category: "Combat",
        description: "Chevalier qui utilise aussi des sorts de guérison et de protection.",
        skills: []
    },
    "chevalier-de-la-mort": {
        name: "Chevalier de la Mort",
        type: "Avancée",
        category: "Combat",
        description: "Chevalier maléfique qui tue à tour de bras.",
        skills: []
    },
    "maitre-des-armes": {
        name: "Maître des Armes",
        type: "Avancée",
        category: "Combat",
        description: "Combattant aguéri qui parvient à maîtriser n'importe quelle arme.",
        skills: []
    },
    "samurai": {
        name: "Samurai",
        type: "Avancée",
        category: "Combat",
        description: "Guerrier guidé par l'honneur et le respect d'autrui.",
        skills: []
    },
    "chevalier-a-dragon": {
        name: "Chevalier à Dragon",
        type: "Avancée",
        category: "Combat",
        description: "Chevalier combattant sur le dos d'un dragon.",
        skills: []
    },
    "chevaucheur-de-bete": {
        name: "Chevaucheur de Bête",
        type: "Avancée",
        category: "Combat",
        description: "Combattant capable d'apprivoiser et chevaucher des animaux, même des bêtes sauvages.",
        skills: []
    },
    "lancier": {
        name: "Lancier",
        type: "Avancée",
        category: "Combat",
        description: "Combattant habile dans le maniement de la lance.",
        skills: []
    },
    "templier": {
        name: "Templier",
        type: "Avancée",
        category: "Combat",
        description: "Chevalier protégeant des temples, églises, monastères et autre lieux sacrés.",
        skills: []
    },
    "chef-de-guerre": {
        name: "Chef de Guerre",
        type: "Avancée",
        category: "Combat",
        description: "Combattant se démarquant par ses compétences de meneur d'hommes et de stratège hors pair.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES AVANCÉES — MAGIE
    // ═══════════════════════════════════════
    "mage-de-combat": {
        name: "Mage de Combat",
        type: "Avancée",
        category: "Magie",
        description: "Utilisateur de sorts offensifs dont il se sert en combat.",
        skills: []
    },
    "demoniste": {
        name: "Démoniste",
        type: "Avancée",
        category: "Magie",
        description: "Sorcier spécialisé dans les sorts démoniaques.",
        skills: []
    },
    "necromancien": {
        name: "Nécromancien",
        type: "Avancée",
        category: "Magie",
        description: "Sorcier capable de faire revenir des cadavres à la vie sous la forme d'esclaves éphémères.",
        skills: []
    },
    "mage-rouge": {
        name: "Mage Rouge",
        type: "Avancée",
        category: "Magie",
        description: "Mage ayant décidé de s'orienter sur l'études des sorts offensifs en tout genre.",
        skills: []
    },
    "mage-bleu": {
        name: "Mage Bleu",
        type: "Avancée",
        category: "Magie",
        description: "Mage ayant décidé de s'orienter sur l'études des sorts défensifs en tout genre.",
        skills: []
    },
    "elementaliste": {
        name: "Élémentaliste",
        type: "Avancée",
        category: "Magie",
        description: "Utilisateur de sorts basés sur les 4 éléments : L'eau, la Terre, le Feu et l'Air.",
        skills: []
    },
    "geomancien": {
        name: "Géomancien",
        type: "Avancée",
        category: "Magie",
        description: "Sorcier capable de manipuler le sol et l'environnement grâce à ses sorts.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES AVANCÉES — AGILITÉ
    // ═══════════════════════════════════════
    "assassin": {
        name: "Assassin",
        type: "Avancée",
        category: "Agilité",
        description: "Tueur très compétent dans le domaine.",
        skills: []
    },
    "ninja": {
        name: "Ninja",
        type: "Avancée",
        category: "Agilité",
        description: "Tueur très discret, il ne laisse aucune traces.",
        skills: []
    },
    "maitre-des-pieges": {
        name: "Maître des Pièges",
        type: "Avancée",
        category: "Agilité",
        description: "Spécialiste dans la fabrications de pièges en tout genres.",
        skills: []
    },
    "stalker": {
        name: "Stalker",
        type: "Avancée",
        category: "Agilité",
        description: "Spécialiste dans la traque de personnes en particulier.",
        skills: []
    },
    "navigateur": {
        name: "Navigateur",
        type: "Avancée",
        category: "Agilité",
        description: "Spécialiste dans la naviguation et l'exploration en haute-mer.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — COMBAT
    // ═══════════════════════════════════════
    "chevalier": {
        name: "Chevalier",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant en armure qui protège son royaume.",
        skills: []
    },
    "berserker": {
        name: "Berserker",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant animé par la rage qui ne ressent ni douleur, ni peur.",
        skills: []
    },
    "armurier-draconique": {
        name: "Armurier Draconique",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant au forgeron qui fabrique ou possède de l'équipement fabriqué à partir de dragons.",
        skills: []
    },
    "sentinelle": {
        name: "Sentinelle",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant défensif spécialisé dans la protection de ses alliés.",
        skills: []
    },
    "soldat": {
        name: "Soldat",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant polyvalent à l'intérieur d'une armée.",
        skills: []
    },
    "duelliste": {
        name: "Duelliste",
        type: "À Compétence",
        category: "Combat",
        description: "Combattant offensif spécialisé dans les duels.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — MAGIE
    // ═══════════════════════════════════════
    "magicien-d-arme": {
        name: "Magicien d'Arme",
        type: "À Compétence",
        category: "Magie",
        description: "Magiciens qui utilise armes et magies en même temps.",
        skills: []
    },
    "pretre-combattant": {
        name: "Prêtre Combattant",
        type: "À Compétence",
        category: "Magie",
        description: "Mage qui utilise des sorts de soins et protection.",
        skills: []
    },
    "sorcier": {
        name: "Sorcier",
        type: "À Compétence",
        category: "Magie",
        description: "Individu utilisant des sorts en tout genre.",
        skills: []
    },
    "arcaniste": {
        name: "Arcaniste",
        type: "À Compétence",
        category: "Magie",
        description: "Magicien se servant des arcanes pour lancer des sorts.",
        skills: []
    },
    "illusionniste": {
        name: "Illusionniste",
        type: "À Compétence",
        category: "Magie",
        description: "Mage spécialisé dans la tromperie et les magies d'illusions.",
        skills: []
    },
    "alchimiste": {
        name: "Alchimiste",
        type: "À Compétence",
        category: "Magie",
        description: "Mage et scientifique capable de transformer la matière.",
        skills: []
    },
    "magicien-des-ombres": {
        name: "Magicien des Ombres",
        type: "À Compétence",
        category: "Magie",
        description: "Magiciens capable de manipuler les ombres et l'obscurité.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — AGILITÉ
    // ═══════════════════════════════════════
    "archer": {
        name: "Archer",
        type: "À Compétence",
        category: "Agilité",
        description: "Combattant spécialisé dans le tir à l'arc.",
        skills: []
    },
    "scout": {
        name: "Scout",
        type: "À Compétence",
        category: "Agilité",
        description: "Individu spécialisé dans la survie en milieu naturel.",
        skills: []
    },
    "balisticien": {
        name: "Balisticien",
        type: "À Compétence",
        category: "Agilité",
        description: "Combattant spécialiste dans le réglage d'engins de raid.",
        skills: []
    },
    "mentaliste": {
        name: "Mentaliste",
        type: "À Compétence",
        category: "Agilité",
        description: "Individu capable de savoir ce que les autres pensent.",
        skills: []
    },
    "parieur": {
        name: "Parieur",
        type: "À Compétence",
        category: "Agilité",
        description: "Individu spécialisés dans les paris et la chance.",
        skills: []
    },
    "bricoleur": {
        name: "Bricoleur",
        type: "À Compétence",
        category: "Agilité",
        description: "Individu capable de pouvoir fabriquer et improviser tout genre d'objets.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — COMBAT
    // ═══════════════════════════════════════
    "guerrier": {
        name: "Guerrier",
        type: "Basique",
        category: "Combat",
        description: "Combattant de base.",
        skills: []
    },
    "soldat-basique": {
        name: "Soldat",
        type: "Basique",
        category: "Combat",
        description: "Combattant polyvalent à l'intérieur d'une armée.",
        skills: []
    },
    "cavalier": {
        name: "Cavalier",
        type: "Basique",
        category: "Combat",
        description: "Combattant à cheval.",
        skills: []
    },
    "porteur-de-bouclier": {
        name: "Porteur de Bouclier",
        type: "Basique",
        category: "Combat",
        description: "Combattant arborant des boucliers afin de se protéger et protéger les autres.",
        skills: []
    },
    "pugiliste": {
        name: "Pugiliste",
        type: "Basique",
        category: "Combat",
        description: "Combattant se démarquant par son style de combat à main nues.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — MAGIE
    // ═══════════════════════════════════════
    "magicien": {
        name: "Magicien",
        type: "Basique",
        category: "Magie",
        description: "Individu capable de pouvoir lancer des sorts.",
        skills: []
    },
    "pretre": {
        name: "Prêtre",
        type: "Basique",
        category: "Magie",
        description: "Individu spécialisé dans la prière et les sorts de soins et protection.",
        skills: []
    },
    "druide": {
        name: "Druide",
        type: "Basique",
        category: "Magie",
        description: "Individu capable de concocter des potions à partir d'ingrédients naturels.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — AGILITÉ
    // ═══════════════════════════════════════
    "voleur": {
        name: "Voleur",
        type: "Basique",
        category: "Agilité",
        description: "Individu maître dans l'art du vol.",
        skills: []
    },
    "bandit": {
        name: "Bandit",
        type: "Basique",
        category: "Agilité",
        description: "Individu connu dans le milieu du crime.",
        skills: []
    },
    "espion": {
        name: "Espion",
        type: "Basique",
        category: "Agilité",
        description: "Individu spécialisé dans la collection d'information, la discrétion et l'usurpation d'identité.",
        skills: []
    },
};

// ---------------------------------------------------------------
//  Couleurs par type et catégorie (modifiez si besoin)
// ---------------------------------------------------------------
const TYPE_COLORS = {
    "Avancée":       { bg: "rgba(255,69,0,0.15)",   border: "#ff4500", text: "#ff6a2a" },
    "À Compétence":  { bg: "rgba(255,215,0,0.12)",  border: "#ffd700", text: "#ffd700" },
    "Basique":       { bg: "rgba(135,206,235,0.12)", border: "#87ceeb", text: "#87ceeb" },
};

const CATEGORY_COLORS = {
    "Combat":  { bg: "rgba(220,20,60,0.15)",  border: "#dc143c", text: "#dc143c" },
    "Magie":   { bg: "rgba(147,112,219,0.15)", border: "#9370db", text: "#9370db" },
    "Agilité": { bg: "rgba(50,205,50,0.15)",  border: "#32cd32", text: "#32cd32" },
};

// ---------------------------------------------------------------
//  Logique du popup (ne pas modifier sauf pour changer le comportement)
// ---------------------------------------------------------------
(function () {
    const popup   = document.getElementById("class-popup");
    const title   = document.getElementById("popup-title");
    const typeBadge = document.getElementById("popup-type");
    const catBadge  = document.getElementById("popup-category");
    const desc    = document.getElementById("popup-description");
    const skills  = document.getElementById("popup-skills");
    const closeBtn = document.getElementById("popup-close");

    let currentItem = null;

    function openPopup(item, data) {
        // Remplissage
        title.textContent = data.name;

        const tc = TYPE_COLORS[data.type]     || {};
        const cc = CATEGORY_COLORS[data.category] || {};

        typeBadge.textContent = data.type;
        typeBadge.style.background   = tc.bg     || "";
        typeBadge.style.borderColor  = tc.border || "";
        typeBadge.style.color        = tc.text   || "";

        catBadge.textContent = data.category;
        catBadge.style.background   = cc.bg     || "";
        catBadge.style.borderColor  = cc.border || "";
        catBadge.style.color        = cc.text   || "";

        desc.textContent = data.description;

        // Compétences (optionnelles)
        if (data.skills && data.skills.length > 0) {
            skills.innerHTML = "<h4 class='popup-skills-title'>Compétences</h4>" +
                data.skills.map(s =>
                    `<div class="popup-skill"><strong>${s.name}</strong> — ${s.desc}</div>`
                ).join("");
            skills.style.display = "block";
        } else {
            skills.innerHTML = "";
            skills.style.display = "none";
        }

        // Positionnement sous l'élément cliqué
        const rect = item.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;

        popup.classList.remove("hidden");

        // Calcul horizontal : centré sur l'item, recadré si hors écran
        const popupW = popup.offsetWidth;
        let left = rect.left + scrollX + rect.width / 2 - popupW / 2;
        const margin = 12;
        left = Math.max(margin, Math.min(left, document.documentElement.clientWidth - popupW - margin + scrollX));

        popup.style.top  = (rect.bottom + scrollY + 8) + "px";
        popup.style.left = left + "px";

        currentItem = item;
        item.classList.add("class-item--active");
    }

    function closePopup() {
        popup.classList.add("hidden");
        if (currentItem) {
            currentItem.classList.remove("class-item--active");
            currentItem = null;
        }
    }

    // Clic sur un item
    document.querySelectorAll(".class-item[data-class]").forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            const key = this.dataset.class;
            const data = CLASS_DATA[key];
            if (!data) return;

            // Même item → fermer
            if (currentItem === this) {
                closePopup();
                return;
            }
            openPopup(this, data);
        });
    });

    // Fermeture via bouton ✕
    closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closePopup();
    });

    // Fermeture en cliquant ailleurs
    document.addEventListener("click", function (e) {
        if (!popup.classList.contains("hidden") && !popup.contains(e.target)) {
            closePopup();
        }
    });

    // Fermeture avec Échap
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closePopup();
    });
})();
