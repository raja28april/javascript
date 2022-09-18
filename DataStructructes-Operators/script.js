'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starter, main) {
        return [this.starterMenu[starter], this.mainMenu[main]];
    },

    //Destructuring of objects with defaults too
    orderDelivery: function ({ starterIndex = 0, mainIndex = 1, time = '23:20', address }) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}

/////////////Looping arrays - 'For of' loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);

//<for of> loop with index
for(const item of menu.entries()) console.log(item);
// console.log(...menu.entries());
for(const item of menu.entries()) console.log(`${item[0]+1}: ${item[1]}`);
for(const [i,el] of menu.entries()) console.log(`${i}: ${el}`);//with destructing of arrays 




///////////////////////////////////////
// Logical Assignment Operators
/*
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
  };
  
  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };
//OR assignment operator
//   rest1.numGuests = rest1.numGuests || 10;
//   rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests||=10;
// rest2.numGuests||=10;

//Nullish assignment Operator
rest1.numGuests??=10;
rest2.numGuests??=10;

//And Operator
// rest1.owner = rest1.owner && '<Anonymous';
// rest2.owner = rest2.owner && '<Anonymous';

rest1.owner &&= '<Anonymous';
rest2.owner &&= '<Anonymous';
console.log(rest1);
console.log(rest2);
*/
/////////////NULLISH COALESCING OPERATOR ??///////////////////
/*
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//Nullish: null and undefined (NOT 0 and '') only considered as falsy
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/////////////SHORT CIRCUITING (&& AND ||)///////////////////
/*
console.log('________OR________');
//Use any data type, return any data type and short circuiting
// console.log(3||'Raja');
// console.log(''||'Raja');
// console.log(true||0);
// console.log(undefined||null);
// console.log(true||true);

// console.log(undefined||''||0||'Hello'||23||null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('________AND________');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(7 && 0);
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');
*/

///////////////REST PATTERN & PARAMETERS/////////////////////
/*
// 1) Destructuring
//SPREAD, because on RIGHT SIDE of =
const arr = [1,2,...[3,4]];

//REST, because on LEFT SIDE of =
const [a,b,...others]=[1,2,3,4,5]
console.log(a,b,others);

const [pizza,,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);

//Objects
const{sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function(...numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++) sum+=numbers[i];
    console.log(`sum = ${sum}`);
}

add(2,3);
add(2,3,4);
add(2,3,4,5,6);

const x = [10,11,12];
add(...x);

restaurant.orderPizza('mushrooms','onions','olives','spinach');
restaurant.orderPizza('mushroom');

// restaurant.orderDelivery({
//     time:'22:30',
//     address:'21 fechner',
//     mainIndex:2,
//     starterIndex:2
// });

// restaurant.orderDelivery({
//     address:'21 fechner',
//     starterIndex:2
// });
*/
/////////////////Spread Operator/////////////
//
/*
const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

//copy Array
const mainMenuCopy = [...restaurant.mainMenu];//shallow copy
mainMenuCopy.push('Idly');
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

//join 2 Arrays
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

//Iteratables: Arrays ,strings, maps , sets but NOT Objects
const str = 'Raja';
const letters = [...str,"", ".R"];
console.log(letters);

// console.log(`${...str} Raja`);//Unexpected token '...'

// Real-world example
const ingredients = [
    // prompt("Let's make pasta! Ingredient 1?"),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3'),
  ];
  restaurant.orderPasta(...ingredients);
  console.log(ingredients);

//   spread operator on Objects
const newRestaurant = {foundedIn:1998,...restaurant,founder:'Raja'};
const newRestaurantCopy = {...newRestaurant};
newRestaurant.founder = 'Raja2';
console.log(newRestaurant.founder);
console.log(newRestaurantCopy.founder);
*/

//////////////Destructing of arrays///////////////
//
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const[x,y,z]= arr;
console.log(x,y,z);

let [main,secondary] = restaurant.categories;
console.log(main,secondary);

//swap two values using normal way
// const temp = main;
// main = secondary;
// secondary=temp;
// console.log(main,secondary);

//swap using destructuring arrays
[main,secondary] = [secondary,main];
console.log(main,secondary);

// console.log(restaurant.order(2,0));

//receive 2 return values from a function
const[starterCourse,mainCourse]  = restaurant.order(2,0);
console.log(starterCourse,mainCourse);

//NESTED Destructing
const nested = [2,3,[4,5]];
// const[i,j]=nested;
const[i,,[j,k]]=nested;
// console.log(i,j);
console.log(i,j,k);


//DEFAULT VALUES while destructuring
const values = [1,3,4];
// const[r,s,t,u] = values;
// console.log(r,s,t,u);//u value will be undefined

const[r,s=5,t=2,u=1] = values;
console.log(r,s,t,u);
*/

/////////////Destructing of Objects//////////////////
///
/*
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tag } = restaurant;
// console.log(restaurantName,hours,tag);

//DEFAULT VALUES
const {menu=[],starterMenu:starter=[]} = restaurant;
// console.log(menu,starter);

//MUTATING VARIABLES
let a = 111, b =999;
const obj = {a:23,b:7, c:9};
({a,b} = obj);
// console.log(a,b);

//NESTED OBJECTS
const{fri:{open:o,close:c}}=openingHours;
console.log(o,c);
*/


