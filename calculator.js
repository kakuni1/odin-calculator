document.addEventListener("DOMContentLoaded", function () {
  // userArray[0] : calculation result
  // userArray[1] : 1st number slot
  // userArray[2] : 2nd number slot
  // userArray[3] : math operation symbol
  let userArray = ["0", "", "", ""];
  let currentArrayPosition = 1;
  let currentNumber = 0;
  let currentOperation = null;
  let entry = null;

  const displayFirstNumber = document.createElement("div");
  const displayOperator = document.createElement("div");
  const displaySecondNumber = document.createElement("div");
  displayFirstNumber.classList.add("displayFirstNumber");
  displayOperator.classList.add("displayOperator");
  displaySecondNumber.classList.add("displaySecondNumber");
  const displayContainer = document.createElement("div");
  const calculatorButtons = document.querySelectorAll("button");
  const container = document.getElementById("container");
  displayContainer.classList.add("display-container");
  displayContainer.appendChild(displayFirstNumber);
  displayContainer.appendChild(displayOperator);
  displayContainer.appendChild(displaySecondNumber);
  container.insertBefore(displayContainer, container.firstChild);

  displayFirstNumber.textContent = "0";
  displaySecondNumber.textContent = "";
  displayOperator.textContent = "";

  document.addEventListener("keydown", (event) => {
    entry = event.key;
    activate(entry);
    console.log(userArray);
  });

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      entry = button.id;
      activate(entry);
      console.log(userArray);
    });
    button.addEventListener("mouseenter", () =>
      button.style.setProperty("--opacity-level", 0.6),
    );
    button.addEventListener("mouseleave", () =>
      button.style.setProperty("--opacity-level", 0.8),
    );
  });

  function display(array, displayNumberOne, displayNumberTwo, displayOperator) {
    // check length, print "LIMIT" if too large
    if (
      array[1].length === 11 ||
      array[2].length === 11 ||
      array[0].length === 21
    ) {
      array[0] = "LIMIT";
      displayFirstNumber.style.setProperty("--color", "#f7768e");
      array[1] = "";
      array[2] = "";
      array[3] = "";
    }
    // result (after "calculate" or "clear")
    // no number, no operator
    if (array[0] === array[1] && array[2] !== "") {
      displayNumberTwo.textContent = array[2];
      displayOperator.textContent = ` ${array[3]} `;
    } else if (array[0] === array[1]) {
      displayNumberOne.textContent = array[0];
      displayNumberTwo.textContent = "";
      displayOperator.textContent = ` ${array[3]} `;
    } else if (
      array[0] !== "0" ||
      (array[0] === "0" && array[1] === "" && array[2] === "")
    ) {
      displayNumberOne.textContent = array[0];
      displayOperator.textContent = "";
      displayNumberTwo.textContent = "";
    } // first number
    else if (array[1] !== "" && array[3] === "") {
      displayNumberOne.textContent = array[1];
      displayOperator.textContent = "";
      displayNumberTwo.textContent = "";
    } // first number with operator
    else if (array[2] === "" && array[3] !== "") {
      displayNumberOne.textContent = array[1];
      displayOperator.textContent = ` ${array[3]} `;
      displayNumberTwo.textContent = "";
    } // first & second number with operator
    else if (array[3] !== "" && array[2] !== "") {
      displayNumberOne.textContent = array[1];
      displayOperator.textContent = ` ${array[3]} `;
      displayNumberTwo.textContent = array[2];
    } // clear (reset) on "equal" state
    if (array[3] === "=") {
      displayOperator.textContent = "";
      displayNumberTwo.textContent = "";
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
      array[0] = (
        array[0] % 1 === 0 ? parseInt(array[0]) : array[0]
      ).toString();
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

  function activate(entry) {
    console.log("KEY", entry);
    switch (entry) {
      case "0":
        currentNumber = "0";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "1":
        currentNumber = "1";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "2":
        currentNumber = "2";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "3":
        currentNumber = "3";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "4":
        currentNumber = "4";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "5":
        currentNumber = "5";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "6":
        currentNumber = "6";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "7":
        currentNumber = "7";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "8":
        currentNumber = "8";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "9":
        currentNumber = "9";
        enterValue(userArray, currentNumber, currentArrayPosition);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case ".":
        if (!userArray[currentArrayPosition].toString().includes(".")) {
          userArray[currentArrayPosition] =
            userArray[currentArrayPosition].toString() + ".";
        }
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
      case "+":
        currentArrayPosition = 2;
        userArray[3] = "+";
        calculate(userArray, currentOperation);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentOperation = "add";
        break;
      case "-":
        currentArrayPosition = 2;
        userArray[3] = "-";
        calculate(userArray, currentOperation);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentOperation = "subtract";
        break;
      case "*":
        currentArrayPosition = 2;
        userArray[3] = "*";
        calculate(userArray, currentOperation);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentOperation = "multiply";
        break;
      case "/":
        currentArrayPosition = 2;
        userArray[3] = "/";
        calculate(userArray, currentOperation);
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentOperation = "divide";
        break;
      case "Enter":
        if (currentOperation === "divide" && parseFloat(userArray[2]) === 0) {
          userArray[0] = "ERROR";
          displayFirstNumber.style.setProperty("--color", "#f7768e");
        } else calculate(userArray, currentOperation);
        userArray[3] = "=";
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentArrayPosition = 1;
        currentOperation = null;
        break;
      case "Delete":
        userArray = ["0", "", "", ""];
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        currentArrayPosition = 1;
        currentOperation = null;
        displayFirstNumber.style.setProperty("--color", "#f0f6f0");
        break;
      case "Backspace":
        if (currentArrayPosition === 1 && userArray[1].length > 0) {
          userArray[1] = userArray[1].slice(0, -1);
          if (userArray[1].length === 0) userArray[1] = "";
        } else if (currentArrayPosition === 2 && userArray[2].length > 0) {
          userArray[2] = userArray[2].slice(0, -1);
          if (userArray[2].length === 0) userArray[2] = "";
        }
        display(
          userArray,
          displayFirstNumber,
          displaySecondNumber,
          displayOperator,
        );
        break;
    }
  }
});
