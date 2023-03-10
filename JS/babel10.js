"use strict"
 const addBlock = document.querySelector('#boxes')
 const buttonAdd = document.querySelector('[data-create]')
 const buttonRemove = document.querySelector('[data-destroy]')
 const inputValue = document.querySelector('input')
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function removeInner () {
  addBlock.innerHTML = ''
}



const amountInput = inputValue.value
 function createBoxes(amount) {
for (let i = 0;i < amount; i += 1){
  const boxOne = document.createElement('div')
  const size = 30 + i * 10
  boxOne.style.width = `${size}px`
  boxOne.style.height = `${size}px`
  boxOne.style.backgroundColor = getRandomHexColor()
  addBlock.appendChild(boxOne)
}
 }
 buttonAdd.addEventListener('click',() => {
  addBlock.innerHTML= ''
  const amount = inputValue.value
  createBoxes(amount)
  inputValue.value = ''
})
buttonRemove.addEventListener('click',removeInner)