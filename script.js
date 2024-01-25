const nameInput = document.querySelector('#user_name');
const namePattern = /^[A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű\s]+$/
const emailInput = document.querySelector('#user_email');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordInput = document.querySelector('#user_password');
const passwordPattern = /[A-Z][a-z]*\d.*\d\W/;
const confirmInput = document.querySelector('#pasword_confirm');


nameInput.addEventListener('blur', () => {
    if (namePattern.test(nameInput.value)) {
        nameInput.style.backgroundColor = 'rgb(31, 237, 45)';
    } else {
        nameInput.style.backgroundColor = 'red';

    }

    if (nameInput.value === '') {nameInput.style.backgroundColor = 'white'}
})

emailInput.addEventListener('blur', () => {
    if (emailPattern.test(emailInput.value)) {
        emailInput.style.backgroundColor = 'rgb(31, 237, 45)';
    } else {
        emailInput.style.backgroundColor = 'red';
    }

    if (emailInput.value === '') {emailInput.style.backgroundColor = 'white'}
})

passwordInput.addEventListener('blur', ()=> {
    if (passwordPattern.test(passwordInput.value)) {
        passwordInput.style.backgroundColor = 'rgb(31, 237, 45)';
    } else {
        passwordInput.style.backgroundColor = 'red';

    }

    if (passwordInput.value === '') {passwordInput.style.backgroundColor = 'white'}
})

confirmInput.addEventListener('blur', () => {
    if (passwordInput.value === confirmInput.value) {
        confirmInput.style.backgroundColor = 'rgb(31, 237, 45)';
    } else {
        confirmInput.style.backgroundColor = 'red';
    }

    if (confirmInput.value === '') {confirmInput.style.backgroundColor = 'white'}
})



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});








// /[A-Z][a-z]*\d.*\d\W/