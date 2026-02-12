document.addEventListener("DOMContentLoaded", function () {
  const calculatorButtons = document.querySelectorAll("button");
  const result = document.createElement("div");
  result.classList.add("result");
  result.textContent = "0";
  container.appendChild(result);

  let userArray = [0, 0];
  let currentArrayPosition = 0;
  let currentOperation = null;
  let currentNumber = null;

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "zero":
          currentNumber = "0";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "one":
          currentNumber = "1";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "two":
          currentNumber = "2";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "three":
          currentNumber = "3";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "four":
          currentNumber = "4";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "five":
          currentNumber = "5";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "six":
          currentNumber = "6";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "seven":
          currentNumber = "7";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "eight":
          currentNumber = "8";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "nine":
          currentNumber = "9";
          enterValue(userArray, currentNumber, currentArrayPosition);
          result.textContent = userArray[0];
          break;
        case "add":
          currentArrayPosition = 1;
          calculate(userArray, currentOperation);
          result.textContent = userArray[0];
          currentOperation = "add";
          break;
        case "subtract":
          currentArrayPosition = 1;
          calculate(userArray, currentOperation);
          result.textContent = userArray[0];
          currentOperation = "subtract";
          break;
        case "multiply":
          currentArrayPosition = 1;
          calculate(userArray, currentOperation);
          result.textContent = userArray[0];
          currentOperation = "multiply";
          break;
        case "divide":
          currentArrayPosition = 1;
          calculate(userArray, currentOperation);
          result.textContent = userArray[0];
          currentOperation = "divide";
          break;
        case "equals":
          currentArrayPosition = 1;
          calculate(userArray, currentOperation);
          result.textContent = userArray[0];
          currentArrayPosition = 0;
          currentOperation = null;
          break;
        case "allClear":
          userArray = [0, 0];
          result.textContent = userArray[0];
          currentArrayPosition = 0;
          currentOperation = null;
          break;
      }
    });
  });
});

function enterValue(array, n, position) {
  const num = parseInt(n, 10);

  if (array[0] === 0 && array[1] === 0) array[0] = num;
  else if (position === 0) array[0] = attachNumber(n, array[0]);
  else if (position === 1) array[1] = attachNumber(n, array[1]);
}

function attachNumber(number, currentValue) {
  return parseInt(currentValue.toString() + number, 10);
}

function calculate(array, operation) {
  if (array[0] != 0 && array[1] != 0) {
    array[0] = operate(array, operation);
    array[1] = 0;
  }
}

function operate(array, operation) {
  switch (operation) {
    case "add":
      return add(array[0], array[1]);
    case "subtract":
      return subtract(array[0], array[1]);
    case "multiply":
      return multiply(array[0], array[1]);
    case "divide":
      return divide(array[0], array[1]);
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
