// Use of "this" keyword
const student = {
    name: 'Kaushal',
    age: 21,
    subject: 'CSE',
    marks: 98,
    getInfo: () => {
        return `My name is ${this.name} and I am ${this.age} years old, I have got ${this.marks} in ${this.subject}`;
    },
};
