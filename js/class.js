export class ArmorPart {
    constructor(element) {
        this.partOfArmor = element;
        this.nomClasseStat = [
            ".input-mobilite",
            ".input-resistance",
            ".input-recuperation",
            ".input-discipline",
            ".input-intelligence",
            ".input-force",
        ];

        this.mobilite = 0;
        this.resistance = 0;
        this.recuperation = 0;
        this.discipline = 0;
        this.intelligence = 0;
        this.force = 0;

        this.inputMobilite = element.querySelector("input.input-mobilite");
        this.inputResistance = element.querySelector("input.input-resistance");
        this.inputRecuperation = element.querySelector("input.input-recuperation");
        this.inputDiscipline = element.querySelector("input.input-discipline");
        this.inputIntelligence = element.querySelector("input.input-intelligence");
        this.inputForce = element.querySelector("input.input-force");
        
        this.reset = this.reset.bind(this);
        this.majValeur = this.majValeur.bind(this);
        
        this.inputMobilite.addEventListener("change", this.majMobilite);
        this.inputResistance.addEventListener("change", this.majResistance);
        this.inputRecuperation.addEventListener("change", this.majRecuperation);
        this.inputDiscipline.addEventListener("change", this.majDiscipline);
        this.inputIntelligence.addEventListener("change", this.majIntelligence);
        this.inputForce.addEventListener("change", this.majForce);
    }
    
    reset() {
        for (let i = 0; i < this.nomClasseStat.length; i++) {
            this.partOfArmor.querySelector(this.nomClasseStat[i]).value = 0;
            console.log(this.partOfArmor);
            // Vérification si reset de la valeur des stats
            // console.log(`Stat n°${this.nomClasseStat[i]} = ${this.partOfArmor.querySelector(this.nomClasseStat[i]).value}`);
        }
    }
    
    majValeur() {
        // Sélection des valeurs des inputs
        this.mobilite = parseInt(this.inputMobilite.value);
        this.resistance = parseInt(this.inputResistance.value);
        this.recuperation = parseInt(this.inputRecuperation.value);
        this.discipline = parseInt(this.inputDiscipline.value);
        this.intelligence = parseInt(this.inputIntelligence.value);
        this.force = parseInt(this.inputForce.value);
        // console.log("MAJ des valeurs");
    }
}