// 1st Example — Basic Class with Constructor and Method
class Person {
    constructor(name, age) {
        // 'this' refers to the new object being created by 'new'
        // Step 1: blank object created, Step 2: constructor runs, Step 3: object returned
        this.name = name;
        this.age = age;
    }

    talk() {
        // 'name' alone is an undefined variable here — always use 'this.name' to access object properties inside class methods
        console.log(`Hi, My name is ${this.name}`); // BUG: instead of ${name} it should be ${this.name}
    }
}

let p1 = new Person('Kaushal', 20);
// p1 is now → { name: 'Kaushal', age: 20 }

p1.talk(); // Hi, My name is Kaushal

// this.name = name    |   Directly on the object — each object has its own copy
