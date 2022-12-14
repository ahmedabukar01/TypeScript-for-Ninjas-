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
// functions
let great;
great = () => {
    console.log('hello ...');
};
const add = (a, b, c = 3) => {
    console.log(c);
    return a + b;
    // your optional parameter should be the last one.
};
const logDetails = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
logDetails({ name: 'fartuun', age: 20, city: 'mogadisho' });