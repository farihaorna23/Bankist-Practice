'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// console.log(arr.slice(2)); //['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); //['d', 'e']
// console.log(arr.slice(1, -2)); //['b', 'c']
// //use slice method to create a shallow copy of an array
// console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
//you can use either the slice method or spread operator create the shallow copy

//Splice
// console.log('splice');
// console.log(arr.splice(-1)); //['e']
// console.log(arr); // ['a', 'b', 'c', 'd']
// //first argument is from what position to start
// //second argument is how many to delete
// console.log(arr.splice(1, 2)); //['b', 'c']
// console.log(arr); //['a', 'd']

//reverse

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
// console.log(arr2); //['f', 'g', 'h', 'i', 'j']

// //concat

// const letters = arr.concat(arr2);
// console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// console.log([...arr, ...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] . Wouldn't effect the original array

// //join
// console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j
// console.log(typeof letters.join(' - ')); //string
// console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// //at method is perfect for method chaining and when to get the last value
// //u can use [] notattion as a substutute
// //at methods also work on string
// const arr = [23, 11, 64];
// console.log(arr.at(0)); //23
// console.log(arr.slice(-1)); //[64]
// console.log(arr.slice(-1)[0]); // 64 to get the value from array
// console.log(arr.at(-1)); //64

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     //i is the counter/index that starts at 0
//     console.log(` Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`with forEach method`);

// //order of the peremeter is important
// //the first peremter always needs to be current element,current index, the entire array that we are looping over
// //normal for of loop of vs for each? you can't break of from forEach. So the continue and break, don't work on forEach. It will go through the entire an array
// movements.forEach(function(movement, index, array) {
//   if (movement > 0) {
//     console.log(` Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

//0: function(200)
//1: function(450)
//2: function(-400)
//3: function(3000)

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key} : ${value}`);
  //USD : United States dollar
});

const currecenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);
console.log(currecenciesUnique); //{'USD', 'GBP', 'EUR'}

//set has no key or index
currecenciesUnique.forEach(function(value, _, set) {
  console.log(`${value}`);
});
