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

 const newMassive = ingredients.map(el => {
   const liList = document.createElement('li')
liList.textContent = el
liList.classList.add('item')
return liList
  })
  console.log(newMassive)
  categ.append(...newMassive)
      // categ.append('afterbegin',ingredients.map(el => `<li class='item'>${el}</li>`).join(""))