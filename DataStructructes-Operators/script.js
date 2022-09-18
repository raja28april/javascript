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
    orderDelivery:function({starterIndex=0,mainIndex=1,time='23:20',address}){
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}
restaurant.orderDelivery({
    time:'22:30',
    address:'21 fechner',
    mainIndex:2,
    starterIndex:2
});

restaurant.orderDelivery({
    address:'21 fechner',
    starterIndex:2
});
////////////////////////////////////////////
//Destructing of arrays
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

//////////////////////////////////////////////
//Destructing of Objects
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

