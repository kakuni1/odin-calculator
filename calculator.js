document.addEventListener("DOMContentLoaded", function () {
  // userArray[0] : calculation result
  // userArray[1] : 1st number slot
  // userArray[2] : 2nd number slot
  // userArray[3] : math operation symbol
  let userArray = ["0", "", "", ""];
  let currentArrayPosition = 1;
  let currentNumber = 0;
  let currentOperation = null;

  const displayN = document.createElement("div");
  const displayS = document.createElement("div");
  displayN.classList.add("displayN");
  displayS.classList.add("displayS");
  const displayContainer = document.createElement("div");
  const calculatorButtons = document.querySelectorAll("button");
  const container = document.getElementById("container");
  displayContainer.classList.add("display-container");
  displayContainer.appendChild(displayN);
  displayContainer.appendChild(displayS);
  container.insertBefore(displayContainer, container.firstChild);

  displayN.textContent = "0";
  displayS.textContent = "";

  calculatorButtons.forEach((button) => {
    button.addEventListener("mouseenter", () =>
      button.style.setProperty("--opacity-level", 0.6),
    );
    button.addEventListener("mouseleave", () =>
      button.style.setProperty("--opacity-level", 0.8),
    );
    button.addEventListener("click", () => {
      switch (button.id) {
        case "zero":
          currentNumber = "0";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "one":
          currentNumber = "1";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "two":
          currentNumber = "2";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "three":
          currentNumber = "3";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "four":
          currentNumber = "4";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "five":
          currentNumber = "5";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "six":
          currentNumber = "6";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "seven":
          currentNumber = "7";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "eight":
          currentNumber = "8";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "nine":
          currentNumber = "9";
          enterValue(userArray, currentNumber, currentArrayPosition);
          display(userArray, displayN, displayS);
          break;
        case "decimal":
          if (!userArray[currentArrayPosition].toString().includes(".")) {
            userArray[currentArrayPosition] =
              userArray[currentArrayPosition].toString() + ".";
          }
          display(userArray, displayN, displayS);
          break;
        case "add":
          currentArrayPosition = 2;
          userArray[3] = "+";
          calculate(userArray, currentOperation);
          display(userArray, displayN, displayS);
          currentOperation = "add";
          break;
        case "subtract":
          currentArrayPosition = 2;
          userArray[3] = "-";
          calculate(userArray, currentOperation);
          display(userArray, displayN, displayS);
          currentOperation = "subtract";
          break;
        case "multiply":
          currentArrayPosition = 2;
          userArray[3] = "*";
          calculate(userArray, currentOperation);
          display(userArray, displayN, displayS);
          currentOperation = "multiply";
          break;
        case "divide":
          currentArrayPosition = 2;
          userArray[3] = "/";
          calculate(userArray, currentOperation);
          display(userArray, displayN, displayS);
          currentOperation = "divide";
          break;
        case "equal":
          if (currentOperation === "divide" && parseFloat(userArray[2]) === 0) {
            userArray[0] = "ERROR";
            displayN.style.setProperty("--color", "#f7768e");
          } else calculate(userArray, currentOperation);
          userArray[3] = "=";
          display(userArray, displayN, displayS);
          currentArrayPosition = 1;
          currentOperation = null;
          break;
        case "clear":
          userArray = ["0", "", "", ""];
          display(userArray, displayN, displayS);
          currentArrayPosition = 1;
          currentOperation = null;
          displayN.style.setProperty("--color", "#f0f6f0");
          break;
        case "back":
          userArray[3] = "";
          userArray[2] = "";
          display(userArray, displayN, displayS);
          currentArrayPosition = 1;
          currentOperation = null;
          break;
      }
      console.log(userArray);
    });
  });
});

function display(array, displayN, displayS) {
  // show "result", after "calculate" or "clear"
  if (
    array[0] !== "0" ||
    (array[0] === "0" && array[1] === "" && array[2] === "")
  )
    displayN.textContent = array[0];
  // show "first" entry, "second" slot empty
  else if (array[1] !== "0" && array[2] === "" && array[3] === "")
    displayN.textContent = array[1];
  // show "second" entry, prioritize showing "second" slot over "first"
  else if (array[3] !== "" && array[2] !== "") {
    displayN.textContent = array[2];
    displayS.textContent = array[3];
  }
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
    array[2] = "";
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
