"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Raja Ramasamy",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1);

const user = "Steven Thomas Williams";
const createUserNames = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//Event Handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    (currentAccount.balance >= amount) &
      (receiverAcc.userName !== currentAccount.userName)
  ) {
    console.log("Transfer valid");

    //Doing the trnasfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////Lectures////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*const JuliaData = [3, 5, 2, 12, 7], KateData = [4, 1, 15, 8, 3];
const JuliaData2 = [9, 16, 6, 8, 3], KateData2 = [10, 5, 6, 1, 4];

const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  const allDogs = dogsJuliaCorrected.concat(dogsKate);
  allDogs.forEach((dogsAge,i)=>{
    if(dogsAge>=3){
      console.log(`Dog number ${i+1} is an adult, and is ${dogsAge} years old`);
    }else{
      console.log(`Dog number ${i+1} is still a puppy 🐶`);
    }
  })
};
checkDogs(JuliaData,KateData);
checkDogs(JuliaData2,KateData2);*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
let arr = ['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);

//////REVERSE////////
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT///////
const letter = arr.concat(arr2);
console.log(letter);
console.log(`******arr******`);
console.log(arr);
console.log(`******arr2******`);
console.log(arr2);
console.log([...arr,...arr2]);

///JOIN//////

console.log(letter.join('_'));
*/
///////////at method////////
/*
const arr = [23,11,64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element of the array
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('Raja'.at(0));
console.log('Raja'.at(-1));
*/

//////Looping arrays: forEach////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
console.log('---------with entries------');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}
// In forEach we cant break in between whereas in for loop we can break in between the loop/
console.log('-------FOR EACH-------');
movements.forEach((mov, i, array) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
})
*/
///////////////////////////////////////
// forEach With Maps and Sets
// Map
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value,key,map)=>{
  console.log(`${key}: ${value}`);
});
// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value,key,map)=>{
  console.log(`${key}:${value}`);
});
*/

// const movementsUSD = movements.map(function(mov){
//   return mov*eurToUsd;
// });
//////////////Array Map method - data transaformation methods////////////
/*
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov=>mov*eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for(const mov of movements)movementsUSDFor.push(mov*eurToUsd);
console.log(movementsUSDFor);

const movementDescriptions = movements.map((mov,i,arr)=>
    `Movement ${i+1}: You ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}`
)
// const movementDescriptions = movements.map((mov,i,arr)=>`Movement ${i+1}: You ${mov>0?deposited:withdrew} ${Math.abs(mov)}`);
console.log(movementDescriptions);
*/

////////////Array Filter method - data transaformation methods////////////
/*
const deposit = movements.filter((mov) => {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

const depositFor = [];
for (const mov of movements)
  if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawal = movements.filter((mov)=>mov<0);
console.log(withdrawal);
*/
//////////////Array Reduce method - data transaformation////////////

/*console.log(movements);
// the first parameter is the accumulator - like snow ball
const balance = movements.reduce((acc, curr, i, arr)=> acc + curr,0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 +=0;
console.log(balance2); 

////////Maximum Value/////////
const max = movements.reduce((acc,mov)=> {
  if(acc>mov){
    return acc;
  }else{
    return mov;
  }
},movements[0]);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  // const averageHumanAge = adults.reduce((acc,age)=>{
  //   return acc+age
  // },0)/adults.length;

  const averageHumanAge = adults.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0);
  console.log(averageHumanAge);
};
const dogsAges = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(dogsAges);
*/

/*const euroToUSD = 1.1;
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
*/

//////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*const calcAverageHumanAge = function (ages) {
  const averageHumanAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(`avg: ${averageHumanAge}`);
};
const dogsAges = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(dogsAges);
*/

//find Method
/*
const firstWithdrawl = movements.find(mov=>mov<0);
console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(acc=>acc.owner==='Raja Ramasamy');
console.log(account);
*/

/*console.log(movements);
//EQUALITY
console.log(movements.includes(-130));

//CONDITION
const anyDeposits = movements.some((mov) => mov < -20000);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov=>mov>0));
console.log(account4.movements.every(mov=>mov>0));

//Seperate callback
const deposit = mov => mov >0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//////////////////Flat////////
/*const arr = [[1, 2, 3], [4, 5, 8], 6, 7];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[[4], 5], 6], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc=>acc.movements);

// const allMovements = accountMovements.flat();

// const overalBalance = allMovements.reduce((acc,mov)=>acc+mov,0);

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

const overalBalance1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
*/

////////////////////////Sorting Arrays///////////////
/*
//Strings Sort method
const owners = ['Raja','Zach','Adam','Martha'];
console.log(owners.sort());
console.log(owners);


//Numbers Sort method

console.log(movements);
console.log(movements.sort());//[-130, -400, -650, 1300, 200, 3000, 450, 70]
//sort method on strings gives incorrect results as they consider numbers also a sstrings

//to fix this we have to pass a compare callback function as shown below

// return < 0, then A will be before B (keep order)
//return > 0, then B will be before A (switch order)
//Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

//Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(movements);

movements.sort((a,b)=>a-b);//a-b if returns 1 , then keep order as mentioned above else switch order
movements.sort((a,b)=>b-a);

*/

//////////////////Creating and filling Arrays///////////

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + filling methods

const x = new Array(7);
console.log(x);
// console.log(x.map(()=>5));

x.fill(1, 3, 5);
// x.fill(1);
console.log(x);

x.fill(23, 2, 6);
console.log(x);

////////Array.from()/////////////
// Note: - using method on Array constructor

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))//2nd argument is like action to perform the new array created
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});
