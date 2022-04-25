"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

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

//should recieve one array of movement
//its good to pass data directly into the function instead of using global varible
const displayMovements = function(movements) {
  //empty the container
  //textContent simply returns the text intself
  //innerHTML returns everything, includig the html
  containerMovements.innerHTML = "";
  movements.forEach(function(movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    //insert new elements to the container
    //html template
    //to add this html to the webpage
    //add it to the movement element because that is where we want to add another row--> use insertAdjacenthtml
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${index +
      1} ${type} </div>
    <div class="movements__value">${movement}</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//displayMovements(account1.movements);
console.log(containerMovements.innerHTML); //shows all the html

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //convert them in US dollar

const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

// const movementsUSD = [];
// for (const mov of movements) {
//   movementsUSD.push(mov * euroToUsd);
// }

// console.log(movements); //original array
// console.log(movementsUSD); //new array
console.log(movementsDescription); //an array with all the strings

//recieves array of accounts
const createUsernames = function(accs) {
  //not a new array but just to modify. So not map but use forEach
  console.log(accs); //obj //all the objs in an array

  accs.forEach(function(acc) {
    console.log(acc); //{owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111}
    //one of the objects in an array

    //create new property in the obj
    //permanetly modyfyinng it
    //no need to return
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(initial => initial[0])
      .join("");
  });
};

const accounts = [account1, account2, account3, account4];
console.log(createUsernames(accounts));

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
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"]
]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key} : ${value}`);
//   //USD : United States dollar
// });

// const currecenciesUnique = new Set(["USD", "GBP", "EUR", "EUR", "USD"]);
// console.log(currecenciesUnique); //{'USD', 'GBP', 'EUR'}

// //set has no key or index
// currecenciesUnique.forEach(function(value, _, set) {
//   console.log(`${value}`);
// });

///////////////////////////////////////
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

// const checkDogs = function(dogsJulia, dogsKate) {
//   const copyDogsJulia = dogsJulia.slice();
//   copyDogsJulia.splice(0, 1);
//   copyDogsJulia.splice(-2, 2);
//   console.log(copyDogsJulia);

//   const totalData = copyDogsJulia.concat(dogsKate);

//   totalData.forEach(function(age, num) {
//     if (age > 3) {
//       console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
//     } else if (age < 3) {
//       console.log(`Dog number ${num + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
