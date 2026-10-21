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
        description: "Un guerrier redoutable ayant sacrifié une part de lui-même aux forces obscures pour dominer le champ de bataille. En dehors des combats, ce sont souvent des mercenaires de l'ombre ou des exécuteurs solitaires craints de tous.",
        skills: []
    },
    "paladin": {
        name: "Paladin",
        type: "Avancée",
        category: "Combat",
        description: "Un champion guidé par un serment protecteur, capable d'imprégner ses attaques de lumière. Dans le RP, il joue un rôle crucial de guide moral, agissant souvent comme juge ou diplomate respecté dans les cités.",
        skills: []
    },
    "chevalier-de-la-mort": {
        name: "Chevalier de la Mort",
        type: "Avancée",
        category: "Combat",
        description: "Un guerrier implacable en armure lourde qui manipule les énergies nécrotiques pour drainer la vitalité de ses adversaires. Bien que parfaitement vivants, ces marginaux marqués par la mort agissent souvent comme gardiens solitaires de mausolées ou porteurs de sombres secrets historiques.",
        skills: []
    },
    "maitre-des-armes": {
        name: "Maître des Armes",
        type: "Avancée",
        category: "Combat",
        description: "Un virtuose absolu capable de manier n'importe quelle arme à la perfection. Très prisés en temps de paix, ils gagnent leur vie comme maîtres d'escrime ou gardes d'élite pour la haute noblesse.",
        skills: []
    },
    "samurai": {
        name: "Samurai",
        type: "Avancée",
        category: "Combat",
        description: "Un combattant d'une discipline de fer alliant une volonté spirituelle à des frappes tranchantes mortelles. Ils sont très recherchés comme conseillers stratégiques ou gardes du corps loyaux.",
        skills: []
    },
    "chevalier-a-dragon": {
        name: "Chevalier à Dragon",
        type: "Avancée",
        category: "Combat",
        description: "Un spécialiste du combat aérien agissant en duo avec de grandes créatures ailées. Ce sont d'excellents émissaires capables de parcourir de longues distances et de surveiller les hauts sommets.",
        skills: []
    },
    "chevaucheur-de-bete": {
        name: "Chevaucheur de Bête",
        type: "Avancée",
        category: "Combat",
        description: "Fait corps avec une monture féroce pour attaquer en parfaite synchronisation. Ils trouvent naturellement leur place en tant que maîtres-dresseurs ou guides suprêmes dans les terres sauvages.",
        skills: []
    },
    "lancier": {
        name: "Lancier",
        type: "Avancée",
        category: "Combat",
        description: "L'expert incontesté de l'allonge et du percement d'armure pour briser les charges adverses. En ville, ils encadrent souvent les milices ou dirigent la formation des gardes royales.",
        skills: []
    },
    "templier": {
        name: "Templier",
        type: "Avancée",
        category: "Combat",
        description: "Un protecteur fanatique utilisant des sceaux magiques pour entraver ses ennemis. Ils font également d'excellents érudits, archivistes ou conseillers juridiques pour les ordres anciens.",
        skills: []
    },
    "chef-de-guerre": {
        name: "Chef de Guerre",
        type: "Avancée",
        category: "Combat",
        description: "Un leader charismatique dont la présence sur le front galvanise ses troupes. Lorsqu'il ne combat pas, c'est un politicien redoutable ou un seigneur local très influent.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES AVANCÉES — MAGIE
    // ═══════════════════════════════════════
    "mage-de-combat": {
        name: "Mage de Combat",
        type: "Avancée",
        category: "Magie",
        description: "Allie la force brute de la mêlée à la puissance destructrice des arcanes. Leurs compétences en font d'excellents tacticiens ou instructeurs militaires de renom.",
        skills: []
    },
    "demoniste": {
        name: "Démoniste",
        type: "Avancée",
        category: "Magie",
        description: "Tire ses pouvoirs de pactes mystiques pour manipuler flammes impies et malédictions. Dans la société, ce sont souvent des courtiers en secrets occultes ou des antiquaires de l'ombre.",
        skills: []
    },
    "necromancien": {
        name: "Nécromancien",
        type: "Avancée",
        category: "Magie",
        description: "Le maître des énergies funestes capable de manipuler les morts et la décomposition. Bien que craints, beaucoup opèrent discrètement comme historiens des généalogies éteintes ou médecins légistes.",
        skills: []
    },
    "mage-rouge": {
        name: "Mage Rouge",
        type: "Avancée",
        category: "Magie",
        description: "Un prodige extrêmement polyvalent jonglant entre attaque magique, soins et combat à l'épée. Leur grande adaptabilité en fait des ambassadeurs ou des érudits itinérants parfaits pour le RP.",
        skills: []
    },
    "mage-bleu": {
        name: "Mage Bleu",
        type: "Avancée",
        category: "Magie",
        description: "Un mage atypique capable d'apprendre et de reproduire les capacités des monstres qu'il affronte. Ce sont avant tout de grands explorateurs et chercheurs étudiant la faune magique.",
        skills: []
    },
    "elementaliste": {
        name: "Élémentaliste",
        type: "Avancée",
        category: "Magie",
        description: "Commande les forces brutes de la nature comme le feu ou la foudre en combat. En temps de paix, ils aident à réguler le climat agricole ou participent à de grands chantiers architecturaux.",
        skills: []
    },
    "geomancien": {
        name: "Géomancien",
        type: "Avancée",
        category: "Magie",
        description: "Plie la roche et la terre à sa volonté pour écraser ses adversaires ou ériger des défenses impénétrables. Ils sont sans conteste les meilleurs architectes et prospecteurs miniers du monde.",
        skills: []
    },
    "astromancien": {
        name: "Astromancien",
        type: "Avancée",
        category: "Magie",
        description: "Puise sa magie destructrice dans l'alignement cosmique et la maîtrise de la gravité. Ils occupent souvent des postes prestigieux d'astronomes, de cartographes ou de conseillers royaux.",
        skills: []
    },
    "invocateur": {
        name: "Invocateur",
        type: "Avancée",
        category: "Magie",
        description: "Ouvre des failles pour matérialiser de puissantes créatures ou entités à ses ordres. Beaucoup gagnent leur vie comme gardiens de portails magiques ou transporteurs de marchandises rares.",
        skills: []
    },
    "haut-enchanteur": {
        name: "Haut-Enchanteur",
        type: "Avancée",
        category: "Magie",
        description: "Spécialiste de la création d'artefacts aux capacités magiques permanentes. Ce sont des artisans exceptionnels et très riches, tenant souvent des boutiques de luxe prisées par l'élite.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES AVANCÉES — AGILITÉ
    // ═══════════════════════════════════════
    "assassin": {
        name: "Assassin",
        type: "Avancée",
        category: "Agilité",
        description: "Un exécuteur de l'ombre capable de trouver le point faible pour éliminer sa cible d'un coup. Sous couverture, ils gèrent souvent des guildes marchandes ou des réseaux d'information discrets.",
        skills: []
    },
    "ninja": {
        name: "Ninja",
        type: "Avancée",
        category: "Agilité",
        description: "Le maître de l'infiltration usant d'une mobilité extrême et de techniques d'illusions secrètes. Ils excellent en tant qu'espions de très haut niveau ou messagers inviolables.",
        skills: []
    },
    "maitre-des-pieges": {
        name: "Maître des Pièges",
        type: "Avancée",
        category: "Agilité",
        description: "Capable de transformer n'importe quel terrain de combat en un labyrinthe mortel et imprévisible. Ils sont très demandés comme ingénieurs de sécurité pour protéger les coffres-forts.",
        skills: []
    },
    "stalker": {
        name: "Stalker",
        type: "Avancée",
        category: "Agilité",
        description: "Un prédateur redoutable excellant dans l'art de l'embuscade et de la traque psychologique. Ils sont souvent employés comme détectives privés haut de gamme ou chasseurs en milieu urbain.",
        skills: []
    },
    "navigateur": {
        name: "Navigateur",
        type: "Avancée",
        category: "Agilité",
        description: "Un expert de la mobilité en combat, lisant les vents et les étoiles pour esquiver les coups. Indispensables à l'économie, ils dirigent les grandes flottes marchandes et négocient les routes maritimes.",
        skills: []
    },
    "danseur-de-lames": {
        name: "Danseur de Lames",
        type: "Avancée",
        category: "Agilité",
        description: "Frappe avec une chorégraphie hypnotique rendant ses mouvements insaisissables et mortels. En société, ce sont des artistes de grand renom ou des courtisans extrêmement influents.",
        skills: []
    },
    "tireur-d-elite": {
        name: "Tireur d'Élite",
        type: "Avancée",
        category: "Agilité",
        description: "Un calculateur hors pair capable de tirs dévastateurs à très longue distance. Beaucoup trouvent leur place comme maîtres de chasse pour les seigneurs ou veilleurs depuis les hautes tours.",
        skills: []
    },
    "chasseur-de-primes": {
        name: "Chasseur de Primes",
        type: "Avancée",
        category: "Agilité",
        description: "Un limier implacable disposant d'un arsenal d'outils pour capturer ses cibles. Ils font d'excellents enquêteurs ou agents de recouvrement pour les puissantes guildes d'Arzmania.",
        skills: []
    },
    "ombrelame": {
        name: "Ombrelame",
        type: "Avancée",
        category: "Agilité",
        description: "Un tueur surnaturel capable de se téléporter d'une ombre à l'autre pour frapper par surprise. Souvent liés aux bas-fonds, ils excellent dans la récupération d'objets impossibles à voler.",
        skills: []
    },
    "rodeur": {
        name: "Rôdeur",
        type: "Avancée",
        category: "Agilité",
        description: "Le survivant ultime en milieu sauvage, maîtrisant le pistage et l'attaque furtive mortelle. Ils servent de guides inestimables pour les caravanes traversant les territoires les plus hostiles.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — COMBAT
    // ═══════════════════════════════════════
    "chevalier": {
        name: "Chevalier",
        type: "À Compétence",
        category: "Combat",
        description: "Un combattant lourdement armé formé aux tactiques militaires classiques. Pilier des armées, il assure aussi la sécurité des routes marchandes et forme les milices locales en temps de paix.",
        skills: []
    },
    "berserker": {
        name: "Berserker",
        type: "À Compétence",
        category: "Combat",
        description: "Un combattant qui se laisse envahir par une rage dévastatrice en ignorant totalement la douleur. Ils trouvent souvent du travail comme gardes du corps intimidants ou terrassiers pour les grands chantiers.",
        skills: []
    },
    "armurier-draconique": {
        name: "Armurier Draconique",
        type: "À Compétence",
        category: "Combat",
        description: "Forge et manie son propre équipement avec des matériaux rares pour résister à la magie. Ce sont des artisans hautement qualifiés, capables d'expertiser les restes de monstres.",
        skills: []
    },
    "sentinelle": {
        name: "Sentinelle",
        type: "À Compétence",
        category: "Combat",
        description: "Un gardien inébranlable conçu pour encaisser les coups et défendre les points stratégiques. On les retrouve souvent postés devant les banques, les portes des grandes cités ou les prisons.",
        skills: []
    },
    "soldat-veteran": {
        name: "Soldat Vétéran",
        type: "À Compétence",
        category: "Combat",
        description: "Un soldat endurci par des années de batailles qui privilégie l'expérience du sang à la théorie. Ce sont d'excellents conseillers tactiques, capitaines de garnison ou tenanciers de tavernes sécurisées.",
        skills: []
    },
    "duelliste": {
        name: "Duelliste",
        type: "À Compétence",
        category: "Combat",
        description: "Un escrimeur misant sur la parade et l'esquive pour lancer des contre-attaques fulgurantes. Ils sont très populaires dans les tournois d'exhibition et défendent l'honneur des nobles lors de litiges.",
        skills: []
    },
    "mercenaire": {
        name: "Mercenaire",
        type: "À Compétence",
        category: "Combat",
        description: "Un professionnel de la guerre prêt à s'adapter à toutes les situations martiales. Très pragmatiques, ils acceptent n'importe quel contrat, de la protection de caravane aux missions d'expulsion.",
        skills: []
    },
    "gladiateur": {
        name: "Gladiateur",
        type: "À Compétence",
        category: "Combat",
        description: "Un combattant d'arène utilisant l'intimidation et le sens du spectacle pour démoraliser l'ennemi. Véritables figures locales, ils organisent souvent des paris sportifs ou des événements publics.",
        skills: []
    },
    "garde-du-corps": {
        name: "Garde du Corps",
        type: "À Compétence",
        category: "Combat",
        description: "L'expert de la protection rapprochée capable d'intercepter les coups mortels destinés à un allié. Ils sont l'ombre constante des marchands riches ou des politiciens menacés.",
        skills: []
    },
    "hallebardier": {
        name: "Hallebardier",
        type: "À Compétence",
        category: "Combat",
        description: "Le maître de l'arme d'hast, excellant dans le contrôle de zone et le maintien de l'ennemi à distance. Ils composent généralement les gardes d'honneur et gèrent les mouvements de foule urbaine.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — MAGIE
    // ═══════════════════════════════════════
    "magicien-d-arme": {
        name: "Magicien d'Arme",
        type: "À Compétence",
        category: "Magie",
        description: "Canalise sa magie directement à travers sa lame pour des frappes élémentaires surpuissantes. Ils sont souvent engagés pour tester la résistance magique des armures ou agir comme gardes d'élite.",
        skills: []
    },
    "pretre-combattant": {
        name: "Prêtre Combattant",
        type: "À Compétence",
        category: "Magie",
        description: "Porte l'armure et la masse pour soigner et soutenir ses alliés au cœur même de la mêlée. Dans le RP, ils dirigent souvent des hospices ou des missions de secours dans les zones sinistrées.",
        skills: []
    },
    "sorcier": {
        name: "Sorcier",
        type: "À Compétence",
        category: "Magie",
        description: "Tire sa magie d'un don inné ou d'une anomalie du sang, libérant des arcanes bruts. Leur magie étant naturelle, beaucoup choisissent la vie d'aventurier libre ou deviennent des phénomènes locaux fascinants.",
        skills: []
    },
    "arcaniste": {
        name: "Arcaniste",
        type: "À Compétence",
        category: "Magie",
        description: "Un savant capable de déconstruire les sorts adverses et de manipuler la trame magique. Ce sont d'excellents théoriciens de bibliothèque ou des enquêteurs spécialisés dans les crimes magiques.",
        skills: []
    },
    "illusionniste": {
        name: "Illusionniste",
        type: "À Compétence",
        category: "Magie",
        description: "Trompe les sens de l'ennemi avec des mirages ultra-réalistes et des dédoublements. Ils sont très demandés dans le milieu du théâtre pour les effets spéciaux, ou pour masquer des secrets architecturaux.",
        skills: []
    },
    "alchimiste": {
        name: "Alchimiste",
        type: "À Compétence",
        category: "Magie",
        description: "Concocte en plein combat des fioles explosives et des mutagènes renforçant son corps. Ils tiennent les meilleures échoppes de potions, d'engrais alchimiques et expertisent les poisons.",
        skills: []
    },
    "magicien-des-ombres": {
        name: "Magicien des Ombres",
        type: "À Compétence",
        category: "Magie",
        description: "Tisse la matière ténébreuse pour aveugler ses ennemis et se dissimuler. Ce sont d'excellents courtiers en informations clandestines ou des spécialistes de l'infiltration urbaine.",
        skills: []
    },
    "inquisiteur": {
        name: "Inquisiteur",
        type: "À Compétence",
        category: "Magie",
        description: "Traque la magie illicite et lève efficacement les malédictions pesant sur ses alliés. Ce sont les enquêteurs redoutés de la justice d'Arzmania, mandatés pour purifier les terres ou interroger les suspects.",
        skills: []
    },
    "herboriste-mystique": {
        name: "Herboriste Mystique",
        type: "À Compétence",
        category: "Magie",
        description: "Infuse la botanique de magie pour créer des toxines mortelles ou des remèdes miracles. Indispensables en ville, ils soignent les maladies rares ou fournissent des onguents de luxe.",
        skills: []
    },
    "redempteur": {
        name: "Rédempteur",
        type: "À Compétence",
        category: "Magie",
        description: "Un protecteur dévoué projetant de larges auras de soins pour maintenir son équipe en vie. Ce sont les piliers des hôpitaux de campagne et des figures philanthropes essentielles à la cohésion sociale.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES À COMPÉTENCE — AGILITÉ
    // ═══════════════════════════════════════
    "archer": {
        name: "Archer",
        type: "À Compétence",
        category: "Agilité",
        description: "Un tireur polyvalent capable de maintenir une pluie de flèches tout en conservant sa mobilité. Ils fournissent souvent les garnisons en gibier de chasse ou officient comme instructeurs de tir.",
        skills: []
    },
    "scout": {
        name: "Scout",
        type: "À Compétence",
        category: "Agilité",
        description: "L'avant-garde discrète formée pour repérer le terrain hostile et frapper par surprise. Ce sont les premiers à découvrir de nouvelles ruines et d'excellents cartographes pour les guildes marchandes.",
        skills: []
    },
    "balisticien": {
        name: "Balisticien",
        type: "À Compétence",
        category: "Agilité",
        description: "Spécialiste des arbalètes lourdes et explosifs privilégiant la force de pénétration à la cadence. Ils travaillent souvent comme ingénieurs civils pour concevoir des grues ou des défenses de ville.",
        skills: []
    },
    "mentaliste": {
        name: "Mentaliste",
        type: "À Compétence",
        category: "Agilité",
        description: "Devine les coups ennemis en lisant leurs intentions corporelles et manipule leurs émotions. Ils font de redoutables négociateurs commerciaux, d'excellents joueurs de cartes ou des interrogateurs.",
        skills: []
    },
    "parieur": {
        name: "Parieur",
        type: "À Compétence",
        category: "Agilité",
        description: "Laisse une part de ses attaques à la chance pour obtenir des résultats parfois miraculeux. En société, ce sont souvent des gérants de casinos clandestins, des bookmakers ou des arnaqueurs charismatiques.",
        skills: []
    },
    "bricoleur": {
        name: "Bricoleur",
        type: "À Compétence",
        category: "Agilité",
        description: "Compense l'absence de magie par des mécanismes ingénieux et des grenades déployées sur le tas. Très recherchés en ville pour réparer l'horlogerie, la plomberie ou crocheter des serrures complexes.",
        skills: []
    },
    "acrobate": {
        name: "Acrobate",
        type: "À Compétence",
        category: "Agilité",
        description: "Utilise une souplesse surhumaine et la verticalité pour des mouvements de combat imprévisibles. Ce sont souvent des monte-en-l'air, des nettoyeurs de vitraux ou les têtes d'affiche des grands cirques.",
        skills: []
    },
    "spadassin": {
        name: "Spadassin",
        type: "À Compétence",
        category: "Agilité",
        description: "Un combattant vif et charismatique qui utilise le sarcasme et la rapière pour déstabiliser sa cible. Ils sont souvent des nobles désœuvrés, des maîtres de cérémonie ou des justiciers locaux très populaires.",
        skills: []
    },
    "artilleur": {
        name: "Artilleur",
        type: "À Compétence",
        category: "Agilité",
        description: "Maîtrise les armes à feu rudimentaires ou les explosifs instables pour de gros dégâts de zone. Ils sont indispensables au minage en montagne ou à la création de feux d'artifice pour les festivals.",
        skills: []
    },
    "contrebandier": {
        name: "Contrebandier",
        type: "À Compétence",
        category: "Agilité",
        description: "Connaît les passages secrets et possède un talent unique pour la fuite et l'esquive. Officiellement marchands d'antiquités, ils excellent dans l'importation de produits exotiques et clandestins.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — COMBAT
    // ═══════════════════════════════════════
    "guerrier": {
        name: "Guerrier",
        type: "Basique",
        category: "Combat",
        description: "Un combattant aux bases solides, prêt à faire face efficacement aux affrontements classiques. Ce sont les travailleurs polyvalents du monde, aptes à protéger un convoi comme à prêter main-forte aux champs.",
        skills: []
    },
    "soldat": {
        name: "Soldat",
        type: "Basique",
        category: "Combat",
        description: "Le rouage essentiel de la milice, formé à suivre les ordres et à se battre en formation. Ils forment le gros de la garde civile urbaine, effectuant les rondes de nuit et surveillant les portes.",
        skills: []
    },
    "cavalier": {
        name: "Cavalier",
        type: "Basique",
        category: "Combat",
        description: "Très à l'aise en selle, il utilise l'élan de sa monture pour frapper vite et fort lors des escarmouches. Issus de milieux ruraux, ils excellent comme coursiers inter-villes ou dresseurs de chevaux.",
        skills: []
    },
    "porteur-de-bouclier": {
        name: "Porteur de Bouclier",
        type: "Basique",
        category: "Combat",
        description: "Une muraille humaine qui sacrifie l'attaque pour offrir une défense absolue à ses alliés. Ils sont fréquemment embauchés comme portiers de tavernes réputées ou protecteurs de convois.",
        skills: []
    },
    "pugiliste": {
        name: "Pugiliste",
        type: "Basique",
        category: "Combat",
        description: "Se bat à mains nues en misant sur sa résistance brute pour épuiser son adversaire au corps-à-corps. Ce sont souvent des dockers, des débardeurs ou des figures très respectées dans les quartiers ouvriers.",
        skills: []
    },
    "garde": {
        name: "Garde",
        type: "Basique",
        category: "Combat",
        description: "Spécialiste du combat urbain, de la maîtrise non-létale et de l'appréhension. C'est l'agent de la paix du quotidien, réglant les querelles de voisinage et patrouillant sur les marchés animés.",
        skills: []
    },
    "bucheron": {
        name: "Bûcheron",
        type: "Basique",
        category: "Combat",
        description: "Utilise sa hache de travail et sa vigueur physique avec une brutalité sans filtre en plein combat. Essentiels à l'économie d'Arzmania, ils fournissent le bois de construction et déblaient les routes.",
        skills: []
    },
    "forgeron": {
        name: "Forgeron",
        type: "Basique",
        category: "Combat",
        description: "Écrase ses ennemis grâce à sa constitution de fer et son lourd marteau d'artisan. Piliers de chaque village, ils fabriquent l'outillage paysan et réparent les équipements de base.",
        skills: []
    },
    "bagarreur": {
        name: "Bagarreur",
        type: "Basique",
        category: "Combat",
        description: "Habitué des rixes, il improvise avec son environnement et se bat sans aucune règle. Ce sont souvent des débrouillards connaissant toutes les rumeurs des bas-fonds et agissant comme videurs occasionnels.",
        skills: []
    },
    "ecuyer": {
        name: "Écuyer",
        type: "Basique",
        category: "Combat",
        description: "Apporte un soutien logistique et défensif mineur tout en apprenant les bases du maniement de l'épée. Ils travaillent généralement comme palefreniers, assistants ou garçons de course pour la noblesse.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — MAGIE
    // ═══════════════════════════════════════
    "magicien": {
        name: "Magicien",
        type: "Basique",
        category: "Magie",
        description: "Un étudiant des arcanes utilisant des formules apprises pour projeter des attaques magiques simples. Ils gagnent souvent leur vie de manière studieuse, comme précepteurs pour enfants de bonne famille ou greffiers.",
        skills: []
    },
    "pretre": {
        name: "Prêtre",
        type: "Basique",
        category: "Magie",
        description: "Canalise ses croyances pour offrir des bénédictions légères et soutenir ses alliés au combat. Ce sont les guides spirituels du quotidien, animant les cérémonies laïques et servant de médiateurs de paix.",
        skills: []
    },
    "druide": {
        name: "Druide",
        type: "Basique",
        category: "Magie",
        description: "Un initié de la terre qui canalise sa magie primitive pour contrôler les ronces ou purifier l'eau. Gardiens de la nature, ils conseillent les agriculteurs sur les saisons ou soignent le bétail de la communauté.",
        skills: []
    },
    "apothicaire": {
        name: "Apothicaire",
        type: "Basique",
        category: "Magie",
        description: "Confectionne des bombes artisanales et des potions utilitaires au combat sans avoir besoin de mana. Ils tiennent les herboristeries de quartier, vendant épices et thés apaisants accessibles à tous.",
        skills: []
    },
    "magnetiseur": {
        name: "Magnétiseur",
        type: "Basique",
        category: "Magie",
        description: "Un soigneur de campagne qui utilise le flux d'énergie corporelle pour refermer les petites plaies en plein combat. Très populaires en zone rurale, ils soulagent la fatigue des paysans après le travail.",
        skills: []
    },
    "apprenti-mage": {
        name: "Apprenti Mage",
        type: "Basique",
        category: "Magie",
        description: "Un novice en arts mystiques dont les pouvoirs se limitent à une magie de petite utilité. Ils font d'excellents assistants ou des domestiques de luxe capables d'allumer une cheminée d'un claquement de doigts.",
        skills: []
    },
    "guerisseur": {
        name: "Guérisseur",
        type: "Basique",
        category: "Magie",
        description: "Utilise onguents, bandages et ses connaissances de l'anatomie pour stabiliser les blessés sur le champ de bataille. Ce sont les médecins traditionnels veillant sur la santé et le quotidien des villages.",
        skills: []
    },
    "chaman": {
        name: "Chaman",
        type: "Basique",
        category: "Magie",
        description: "Connecté aux esprits mineurs, il accomplit des rituels rapides pour obtenir de légers avantages magiques. Ils sont souvent les doyens des petites communautés, prédisant la météo ou apaisant les superstitions.",
        skills: []
    },
    "conjurateur": {
        name: "Conjurateur",
        type: "Basique",
        category: "Magie",
        description: "Spécialisé dans la matérialisation éphémère de petits objets contondants ou de sphères lumineuses. Ils font d'excellents amuseurs de rue ou de petits artisans capables de générer leurs propres outils.",
        skills: []
    },
    "scribe-mystique": {
        name: "Scribe Mystique",
        type: "Basique",
        category: "Magie",
        description: "Grave ou copie des runes magiques à usage unique sur des parchemins pour lancer des sorts de base. Ils gèrent généralement les offices notariaux, traduisent les textes anciens ou authentifient les contrats.",
        skills: []
    },

    // ═══════════════════════════════════════
    //  CLASSES BASIQUES — AGILITÉ
    // ═══════════════════════════════════════
    "voleur": {
        name: "Voleur",
        type: "Basique",
        category: "Agilité",
        description: "Un opportuniste aux doigts de fée pour les attaques sournoises et le crochetage rapide. Le jour, ils agissent souvent de manière pragmatique comme serruriers improvisés ou récupérateurs d'objets perdus.",
        skills: []
    },
    "bandit": {
        name: "Bandit",
        type: "Basique",
        category: "Agilité",
        description: "Un hors-la-loi des grands chemins comptant sur le nombre et des tactiques de guérilla rudimentaires. Pour s'intégrer en ville, ils travaillent parfois comme collecteurs de dettes ou gardes du corps musclés.",
        skills: []
    },
    "espion": {
        name: "Espion",
        type: "Basique",
        category: "Agilité",
        description: "Un agent discret formé pour récolter des informations critiques sans être vu, même en plein conflit. Officiellement, ils se fondent dans la masse comme serviteurs discrets, diplomates ou commerçants ambulants.",
        skills: []
    },
    "barde": {
        name: "Barde",
        type: "Basique",
        category: "Agilité",
        description: "Un artiste dont la musique, le chant et le charisme permettent d'inspirer grandement ses alliés en difficulté. Ce sont les crieurs publics et les journalistes de l'époque, transmettant les nouvelles de ville en ville.",
        skills: []
    },
    "chasseur": {
        name: "Chasseur",
        type: "Basique",
        category: "Agilité",
        description: "Poseur de pièges et pisteur redoutable exploitant sa connaissance de la forêt en combat. Ils connaissent parfaitement la faune locale et fournissent les villes d'Arzmania en viande, cuir et fourrures.",
        skills: []
    },
    "messager": {
        name: "Messager",
        type: "Basique",
        category: "Agilité",
        description: "Un coureur infatigable doté d'une vitesse de déplacement accrue pour esquiver les dangers et se replier. Pilier de l'économie, ils portent le courrier officiel et les colis urgents à travers tout le continent.",
        skills: []
    },
    "saltimbanque": {
        name: "Saltimbanque",
        type: "Basique",
        category: "Agilité",
        description: "Un acrobate de rue utilisant ses talents de distraction et d'esquive pour tromper l'ennemi. Ils animent les festivals, les foires agricoles et organisent des spectacles populaires pour égayer les villes.",
        skills: []
    },
    "eclaireur": {
        name: "Éclaireur",
        type: "Basique",
        category: "Agilité",
        description: "Marche loin devant le groupe pour repérer les embuscades grâce à sa vue perçante et sa discrétion. Ils sont d'excellents arpenteurs-géomètres ou guides de confiance pour les voyageurs désorientés.",
        skills: []
    },
    "braconnier": {
        name: "Braconnier",
        type: "Basique",
        category: "Agilité",
        description: "Un chasseur clandestin maîtrisant le tir à l'arc court et le camouflage dans les fourrés. Souvent tolérés par les villageois, ils revendent la viande à bas prix lors des pénuries alimentaires.",
        skills: []
    },
    "fossoyeur": {
        name: "Fossoyeur",
        type: "Basique",
        category: "Agilité",
        description: "Furtif et imperturbable, il excelle dans le combat nocturne et tire avantage des environnements lugubres. Indispensables à la salubrité publique, ils entretiennent les cimetières et préparent les défunts.",
        skills: []
    }
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
