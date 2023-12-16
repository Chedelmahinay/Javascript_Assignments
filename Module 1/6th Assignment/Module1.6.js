"use strict";
const shouldCalculate = confirm("Should I calculate the square root? ");

const getUserNumber = () => {
  const enteredNumber = +prompt("Enter your number");
  return enteredNumber;
};

const isNegativeNumber = (number) => {
  return number < 0;
};

const handleNegativeResult = (number) => {
  if (isNegativeNumber(number)) {
    return "The square root of a negative number is not defined";
  }
};

const calculateSquareRoot = (number) => {
  if (isNegativeNumber(number)) {
    return handleNegativeResult(number);
  } else {
    const result = Math.sqrt(number);
    return result;
  }
};

const runApp = () => {
  if (shouldCalculate) {
    const userNumber = getUserNumber();
    if (isNegativeNumber(userNumber)) {
      const resultText = handleNegativeResult(userNumber);
      document.querySelector(".output").innerHTML = resultText;
    } else {
      const result = calculateSquareRoot(userNumber).toFixed(2);
      console.log(result);
      const userInputDisplay = document.querySelector(".user-input");
      const outputDisplay = document.querySelector(".output");
      userInputDisplay.innerHTML = `Your number is ${userNumber}`;
      outputDisplay.innerHTML = `The result is ${result}`;
    }
  } else {
    const userInputDisplay = document.querySelector(".user-input");
    userInputDisplay.innerHTML = "The square root is not calculated.";
  }
};

runApp();
