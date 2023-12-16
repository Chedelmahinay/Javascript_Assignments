const checkLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  }
};

const promptStartAndEnd = () => {
  const start = +prompt("Enter start year:");
  const end = +prompt("Enter end year:");
  console.log(`Start: ${start}, End: ${end}`);
  return [start, end];
};

const generateYearArray = (start, end) => {
  let years = [];
  if (start === 0 && end === 0) {
    return years;
  } else {
    for (let i = start; i <= end; i++) {
      years.push(i);
    }
    return years;
  }
};

const [inputStart, inputEnd] = promptStartAndEnd();

const userYearArray = generateYearArray(inputStart, inputEnd);

const leapYears = userYearArray.filter(checkLeapYear);

const initializeLeapYearList = () => {
  if (leapYears.length !== 0) {
    leapYears.forEach((currentYear) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = currentYear;
      document.querySelector(".year-container").appendChild(listItem);
    });
  } else {
    return;
  }
};

initializeLeapYearList();
