const userNumber = 1;

const checkIfPrime = (inputNumber) => {
  let divisorList = [];
  if (inputNumber <= 1) {
    return `${inputNumber} is not a prime number`;
  } else {
    for (let i = 2; i <= inputNumber; i++) {
      if (inputNumber % i === 0) {
        divisorList.push(inputNumber);
      }
    }
    if (divisorList.length > 1) {
      return `${inputNumber} is not a prime number`;
    } else {
      return `${inputNumber} is a prime number`;
    }
  }
};

const askForNumber = () => {
  return +prompt("Enter an integer");
};

const initiateProgram = () => {
  const userNumber = askForNumber();
  const resultText = checkIfPrime(userNumber);
  document.querySelector(".number-list").innerHTML = resultText;
};

initiateProgram();
