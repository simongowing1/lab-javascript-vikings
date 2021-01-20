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
        if (this.health === 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
        let saxonFighter = '';
        let vikingFighter = ''
    for (let i = 0 ; i < this.saxonArmy.length; i++) {
       saxonFighter = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
       //console.log(saxonFighter.health)  
    };

    for (let i = 0 ; i < this.saxonArmy.length; i++) {
        vikingFighter = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        //console.log(vikingFighter.strength)  
    }
        let damage = saxonFighter.receiveDamage(vikingFighter.strength)
     //   console.log(this.saxonArmy.indexOf(saxonFighter))
     if (damage < 0){
         this.SaxonArmy.splice(this.saxonArmy.indexOf(saxonFighter),1);
         return this.SaxonArmy.length   
        }   
     return damage;

        

       

     }
   
         

   // saxonAttack() {

   // }
   // showStatus() {

   // }

}

