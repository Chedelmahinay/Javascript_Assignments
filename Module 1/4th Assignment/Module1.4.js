"use strict";

const getRandomNum = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
console.log(houses[1]);

const houseName = houses[getRandomNum(0, 3)];

const Name = prompt("Who are you? ");
const Reveal = document.querySelector(".result");
// showName.innerHTML = `<p>${wizName}, you are ${houseName}.</p>`
const randonNum = getRandomNum(0, 3);
console.log(randonNum);
switch (randonNum) {
  case 0:
    Reveal.innerHTML = `<p>${Name}, you are ${houses[0]}.</p>`;
    break;
  case 1:
    Reveal.innerHTML = `<p>${Name}, you are ${houses[1]}.</p>`;
    break;
  case 2:
    Reveal.innerHTML = `<p>${Name}, you are ${houses[2]}.</p>`;
    break;
  case 3:
    Reveal.innerHTML = `<p>${Name}, you are ${houses[3]}.</p>`;
    break;
}
// console.log(randonNum);
// console.log(houseList[getRandomNum(0, 3)]);