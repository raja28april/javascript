'use strict';
/////////////Call and apply methods/////////////
const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iatacode}${flightNum}`,name});
    },
}
lufthansa.book(239, 'Raja Ramasamy');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
//Does NOT work
// book(23,'Raja Ramasa')

/**
 * "Call Method"
 * this keyword in lufthansa object when called in previous line points to const book initialized in above line
 * and so when used call method on a function 'book' we can pass a parameter 
 * which can be considered as the object to be used as the current object.
 */
book.call(eurowings,23,'Raja Ramasa');
book.call(lufthansa,45,'Ramasam Raja');

const swiss = {
    airline:'Swiss airlines',
    iatacode: 'LX',
    bookings:[]
};

book.call(swiss,21,'Mary Cooper');

//Apply method
const flightData = [583,'Mary Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData)

///////////////////////Default Parameters/////////////
/*
const bookings = [];
const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',5);
createBooking('LH123',undefined,200);
let a;

if(a) console.log('true')
else console.log('false');
*/
///////////////FunctionsAcceptingCallbackFunctions////////////
/*
const oneword = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [firstWord, ...others] = str.split(' ');
    return [firstWord.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Tansformed by: ${fn.name}`);
}

transformer('Javascript is the best', oneword);
transformer('Javascript is the best', upperFirstWord);
//JS uses callback all the time
const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click',high5);


['Raja','Martha','Partha'].forEach((high5));
*/
////////////Functions returning functions////////////
/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

greet('Hello')('Raja');

//Challenge to write same greet fubc using arrow func
// const greetArrow = (greeting) => {
//     return (name) => console.log(`${greeting} ${name}`);
// }

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Raja');
*/

