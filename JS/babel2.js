"use strict"
const categ = document.getElementById("ingredients");
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
      categ.insertAdjacentHTML('afterbegin',ingredients.map(el => `<li class='item'>${el}</li>`).join(""))