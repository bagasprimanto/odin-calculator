function checkIfNumbers(a,b) {
    return (typeof(+a) === 'number' && typeof(+b) === 'number');
}

function add(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a + +b).toFixed(15)) : "ERROR";
}

function subtract(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a - +b).toFixed(15)) : "ERROR";
}

function multiply(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a * +b).toFixed(15)) : "ERROR";
}

function divide(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a / +b).toFixed(15)) : "ERROR";
}

console.log("Add");
console.log(add(1,2));
console.log(add(4,2));
console.log(add(1,-2));

console.log("Subtract");
console.log(subtract(1,2));
console.log(subtract(4,2));
console.log(subtract(1,-2));

console.log("Multiply");
console.log(multiply(1,2));
console.log(multiply(4,2));
console.log(multiply(1,-2));
console.log(multiply(-1,-2));

console.log("Divide");
console.log(divide(1,2));
console.log(divide(4,2));
console.log(divide(1,-2));
console.log(divide(-1,-2));
console.log(divide(3,7));
console.log(divide(7,3));
console.log(add(divide(3,7),divide(7,3)));