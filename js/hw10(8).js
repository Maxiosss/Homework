"use strict";

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < friends.length; i++) {
  if (i === friends.length - 1) {
    string += friends[i];
  } else {
    string += friends[i] + ", ";
  }
}
console.log(string);

const string2 = friends.join(", ");
console.log(string2);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = cards.splice(2, 1);

const cardToInsert = cards.push("Карточка-6");

const cardToUpdate = cards.splice(2, 1,'Card-4');

console.log(cards);
