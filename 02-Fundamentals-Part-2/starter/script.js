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
/*
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
*/
/*
//calling functions inside another function part 2
const calcAge = function(birthYear){
    return 2035 - birthYear;
}
const yearsUntilRetirement = function(birthYear,firstName){
    const age = calcAge(birthYear);
    const retirement = 60 -age;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

yearsUntilRetirement(1960,'Raja');

*/

/**
 * there are 2 types of functions
 * 1. Function declarations - can be used before it is declared
 * 2. Function expressions - essentially a function value stored in a variable
 * 3. Arrow functions - Great for quick one line function. Has no 'this' keyword
 * 
 * normally the anatomy of the function has 
 * 1. function name
 * 2. parameters(input data)
 * 3. function body(block of code that we want to reuse. It processes the input data)
 * 4. return statement(output a value from the function and terminate execution)
 * 5. const age = calcAge(1995,'Raja') => calling, running or invoking a function using ()
 */

/*
//Arrays - first data structure
 const friend1 = 'Michael';
 const friend2 = 'Steven';
 const friend3 = 'Peter';

 const friends = ['Michael','Steven','Peter'];
 console.log(friends);

 const yrs = new Array(1991,1984,2008,2020);

 console.log(friends[0]);
 console.log(friends[1]);

 console.log(friends.length);
 console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Raja';
const raja = [firstName,'Berlin',2035-1991,'Teacher',friends];
console.log(raja);
console.log(raja.length);

const calcAge = function(birthYear){
    return 2035 - birthYear;
}

const years = [1990,1991,1985,2020];
console.log(calcAge(years));//NaN since calcAge is expecting only one single number and we are passing an array which is an object

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);
*/
/*
//Arrays basic operations
const friends = ['Michael','Steven','Peter'];
console.log(friends);
//Add element
const newLength = friends.push('Jay');//push returns new length of the array
console.log(friends);
console.log(newLength);

friends.unshift('John')//adds to first element
console.log(friends);

//Remove element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);
console.log(friends);

friends.shift();//removes first element
console.log(friends);

//index
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));//returns -1 if not found
//includes
friends.push(23)
console.log(friends);
console.log(friends.includes('Steven'));//true
console.log(friends.includes('Bob'));//returns false if not found
console.log(friends.includes('23'));//false
console.log(friends.includes(23));//true

if(friends.includes('Michael')){
    console.log('You have a friend called Michael')
}
*/

/*
//Introduction to objects
const friends = ['Michael','Steven','Peter'];
const raja ={
    firstName: 'Raja',
    lastName: 'Ramasamy',
    age: 2022-2002,
    job: 'teacher',
    friends: friends
}

console.log(raja);

console.log(raja.firstName);//dot operator
const nameKey = 'Name';
//console.log(raja.'first'+nameKey);//with dot(.) operator we should use only the real property name and not the computed property name
console.log(raja['firstName']);//Bracket notation
console.log(raja['first'+nameKey]);
console.log(raja['last'+nameKey]);

// const interestIn = prompt('What you want to know about Raja?. Choose between firstName, lastName, age, job and friends');

// if(raja[interestIn]){
//     console.log(raja[interestIn]);
// }else{
//     console.log('Wrong request. Choose between firstName, lastName, age, job and friends')
// }

raja.location = 'Boston';
raja['twitter'] = '@raja28';
console.log(raja);

console.log(`${raja.firstName} has ${raja.friends.length} friends and his best friend is ${raja.friends[0]}`);// dot operator follows the order of precedence with "left to right" associativity. reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
/*
//Object methods

const friends = ['Michael','Steven','Peter'];
const raja ={
    firstName: 'Raja',
    lastName: 'Ramasamy',
    birthYear: 2002,
    job: 'teacher',
    friends: friends,
    hasDrivingLicense: true,
    // calcAge: function(birthYear){
    //     return 2025 - birthYear;
    // }
    calcAge: function(){//Functions in a object are called as methods
        // console.log(this);
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    summary: function(){//Functions in a object are called as methods
        return `${this.firstName} is a ${this.age} young kid and he has ${this.hasDrivingLicense?'a':'no'} driving license`;
    }
    //Functions in a object are called as methods - calcAge and summary are methods here
};

// console.log(raja.calcAge(2000));
// console.log(raja['calcAge'](2000));//function name inside brackets should be in string format and then pass parameters. Keep in mind about the order of precedence

console.log(raja.calcAge());
console.log(raja['calcAge']());
//challenge
console.log(raja.summary());
*/
/*
//Iteration or Loops
for(let i=1; i<=10; i++){
    console.log(`Lifting weights repetition ${i} 🏋️‍♀️`)
}
*/
/*
const friends = ['Michael','Steven','Peter'];
const firstName = 'Raja';
const raja = [firstName,'Berlin',2035-1991,'Teacher',friends];

const types =[];
for(let i=0; i<raja.length;i++){
    //reading from raja array
    console.log(raja[i], typeof raja[i])
    //filling data to types array
    types[i] = typeof raja[i];
}
console.log(types);

const years = [1991,2002,2020,1999];
const ages =[];
for(let i=0; i<years.length;i++){
    ages.push(2025-years[i]);
}

console.log(ages);

//continue and break
console.log('--- ONLY STRINGS ---');
for(let i=0; i<raja.length;i++){
    if(typeof raja[i]!=='string') continue;
    console.log(raja[i], typeof raja[i]);
}

console.log('--- BREAK MIT NUMBERS ---');
for(let i=0; i<raja.length;i++){
    if(typeof raja[i]==='number') break;
    console.log(raja[i], typeof raja[i]);
}

*/
const friends = ['Michael','Steven','Peter'];
const firstName = 'Raja';
const raja = [firstName,'Berlin',2035-1991,'Teacher',friends];
//Looping backwards
for(let i =raja.length-1; i>=0;i--){
    console.log(raja[i]);
}

//Loop inside loop
for(let exercise =1; exercise<4; exercise++){
    console.log(`--------Staritng exercise ${exercise}`);
    for(let rep=1; rep<6; rep++){
        console.log(`Exercise:${exercise} - Lifting weight repetition ${rep}🏋️‍♀️`);
    }
}