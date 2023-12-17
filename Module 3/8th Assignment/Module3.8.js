"use strict";

const getInputValues = () => {
  const inputNum1 = document.querySelector("#num1").value;
  const inputNum2 = document.querySelector("#num2").value;
  const selectedOperation = document.querySelector("#operation").value;
  return [inputNum1, inputNum2, selectedOperation];
};

const performCalculation = (num1, num2, operation) => {
  let result;
  const [parsedNum1, parsedNum2] = [+num1, +num2];
  switch (operation) {
    case "add":
      result = parsedNum1 + parsedNum2;
      break;
    case "sub":
      result = parsedNum1 - parsedNum2;
      break;
    case "multi":
      result = parsedNum1 * parsedNum2;
      break;
    case "div":
      result = parsedNum1 / parsedNum2;
      break;
  }
  return result;
};

const displayCalculationResult = (result) => {
  const resultTarget = document.querySelector("#result");
  resultTarget.innerHTML = result;
};

const executeCalculation = () => {
  const [inputNum1, inputNum2, selectedOperation] = getInputValues();
  const result = performCalculation(inputNum1, inputNum2, selectedOperation);
  displayCalculationResult(result);
};

const startButton = document.querySelector("#start");
startButton.addEventListener("click", executeCalculation);
