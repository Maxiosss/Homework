"use strict";

//! Імперативний і декларативний код. Чисті функції

const users = [
  {
    name: "Kostya",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "kostya@example.com",
    age: 14,
  },
  {
    name: "Arina",
    eyeColor: "green",
    gender: "female",
    isActive: false,
    email: "arina@example.com",
    age: 15,
  },
  {
    name: "Tim",
    eyeColor: "brown",
    gender: "male",
    isActive: true,
    email: "tim@example.com",
    age: 12,
  },
  {
    name: "Vlad",
    eyeColor: "blue",
    gender: "male",
    isActive: false,
    email: "vlad@example.com",
    age: 13,
  },
];

const getAllNames = (users) => users.map((user) => user.name);

console.log(getAllNames(users));

const getUsersByEyeColor = (users, eyeColor) =>
  users.filter((user) => user.eyeColor === eyeColor);

console.log(getUsersByEyeColor(users, "blue"));

const getUserNamesByGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);

console.log(getUserNamesByGender(users, "male"));
console.log(getUserNamesByGender(users, "female"));

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users));

const getUserByEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserByEmail(users, "arina@example.com"));

const getUsersByAgeRange = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersByAgeRange(users, 12, 14));
