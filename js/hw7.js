"use strict";
const drinkSelect = document.querySelector("#drink");
const message = document.querySelector(".drink-message");
function select() {
  switch (drinkSelect.value) {
    case "coffee":
      message.textContent = "Ви обрали каву";
      break;
    case "tea":
      message.textContent = "Ви обрали чай";
      break;
    case "juice":
      message.textContent = "Ви обрали сік";
      break;
    default:
      message.textContent = "Ви не обрали";
  }
}
drinkSelect.addEventListener("input", select);

const checkDay = document.querySelector(".day--check");
const messageDay = document.querySelector(".message-day");
function checkWork() {
  const day = document.querySelector(".day").value.toLowerCase();
  if (
    day === "понеділок" ||
    day === "вівторок" ||
    day === "середа" ||
    day === "четвер" ||
    day === "п´ятниця"
  ) {
    messageDay.textContent = "Це робочий день";
  } else if (day === "субота" || day === "неділя") {
    messageDay.textContent = "Це вихідний день";
  } else {
    messageDay.textContent = "Такого дня немає";
  }
}

checkDay.addEventListener("click", checkWork);

const seasonCheck = document.querySelector(".season--check");
const seasonMessage = document.querySelector(".season-message");
function monthCheck() {
  const season = document.querySelector(".input-season").value;
  if (season === "12" || season === "01" || season === "02") {
    seasonMessage.textContent = "Це зима";
  } else if (season === "03" || season === "04" || season === "05") {
    seasonMessage.textContent = "Це весна";
  } else if (season === "06" || season === "07" || season === "08") {
    seasonMessage.textContent = "Це літо";
  } else if (season === "09" || season === "10" || season === "11") {
    seasonMessage.textContent = "Це осінь";
  } else {
    seasonMessage.textContent = "Введіть будь ласка місяць цифрами";
  }
}
seasonCheck.addEventListener("click", monthCheck);

const daysCheck = document.querySelector(".days--check");
const daysMessage = document.querySelector(".day-message");

function daysOfMonth() {
  const inputDays = document.querySelector(".input-days").value;

  if (
    inputDays === "01" ||
    inputDays === "03" ||
    inputDays === "05" ||
    inputDays === "07" ||
    inputDays === "08" ||
    inputDays === "10" ||
    inputDays === "12"
  ) {
    daysMessage.textContent = "Цей місяць має 31 день";
  } else if (
    inputDays === "04" ||
    inputDays === "06" ||
    inputDays === "09" ||
    inputDays === "11"
  ) {
    daysMessage.textContent = "Цей місяць має 30 днів";
  } else if (inputDays === "02") {
    daysMessage.textContent =
      "Цей місяць має 28 днів, але раз в 4 роки має 29 днів";
  } else {
    daysMessage.textContent = "Введіть будь ласка місяць цифрами";
  }
}

daysCheck.addEventListener("click", daysOfMonth);

const colorCheck = document.querySelector(".color--check");
const colorMessage = document.querySelector(".color-message");

function instruction() {
  const inputColor = document.querySelector(".input-color").value;
  switch (inputColor) {
    case "червоний":
      colorMessage.textContent = "стоп";
      break;
    case "жовтий":
      colorMessage.textContent = "чекати";
      break;
    case "зелений":
      colorMessage.textContent = "йти";
      break;
    default:
      colorMessage.textContent =
        "Введіть один з кольорів які є в цьому списку: червоний, жовтий або зелений";
  }
}
colorCheck.addEventListener("click", instruction);

const operationSelect = document.querySelector("#operation-select");
const operationMessage = document.querySelector(".operation-message");
const resultButton = document.querySelector(".result__btn");
const result = document.querySelector(".result");
function calculate() {
  const firstNum = document.querySelector(".first-num").value;
  const secondNum = document.querySelector(".second-num").value;
  if (operationSelect.value === "division" && +secondNum === 0) {
    result.textContent = "Помилка: ділення на нуль неможливе!";
  } else {
    switch (operationSelect.value) {
      case "plus":
        operationMessage.textContent = "+";
        result.textContent = `Сума чисел дорівнює ${+firstNum + +secondNum}`;
        break;
      case "minus":
        operationMessage.textContent = "-";
        result.textContent = `Різниця чисел дорівнює ${+firstNum - +secondNum}`;
        break;
      case "multiplication":
        operationMessage.textContent = "*";
        result.textContent = `Добуток чисел дорівнює ${+firstNum * +secondNum}`;
        break;
      case "division":
        operationMessage.textContent = "/";
        result.textContent = `Частка чисел дорівнює ${+firstNum / +secondNum}`;
        break;
      default:
        result.textContent = "Невідома операція";
    }
  }
}
resultButton.addEventListener("click", calculate);
