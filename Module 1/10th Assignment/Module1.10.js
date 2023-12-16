"use strict";

const generateRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
};

const calculateResultFromThrownDice = (numberOfDice) => {
  let sum = 0;
  for (let i = 1; i <= numberOfDice; i++) {
    const result = generateRandomNumber(1, 6);
    sum += result;
  }
  return sum;
};

const simulateDiceThrows = (numberOfThrows, numberOfDice, targetSum) => {
  let count = 0;
  for (let i = 1; i <= numberOfThrows; i++) {
    const sum = calculateResultFromThrownDice(numberOfDice);
    if (sum === targetSum) {
      count++;
    }
  }
  return count;
};

const calculateProbability = (successCount, totalThrows) => {
  const result = ((successCount / totalThrows) * 100).toFixed(2);
  return result;
};

const getDiceAndTargetSum = () => {
  const diceCount = +prompt("How many dice do you want to throw? ");
  const targetSum = +prompt("What sum are you targeting? ");
  return [diceCount, targetSum];
};

const totalThrows = 10000;
const [numberOfDiceThrows, targetSum] = getDiceAndTargetSum();
const successCount = simulateDiceThrows(totalThrows, numberOfDiceThrows, targetSum);
const probability = calculateProbability(successCount, totalThrows);

const resultText = `Probability to get sum ${targetSum} with ${numberOfDiceThrows} dice is ${probability}%`;

document.querySelector(".result-display").innerHTML = resultText;
