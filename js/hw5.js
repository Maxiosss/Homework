const newColor = document.querySelector(".button--color");
newColor.addEventListener("click", () => {
  newColor.textContent = "Hello";
  newColor.style.backgroundColor = "blue";
});
const buttonAdd = document.querySelector(".new--class");
const addClass = document.querySelector("h2");
buttonAdd.addEventListener("click", () => {
  addClass.classList.add("title");
});
const input = document.querySelector(".input");
input.addEventListener("change", function (event) {
  const value = event.target.value;
  console.log("Input value:", value);
});

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const openModal = document.querySelector('button[data-action="open-modal"]');
const closeModal = document.querySelector('button[data-action="close-modal"]');

openModal.addEventListener("click", () => {
  document.body.classList.add("show-modal");
});
closeModal.addEventListener("click", () => {
  document.body.classList.remove("show-modal");
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    document.body.classList.remove("show-modal");
  }
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "незнайомець";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("input", () => {
  if (validationInput.value.length === Number(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

const fontSizeControl = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  spanSize.style.fontSize = fontSize;
});
