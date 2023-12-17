const resultDisplay = document.getElementById('target');
const userForm = document.querySelector('form');
const userFirstName = document.querySelector('input[name=firstname]');
const userLastName = document.querySelector('input[name=lastname]');

userForm.addEventListener('submit', function (event) {
  event.preventDefault();
  resultDisplay.innerText = `Your name is ${userFirstName.value} ${userLastName.value}`;
});
