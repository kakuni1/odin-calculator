document.addEventListener("DOMContentLoaded", function () {
  const calculatorButtons = document.querySelectorAll("button");
  const firstNumber = document.createElement("div");
  const secondNumber = document.createElement("div");
  const resultNumber = document.createElement("div");
  const operationSymbol = document.createElement("div");
  firstNumber.classList.add("firstNumber");
  secondNumber.classList.add("secondNumber");
  resultNumber.classList.add("resultNumber");
  operationSymbol.classList.add("operationSymbol");
  firstNumber.textContent = "0";
  secondNumber.textContent = "";
  resultNumber.textContent = "";
  operationSymbol.textContent = "";
  container.appendChild(firstNumber);
  container.appendChild(secondNumber);
  container.appendChild(resultNumber);
  container.appendChild(operationSymbol);

  // userArray[0] : calculation result
  // userArray[1] : 1st number slot
  // userArray[2] : 2nd number slot
  // userArray[3] : math operation symbol
  let userArray = ["0", "", "", ""];
  let currentArrayPosition = 1;
  let currentNumber = 0;
  let currentOperation = null;

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "zero":
          currentNumber = "0";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "one":
          currentNumber = "1";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "two":
          currentNumber = "2";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "three":
          currentNumber = "3";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "four":
          currentNumber = "4";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "five":
          currentNumber = "5";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "six":
          currentNumber = "6";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "seven":
          currentNumber = "7";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "eight":
          currentNumber = "8";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "nine":
          currentNumber = "9";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, resultNumber);
          break;
        case "decimal":
          if (!userArray[currentArrayPosition].toString().includes(".")) {
            userArray[currentArrayPosition] =
              userArray[currentArrayPosition].toString() + ".";
          }
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          break;
        case "add":
          currentArrayPosition = 2;
          userArray[3] = "+";
          calculate(userArray, currentOperation);
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentOperation = "add";
          break;
        case "subtract":
          currentArrayPosition = 2;
          userArray[3] = "-";
          calculate(userArray, currentOperation);
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentOperation = "subtract";
          break;
        case "multiply":
          currentArrayPosition = 2;
          userArray[3] = "*";
          calculate(userArray, currentOperation);
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentOperation = "multiply";
          break;
        case "divide":
          currentArrayPosition = 2;
          userArray[3] = "/";
          calculate(userArray, currentOperation);
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentOperation = "divide";
          break;
        case "equal":
          if (currentOperation === "divide" && parseFloat(userArray[2]) === 0)
            userArray[0] = "ERROR";
          else calculate(userArray, currentOperation);
          userArray[3] = "=";
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentArrayPosition = 1;
          currentOperation = null;
          break;
        case "clear":
          userArray = ["0", "", "", ""];
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentArrayPosition = 1;
          currentOperation = null;
          break;
        case "back":
          userArray[3] = "";
          userArray[2] = "";
          displayAll(
            userArray,
            firstNumber,
            secondNumber,
            resultNumber,
            operationSymbol,
          );
          currentArrayPosition = 1;
          currentOperation = null;
          break;
      }
      console.log(userArray);
    });
  });
});

function displayAll(array, first, second, result, symbol, decimal) {
  displayFirstNumber(array, first, decimal);
  displaySecondNumber(array, second, decimal);
  displayResultNumber(array, result);
  if (symbol) displaySymbol(array, symbol);
}

function displayFirstNumber(array, first, decimal) {
  const value = array[1] !== 0 ? array[1] : "0";
  first.textContent =
    decimal === true
      ? value.toString().includes(".")
        ? value
        : value + "."
      : value;
}

function displaySecondNumber(array, second, decimal) {
  const value = array[2];
  second.textContent =
    decimal === true
      ? value.toString().includes(".")
        ? value
        : value + "."
      : value;
}

function displayResultNumber(array, result) {
  result.textContent = array[0];
}

function displaySymbol(array, symbol) {
  symbol.textContent = array[3] !== undefined ? array[3] : "";
}

function enterValue(array, n, position) {
  if (array[0] === 0 && array[1] === 0 && array[2] === 0) array[1] = n;
  else if (position === 1) {
    if (array[1].toString() === "0") array[1] = n;
    else array[1] = attachNumber(n, array[1]);
  } else if (position === 2) {
    if (array[2].toString() === "0") array[2] = n;
    else array[2] = attachNumber(n, array[2]);
  }
}

function attachNumber(number, currentValue) {
  return currentValue.toString() + number.toString();
}

function calculate(array, operation) {
  if (array[1] != 0 && array[2] != 0) {
    array[0] = operate(array, operation).toString();
    array[0] = (array[0] % 1 === 0 ? parseInt(array[0]) : array[0]).toString();
    array[1] = array[0].toString();
    array[2] = "0".toString();
  }
}

function operate(array, operation) {
  const a = parseFloat(array[1]);
  const b = parseFloat(array[2]);
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return (a / b).toFixed(2);
}
