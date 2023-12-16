const getNumberOfSides = () => {
  return +prompt("How many sides does your dice have?");
};

const rollDice = (sides) => {
  const min = 1;
  const max = sides;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const rollUntilMax = (sides) => {
  let resultList = [];
  let result = rollDice(sides);
  do {
    result = rollDice(sides);
    resultList.push(result);
  } while (result !== sides);
  return resultList;
};

const displayResults = (resultList) => {
  resultList.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = result;
    listItem.classList.add("dice-result");
    document.querySelector(".dice-results-list").appendChild(listItem);
  });
};

const main = () => {
  const sides = getNumberOfSides();
  const resultList = rollUntilMax(sides);
  displayResults(resultList);
};

main();
