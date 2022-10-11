"use strict"

let notif = document.querySelector("#notif"),
    input = document.querySelectorAll("input"),
    sendBtn = document.querySelector(".send"),
    indicator = document.querySelector('#indicator'),
    modalWrapper = document.querySelector('.modal-wrapper'),
    okBtn = document.querySelector(".ok");
// ============form validdation ==================
input[0].addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
})
input[0].addEventListener('blur', (e) => {

    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'Please fill input...');
        e.target.value = ""
    }
})
input[1].addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
    e.target.setAttribute('placeholder', 'Enter Password')
    indicator.setAttribute('style', 'display:block')
    if (input[0].value.trim().length === 0) {
        input[0].setAttribute('style', 'border:2px solid crimson');
        input[0].setAttribute('placeholder', 'Please fill input...');
        input[0].value = ""
    } else {
        input[0].setAttribute('style', 'border:2px solid green');
    }
})
input[1].addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'Please fill password...');
        e.target.value = ""
    } else {
        e.target.setAttribute("style", "border:2px solid green")
    }
})

indicator.addEventListener('click', (e) => {
    if (input[1].getAttribute('type').toLowerCase() === 'password') {
        input[1].setAttribute('type', 'text');
        indicator.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
        input[1].setAttribute('type', 'password');
        indicator.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }
})

// ============form validation ============

sendBtn.addEventListener('click', () => {
    if (input[0].value.trim().length === 0 || input[1].value.trim().length === 0) {
        console.log(1222);
    } else {
        modalWrapper.setAttribute('style', "display:flex")
    }
})

okBtn.addEventListener('click', ()=>{
    modalWrapper.setAttribute('style', "display:none")
})