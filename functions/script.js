'use strict';
///////////////////////Default Parameters/////////////
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

///////////////FunctionsAcceptingCallbackFunctions////////////

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




