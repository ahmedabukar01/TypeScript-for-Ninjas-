"use strict";
const character = 'the nur';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
// explicit Types 
let Actor;
let age;
let isLoggedIn;
// arrays
const ninja = [];
ninja.push('33');
// Union types
let moreNinjas = [];
moreNinjas.push(33);
moreNinjas.push('more');
moreNinjas.push(false);
let uid;
// objects
let ninjaOne;
ninjaOne = {
    name: 'mario',
    age: 30,
    beltColor: 'black'
};
console.log('everything is working well');
