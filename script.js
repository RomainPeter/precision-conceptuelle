const gameData = [
    {
        word: "CHAT",
        tour1: "ETRE VIVANT",
        tour2: "ANIMAL",
        tour3: "FELIN",
        tour4: ["DOMESTIQUE", "RONRONNE", "PLUS PETIT QUE LE LION", "GRIFFE RETRACTILE"]
    },
    {
        word: "POMME",
        tour1: "ETRE VIVANT",
        tour2: "VEGETAL",
        tour3: "FRUIT",
        tour4: ["COMESTIBLE", "POUSSE SUR UN ARBRE", "SOUVENT ROUGE, VERT OU JAUNE", "CONTIENT DES PEPINS"]
    },
    {
        word: "CHIEN",
        tour1: "ETRE VIVANT",
        tour2: "ANIMAL",
        tour3: "CANIDE",
        tour4: ["DOMESTIQUE", "ABOIE", "A UNE QUEUE", "A DES DENTS"]
    },
    {
        word: "TABLE",
        tour1: "OBJET",
        tour2: "MEUBLE",
        tour3: "TABLE",
        tour4: ["A UN PLATEAU", "A DES PIEDS", "EN BOIS, METAL OU PLASTIQUE", "POUR MANGER OU TRAVAILLER"]
    },
    {
        word: "ORDINATEUR",
        tour1: "OBJET",
        tour2: "APPAREIL ELECTRONIQUE",
        tour3: "ORDINATEUR",
        tour4: ["A UN ECRAN", "A UN CLAVIER", "TRAITE L'INFORMATION", "FONCTIONNE A L'ELECTRICITE"]
    },
    {
        word: "LIVRE",
        tour1: "OBJET",
        tour2: "SUPPORT D'ECRITURE",
        tour3: "LIVRE",
        tour4: ["CONTIENT DU TEXTE", "A DES PAGES", "RELIURE", "POUR LIRE"]
    },
    {
        word: "TELEPHONE",
        tour1: "OBJET",
        tour2: "APPAREIL ELECTRONIQUE",
        tour3: "TELEPHONE",
        tour4: ["COMMUNICATION A DISTANCE", "PORTABLE OU FIXE", "A UN MICRO", "A UN HAUT-PARLEUR"]
    },
    {
        word: "VOITURE",
        tour1: "OBJET",
        tour2: "MOYEN DE TRANSPORT",
        tour3: "VOITURE",
        tour4: ["A QUATRE ROUES", "A UN MOTEUR", "POUR TRANSPORTER DES PERSONNES", "ROULE SUR TERRE"]
    },
    {
        word: "AVION",
        tour1: "OBJET",
        tour2: "MOYEN DE TRANSPORT",
        tour3: "AVION",
        tour4: ["A DES AILES", "VOLE", "A UN OU PLUSIEURS MOTEURS", "TRANSPORTE DES PASSAGERS OU DU FRET"]
    },
    {
        word: "BATEAU",
        tour1: "OBJET",
        tour2: "MOYEN DE TRANSPORT",
        tour3: "BATEAU",
        tour4: ["FLOTTE SUR L'EAU", "A UNE COQUE", "A UN OU PLUSIEURS MOTEURS OU VOILES", "TRANSPORTE DES PASSAGERS OU DU FRET"]
    },
    {
        word: "MAISON",
        tour1: "OBJET",
        tour2: "CONSTRUCTION",
        tour3: "MAISON",
        tour4: ["A DES MURS", "A UN TOIT", "POUR SE LOGER", "A UNE OU PLUSIEURS PIECES"]
    },
    {
        word: "ARBRE",
        tour1: "ETRE VIVANT",
        tour2: "VEGETAL",
        tour3: "ARBRE",
        tour4: ["A UN TRONC", "A DES BRANCHES", "A DES FEUILLES OU AIGUILLES", "FAIT DE LA PHOTOSYNTHESE"]
    },
    {
        word: "FLEUR",
        tour1: "ETRE VIVANT",
        tour2: "VEGETAL",
        tour3: "FLEUR",
        tour4: ["PARTIE DE PLANTE", "SOUVENT COLOREE", "PEUT PRODUIRE UN FRUIT", "ORGANE REPRODUCTEUR"]
    },
    {
        word: "HERBE",
        tour1: "ETRE VIVANT",
        tour2: "VEGETAL",
        tour3: "PLANTE HERBACEE",
        tour4: ["POUSSE AU SOL", "DE COULEUR VERTE", "FINE TIGE", "PEUT SERVIR DE NOURRITURE"]
    },
    {
        word: "EAU",
        tour1: "MATIERE",
        tour2: "LIQUIDE",
        tour3: "EAU",
        tour4: ["TRANSPARENTE", "INODORE", "SANS SAVEUR", "ESSENTIELLE A LA VIE"]
    },
    {
        word: "FEU",
        tour1: "PHENOMENE",
        tour2: "COMBUSTION",
        tour3: "FEU",
        tour4: ["PRODUIT DE LA CHALEUR", "PRODUIT DE LA LUMIERE", "CONSOMME DU COMBUSTIBLE", "A BESOIN D'OXYGENE"]
    },
    {
        word: "AIR",
        tour1: "MATIERE",
        tour2: "GAZ",
        tour3: "AIR",
        tour4: ["INCOLORE", "INODORE", "COMPOSE D'AZOTE, D'OXYGENE...", "ESSENTIEL A LA RESPIRATION"]
    },
    {
        word: "TERRE",
        tour1: "MATIERE",
        tour2: "SOL",
        tour3: "TERRE",
        tour4: ["COUCHE SUPERFICIELLE", "MEUBLE", "COMPOSEE DE MINERAUX ET MATIERE ORGANIQUE", "POUR CULTIVER"]
    },
    {
        word: "SOLEIL",
        tour1: "ASTRE",
        tour2: "ETOILE",
        tour3: "SOLEIL",
        tour4: ["PRODUIT DE LA LUMIERE", "PRODUIT DE LA CHALEUR", "AU CENTRE DU SYSTEME SOLAIRE", "SPHERE DE GAZ"]
    },
    {
        word: "LUNE",
        tour1: "ASTRE",
        tour2: "SATELLITE NATUREL",
        tour3: "LUNE",
        tour4: ["TOURNE AUTOUR DE LA TERRE", "REFLÈTE LA LUMIERE DU SOLEIL", "PAS D'ATMOSPHERE", "SPHERE ROCHEUSE"]
    },
    {
        word: "ETOILE",
        tour1: "ASTRE",
        tour2: "ETOILE",
        tour3: "ETOILE",
        tour4: ["SPHERE DE GAZ", "PRODUIT DE LA LUMIERE", "PRODUIT DE LA CHALEUR", "TRES ELOIGNEE"]
    },
    {
        word: "PLUIE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "PRECIPITATION",
        tour3: "PLUIE",
        tour4: ["EAU QUI TOMBE DES NUAGES", "SOUS FORME DE GOUTTES", "SUITE A LA CONDENSATION", "RESSOURCE EN EAU"]
    },
    {
        word: "NEIGE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "PRECIPITATION",
        tour3: "NEIGE",
        tour4: ["EAU QUI TOMBE DES NUAGES", "SOUS FORME DE CRISTAUX DE GLACE", "PAR TEMPS FROID", "FORME UN MANTEAU BLANC"]
    },
    {
        word: "VENT",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "MOUVEMENT D'AIR",
        tour3: "VENT",
        tour4: ["DEPLACEMENT D'UNE MASSE D'AIR", "CAUSE PAR DES DIFFERENCES DE PRESSION", "PEUT ETRE FAIBLE OU FORT", "RESSENTI COMME UN COURANT D'AIR"]
    },
    {
        word: "NUAGE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "AMAS DE GOUTTELETTES OU CRISTAUX",
        tour3: "NUAGE",
        tour4: ["EN SUSPENSION DANS L'ATMOSPHERE", "FORME PAR CONDENSATION", "DE COULEUR BLANCHE, GRISE OU NOIRE", "PEUT DONNER DES PRECIPITATIONS"]
    },
    {
        word: "ORAGE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "PERTURBATION ATMOSPHERIQUE",
        tour3: "ORAGE",
        tour4: ["AVEC ECLairs ET TONNERRE", "SOUVENT ASSOCIE A DE FORTES PLUIES", "DU A UNE FORTE INSTABILITE", "PRESENCE DE CUMULONIMBUS"]
    },
    {
        word: "CYCLONE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "PERTURBATION ATMOSPHERIQUE",
        tour3: "CYCLONE",
        tour4: ["GRANDE ECHELLE", "TOURBILLON DE VENTS VIOLENTS", "AVEC PLUIES ABONDANTES", "SE FORME AU-DESSUS DES OCEANS"]
    },
    {
        word: "TEMPETE",
        tour1: "PHENOMENE METEOROLOGIQUE",
        tour2: "PERTURBATION ATMOSPHERIQUE",
        tour3: "TEMPETE",
        tour4: ["VENTS FORTS", "SOUVENT ACCOMPAGNEE DE PLUIE, NEIGE OU GRELE", "PEUT CAUSER DES DEGATS", "LOCALISEE"]
    },
    {
        word: "INONDATION",
        tour1: "PHENOMENE NATUREL",
        tour2: "CATASTROPHE NATURELLE",
        tour3: "INONDATION",
        tour4: ["SUBMERSION PAR L'EAU", "DEBORDEMENT D'UN COURS D'EAU OU REMONTEE DE NAPPE", "PEUT CAUSER DES DEGATS", "SUITE A DE FORTES PLUIES"]
    },
    {
        word: "SECHERESSE",
        tour1: "PHENOMENE NATUREL",
        tour2: "CATASTROPHE NATURELLE",
        tour3: "SECHERESSE",
        tour4: ["MANQUE D'EAU PROLONGE", "SUR UNE ZONE ETENDUE", "AFFECTE LA VEGETATION", "DUE A UN DEFICIT DE PRECIPITATIONS"]
    },
    {
        word: "TREMBLEMENT DE TERRE",
        tour1: "PHENOMENE NATUREL",
        tour2: "SEISME",
        tour3: "TREMBLEMENT DE TERRE",
        tour4: ["MOUVEMENTS BRUSQUES DE L'ECORCE TERRESTRE", "LIBERATION D'ENERGIE", "PEUT CAUSER DES DEGATS", "MESURE PAR UNE ECHELLE DE MAGNITUDE"]
    },
    {
        word: "VOLCAN",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "MONTAGNE",
        tour3: "VOLCAN",
        tour4: ["AVEC UNE OUVERTURE", "LAISSE ECHAPPER DU MAGMA", "ENTRE EN ERUPTION", "PEUT PROJETER DES CENDRES"]
    },
    {
        word: "MONTAGNE",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "RELIEF",
        tour3: "MONTAGNE",
        tour4: ["ELEVATION IMPORTANTE", "AVEC DES PENTES", "SOUVENT ROCHEUSE", "ALTITUDE ELEVEE"]
    },
    {
        word: "COLLINE",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "RELIEF",
        tour3: "COLLINE",
        tour4: ["ELEVATION DE TERRAIN", "MOINS HAUTE QU'UNE MONTAGNE", "PENTES DOUCES", "SOUVENT RECOUVERTE DE VEGETATION"]
    },
    {
        word: "VALLEE",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "RELIEF",
        tour3: "VALLEE",
        tour4: ["DEPRESSION ALLONGEE", "ENTRE DES MONTAGNES OU COLLINES", "SOUVENT PARCOURUE PAR UN COURS D'EAU", "FORME EN V OU EN U"]
    },
    {
        word: "RIVIERE",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "COURS D'EAU",
        tour3: "RIVIERE",
        tour4: ["ECOULEMENT D'EAU NATUREL", "VERS UN FLEUVE, UN LAC OU LA MER", "ALIMENTE PAR DES SOURCES OU LA PLUIE", "LIT PLUS OU MOINS LARGE"]
    },
    {
        word: "LAC",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "ETENDUE D'EAU",
        tour3: "LAC",
        tour4: ["ENTOURE DE TERRES", "ALIMENTE PAR DES COURS D'EAU OU DES SOURCES", "PROFONDEUR VARIABLE", "EAU DOUCE OU SALEE"]
    },
    {
        word: "OCEAN",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "ETENDUE D'EAU",
        tour3: "OCEAN",
        tour4: ["VASTE ETENDUE D'EAU SALEE", "RECOUVRE UNE GRANDE PARTIE DE LA TERRE", "GRANDE PROFONDEUR", "DIVISE EN PLUSIEURS BASSINS"]
    },
    {
        word: "MER",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "ETENDUE D'EAU",
        tour3: "MER",
        tour4: ["ETENDUE D'EAU SALEE", "MOINS VASTE QU'UN OCEAN", "SOUVENT BORDÉE PAR DES CONTINENTS", "PROFONDEUR VARIABLE"]
    },
    {
        word: "FORET",
        tour1: "FORMATION VEGETALE",
        tour2: "ECOSYSTEME",
        tour3: "FORET",
        tour4: ["VASTE ETENDUE", "COUVERTE D'ARBRES", "ABRITE DE NOMBREUSES ESPECES", "ROLE ECOLOGIQUE IMPORTANT"]
    },
    {
        word: "PRAIRIE",
        tour1: "FORMATION VEGETALE",
        tour2: "ECOSYSTEME",
        tour3: "PRAIRIE",
        tour4: ["ETENDUE D'HERBES", "PEU OU PAS D'ARBRES", "SOUVENT UTILISEE POUR LE PATURAGE", "SOL RICHE"]
    },
    {
        word: "DESERT",
        tour1: "FORMATION GEOLOGIQUE",
        tour2: "ECOSYSTEME",
        tour3: "DESERT",
        tour4: ["REGION ARIDE", "AVEC PEU DE PRECIPITATIONS", "VEGETATION RARE", "PEUT ETRE DE SABLE, DE ROCHE OU DE GLACE"]
    },
    {
        word: "SAVANE",
        tour1: "FORMATION VEGETALE",
        tour2: "ECOSYSTEME",
        tour3: "SAVANE",
        tour4: ["FORMATION VEGETALE", "MELANGE D'HERBES ET D'ARBRES", "PRESENT DANS LES REGIONS TROPICALES", "SAISON SECHE ET SAISON HUMIDE"]
    },
    {
        word: "RECIF CORALLIEN",
        tour1: "FORMATION MARINE",
        tour2: "ECOSYSTEME",
        tour3: "RECIF CORALLIEN",
        tour4: ["STRUCTURE FORMEE PAR DES CORAUX", "ABRITE UNE GRANDE BIODIVERSITE", "EN ZONE TROPICALE", "EAUX PEU PROFONDES ET CHAUDES"]
    },
    {
        word: "BANQUISE",
        tour1: "FORMATION GLACIAIRE",
        tour2: "GLACE DE MER",
        tour3: "BANQUISE",
        tour4: ["ETENDUE DE GLACE FLOTTANTE", "FORMEE PAR LE GEL DE L'EAU DE MER", "PRESENTE AUX POLES", "EPAISSEUR VARIABLE"]
    },
    {
        word: "GLACIER",
        tour1: "FORMATION GLACIAIRE",
        tour2: "MASSE DE GLACE",
        tour3: "GLACIER",
        tour4: ["FORME PAR L'ACCUMULATION DE NEIGE", "S'ECOULE LENTEMENT", "SITUE EN MONTAGNE OU AUX POLES", "PEUT CONDUIRE A LA FORMATION DE VALLEES"]
    },
];

let currentWordIndex = Math.floor(Math.random() * gameData.length); // Sélection aléatoire du mot
let currentTour = 1;
let selectedOptions = [];

const wordElement = document.getElementById("word");
const tourElement = document.getElementById("tour");
const instructionElement = document.getElementById("instruction");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const messageElement = document.getElementById("message");

function loadGameData() {
    const data = gameData[currentWordIndex];
    wordElement.textContent = data.word;
    currentTour = 1;
    selectedOptions = [];
    updateTourText();
    updateInstruction();
    generateOptions();
}

function updateTourText() {
    tourElement.textContent = `Tour ${currentTour}`;
}

function updateInstruction() {
    const instructions = [
        "Trouve la catégorie (le genre) le plus général",
        "Trouve la catégorie inférieure la plus générale",
        "Trouve le genre prochain (= la plus petite catégorie à laquelle la chose appartient. Par exemple, pour un \"Labrador\", le genre prochain est \"chien\").",
        "Trouve toutes les différences spécifiques (= les caractéristiques qui, mises ensemble, permettent de définir la chose sans qu'il soit possible de la confondre avec une autre de la même catégorie)."
    ];
    instructionElement.textContent = instructions[currentTour - 1];
}

function generateOptions() {
    optionsElement.innerHTML = "";
    const data = gameData[currentWordIndex];
    let options;
    const optionPool = ["OBJET", "IDEE", "ETRE VIVANT", "COULEUR", "LIEU", "ACTION", "FORME", "NOMBRE", "VEGETAL", "ANIMAL", "MINERAL", "BACTERIE", "CHAMPIGNON", "LIQUIDE", "GAZ", "PROTOZOAIRE", "OISEAU", "POISSON", "REPTILE", "AMPHIBIEN", "INSECTE", "ARACHNIDE", "CRUSTACE", "FELIN", "CANIDE","MATIERE","PHENOMENE","ASTRE","PHENOMENE METEOROLOGIQUE","PHENOMENE NATUREL","FORMATION GEOLOGIQUE", "FORMATION VEGETALE","FORMATION MARINE", "FORMATION GLACIAIRE", "MEUBLE", "APPAREIL ELECTRONIQUE", "SUPPORT D'ECRITURE", "MOYEN DE TRANSPORT", "CONSTRUCTION", "PLANTE HERBACEE", "COMBUSTION", "SATELLITE NATUREL", "PRECIPITATION", "MOUVEMENT D'AIR", "AMAS DE GOUTTELETTES OU CRISTAUX", "PERTURBATION ATMOSPHERIQUE", "CATASTROPHE NATURELLE", "SEISME", "MONTAGNE", "RELIEF", "COURS D'EAU", "ETENDUE D'EAU", "ECOSYSTEME", "GLACE DE MER", "MASSE DE GLACE"];

    if (currentTour === 1) {
        options = [data.tour1];
        while (options.length < 8) {
          let randomOption = optionPool[Math.floor(Math.random() * optionPool.length)];
          if (!options.includes(randomOption) && randomOption !== data.tour2 && randomOption !== data.tour3) {
            options.push(randomOption);
          }
        }
    } else if (currentTour === 2) {
      options = [data.tour2];
      while (options.length < 8) {
        let randomOption = optionPool[Math.floor(Math.random() * optionPool.length)];
        if (!options.includes(randomOption) && randomOption !== data.tour1 && randomOption !== data.tour3) {
          options.push(randomOption);
        }
      }
    } else if (currentTour === 3) {
      options = [data.tour3];
      while (options.length < 8) {
        let randomOption = optionPool[Math.floor(Math.random() * optionPool.length)];
        if (!options.includes(randomOption) && randomOption !== data.tour1 && randomOption !== data.tour2) {
          options.push(randomOption);
        }
      }
    } else {
        options = ["DOMESTIQUE", "ABOIE", "RONRONNE", "VOLE", "NAGE", "PLUS PETIT QUE LE LION", "GRIFFE RETRACTILE", "RUGIT", "MIAULE", "A DES DENTS", "EST HERBIVORE", "EST CARNIVORE", "A UNE QUEUE", "A DES POILS", "A DES PLUMES", "A UN TRONC", "A DES BRANCHES", "A DES FEUILLES OU AIGUILLES", "FAIT DE LA PHOTOSYNTHESE", "PARTIE DE PLANTE", "SOUVENT COLOREE", "PEUT PRODUIRE UN FRUIT", "ORGANE REPRODUCTEUR","POUSSE AU SOL", "DE COULEUR VERTE", "FINE TIGE", "PEUT SERVIR DE NOURRITURE", "A UN PLATEAU", "A DES PIEDS", "EN BOIS, METAL OU PLASTIQUE", "POUR MANGER OU TRAVAILLER","A UN ECRAN", "A UN CLAVIER", "TRAITE L'INFORMATION", "FONCTIONNE A L'ELECTRICITE","CONTIENT DU TEXTE", "A DES PAGES", "RELIURE", "POUR LIRE","COMMUNICATION A DISTANCE", "PORTABLE OU FIXE", "A UN MICRO", "A UN HAUT-PARLEUR","A QUATRE ROUES", "A UN MOTEUR", "POUR TRANSPORTER DES PERSONNES", "ROULE SUR TERRE","A DES AILES", "A UN OU PLUSIEURS MOTEURS", "TRANSPORTE DES PASSAGERS OU DU FRET","FLOTTE SUR L'EAU", "A UNE COQUE", "A UN OU PLUSIEURS MOTEURS OU VOILES", "TRANSPORTE DES PASSAGERS OU DU FRET","A DES MURS", "A UN TOIT", "POUR SE LOGER", "A UNE OU PLUSIEURS PIECES","TRANSPARENTE", "INODORE", "SANS SAVEUR", "ESSENTIELLE A LA VIE","PRODUIT DE LA CHALEUR", "PRODUIT DE LA LUMIERE", "CONSOMME DU COMBUSTIBLE", "A BESOIN D'OXYGENE","INCOLORE", "COMPOSE D'AZOTE, D'OXYGENE...", "ESSENTIEL A LA RESPIRATION","COUCHE SUPERFICIELLE", "MEUBLE", "COMPOSEE DE MINERAUX ET MATIERE ORGANIQUE", "POUR CULTIVER","AU CENTRE DU SYSTEME SOLAIRE", "SPHERE DE GAZ","TOURNE AUTOUR DE LA TERRE", "REFLÈTE LA LUMIERE DU SOLEIL", "PAS D'ATMOSPHERE", "SPHERE ROCHEUSE","TRES ELOIGNEE","EAU QUI TOMBE DES NUAGES", "SOUS FORME DE GOUTTES", "SUITE A LA CONDENSATION", "RESSOURCE EN EAU","SOUS FORME DE CRISTAUX DE GLACE", "PAR TEMPS FROID", "FORME UN MANTEAU BLANC","DEPLACEMENT D'UNE MASSE D'AIR", "CAUSE PAR DES DIFFERENCES DE PRESSION", "PEUT ETRE FAIBLE OU FORT", "RESSENTI COMME UN COURANT D'AIR","EN SUSPENSION DANS L'ATMOSPHERE", "FORME PAR CONDENSATION", "DE COULEUR BLANCHE, GRISE OU NOIRE", "PEUT DONNER DES PRECIPITATIONS","AVEC ECLairs ET TONNERRE", "SOUVENT ASSOCIE A DE FORTES PLUIES", "DU A UNE FORTE INSTABILITE", "PRESENCE DE CUMULONIMBUS","GRANDE ECHELLE", "TOURBILLON DE VENTS VIOLENTS", "AVEC PLUIES ABONDANTES", "SE FORME AU-DESSUS DES OCEANS","VENTS FORTS", "SOUVENT ACCOMPAGNEE DE PLUIE, NEIGE OU GRELE", "PEUT CAUSER DES DEGATS", "LOCALISEE","SUBMERSION PAR L'EAU", "DEBORDEMENT D'UN COURS D'EAU OU REMONTEE DE NAPPE", "SUITE A DE FORTES PLUIES","MANQUE D'EAU PROLONGE", "SUR UNE ZONE ETENDUE", "AFFECTE LA VEGETATION", "DUE A UN DEFICIT DE PRECIPITATIONS","MOUVEMENTS BRUSQUES DE L'ECORCE TERRESTRE", "LIBERATION D'ENERGIE", "MESURE PAR UNE ECHELLE DE MAGNITUDE","AVEC UNE OUVERTURE", "LAISSE ECHAPPER DU MAGMA", "ENTRE EN ERUPTION", "PEUT PROJETER DES CENDRES","ELEVATION IMPORTANTE", "AVEC DES PENTES", "SOUVENT ROCHEUSE", "ALTITUDE ELEVEE","MOINS HAUTE QU'UNE MONTAGNE", "PENTES DOUCES", "SOUVENT RECOUVERTE DE VEGETATION","DEPRESSION ALLONGEE", "ENTRE DES MONTAGNES OU COLLINES", "SOUVENT PARCOURUE PAR UN COURS D'EAU", "FORME EN V OU EN U","ECOULEMENT D'EAU NATUREL", "VERS UN FLEUVE, UN LAC OU LA MER", "ALIMENTE PAR DES SOURCES OU LA PLUIE", "LIT PLUS OU MOINS LARGE","ENTOURE DE TERRES", "ALIMENTE PAR DES COURS D'EAU OU DES SOURCES", "PROFONDEUR VARIABLE", "EAU DOUCE OU SALEE","VASTE ETENDUE D'EAU SALEE", "RECOUVRE UNE GRANDE PARTIE DE LA TERRE", "GRANDE PROFONDEUR", "DIVISE EN PLUSIEURS BASSINS","MOINS VASTE QU'UN OCEAN", "SOUVENT BORDÉE PAR DES CONTINENTS","VASTE ETENDUE", "COUVERTE D'ARBRES", "ABRITE DE NOMBREUSES ESPECES", "ROLE ECOLOGIQUE IMPORTANT","ETENDUE D'HERBES", "PEU OU PAS D'ARBRES", "SOUVENT UTILISEE POUR LE PATURAGE", "SOL RICHE","REGION ARIDE", "AVEC PEU DE PRECIPITATIONS", "VEGETATION RARE", "PEUT ETRE DE SABLE, DE ROCHE OU DE GLACE","MELANGE D'HERBES ET D'ARBRES", "PRESENT DANS LES REGIONS TROPICALES", "SAISON SECHE ET SAISON HUMIDE","STRUCTURE FORMEE PAR DES CORAUX", "ABRITE UNE GRANDE BIODIVERSITE", "EN ZONE TROPICALE", "EAUX PEU PROFONDES ET CHAUDES","ETENDUE DE GLACE FLOTTANTE", "FORMEE PAR LE GEL DE L'EAU DE MER", "PRESENTE AUX POLES", "EPAISSEUR VARIABLE","S'ECOULE LENTEMENT", "SITUE EN MONTAGNE OU AUX POLES", "PEUT CONDUIRE A LA FORMATION DE VALLEES","COMESTIBLE", "POUSSE SUR UN ARBRE", "SOUVENT ROUGE, VERT OU JAUNE", "CONTIENT DES PEPINS"];
        // On ne veut pas de doublon dans le tour 4
        const uniqueOptions = new Set(data.tour4); // Set pour éviter les doublons
        while (uniqueOptions.size < 8) {
          let randomOption = options[Math.floor(Math.random() * options.length)];
          if (!uniqueOptions.has(randomOption))
          uniqueOptions.add(randomOption); // Ajoute des options de la liste générale
        }
        options = Array.from(uniqueOptions);
    }

    
    options = shuffle(options); // Mélange toujours les options
    

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(option) {
    const data = gameData[currentWordIndex];
    const button = event.target;

    if (currentTour < 4) {
        if (option === data[`tour${currentTour}`]) {
            button.classList.add("correct");
            currentTour++;
            if (currentTour > 3) {
                currentTour = 4;
            }
            setTimeout(() => {
                updateTourText();
                updateInstruction();
                generateOptions();
            }, 500);
        } else {
            button.classList.add("incorrect");
            setTimeout(() => {
                button.classList.remove("incorrect");
            }, 500);
        }
    } else {
        if (data.tour4.includes(option)) {
            if (!selectedOptions.includes(option)) {
                selectedOptions.push(option);
            }
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
            setTimeout(() => {
                button.classList.remove("incorrect");
            }, 500);
        }

        if (selectedOptions.length === data.tour4.length) {
            messageElement.textContent = "BRAVO !";
            nextButton.style.display = "block";
        }
    }
}

nextButton.addEventListener("click", () => {
    currentWordIndex = Math.floor(Math.random() * gameData.length);
    messageElement.textContent = "";
    nextButton.style.display = "none";
    loadGameData();
});

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

loadGameData();