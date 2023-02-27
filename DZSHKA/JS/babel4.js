"use strict"
const spanEl = document.querySelector("#value");
console.log(spanEl)
const buttonPlus = document.querySelector('#counter button[data-action="increment"]');
console.log(buttonPlus)
const buttonMinus = document.querySelector('#counter button[data-action="decrement"]')
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