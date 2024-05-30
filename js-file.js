const MAX_DECIMALS = 8;
const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);
const screen = document.querySelector("#screen");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;
let moreThanOneOperator = false;

function initializeEventListeners() {

    buttonsArray.forEach((button) => {
        if(button.className === "number") {
            button.addEventListener("click", (e) => {
                updateDisplay(e);
            });
        }

        if(button.className === "clear") {
            button.addEventListener("click", (e) => {
                resetVariables();
                updateDisplay(e);
            });
        }

        if(button.className === "operator") {
            button.addEventListener("click", (e) => {
                handleOperator(e);
                updateDisplay(e);
            });
        }

        if(button.className === "equals") {
            button.addEventListener("click", (e) => {
                resolveOperation();
                updateDisplay(e);
                handleEqualsPressed();
            });
        }

        if(button.className === "decimal") {
            button.addEventListener("click", (e) => {
                updateDisplay(e);
            });
        }

        if(button.className === "delete") {
            button.addEventListener("click", (e) => {
                updateDisplay(e);
            })
        }
    });
}

function resetVariables() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    result = null;
    moreThanOneOperator = false;
}

function updateDisplay(e) {
    if (e.target.className === "number") {
        let button = e.target;

        if(screen.textContent === '0' || moreThanOneOperator) {
            screen.textContent = button.textContent;
            moreThanOneOperator = false;
        } else {
            screen.textContent += button.textContent;
        }
    }

    if (e.target.className === "clear") {
        screen.textContent = 0;
    }

    if (e.target.className === "operator") {
        if(result) {
            screen.textContent = result;
            moreThanOneOperator = true;
        } else {
            screen.textContent = 0;
        }
    }

    if (e.target.className === "equals") {
        if(result) {
            screen.textContent = result;
            moreThanOneOperator = true;
        } else {
            screen.textContent = 0;
        }
    }

    if (e.target.className === "decimal") {
        let display = screen.textContent;
        let button = e.target;
        
        //If still zero
        if(screen.textContent === '0') {
            screen.textContent += ".";
        } else {
            if(screen.textContent === '0' || moreThanOneOperator) {
                screen.textContent = '0.';
                moreThanOneOperator = false;
            } else {
                if(!display.includes('.')) {
                    screen.textContent += button.textContent;
                }
            }
        }
    }

    if (e.target.className === "delete") {
        if(screen.textContent === '0') {
            screen.textContent = "0";
        } else {
            if(!moreThanOneOperator) {
                let display = screen.textContent;
                if(!display.slice(0, -1)) {
                    screen.textContent = 0;
                } else {
                    screen.textContent = display.slice(0, -1);
                }
            }
        }
    }

    screen.textContent = screen.textContent.substring(0, 10);
}

function handleOperator(e) {
    if(!operator) {
        operator = e.target.textContent;
        firstNumber = screen.textContent;
    } else {
        //Resolve the previous operator
        resolveOperation();
        operator = e.target.textContent;
        firstNumber = result;
    }
}

function resolveOperation() {
    secondNumber = screen.textContent;
    result = operate(firstNumber, secondNumber, operator);
    if(result >= Infinity) {
        alert("Error, division by 0 is not allowed");
        resetVariables();
        screen.textContent = 0;
    } else {
        operator = null;
    }
}

function handleEqualsPressed() {
    result = 0; //Reset result to 0 so that when we press an operator button, the screen is updated to zero
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

initializeEventListeners();

