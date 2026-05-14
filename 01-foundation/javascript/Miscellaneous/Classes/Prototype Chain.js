// Prototype Chain in action
class Animal {
    // Method defined here goes onto Animal.prototype, NOT on each object
    // Every object created from Animal shares this one method via the prototype chain
    speak() {   // ← THIS is the point — where does this method actually live?
        console.log('Some sound');
    }
}

let dog = new Animal();
// dog object itself is → {} (no methods directly on it)
// but dog.__proto__ → Animal.prototype → which HAS speak()
// JS always walks up the chain when it can't find something directly on the object

dog.speak(); // Some sound

// speak() method  |  On the prototype — all objects share one copy
