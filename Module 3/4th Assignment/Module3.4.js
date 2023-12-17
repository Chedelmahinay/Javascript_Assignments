"use strict";

const studentData = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

const targetSelect = document.querySelector("#target");

const addOptionToSelect = (student) => {
  const option = document.createElement("option");
  option.value = `${student.id}`;
  option.textContent = `${student.name}`;
  targetSelect.appendChild(option);
};

for (let i = 0; i < studentData.length; i++) {
  addOptionToSelect(studentData[i]);
}
