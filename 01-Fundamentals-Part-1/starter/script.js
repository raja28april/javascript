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

const now = 2022;
const ageOfRaja = now-1991;
const ageOfSarah = now-2018;

let x,y;
x=y= 25-10-5;//for assignment operators Associativity is "right to left"
console.log(x , y);

const averageAge = ageOfRaja + ageOfSarah / 2;//division has highest precedence than addition/subtraction



