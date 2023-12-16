"use strict";

const num1 = +prompt("Enter number 1: ");
const num2 = +prompt("Enter number 2: ");
const num3 = +prompt("Enter number 3: ");

console.log(typeof num1);
const numList = [num1, num2, num3];

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / numList.length;
console.log(sum, product, average);

const sumTotal = document.querySelector("#sum_total");
sumTotal.innerHTML = sum;
const productTotal = document.querySelector("#product_total");
productTotal.innerHTML = product;
const averageTotal = document.querySelector("#average_total");
averageTotal.innerHTML = average;