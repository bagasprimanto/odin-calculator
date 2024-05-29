const MAX_DECIMALS = 15;

function checkIfNumbers(a,b) {
    return (typeof(+a) === 'number' && typeof(+b) === 'number');
}

function add(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a + +b).toFixed(MAX_DECIMALS)) : "ERROR";
}

function subtract(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a - +b).toFixed(MAX_DECIMALS)) : "ERROR";
}

function multiply(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a * +b).toFixed(MAX_DECIMALS)) : "ERROR";
}

function divide(a,b) {
    return checkIfNumbers(a,b) ? parseFloat((+a / +b).toFixed(MAX_DECIMALS)) : "ERROR";
}

function operate(a,b,op) {
    if(checkIfNumbers(a,b)) {
        switch (op) {
            case '+':
                add(a,b);
                break;
            case '-':
                subtract(a,b);
                break;
            case '*':
                multiply(a,b);
                break;
            case '/':
                divide(a,b);
                break;
        }   
    }
}

// console.log("Add");
// console.log(add(1,2));
// console.log(add(4,2));
// console.log(add(1,-2));

// console.log("Subtract");
// console.log(subtract(1,2));
// console.log(subtract(4,2));
// console.log(subtract(1,-2));

// console.log("Multiply");
// console.log(multiply(1,2));
// console.log(multiply(4,2));
// console.log(multiply(1,-2));
// console.log(multiply(-1,-2));

// console.log("Divide");
// console.log(divide(1,2));
// console.log(divide(4,2));
// console.log(divide(1,-2));
// console.log(divide(-1,-2));
// console.log(divide(3,7));
// console.log(divide(7,3));
// console.log(add(divide(3,7),divide(7,3)));

let firstNumber;
let operator;
let secondNumber;