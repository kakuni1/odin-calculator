document.addEventListener("DOMContentLoaded", function () {});

function numberCheck(a) {
  const number = parseInt(a.trim(), 10);
  if (isNaN(number)) {
    alert("invalid input, enter a number");
    return null;
  } else return number;
}

function numberEntry(array) {
  let validatedNumber = null;
  while (validatedNumber === null) {
    const userInput = prompt("enter number");
    validatedNumber = numberCheck(userInput);
  }
  array.push(validatedNumber);
}
