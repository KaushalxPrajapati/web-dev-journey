// Using this in Objects
const person = {
    name: 'Hitesh',
    age: 19.5,
    introduce: function () {
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    },
};

function outer() {
    function inner() {
        return 'Inner function called';
    }
    return inner();
}

console.log(person.introduce());
console.log(outer());
