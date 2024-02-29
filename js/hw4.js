"use strict";

const newImg = document.querySelector(".mountains");
newImg.src = "./img/mountains.jpg";

const link = document.querySelector(".link");
link.href = "https://images.app.goo.gl/t9a798deDE3hpA2y6";

const newAlt = document.querySelector(".sea");
newAlt.alt = "sea";

const newText = document.querySelector(".button--change");
const text = document.querySelector(".input--value");
newText.textContent = text.value;

const newParagraph = document.querySelector(".list__text");
newParagraph.textContent = 'Element 1';
