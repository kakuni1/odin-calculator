document.addEventListener("DOMContentLoaded", function () {
  const userArray = [];
  numberOne(userArray);
  numberTwo(userArray);
});

function numberOne(array) {
  numberEntry(array);
}

function numberTwo(array) {
  numberEntry(array);
}

function operate() {}

function numberEntry(array) {
  let validatedNumber = null;
  while (validatedNumber === null) {
    const userInput = prompt("enter number");
    validatedNumber = numberCheck(userInput);
  }
  array.push(validatedNumber);
}

function numberCheck(a) {
  const number = parseInt(a.trim(), 10);
  if (isNaN(number)) {
    alert("invalid input, enter a number");
    return null;
  } else return number;
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
