"use strict";

let bankAccount = {
  ownerName: "X",
  accountNumber: "3333 3333 3333 3333",
  balance: 0,

  deposit: function (amount) {
    this.balance += amount;
    console.log(`Гроші успішно поповнені на рахунок. Залишок: ${this.balance}`);
  },

  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Гроші успішно зняті з рахунку. Залишок: ${this.balance}`);
    } else {
      console.log("Недостатньо коштів на рахунку");
    }
  },
};

bankAccount.deposit(1000);
bankAccount.withdraw(700);

const temperature = parseFloat(
  prompt("Введіть температуру в градусах Цельсія:")
);
let weather = {
  temperature,
  humidity: "61%",
  windSpeed: "6m/s",
  isTemperatureBelowZero: function () {
    if (this.temperature < 0) {
      return true;
    } else {
      return false;
    }
  },
};

if (weather.isTemperatureBelowZero()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія");
}

let user = {
  name: "",
  email: "",
  password: "",
  login: function (inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      return true;
    } else {
      return false;
    }
  },
};

user.name = prompt("Введіть ім'я:", "");
user.email = prompt("Введіть email:", "");
user.password = prompt("Введіть пароль:", "");

const inputEmail = prompt("Введіть ваш email для входу:", "");
const  inputPassword = prompt("Введіть ваш пароль для входу:", "");

if (user.login(inputEmail, inputPassword)) {
  alert("Ви успішно увійшли!");
} else {
  alert("Неправильний email або пароль!");
}


    const movie = {
      title: "Napoleon",
      director: "Christopher Nolan",
      year: 2023,
      rating: 8.8,
      isHighRating: function () {
        return this.rating > 8;
      },
    };

    document.querySelector(".title").textContent = "Title: " + movie.title;
    document.querySelector(".director").textContent =
      "Director: " + movie.director;
    document.querySelector(".year").textContent = "Year: " + movie.year;
    document.querySelector(".rating").textContent = "Rating: " + movie.rating;

    if (movie.isHighRating()) {
      document.querySelector(".title").classList.add("high-rating");
    }
