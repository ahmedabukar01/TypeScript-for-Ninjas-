const character = 'the nur'

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input)
})

// explicit Types 
let Actor: string;
let age: number;
let isLoggedIn: boolean;

// arrays
const ninja: string[] = [];
ninja.push('33');

// Union types
let moreNinjas: (string | number | boolean)[] = [];
moreNinjas.push(33);
moreNinjas.push('more');
moreNinjas.push(false);

let uid: string | number ;

// objects


let ninjaOne: {
    name: string,
    age: number,
    beltColor: string
}

ninjaOne = {
    name: 'mario',
    age: 30,
    beltColor: 'black'
}

console.log('everything is working well');

// functions
let great: Function;
great = (): void =>{
    console.log('hello ...')
}

const add = (a: number, b: number, c?: number | string = 3): number =>{
    return a + b;
    // your optional parameter should be the last one.
}

type userType = {name: string, age: number, city: string}

const logDetails = (user: userType) =>{
    console.log(`${user.name} has a lot of details like ${user}`)
}