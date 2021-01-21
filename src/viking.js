// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength
    };
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;       
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const saxon = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];

        const message = saxon.receiveDamage(viking.strength);
        if(saxon.health < 1) {
            this.saxonArmy.splice(saxonIndex, 1)
        }
        
        return message;

     }
   
         

    saxonAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const saxon = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];

        const message = viking.receiveDamage(saxon.strength);
        if(viking.health < 1) {
            this.vikingArmy.splice(vikingIndex, 1)
        }
    
    return message;
         
   }

/* generic attack: Todo
attack(attackArmy, defendArmy) {
    const attackerIndex = Math.floor(Math.random() * attackArmy.length);
    const defenderIndex = Math.floor(Math.random() * defendArmy.length);

    const attackerSoldier = attackArmy[attackerIndex];
    const defenderSoldier = defendArmy[defenderIndex];

    const message = defenderSoldier.receiveDamage(attackerSoldier.strength);
    if (defenderSoldier.health < 1) {
      defendArmy.splice(defenderIndex, 1);
    }
    return message;
  }
*/

    showStatus() {
    //    if the Saxon array is empty, should return "Vikings have won the war of the century!"
    if (this.saxonArmy.length === 0) { return `Vikings have won the war of the century!`}
    
// if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."

    else if (this.vikingArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}

//if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."

else { return "Vikings and Saxons are still in the thick of battle."}
    }

}

