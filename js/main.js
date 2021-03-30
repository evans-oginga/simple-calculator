
/*
    functions that display the characters
    pressed onto the display screen
*/
function showValueZero() {
    return calculator.display.value += '0';
};

function showValueOne() {
    return calculator.display.value += '1';
};

function showValueTwo() {
    return calculator.display.value += '2';
};

function showValueThree() {
    return calculator.display.value += '3';
};

function showValueFour() {
    return calculator.display.value += '4';
};

function showValueFive() {
    return calculator.display.value += '5';
};

function showValueSix() {
    return calculator.display.value += '6';
};

function showValueSeven() {
    return calculator.display.value += '7';
};

function showValueEight() {
    return calculator.display.value += '8';
};

function showValueNine() {
    return calculator.display.value += '9';
};

function showOperatorAdd() {
    return calculator.display.value += '+';
};

function showOperatorSubtract() {
    return calculator.display.value += '-';
};

function showOperatorMultiply() {
    return calculator.display.value += '*';
};

function showOperatorDivide() {
    return calculator.display.value += '/';
};


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Error cannot divide by zero";
    } else {
        return firstNumber / secondNumber;
    }

};

function clearScreen() {
    return calculator.display.value = '';
};


function operate(firstNumber, op, secondNumber) {
    if (op === add) {
        return (add(firstNumber, secondNumber));
    } else if (op === subtract) {
        return (subtract(firstNumber, secondNumber));
    } else if (op === multiply) {
        return (multiply(firstNumber, secondNumber));
    } else if (op === divide) {
        return (divide(firstNumber, secondNumber));
    } else {
        return "Invalid operator!";
    }
};

function parseCalculationString(s) {
    /*
         --- 
         Parse a calculation string into an array of numbers and operators
    */

    let calculation = [],
        current = '';
    for (let i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}

function calculate(calc) {
    /*
         --- Perform a calculation expressed as an array of operators and numbers

    */
    let ops = [{ '^': (a, b) => Math.pow(a, b) },
            { '*': (a, b) => a * b, '/': (a, b) => a / b },
            { '+': (a, b) => a + b, '-': (a, b) => a - b }
        ],
        newCalc = [],
        currentOp;
    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] =
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
}

function showResults() {
    result = calculate(parseCalculationString(calculator.display.value));
    return calculator.display.value = result;

};

console.log(add(2, 3));
console.log(subtract(56, 23));
console.log(multiply(25, 25));
console.log(divide(90, 10));
console.log(operate(2, add, 3));