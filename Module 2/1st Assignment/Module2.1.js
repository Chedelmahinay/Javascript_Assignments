const fetchNumberArray = () => {
  let count = 0;
  let numArray = [];
  while (count < 5) {
    const number = +prompt("Enter a number");
    numArray.push(number);
    count++;
  }
  return numArray;
};

const displayInReverseOrder = (numberArray) => {
  for (let i = numberArray.length - 1; i >= 0; i--) {
    console.log(numberArray[i]);
  }
  return;
};

const numbers = fetchNumberArray();
displayInReverseOrder(numbers);
