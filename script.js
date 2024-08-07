let num1 = "";
let num2 = "";
let sum = 0;
let isOperatorSelected = false;
let currentOperator = "";

const calculatorDisplay = document.getElementById("calculator-display");

function clearAll() {
        calculatorDisplay.innerText = "";
        num1 = 0;
        num2 = 0;
        sum = 0;
        isOperatorSelected = false;
        currentOperator = "";
}

document.querySelector('.calculator').addEventListener('click', function (event) {
        if (event.target.classList.contains('calculator-item')) {
                const value = event.target.getAttribute('data-value');
                if (value === "AC") {
                        clearAll();
                        return;
                }
                else if (value === "+") {
                        if (isOperatorSelected) {
                                alert("Invalid input");
                                clearAll();
                                return;
                        }
                        isOperatorSelected = true;
                        currentOperator = "+";
                        num1 = calculatorDisplay.innerText;
                        calculatorDisplay.innerText = "+";
                        return;
                }
                else if (value === "-") {
                        if (isOperatorSelected) {
                                alert("Invalid input");
                                clearAll();
                                return;
                        }
                        isOperatorSelected = true;
                        currentOperator = "-";
                        num1 = calculatorDisplay.innerText;
                        calculatorDisplay.innerText = "-";
                        return;
                }
                else if (value === "*") {
                        if (isOperatorSelected) {
                                alert("Invalid input");
                                clearAll();
                                return;
                        }
                        isOperatorSelected = true;
                        currentOperator = "*";
                        num1 = calculatorDisplay.innerText;
                        calculatorDisplay.innerText = "*";
                        return;
                }
                else if (value === "/") {
                        if (isOperatorSelected) {
                                alert("Invalid input");
                                clearAll();
                                return;
                        }
                        isOperatorSelected = true;
                        currentOperator = "/";
                        num1 = calculatorDisplay.innerText;
                        calculatorDisplay.innerText = "/";
                        return;
                }
                else if (value === "=") {
                        num1 = Number(num1);
                        num2 = Number(num2);

                        isOperatorSelected = false;
                        if (currentOperator === "+") {
                                sum = num1 + num2;
                        }
                        else if (currentOperator === "-") {
                                sum = num1 - num2;
                        }
                        else if (currentOperator === "*") {
                                sum = num1 * num2;
                        }
                        else if (currentOperator === "/") {
                                sum = num1 / num2;
                        }
                        else {
                                sum = num1;
                        }
                        console.log(sum);
                        console.log(num1);
                        console.log(num2);
                        calculatorDisplay.innerText = sum;
                        return;
                }
                else {
                        calculatorDisplay.innerText += value;
                        const regex = /[+\-*/]/;
                        const uncleanedString = calculatorDisplay.innerText;
                        let cleanedString = uncleanedString.replace(/[+\-*/]/g, " ");
                        calculatorDisplay.innerText = cleanedString;
                        if (isOperatorSelected) {
                                num2 = calculatorDisplay.innerText;
                        }
                        return;
                }
                calculatorDisplay.innerText += value;
        }
});