"use strict";

const numberOfDice = +prompt("How many dice do you want to throw? ");
const numberOfTimes = +prompt("How many times do you want to throw? ");

const generateRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
};

const calculateResultFromThrown = (diceCount) => {
  let sum = 0;
  for (let i = 1; i <= diceCount; i++) {
    const result = generateRandomNumber(1, 6);
    sum += result;
  }
  return sum;
};

const throwDice = (times, diceCount) => {
  let finalSum = 0;
  for (let i = 1; i <= times; i++) {
    const sum = calculateResultFromThrown(diceCount);
    finalSum += sum;
  }
  return finalSum;
};

const finalRollResult = throwDice(numberOfTimes, numberOfDice);
const diceCountDisplay = document.querySelector(".dice-count");
const timeCountDisplay = document.querySelector(".time-count");
const rollResultDisplay = document.querySelector(".roll-result");

diceCountDisplay.innerHTML = numberOfDice;
timeCountDisplay.innerHTML = numberOfTimes;
rollResultDisplay.innerHTML = finalRollResult;
