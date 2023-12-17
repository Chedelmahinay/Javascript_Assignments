const myListElement = document.querySelector("#target");
myListElement.classList = "my-list";
const listContent = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;
myListElement.innerHTML = listContent;
