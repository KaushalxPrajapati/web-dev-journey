// Inheritance — Child class inheriting properties and methods from Parent class

// Parent class (also called Base class / Super class)
// Contains shared properties and methods that all mammals have
class Mammals {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.type = 'warm-blooded'; // shared across all mammals
    }

    // Inherited method — available to all child classes via prototype chain
    info() {
        console.log(`${this.name} is a ${this.type} animal of the ${this.breed} breed.`);
    }
}

// Child class 1 — 'extends' gives Dog everything Mammals has, plus its own stuff
class Dog extends Mammals {
    constructor(name, breed) {
        // super() must be called before 'this' — passes name and breed to Mammals constructor
        super(name, breed);
    }

    // Dog's own method — not inherited, only exists on Dog
    speak() {
        console.log(`I am ${this.name}, I am a Dog, and I woof!`);
    }
}

// Child class 2 — 'extends' gives Cat everything Mammals has, plus its own stuff
class Cat extends Mammals {
    constructor(name, breed) {
        // super() already sets this.name, this.breed, this.type via Mammals constructor
        super(name, breed);
    }

    // Cat's own method — not inherited, only exists on Cat
    speak() {
        console.log(`I am ${this.name}, I am a Cat, and I meow!`);
    }
}

let d1 = new Dog('Bruno', 'Labrador'); // d1 is an object
// d1 → { name: 'Bruno', breed: 'Labrador', type: 'warm-blooded' }
d1.speak(); // I am Bruno, I am a Dog, and I woof!
d1.info(); // Bruno is a warm-blooded animal of the Labrador breed.

let c1 = new Cat('Furry', 'Persian'); // c1 is an object
// c1 → { name: 'Furry', breed: 'Persian', type: 'warm-blooded' }
c1.speak(); // I am Furry, I am a Cat, and I meow!
c1.info(); // Furry is a warm-blooded animal of the Persian breed.
