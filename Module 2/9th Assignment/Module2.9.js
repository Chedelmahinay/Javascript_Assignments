const numberArray = [...Array(10).keys()];

const filterEvenNumbers = (numbers) => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
};

console.log(numberArray);

const evenNumbersList = filterEvenNumbers(numberArray);
console.log(evenNumbersList);
