//! 'use strict';

//TODO:==============01=====================
// ! Змінні та типи даних

/**
 *
 *? - Оголошення змінних з let і const
 *? - Найменування змінних
 *? - Вибір між const і let
 *? - Числа, рядки, булі, null, undefined
 *? - Оператор typeof
 */

// console.log('result:', 3);
// console.log('result:', '3');
// console.log('Boolean:', true, false);
// console.log('Type null', null);

// const question = prompt('Enter your email: ');
// console.log('question:', question);

// let number;
// console.log('number:', typeof number);

// Logical operations

// number = 7;
// console.log('typeof number:', typeof number);

// const string = 'Some text';
// console.log('typeof string:', typeof string);

// const inUserOnline = false;
// console.log('typeof inUserOnline:', typeof inUserOnline);

//TODO:==============02=====================

//! Типові помилки
/**
 *? - Звернення до змінної до її оголошення
 *? - Перевизначення значення для змінної оголошеної через const
 *? - Звернення до імені змінної, яке містить помилку в записі
 */

// console.log(username); // ReferenceError

// const username = 'Mango';

// let age = 20;

// const price = 200;

// price = 130; // TypeError

// console.log(ege); // ReferrenceError

//TODO:==============03=====================

//! Арифметичні операції
/**
 *? - Оператори +, -, *, /, %, **
 *? - Комбіновані оператори
 */

// const a = 10;
// const b = 5;

// const result = a % 3; // 3 рази по 3 і залишається 1
// console.log('result:', result);

// const sum = a + b;
// console.log('sum:', sum);
// const extract = a - b;
// console.log('extract:', extract);
// const mul = a * b;
// console.log('mul:', mul);
// const divide = a / b;
// console.log('divide:', divide);
// const root = a ** b;
// console.log('root:', root);
/**
 *? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

// const apples = 47;
// const grapes = 135;

// const totalFruits = apples + grapes;
// // console.log('Total fruits:', totalFruits);
// const extractApplesFromGrapes = apples - grapes;
// // console.log('Extract:', extractApplesFromGrapes);

/**
 *? Заміни вираз перевизначення комбінованим оператором
 */

// let students = 100;
// // students = students + 50;
// students += 50;
// students -= 50;
// students *= 50;
// students /= 50;
// // console.log(students);

/**
 *? Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

// const result = 108 + (223 - 2) * 5;
// console.log('Result: ', result);

//TODO:==============04=====================

//! Рядки
/**
 *
 *? - Конкатенація рядків
 *? - Шаблонні рядки
 *? - Довжина рядка
 *? - Індексація елементів
 *? - Незмінність рядків
 */

// const firstName = 'Chelsy';
// const lastName = 'Emerald';

// const fullName = 'Hello' + ' ' + firstName + ' ' + lastName + '!';
// const fullName_1 = `Hello ${firstName} ${lastName}!`;
// // console.log('fullName:', fullName);
// // console.log('fullName_1:', fullName_1);

// const quantity = 15;
// const orderMsg = `You ordered ${quantity + 100} bots`; // ` - backtick symbol
// console.log('orderMsg:', orderMsg);

// const message = 'This string is 28 chars long ';
// // console.log(message.length); // 28
// const lastSymbol = message[message.length - 1]; // -> message[27]
// console.log('lastSymbol:', lastSymbol);
// // message[0] = 't';
// // console.log('Update message:', message);

/**
 *? Склади фразу за допомогою шаблонних рядків
 *? A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// // console.log(msg); // "Cyberdyne Systems has 200 bots in stock"

//TODO:==============04=====================

//! Перетворення типів: рядки

/**
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(String(5));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null));
// console.log(String(undefined));

// console.log('538');
// console.log('5' + true);
// console.log('5' + false);
// console.log('5' + null);
// console.log('5' + undefined);

// const result = 5 + '1' + 9 / 3;
// console.log('result:', result);
