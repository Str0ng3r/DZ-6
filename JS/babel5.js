"use strict"
const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl)
const writingIn = (event) => {
  if (inputEl.value === '') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = inputEl.value;
  }
}
inputEl.addEventListener('input',writingIn)