// Inheritance 2 — Understanding the execution flow of constructors
// When 'new' is called on a child class, the child constructor runs first,
// then super() triggers the parent constructor — watch the console.log order

// Parent class
class Person {
    constructor(name, age) {
        console.log('Parent class constructor'); // runs 2nd — triggered by super()
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}.`);
    }
}

// Child class 1 — adds 'marks' on top of Person's name and age
class Student extends Person {
    constructor(name, age, marks) {
        console.log('Student class constructor'); // runs 1st
        super(name, age); // calls Person's constructor — sets this.name and this.age
        this.marks = marks; // Student's own property
    }
}

// Child class 2 — adds 'subject' on top of Person's name and age
class Teacher extends Person {
    constructor(name, age, subject) {
        console.log('Teacher class constructor'); // runs 1st
        super(name, age); // calls Person's constructor — sets this.name and this.age
        this.subject = subject; // Teacher's own property
    }
}

let stu1 = new Student('Kaushal', 20, 95);
// stu1 → { name: 'Kaushal', age: 20, marks: 95 }
// Access: stu1.name, stu1.age, stu1.marks
stu1.talk(); // Hi, I am Kaushal. — inherited from Person

let tea1 = new Teacher('Ramesh', 45, 'Maths');
// tea1 → { name: 'Ramesh', age: 45, subject: 'Maths' }
// Access: tea1.name, tea1.age, tea1.subject
tea1.talk(); // Hi, I am Ramesh. — inherited from Person
