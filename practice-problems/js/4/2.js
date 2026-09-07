// Multiplication Table
function printMultiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let tableRow = `${n} * ${i} = ${n * i}`;
        table.push(tableRow);
    }
    return table;
}

console.log(printMultiplicationTable(2));
