const generateRandomNumber = () => {
  const minDiceValue = 1;
  const maxDiceValue = 6;
  const diceRollResult = Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1)) + minDiceValue;
  return diceRollResult;
};

let diceRollsList = [];

let currentDiceResult = generateRandomNumber();

do {
  currentDiceResult = generateRandomNumber();
  diceRollsList.push(currentDiceResult);
} while (currentDiceResult !== 6);

diceRollsList.forEach((diceRoll) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = diceRoll;
  listItem.classList.add("dice-roll-item");
  document.querySelector(".dice-results-list").appendChild(listItem);
});
