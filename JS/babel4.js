"use strict"
const spanEl = document.querySelector("#value");
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]')
let defoltInt = 0
const minusValue = (event) => {
  defoltInt -= 1
  spanEl.textContent = defoltInt
 }
const plusValue = (event) => {
defoltInt += 1
spanEl.textContent = defoltInt;
}
buttonMinus.addEventListener('click',minusValue)
buttonPlus.addEventListener('click',plusValue);