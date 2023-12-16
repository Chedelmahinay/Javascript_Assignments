const fetchNumberList = () => {
  let count = 0;
  let numberList = [];
  let currentNumber;

  do {
    currentNumber = +prompt("Enter a number (enter 0 to stop):");
    if (currentNumber !== 0) {
      numberList.push(currentNumber);
    }
  } while (currentNumber !== 0);

  return numberList;
};

const displayInDescendingOrder = (numberList) => {
  const sortedList = numberList.sort((a, b) => b - a);
  sortedList.forEach((number) => console.log(number));
};

const numbers = fetchNumberList();
displayInDescendingOrder(numbers);
