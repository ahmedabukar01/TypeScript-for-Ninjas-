"use strict";
const anchor = document.querySelector('a');
// giving ! after the document means, i am sure that it will not return null.
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(anchor.href);
// console.log(form.children);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
