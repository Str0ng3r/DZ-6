"use strict"
const inputBor = document.querySelector('#validation-input')
inputBor.addEventListener('blur', () => {
  const expectedLength = inputBor.getAttribute('data-length');
  const actualLength = inputBor.value.length;

  if (actualLength === parseInt(expectedLength)) {
    inputBor.classList.add('valid');
    inputBor.classList.remove('invalid');
  } else {
    inputBor.classList.add('invalid');
    inputBor.classList.remove('valid');
  }
});