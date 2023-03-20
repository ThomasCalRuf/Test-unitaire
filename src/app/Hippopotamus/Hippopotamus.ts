export class Hippopotamus {
  name: string;
  weight: number;
  tusksSize: number;

  constructor(name: string, weight: number, tusksSize: number) {
    this.name = name;
    this.weight = weight;
    this.tusksSize = tusksSize;
  }

  swim() {
    this.weight -= 300;
  }

  eat() {
    this.weight += 1000;
  }

  fight(adversary: Hippopotamus) {
    if (this.tusksSize > adversary.tusksSize) {
      return this;
    } else {
      return adversary;
    }
  }

  toString() {
    return `L'Hippopotame se nomme ${this.name}, il pèse ${this.weight}g, il a des défenses de ${this.tusksSize}cm`;
  }

  cycleOfLife() {
    this.eat();
    this.eat();
    this.swim();
    this.swim();
    this.swim();
  }
}
