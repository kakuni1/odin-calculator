document.addEventListener("DOMContentLoaded", function () {
  const calculatorButtons = document.querySelectorAll("button");
  const userArray = [];
  let buttonNumber = null;

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(userArray[0], userArray[1]);
      switch (button.id) {
        case "one":
          buttonNumber = 1;
          if (userArrayCheck(buttonNumber, userArray))
            numberEntry(buttonNumber, userArray);
          break;
        case "two":
          buttonNumber = 2;
          if (userArrayCheck(buttonNumber, userArray))
            numberEntry(buttonNumber, userArray);
          break;
      }
      console.log("ARRAY: ", userArray);
    });
  });
});

function userArrayCheck(number, array) {
  if (array.length < 2) {
    console.log(`ARRAY SLOT: [${array.length}] ${number}`);
    return true;
  } else {
    console.log("ARRAY FULL: EXITING");
    return false;
  }
}

function numberEntry(number, array) {
  array.push(number);
}

function operate() {}

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
