let enteredNumbers = [];
let isDuplicateDetected = false;

const hasDuplicate = (num) => {
  return enteredNumbers.includes(num);
};

let userNumber = +prompt("Please enter a number");

while (!isDuplicateDetected) {
  enteredNumbers.push(userNumber);
  userNumber = +prompt("Please enter a number");

  isDuplicateDetected = hasDuplicate(userNumber);
}

enteredNumbers.sort((a, b) => a - b);
enteredNumbers.forEach((num) => console.log(num));
