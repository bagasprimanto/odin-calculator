const MAX_DECIMALS = 15;
const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);
const screen = document.querySelector("#screen");

function initializeEventListeners() {

    buttonsArray.forEach((button) => {
        if(button.className === "number") {
            button.addEventListener("click", () => {
                if(screen.textContent === '0') {
                    screen.textContent = button.textContent;
                } else {
                    screen.textContent += button.textContent;
                }
            });
        }

        if(button.className === "clear") {
            button.addEventListener("click", () => {
                screen.textContent = '0';
            });
        }

        if(button.className === "operator") {
            button.addEventListener("click", () => {
                screen.textContent = '0';
            });
        }
    });
}

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
                return add(a,b);
            case '-':
                return subtract(a,b);
            case '*':
                return multiply(a,b);
            case '/':
                return divide(a,b);
        }   
    }
}

let firstNumber;
let operator;
let secondNumber;

initializeEventListeners();

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

