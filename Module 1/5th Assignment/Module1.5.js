const checkLeapYear = (inputYear) => {
  if (inputYear % 4 !== 0) {
    return false;
  } else {
    if (inputYear % 400 === 0) {
      return true;
    } else if (inputYear % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  }
};

const userInputYear = +prompt("Enter a year");

document.querySelector("#entered-year").innerText = userInputYear;
const resultContainer = document.querySelector(".result");
const resultText = checkLeapYear(userInputYear) ? "This is a leap year." : "This is not a leap year.";

resultContainer.innerText = resultText;
