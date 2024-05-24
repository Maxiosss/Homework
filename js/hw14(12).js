"use strict";
const user = {
  name: "Kostya",
  age: 14,
  hobby: "reading",
  premium: true,
};
user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

const user1 = {
  name: "Kostya",
  age: 14,
  hobby: "reading",
  premium: true,
};

console.log(countProps(user1));

function findBestEmployee(employees) {
  let bestEmployee = null;
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

const employees = {
  Kostya: 14,
  Vlad: 13,
  Nick: 16,
  Rostyslav: 15,
};

console.log(findBestEmployee(employees));

function getAllPropValues(arr, prop) {
  const values = [];
  for (const item of arr) {
    if (item[prop] !== undefined) {
      values.push(item[prop]);
    }
  }
  return values;
}
const products = [
  { name: "Laptop", price: 1300, quantity: 4 },
  { name: "Scanner", price: 700, quantity: 3 },
  { name: "Printer", price: 1000, quantity: 7 },
  { name: "Monitor", price: 800, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }
    return totalPrice;
}

const products2 = [
  { name: "Laptop", price: 1300, quantity: 4 },
  { name: "Scanner", price: 700, quantity: 3 },
  { name: "Printer", price: 1000, quantity: 7 },
  { name: "Monitor", price: 800, quantity: 9 },
];

console.log(calculateTotalPrice(products2, 'Laptop')); 
console.log(calculateTotalPrice(products2, 'Monitor')); 

const account = {
  balance: 0,

  transactions: [],

  transactionId: 1,

  createTransaction(amount, type) {
    return {
      id: this.transactionId++,
      type,
      amount,
      date: new Date().toLocaleString(),
    };
  },

  deposit(amount) {
    if (amount <= 0) {
      console.log("Сума для поповнення повинна бути більше нуля.");
      return;
    }

    this.balance += amount;
    const transaction = this.createTransaction(amount, "deposit");
    this.transactions.push(transaction);
    console.log(`Поповнено на ${amount}. Поточний баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сума для зняття повинна бути більше нуля.");
      return;
    }

    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку.");
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, "withdraw");
    this.transactions.push(transaction);
    console.log(`Знято ${amount}. Поточний баланс: ${this.balance}`);
  },

  getBalance() {
    return this.balance;
  },
  getTransactionHistory() {
    return this.transactions;
  },
  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id);
  },
};

account.deposit(1000);
account.withdraw(300);
console.log("Поточний баланс:", account.getBalance());
console.log("Історія транзакцій:", account.getTransactionHistory());
console.log("Деталі транзакції з ID 1:", account.getTransactionDetails(1));