"use strict";

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax"]);

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
};

const message = "Я не перевстановлюю віндовс";
const pricePerWord = 3;
console.log(calculateEngravingPrice(message, pricePerWord));

const findLongestWord = function (string) {
  const words = string.split(" ");

  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("Я найдовше слово"));
console.log(findLongestWord("один два три п`ять"));

const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 37) + "...";
  }
};
console.log(
  formatString(
    "Якщо навколо тебе колір червоний – Значить всьо нормально - ти живий і здоровий.Якщо навколо більше колір зелений – За.Ла-ла-ла-ла-ла-ла-ла-ла,Ла-ла-ла-ла-ла-ла-ла-лаЛа-ла-ла-ла-ла-ла-ла-ла.Якщо навколо більше колір зелений – Значить гроші просто в руки тобі падають з неба.Ла-ла-ла-ла-ла-ла-ла-ла"
  )
);

console.log(formatString("Кузьма"));

const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
};
console.log(checkForSpam("I hate spaming"));
console.log(checkForSpam("Big sales"));
console.log(checkForSpam("Test"));

let numbers = [];

while (true) {
  let input = prompt("Будь ласка, введіть число:");

  if (input === null) {
    break;
  } else if (isNaN(input) || input.trim() === "") {
    alert("Було введено не число, попробуйте ще раз");
  } else {
    numbers.push(Number(input));
  }
}

if (numbers.length > 0) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  alert("Було введено не число");
}


const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
};

const logins = ["User", "TestUser", "Admin2024", "Manager"];
console.log(addLogin(logins, "NewUser"));
console.log(addLogin(logins, "User"));
console.log(addLogin(logins, "NewManager2024&&2025"));
console.log(addLogin(logins, "abc"));
console.log(logins);
