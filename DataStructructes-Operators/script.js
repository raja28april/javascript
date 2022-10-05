'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // openingHours: openingHours,//before ES6
    openingHours,//from ES6 enhanced object literals

    // order: function (starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },//before ES6
    order(starterIndex, mainIndex) {//From ES6 - enhanced way of creating methods
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //Destructuring of objects with defaults too
    orderDelivery({ starterIndex = 0, mainIndex = 1, time = '23:20', address }) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}


////////////////////////////////////////////////////
// String Methods Practice

const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for(const flight of flights.split('+')){
    const[type,from,to,time]=flight.split(';');
    console.log(`${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')} from ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time.replace(':','h')})`);
}


//////Strings - Part 3/////////////////
/*
console.log('a+very+nice+string'.split('+'));
console.log('Raja Ramasamy'.split(' '));

const[firstName, lastName] = 'Raja Ramasamy'.split(' ');
const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names){
        namesUpper.push(n[0].toUpperCase()+n.slice(1));
    }
    console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis');
capitalizedName('Raja ramasamy');

///////padding
const message = 'go to gate 23';
console.log(message.padStart(20,'+').padEnd(30,'+'));
const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    console.log(last.padStart(str.length,'*'));
}
maskCreditCard(12345678);
maskCreditCard(1234567890123456);
maskCreditCard(9876543212345);

///////Repeat

const message2 = 'Weather is good. Please be ready to fly \n';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(7);

*/
//////Strings - Part 2/////////////////
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in name
const passenger = 'RaJa';//Raja
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect = passengerLowerCase[0].toUpperCase()+passengerLowerCase.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@raja.io';
const loginEmail = '   Hello@raja.Io ';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email===normalizedEmail);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£','$').replace(',','.');

console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace(/door/g,'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));


if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the new Airbus family');
}

//Practice exercise
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
      } else {
        console.log('Welcome aboard!');
      }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

//////////////////////Strings-Part 1/////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('portugal'));//returns -1 when not found because of case sensitivity
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(0,airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);
    if(s==='B' || s==='E'){
        console.log("you got the middle seat");
    }else{
        console.log("you got lucky");
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('5E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
/*
////////////////Maps//////////////////////

const rest = new Map();
rest.set('name','Raja');
rest.set(1, 'France , Italy');
console.log(rest.set(2,'Germany , India'));

rest
.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open 🤩')
.set(false,'We are closed 😊')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('true'));
console.log(rest.get('1'));

const time = 8;
console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));
console.log(rest.has('categories'));
console.log(rest.delete(2));
// rest.clear()
console.log(rest.size);
const arr = [1,2];
// rest.set([1,2],true);
rest.set(arr);
console.log(rest);
// console.log(rest.get([1,2]));//will give undefined because both arrays [1,2](get) and [1,2](set) in map  are not the same object in the heap

*/

/*
//////////////Sets///////////////////////
// 
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
  ]);
  console.log(ordersSet);
  
  console.log(new Set('Raja'));
  
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  // ordersSet.clear();
  console.log(ordersSet);
  
  for (const order of ordersSet) console.log(order);
  
  // Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
  
  console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  console.log(new Set('Raja').size);
*/
///////////////Looping Objects: Object Keys, Values, and Entries///////
/*
//Property Names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days`;
for(const day of properties){
    openStr+=`${day},`;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [day,{open,close}] of entries){
    console.log(`On ${day}, we are open at ${open} and close at ${close}`);
}
*/

///////////////OPTIONAL CHAINING ?. OPERTAOR////////////////
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
//WITH optional chaining
for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day} we are open at ${open}`);
}

//Optional chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

//Optional chaining on Arrays
const users = [{ name: 'Raja', email: 'hello@raja.in' }];
console.log(users[0]?.name ?? 'Array is empty');
*/


/////////////Looping arrays - 'For of' loop
/*
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);

//<for of> loop with index
for(const item of menu.entries()) console.log(item);
// console.log(...menu.entries());
for(const item of menu.entries()) console.log(`${item[0]+1}: ${item[1]}`);
for(const [i,el] of menu.entries()) console.log(`${i}: ${el}`);
*/

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


