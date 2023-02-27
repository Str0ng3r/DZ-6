"use strict"
const inputElst = document.querySelector('#font-size-control');
const elSpan = document.querySelector('#text');
inputElst.addEventListener('input', () => {
elSpan.style.fontSize = `${inputElst.value}px`
})