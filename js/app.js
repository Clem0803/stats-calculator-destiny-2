import { ArmorPart } from "./class.js";

/* ================================
FONCTIONS
 ================================ */

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`);
}

function calculStat(stat) {
    let resultat = casque[stat] + gantelets[stat] + torse[stat] + jambieres[stat] + objetClasse[stat];
    // console.log(casque[stat]);
    return resultat;
}

/* ================================
VARIABLES 
 ================================ */

// ================================ OBJETS ================================
const casque = new ArmorPart(getElement(".casque"));
const gantelets = new ArmorPart(getElement(".gantelets"));
const torse = new ArmorPart(getElement(".torse"));
const jambieres = new ArmorPart(getElement(".jambieres"));
const objetClasse = new ArmorPart(getElement(".objet-de-classe"));

// ================================ ELEMENTS DOM ================================
// Sélection des progress bar de la zone des résultats
const progressMobilite = document.querySelector(".progress-bar.mobilite");
const progressResistance = document.querySelector(".progress-bar.resistance");
const progressRecuperation = document.querySelector(".progress-bar.recuperation");
const progressDiscipline = document.querySelector(".progress-bar.discipline");
const progressIntelligence = document.querySelector(".progress-bar.intelligence");
const progressForce = document.querySelector(".progress-bar.force");

// Sélection des zones utilisées pour afficher les résultats
const mobiliteDOM = document.querySelector(".res-mobilite");
const resistanceDOM = document.querySelector(".res-resistance");
const recuperationDOM = document.querySelector(".res-recuperation");
const disciplineDOM = document.querySelector(".res-discipline");
const intelligenceDOM = document.querySelector(".res-intelligence");
const forceDOM = document.querySelector(".res-force");

const body = document.querySelector("body");
const resultZone = document.querySelector(".armor-part-result");

// ================================ VARIABLES ================================
let resultatMobilite = 0;
let resultatResistance = 0;
let resultatRecuperation = 0;
let resultatDiscipline = 0;
let resultatIntelligence = 0;
let resultatForce = 0;
const inputStat = ["mobilite", "resistance", "recuperation", "discipline", "intelligence", "force"];

// ================================ BOUTONS ================================
const calculStatsBtn = document.querySelector(".calcul-stats");
const resetStatBtn = document.querySelector(".reset-stats");

// ================================ COMPORTEMENT DES BOUTONS ================================
// Comportement du bouton pour calculer et afficher les résultats
calculStatsBtn.addEventListener("click", function () {
    // Update des valeurs des attributs de chaque partie d'armure
    casque.majValeur();
    gantelets.majValeur();
    torse.majValeur();
    jambieres.majValeur();
    objetClasse.majValeur();

    // Somme de chaque attributs
    resultatMobilite = calculStat("mobilite");
    resultatResistance = calculStat("resistance");
    resultatRecuperation = calculStat("recuperation");
    resultatDiscipline = calculStat("discipline");
    resultatIntelligence = calculStat("intelligence");
    resultatForce = calculStat("force");

    // Affichage des résultats dans les spans
    mobiliteDOM.textContent = resultatMobilite;
    resistanceDOM.textContent = resultatResistance;
    recuperationDOM.textContent = resultatRecuperation;
    disciplineDOM.textContent = resultatDiscipline;
    intelligenceDOM.textContent = resultatIntelligence;
    forceDOM.textContent = resultatForce;

    // Affichage des résultats dans les progress bar
    progressMobilite.value = resultatMobilite;
    progressResistance.value = resultatResistance;
    progressRecuperation.value = resultatRecuperation;
    progressDiscipline.value = resultatDiscipline;
    progressIntelligence.value = resultatIntelligence;
    progressForce.value = resultatForce;
});

// Comportement du bouton qui remet toutes les valeurs à zéro
resetStatBtn.addEventListener("click", function () {
    casque.reset();
    gantelets.reset();
    torse.reset();
    jambieres.reset();
    objetClasse.reset();
});
/* ================================
COMPORTEMENT PAGE
 ================================ */

window.addEventListener("load", function () {
    // Récupération de la largeur de l'ecran
    const screenWidth = body.getBoundingClientRect().width;
    // console.log(resultZone.classList);
    if (screenWidth < 576) {
        resultZone.classList.remove("armor-part-result");
        resultZone.classList.add("grid-armor");
    }
});
