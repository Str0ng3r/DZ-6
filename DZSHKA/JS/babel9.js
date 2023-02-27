"use strict"
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body')
const buttonChange = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')
buttonChange.addEventListener('click',() => {
   const valuj = getRandomHexColor();
    bodyEl.style.backgroundColor = getRandomHexColor()
    spanEl.textContent = bodyEl.style.backgroundColor;
})