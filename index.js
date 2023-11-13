let displayValue = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(newOperator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '';
        operator = newOperator;
    } else {
        calculateResult();
        operator = newOperator;
    }
}

function calculateResult() {
    if (operator === '') return;

    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;

    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}