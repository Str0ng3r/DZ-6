"use strict"
const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories ${categoriesItems.length}`)
categoriesItems.forEach((el) => {
    const catName = el.querySelector('h2').textContent
    const catEl = el.querySelectorAll('li');
    console.log(`Category:${catName} Elements : ${catEl.length}`)
})