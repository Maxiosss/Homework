"use strict";

const button = document.getElementById("helloButton");

button.addEventListener("click", () => {
  alert("Hello World!");
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  const user = parseInt(document.getElementById("guessField").value);
  const guessResult = document.getElementById("guessResult");

  if (user === randomNumber) {
    result.textContent = `Вірно! Правильне число: ${randomNumber}`;
  } else if (user < randomNumber) {
    guessResult.textContent = "Спробуйте більше ніж " + user;
  } else {
    guessResult.textContent = "Спробуйте менше ніж " + user;
  }
}

let clickCount = 0;
const clickCountDisplay = document.getElementById("clickCountDisplay");
const clickButton = document.getElementById("clickButton");
function handleClick() {
  clickCount++;
  clickCountDisplay.textContent = "Clicks: " + clickCount;
}

clickButton.addEventListener("click", handleClick);

const applyCallbackToEachElement = (arr, callback) => {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(callback(arr[i]));
  }
  return resultArr;
};

const arr = [1, 2, 3, 4, 5];

function squareCallback(num) {
  return num * num;
}

const squaredNumbers = applyCallbackToEachElement(arr, squareCallback);

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount / 100);
    return callback(discountedPrice);
}

const showDiscountedPrice = (discountedPrice) => {
  console.log("Discounted Price: " + discountedPrice.toFixed(2));
}; ;

calculateDiscountedPrice(100, 10, showDiscountedPrice)