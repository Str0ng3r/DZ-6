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
  const textHTML = []
  ingredients.forEach(el => {
   const liList = document.createElement('li')
liList.textContent = el
liList.classList.add('item')
categ.append(liList)
  })
      // categ.append('afterbegin',ingredients.map(el => `<li class='item'>${el}</li>`).join(""))