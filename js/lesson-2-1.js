//TODO:  ============01=======================
//!  Розгалуження

/**
 * ?- Інструкція if
 * ?- Інструкція if...else
 * ?- Блок else...if
 * ?- Тернарний оператор
 */
//-------------------------------

// console.log('Before');
// if (true) {
//   console.log('inside if statement');
// }
// console.log('After');

//---------------------------------

// console.log('Before');
// if (false) {
//   // console.log('inside if statement, when det truthy value');
// } else {
//   console.log('inside if statement, when det false value');
// }
// console.log('After');

//---------------------------------
// let msg;
// const isGreater = 1 < 0;
// console.log('Before');
// if (isGreater) {
//   msg = 'inside if statement, when det truthy value';
// } else {
//   msg = 'inside if statement, when det false value';
// }
// console.log('After');
// console.log(msg);

//-----------------------------------

// let msg; // undefined
// const username = 'Jupiter';

// if (username === 'Mango') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Poly') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Ajax') {
//   msg = `Hello, ${username}`;
// } else {
//   msg = `Sorry, ${username}. Access denied`;
// }
// console.log('After');
// console.log(msg);

//-------------------------------
// Level 1 = 100
// Level 2 = 1000
// Level 3 = 2000
// const points = 5000;

// if (points <= 100) {
//   console.log(`You have ${points} points`);
// } else if (points <= 1000) {
//   console.log(`You have ${points} points`);
// } else if (points <= 2000) {
//   console.log(`You have ${points} points`);
// }

/**
 *? -----------------------------
 */

// Level 1 = 100
// Level 2 = 1000
// Level 3 = 2000
// function getRandomPoints() {
//   let points;
//   const randomNumber = Math.random();

//   if (randomNumber > 0.5) {
//     points = Number.parseInt(randomNumber * 1000);
//   } else {
//     points = Number.parseInt(randomNumber * 100);
//   }

//   return points;
// }

// const points = getRandomPoints();

// if (points <= 100) {
//   console.log(`Level 1. You have ${points} points`);
// } else if (points <= 500) {
//   console.log(`Level 2. You have ${points} points`);
// } else if (points > 500) {
//   console.log(`Level 3. You have ${points} points`);
// }

/**
 *? -----------------------------
 */
// const balance = -1000;
// let message = balance >= 0 ? 'Negative' : 'Positive';

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }
// console.log(message);
//TODO:  ============02=======================
/**
 *? Блокова область видимості змінних
 */

// function showC() {
//   const c = 15;
//   console.log(c);
// }

// showC();

// if (true) {
//   const a = 5;
//   console.log(a);
//   // console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   // console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // console.log(a);
// // console.log(b);
// console.log(c);
//TODO:  ============01=======================
//TODO:  ============01=======================
//TODO:  ============01=======================
