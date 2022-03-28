class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(newSkill) {
    this.skills.push(newSkill);
  }
  showStatus() {
    console.log(
      `${this.name}-status \n health: ${this.health} \n magic: ${this.magic}`
    );
    console.log();
  }
  attack(index, enemy) {
    let attack = this.skills[index];

    if (attack.amountMagic > this.magic) {
      console.log("not enough magic for attack");
      console.log();
      return;
    }

    if (enemy.health <= 0) {
      console.log(`${enemy.name} is already dead!`);
      console.log();
      return;
    }

    if (this.health <= 0) {
      console.log(`${this.name} is already dead!`);
      console.log();
      return;
    }

    enemy.health = enemy.health - attack.amountDamage;
    this.magic = this.magic - attack.amountMagic;

    console.log(
      `${this.name} launched skill ${attack.attackName} successfully!`
    );
    console.log(`${enemy.name} got ${attack.amountDamage} damage!`);

    if (enemy.health <= 0) {
      console.log(`${enemy.name} is killed!`);
    }
    console.log("----------");
  }
  getMagic() {
    let randomMagic = Math.floor(Math.random() * 10) + 20;

    this.magic += randomMagic;
    console.log(`${this.name} got ${randomMagic} magic back`);
    console.log();
  }
}

class AttackSkill {
  constructor(attackName, amountDamage, amountMagic) {
    this.attackName = attackName;
    this.amountDamage = amountDamage;
    this.amountMagic = amountMagic;
  }
}

//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);

//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("Lightning", 40, 30);
let poisonSeed = new AttackSkill("Poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu); // Hier ist bulbusaur schon tot. Deshalb darf er gar nicht mehr angreifen.
