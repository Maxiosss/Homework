"use strict";
const arr = [2, 3, 4];
arr[1] = 10;
console.log(arr);

//! Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const array = ["str", "text", "paragraph"];
array.push("hello");
console.log(array);

const nums = [22, 33, 40, 55];
let sum = 0;
for (let i of nums) {
  sum += i;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
for (let i = 1; i <= numbers.length; i++) {
  console.log(i);
}

const texts = ["text", "str", "paragraph", "hello", "world!"];
for (let i of texts) {
  if (i.length > 5) {
    console.log(`Цей вираз: ${i}, містить більше 5-ти символів`);
  } else {
    continue;
  }
}

arrayOfNumbers = [1, 3, 23, 53, 65, 12, 34, 35, 2, 33];

let maxNumber = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > maxNumber) {
    maxNumber = arrayOfNumbers[i];
  }
}

console.log("Максимальне значення з масиву:", maxNumber);

let arrayOfCouplesNums = [3, 6, 4, 12, 14, 10, 22, 13, 7, 5];
arrayOfCouplesNums.sort((a, b) => a - b)
console.log("Парні числа в масиві:");

for (let i = 0; i < arrayOfCouplesNums.length; i++) {
  if (arrayOfCouplesNums[i] % 2 === 0) {
    console.log(arrayOfCouplesNums[i]);
  }
}
