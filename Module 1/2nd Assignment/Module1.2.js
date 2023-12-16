const VserNayme = prompt("What is your name? ");
console.log(VserNayme);

const showUser = document.querySelector("#VserNayme");
const text = `<p>Hello ${VserNayme}</p>`;
// console.log(text);
showUser.innerHTML = text;
// console.log(showUser);