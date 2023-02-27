"use strict"
const formEl = document.querySelector('.login-form')
const input1 = formEl.elements.email
const input2 = formEl.elements.password
const objBase = {}
formEl.addEventListener('submit',(event) => {
    event.preventDefault();
    if (!input1.value || !input2.value){
        alert('Всі поля повинні бути заповнені!')
        return
    }else {
        objBase.email = input1.value;
        objBase.password = input2.value
    }
    console.log(objBase)
    formEl.reset();
})