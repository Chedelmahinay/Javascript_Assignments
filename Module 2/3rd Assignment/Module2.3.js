const fetchDogList = () => {
  const dogCount = 6;
  let currentDogIndex = 1;
  let dogList = [];

  while (currentDogIndex <= dogCount) {
    const dogName = prompt("Enter dog name:");
    dogList.push(dogName);
    currentDogIndex++;
  }

  return dogList;
};

// String sort function
const sortString = (a, b) => {
  let lowerA = a.toLowerCase();
  let lowerB = b.toLowerCase();
  if (lowerB > lowerA) {
    return 1;
  } else if (lowerB < lowerA) {
    return -1;
  } else {
    return 0;
  }
};

let dogList = fetchDogList();
dogList.sort(sortString);

dogList.forEach((dog) => {
  const listItemElement = document.createElement("li");
  listItemElement.innerHTML = dog;
  document.querySelector(".dog-list").appendChild(listItemElement);
});
