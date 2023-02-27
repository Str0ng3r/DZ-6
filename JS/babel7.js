"use strict"
const inputElst = document.querySelector('#font-size-control');
console.log(inputElst)
console.log(inputElst.min)
console.log(inputElst.value)
const elSpan = document.querySelector('#text');
console.log(elSpan)
inputElst.addEventListener('input', () => {
elSpan.style.fontSize = `${inputElst.value}px`
})