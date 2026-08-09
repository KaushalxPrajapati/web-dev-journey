/*
=============================================================================
Question: Write a function cal led checkTriangleType that takes three parameters representing the lengths of the sides of a triangle.
The function should return a string indicating the type of triangle: "equilateral, "isosceles" or "scalene".
=============================================================================
*/

function checkTriangleType(a, b, c) {
    if (!a || !b || !c) {
        return 'Enter correct numbers';
    }

    if (a === b && b === c) return 'Equilateral';
    else if (a === b || b === c || c === a) return 'Isosceles';
    else if (a !== b && b !== c) return 'Scalene';
    else return 'Wrong Input';
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(5, 4, 4));
console.log(checkTriangleType(3, 5, 7));
