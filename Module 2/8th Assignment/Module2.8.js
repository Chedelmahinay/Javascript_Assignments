const namesArray = ["Johny", "DeeDee", "Joey", "Marky"];

const concatenateNames = (namesArray) => {
  let concatenatedString = "";
  for (let i = 0; i < namesArray.length; i++) {
    concatenatedString += namesArray[i];
  }
  return concatenatedString;
};

const resultString = concatenateNames(namesArray);
document.querySelector(".result").innerHTML = resultString;
