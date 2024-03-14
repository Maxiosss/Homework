"use strict";
const inputText1 = document.querySelector(".input__text--first");
const inputText2 = document.querySelector(".input__text--second");
const textCheck = document.querySelector(".text--check");
function textFields() {
  if (inputText2.value.trim() === "" || inputText1.value.trim() === "") {
    alert("Не всі поля заповнені");
  } else {
    alert("Всі поля заповнені");
  }
}
textCheck.addEventListener("click", textFields);

const firstNumber = document.querySelector(".input__number--first");
const secondNumber = document.querySelector(".input__number--second");
const numberCheck = document.querySelector(".number--check");
function numberSum() {
  const sum = Number(firstNumber.value) + Number(secondNumber.value);
  if (sum > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}
numberCheck.addEventListener("click", numberSum);

const inputIncludes = document.querySelector(".input__js");
const jsCheck = document.querySelector(".js--check");

function includesJs() {
  if (inputIncludes.value.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}

jsCheck.addEventListener("click", includesJs);

const numberRange = document.querySelector(".input-form__num");
const rangeCheck = document.querySelector(".form-num--check");

function range() {
  if (Number(numberRange.value) > 10 && Number(numberRange.value) < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}

rangeCheck.addEventListener("click", range);

const name = document.querySelector(".input-form__name");
const email = document.querySelector(".input-form__email");
const password = document.querySelector(".input-form__password");
const verification = document.querySelector(".verification");
function verificationCheck() {
  if (
    email.value.includes("@.") &&
    name.value.length > 3 &&
    password.value.length > 6
  ) {
    window.location.href = "https://courses-all.goiteens.com/v-gl-v3/?utm_source=google&utm_medium=cpc&utm_campaign=brand_europe&gad_source=1&gclid=Cj0KCQjwwMqvBhCtARIsAIXsZpYYVNRQxf746KbCyTe05ZsdUoiOU4hFWyo618fXT3hWnRkuWLtz43gaAjR1EALw_wcB";
  } else {
    console.log("hah");
  }
}
verification.addEventListener("click", verificationCheck);
