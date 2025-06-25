class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  printInfo() {
    console.log(
      `Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}`
    );
  }
}

const p1 = new Person("Alex", 20, "Belarus");
const p2 = new Person("Alice", 22, "Poland");

p1.printInfo();
p2.printInfo();
