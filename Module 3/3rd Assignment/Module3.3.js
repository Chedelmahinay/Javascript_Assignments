"use strict";

const usersArray = ["John", "Paul", "Jones"];

const listElement = document.querySelector("#target");

for (const user of usersArray) {
  const newLi = document.createElement("li");
  newLi.innerHTML = user;
  listElement.appendChild(newLi);
}
