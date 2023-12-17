const itemsArray = ["First item", "Second item", "Third item"];

const listElement = document.querySelector("#target");

const createListItem = (itemString) => {
  const listItem = document.createElement("li");
  listItem.textContent = itemString;
  listElement.appendChild(listItem);
};

const displayListItems = () => {
  itemsArray.forEach((currentItem) => createListItem(currentItem));
};

displayListItems();
listElement.classList = "my-list";
const secondListItem = document.querySelectorAll("li")[1];
secondListItem.classList = "my-item";
