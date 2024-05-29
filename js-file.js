function checkIfNumbers(a,b) {
    return (typeof(+a) === 'number' && typeof(+b) === 'number');
}

function add(a,b) {
    return checkIfNumbers(a,b) ? +a + +b : "ERROR";
}

function subtract(a,b) {
    return checkIfNumbers(a,b) ? +a - +b : "ERROR";
}

console.log("Add");
console.log(add(1,2));
console.log(add(4,2));
console.log(add(1,-2));

console.log("Subtract");
console.log(subtract(1,2));
console.log(subtract(4,2));
console.log(subtract(1,-2));