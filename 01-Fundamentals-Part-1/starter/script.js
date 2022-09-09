/*
let js ='amazing'
if(js==='amazing') alert('Javascript is FUN!')
console.log(21+33)


let firstName = 'Raja';
console.log(firstName)

//variable name convention
let raja_ramasamy = 'RR';
let $function = 27;
let person = 'Raja';

let pi = 3.14;
let PI = 3.1415;

let myFirstJob = 'teacher';
let myCurrentJob = 'coder';

let job1 = 'Teacher';
let job2 = 'Coder';

console.log(myFirstJob);
*/

/*

//Datatypes

let javascriptIsFun = true;
console.log(javascriptIsFun);//true

console.log(typeof true);//boolean
console.log(typeof javascriptIsFun);//boolean
console.log(typeof 23);//number
console.log(typeof 'Raja');//string


javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);//string


let year;
console.log(year);//undefined
console.log(typeof year);//undefined

year = 1991;
console.log(typeof year);//number

console.log(typeof null);//object
*/

/*
//MathOperators
const now = 2022;
const ageOfRaja = now-1991;
const ageOfSarah = now-2018;

console.log(ageOfRaja, ageOfSarah);

console.log(ageOfRaja*2, ageOfRaja/10, 2**3);

//AssignmentOperators
let x = 10 + 5;
x+=10;//x=x+10//x=15+10;
console.log(x);
x*=4;//x=x*4//x=25*4
x++;//101
x--;
x--;//99
console.log(x);


//Comparison Operators
console.log(ageOfRaja>ageOfSarah);//true//<, >, <=, >=
console.log(ageOfSarah>=18);//false

const isFullAge = ageOfSarah>=18;

console.log(now-1991 > now -2018);
*/

//Order of precedence

/*reference for order of precedence 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

/*const now = 2022;
const ageOfRaja = now-1991;
const ageOfSarah = now-2018;

let x,y;
x=y= 25-10-5;//for assignment operators Associativity is "right to left"
console.log(x , y);

const averageAge = ageOfRaja + ageOfSarah / 2;//division has highest precedence than addition/subtraction

//strings and template literals
let firstName= 'Raja';
let job = 'Teacher';

const raja = "I am "+firstName+' a '+ ageOfRaja + ' years young '+ job +'!';
console.log(raja);

const rajaNew = `I am ${firstName} a ${ageOfRaja} years young ${job}!`;
console.log(rajaNew);

console.log(`Just a regular string`);
console.log('String with \n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);*/

/*
//decision making statements
const age =16;
const isOldEnough = age>=18;
if(isOldEnough){
    console.log('Raja can apply for driving license 🚘')
}
if(age>18){
    console.log('Raja can apply for driving license 🚗')
}else{
    const yearsLeft = 18-age;
    console.log(`Raja is too young. Wait for another ${yearsLeft} years 😊`);
}
*/
/*
//Type conversions
const inputYear = '1991';
console.log(Number(inputYear),inputYear);//1991 1991(string)
console.log(inputYear+18);//199118
console.log(Number(inputYear)+18);//2009

console.log(Number('Raja'));//NaN
console.log(typeof NaN);//number

console.log(String(23), 23);//23(string) 23

// type coercions
console.log('I am '+ 23 + ' years young')//I am 23 years young {'+' operator converts numbers to string}
console.log('23'-'10'-3)//10{'-' operator converts strings to numbers}
console.log('23'+'10'+3)//23103{'+' operator converts numbers to string}
console.log('23'*'3')//69 {'*' operator converts strings to numbers}
console.log('24'/'3')//8 {'/' operator converts strings to numbers}


console.log(2+3+4+'5');//95
console.log('10'+'4'+'3'-2+'5');//10415
console.log('10'-'4'-'3'-2+'5');//15
*/

/*
//Truthy and falsy vlaues
// 5 falsy values are 0, '', undefined, null, NaN

console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean('Raja'));//true


const money =0;
if(money){
    console.log(`Don't spend it all`);
}else{
    console.log('You should find a job');
}

let height;
if(height){
    console.log('height is defined');
}else{
    console.log('height is undefined');
}
*/

/*
//Equality Operators
const age = 18;
if(age===18){
    console.log('You just became an adult! (strict)')
}
if(age==18){
    console.log('You just became an adult! (loose)')
}

const age2 = '18';
if(age2===18){
    console.log('You just became an adult! (strict)')
}
if(age2==18){
    console.log('You just became an adult! (loose)')
}

if(age2!==18){//strictly not equal to 18 because age2 is '18'(string) not a (number)
    console.log('Why not 18?!');
}

*/
const age = 16;
const a = age >= 20;//false
const b = age < 30;//true

console.log(!a);//true
console.log(a && b);//false
console.log(a || b);//true
console.log(!a && b);//true
console.log(a || !b);//false

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision)//true
console.log(hasDrivingLicense || hasGoodVision)//true
console.log(!hasDrivingLicense)//false

if(hasDrivingLicense && hasGoodVision){
    console.log('Raja should be able to drive!')
}else{
    console.log('Someone else should drive')
}

const isTired = true;
console.log(hasDrivingLicense && hasGoodVision && isTired);//true

if(hasDrivingLicense && hasGoodVision && !isTired){
    console.log('Raja should be able to drive');
}




