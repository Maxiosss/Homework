"use strict";
const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.getElementById("ingredients");

const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  return listItem;
});

ingredientsList.append(...listItems);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");

const galleryItems = images
  .map(({ url, alt }) => {
    return `<li class="gallery-item">
                    <img src="${url}" alt="${alt}">
                </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueSpan = document.getElementById("value");

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

const updateValue = () => {
  valueSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
