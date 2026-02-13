document.addEventListener("DOMContentLoaded", function () {
  const calculatorButtons = document.querySelectorAll("button");
  const firstNumber = document.createElement("div");
  const secondNumber = document.createElement("div");
  firstNumber.classList.add("firstNumber");
  secondNumber.classList.add("secondNumber");
  firstNumber.textContent = "0";
  secondNumber.textContent = "";
  container.appendChild(firstNumber);
  container.appendChild(secondNumber);

  // userArray[0] : calculation result
  // userArray[1] : 1st number slot
  // userArray[2] : 2nd number slot
  // userArray[3] : math operation symbol
  let userArray = [0, 0, 0, ""];
  let currentArrayPosition = 1;
  let currentNumber = null;
  let currentOperation = null;
  let result = null;

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "zero":
          currentNumber = "0";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "one":
          currentNumber = "1";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "two":
          currentNumber = "2";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "three":
          currentNumber = "3";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "four":
          currentNumber = "4";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "five":
          currentNumber = "5";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "six":
          currentNumber = "6";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "seven":
          currentNumber = "7";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "eight":
          currentNumber = "8";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "nine":
          currentNumber = "9";
          enterValue(userArray, currentNumber, currentArrayPosition);
          displayAll(userArray, firstNumber, secondNumber, result);
          break;
        case "add":
          currentArrayPosition = 2;
          userArray[3] = "+";
          calculate(userArray, currentOperation);
          displayAll(userArray, firstNumber, secondNumber, result);
          currentOperation = "add";
          break;
        case "subtract":
          currentArrayPosition = 2;
          userArray[3] = "-";
          calculate(userArray, currentOperation);
          displayAll(userArray, firstNumber, secondNumber, result);
          currentOperation = "subtract";
          break;
        case "multiply":
          currentArrayPosition = 2;
          userArray[3] = "*";
          calculate(userArray, currentOperation);
          displayAll(userArray, firstNumber, secondNumber, result);
          currentOperation = "multiply";
          break;
        case "divide":
          currentArrayPosition = 2;
          userArray[3] = "/";
          calculate(userArray, currentOperation);
          displayAll(userArray, firstNumber, secondNumber, result);
          currentOperation = "divide";
          break;
        case "equal":
          calculate(userArray, currentOperation);
          userArray[3] = "=";
          displayAll(userArray, firstNumber, secondNumber, result);
          currentArrayPosition = 1;
          currentOperation = null;
          break;
        case "clear":
          userArray = [0, 0, 0, ""];
          userArray[3] = "";
          displayAll(userArray, firstNumber, secondNumber, result);
          currentArrayPosition = 1;
          currentOperation = null;
          break;
      }
      console.log(userArray);
    });
  });
});

function displayAll(array, first, second, result) {
  displayFirstNumber(array, first);
  displaySecondNumber(array, second);
  displayResultNumber(array, result);
}

function displayFirstNumber(array, first) {
  first.textContent = array[1] !== 0 ? array[1] : "0";
}

function displaySecondNumber(array, second) {
  second.textContent = array[2];
}

function displayResultNumber(array, result) {
  result = array[0];
}

function enterValue(array, n, position) {
  const num = parseInt(n, 10);

  if (array[0] === 0 && array[1] === 0 && array[2] === 0) array[1] = num;
  else if (position === 1) array[1] = attachNumber(n, array[1]);
  else if (position === 2) array[2] = attachNumber(n, array[2]);
}

function attachNumber(number, currentValue) {
  return parseInt(currentValue.toString() + number, 10);
}

function calculate(array, operation) {
  if (array[1] != 0 && array[2] != 0) {
    array[0] = operate(array, operation);
    array[1] = array[0];
    array[2] = 0;
  }
}

function operate(array, operation) {
  switch (operation) {
    case "add":
      return add(array[1], array[2]);
    case "subtract":
      return subtract(array[1], array[2]);
    case "multiply":
      return multiply(array[1], array[2]);
    case "divide":
      return divide(array[1], array[2]);
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
  return a / b;
}
