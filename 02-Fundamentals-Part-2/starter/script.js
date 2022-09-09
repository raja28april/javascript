/*'use strict';//if not used then there wont be any findings of indefined variables as given in line 6 "hasDrivingsLicense"

let hasDrivingLicense = false;
const passTest=true;

if(passTest) hasDrivingLicense=true;//hasDrivingLicense is misspelled 
if(hasDrivingLicense) console.log('I can drive😎');

// const interface = 10;//SyntaxError: Unexpected strict mode reserved word when using strict mode

const private = 20;//SyntaxError: Unexpected strict mode reserved word when using strict mode*/

/*
//function
function logger(){
    console.log('The name is Raja');
}

logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4,3);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/
/*
//function declaration vs expressions
//function declaration

function calcAge1(birthYear){
    return 2035 - birthYear;
}
console.log(calcAge1(2025));

//function expression
const calcAge2 = function(birthYear){
    return 2035 - birthYear;
}

console.log(calcAge2(2025));
*/
/*
//Arrow functions

const calcAge3 = birthYear => 2035-birthYear;
console.log(calcAge3(2028));

const yearUntilRetirement = (birthYear,firstName) =>{
    const age = 2035-birthYear;
    const retirement = 60-age;
    return `${firstName} has ${retirement} years for retirement`;
}

console.log(yearUntilRetirement(1991,'Raja'));
console.log(yearUntilRetirement(1992,'Raja'));
*/

//calling functions inside another function
function cutFruitsIntoPieces(fruit){
    return fruit * 4;
}

function fruitProcessor2(apples,oranges){
    const applePieces = cutFruitsIntoPieces(apples);
    const orangePieces = cutFruitsIntoPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor2(2,3));
