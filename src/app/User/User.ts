export class User {
  email: string;
  nom: string;
  prenom: string;
  age: number;

  constructor(email: string, nom: string, prenom: string, age: number) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  isValid(): boolean {
    const email = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (
      this.email.match(email) != null &&
      this.nom != '' &&
      this.prenom != '' &&
      this.age >= 13
    ) {
      return true;
    } else {
      return false;
    }
  }
}
