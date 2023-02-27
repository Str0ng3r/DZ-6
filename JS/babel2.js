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

  function fasovka(massIng) {
    const massItems = [];
    ingredients.forEach((el) => {
      const ingOne = document.createElement("li");
      ingOne.innerHTML = el;
      ingOne.classList.add("item");
      massItems.push(ingOne);
    });
    for (let i = 0; i < massItems.length; i++) {
      massIng.appendChild(massItems[i]);
    }
    console.log(massIng)
  }
  fasovka(categ)