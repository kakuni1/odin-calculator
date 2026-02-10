document.addEventListener("DOMContentLoaded", function () {
  const userArray = [];
  numberEntry(userArray);
  numberEntry(userArray);
  console.log("add ", add(userArray[0], userArray[1]));
  console.log("subtract ", subtract(userArray[0], userArray[1]));
  console.log("multiply ", multiply(userArray[0], userArray[1]));
  console.log("divide ", divide(userArray[0], userArray[1]));
});

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
