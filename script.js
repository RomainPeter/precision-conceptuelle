const gameData = [
    {
        word: "chat",
        tour1: "ETRE VIVANT",
        tour2: "ANIMAL",
        tour3: "FELIN",
        tour4: ["DOMESTIQUE", "RONRONNE", "PLUS PETIT QUE LE LION", "GRIFFE RETRACTILE"]
    },
    {
        word: "pomme",
        tour1: "ETRE VIVANT",
        tour2: "VEGETAL",
        tour3: "FRUIT",
        tour4: ["COMESTIBLE", "POUSSE SUR UN ARBRE", "SOUVENT ROUGE, VERT OU JAUNE", "CONTIENT DES PEPINS"]
    },
    // Ajoutez plus de mots ici...
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

    if (currentTour === 1) {
        options = ["OBJET", "IDEE", data.tour1, "COULEUR", "LIEU", "ACTION", "FORME", "NOMBRE"];
    } else if (currentTour === 2) {
        options = ["VEGETAL", data.tour2, "MINERAL", "BACTERIE", "CHAMPIGNON", "LIQUIDE", "GAZ", "PROTOZOAIRE"];
    } else if (currentTour === 3) {
        options = ["OISEAU", "POISSON", "REPTILE", "AMPHIBIEN", "INSECTE", "ARACHNIDE", "CRUSTACE", data.tour3];
    } else {
        options = ["DOMESTIQUE", "ABOIE", "RONRONNE", "VOLE", "NAGE", "PLUS PETIT QUE LE LION", "GRIFFE RETRACTILE", "RUGIT", "MIAULE", "A DES DENTS", "EST HERBIVORE", "EST CARNIVORE", "A UNE QUEUE", "A DES POILS", "A DES PLUMES"];
        // On ne veut pas de doublon dans le tour 4
        const uniqueOptions = new Set(data.tour4); // Set pour éviter les doublons
        while (uniqueOptions.size < 8) {
          uniqueOptions.add(options.shift()); // Ajoute des options de la liste générale
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