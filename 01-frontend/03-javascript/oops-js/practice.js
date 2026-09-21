class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

let p1 = new Person('Kaushal', 21);
