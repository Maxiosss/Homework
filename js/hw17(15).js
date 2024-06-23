"use strict";

//!  Перебираючі методи масиву

const users = [
  {
    name: "Kostya",
    balance: 5000,
    friends: ["Vlad"],
    skills: ["Node", "Python"],
  },
  {
    name: "Vlad",
    balance: 3000,
    friends: ["Kostya", "Tim"],
    skills: ["JS", "React"],
  },
  {
    name: "Tim",
    balance: 7000,
    friends: ["Vlad"],
    skills: ["HTML", "CSS"],
  },
];

const totalBalance = users.reduce((sum, { balance }) => sum + balance, 0);
console.log(totalBalance); 

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);
};

console.log(getUsersWithFriend(users, "Vlad")); 

const getNamesSortedByFriendsCount = users => {
  return users
    .slice()
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap(({ skills }) => skills);
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));

