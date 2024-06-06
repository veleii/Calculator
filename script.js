
// Välj alla knappar med klassen 'digit'
const digitButtons = document.querySelectorAll('.digit');

// Välj elementet där vi vill visa den valda siffran
const inputDisplay = document.getElementById('input');

// Välj resultatvisnings-elementet
const resultDisplay = document.getElementById('result');

// Variabler för att lagra inmatningar och resultat
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

// Lägg till en eventlistener för varje sifferknapp
digitButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Lägg till siffra till nuvarande inmatning
        currentInput = button.textContent.trim();
        inputDisplay.textContent = currentInput;

        if (operator) {
            // Om en operator har valts, sätt andra operanden och beräkna resultatet
            secondOperand = currentInput;
            result = calculate(firstOperand, secondOperand, operator);
            resultDisplay.textContent = result;
            firstOperand = result;
            secondOperand = null;
            operator = null; // Förbereda för nästa operation
        } else {
            // Annars, sätt första operanden
            firstOperand = currentInput;
        }
    });
});

// Lägg till event listeners för operatorer (+, -, *, /)
document.querySelector('.badd').addEventListener('click', function() {
    if (firstOperand !== null) {
        operator = '+';
    }
});

document.querySelector('.bsub').addEventListener('click', function() {
    if (firstOperand !== null) {
        operator = '-';
    }
});

document.querySelector('.bmul').addEventListener('click', function() {
    if (firstOperand !== null) {
        operator = '*';
    }
});

document.querySelector('.bdiv').addEventListener('click', function() {
    if (firstOperand !== null) {
        operator = '/';
    }
});

// Event listener för "Clear" knappen
document.querySelector('.bclear').addEventListener('click', function() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
    inputDisplay.textContent = '';
    resultDisplay.textContent = '0';
});

// Funktion för att beräkna resultatet
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return parseFloat(firstOperand) + parseFloat(secondOperand);
        case '-':
            return parseFloat(firstOperand) - parseFloat(secondOperand);
        case '*':
            return parseFloat(firstOperand) * parseFloat(secondOperand);
        case '/':
            if (parseFloat(secondOperand) === 0) {
                return 'Error: Division by zero';
            }
            return parseFloat(firstOperand) / parseFloat(secondOperand);
        default:
            return null;
    }
}