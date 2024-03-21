//TODO:====Колбек-функції==========
//! Колбек-функції
//! Інлайн-колбеки
//! Метод forEach(callback)
//TODO:====Стрілочні функції==========
//! Стрілочні функції: синтаксис
//! Псевдомасив arguments
// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Mango', greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest('Mango', notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

//! Інлайн-колбеки
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest('Poly', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

//! Метод forEach(callback)

// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

//--------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

//TODO:====Стрілочні функції==========
//! Стрілочні функції: синтаксис

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// //Якщо параметр один, його можна оголошувати без круглих дужок.
// const add = a => {
//   return a + 5;
// };

// //Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
// const greet = () => {
//   console.log('Hello!');
// };

//! Неявне повернення
//? Запис із фігурними дужками
// //Це називається явне повернення (explicit return)
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

//? Запис без фігурних дужок
// // Це неявне повернення (implicit return)
// const add = (a, b, c) => a + b + c;

//-----------------------------------

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;

//! Псевдомасив arguments
// //У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

//!Колбеки

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// //Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання. Це варто робити, якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.
//  const numbers = [5, 10, 15, 20, 25];

//  const logMessage = (number, index) => {
//    console.log(`Inex ${index}, value ${number}`);
//  };

//  numbers.forEach(logMessage);

//TODO:====Методи map і flatMap==========
//! Чисті функції
/**
 *? Функція з побічними ефектами-може:
 *? змінювати або використовувати глобальні змінні
 *? змінювати значення аргументів посилального типу
 *? виконувати операції введення-виведення тощо
 */

//  const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

/**
 * ? Чиста функція (pure function)
 * ?За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
 */
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//! Перебираючі методи
// array.method(callback(currentValue, index, array));
/**
 *? У більшості методів колбек-функції, які є їхнім аргументом,
 *? отримують три наступні параметри:
 *? першим параметром буде значення поточного елемента масиву currentValue
 *? другим параметром буде індекс поточного елемента масиву index
 *? третім параметром буде посилання на сам вихідний масив array
 */
// array.method((item, idx, arr) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });
/**
 *?Усі параметри, окрім значення поточного елемента масиву item, необов'язкові.
 */
// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });

//! Метод map()

/**
 * ? Поелементно перебирає оригінальний масив
 * ? Не змінює оригінальний масив
 * ? Результат роботи колбек-функції записується в новий масив
 * ? Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований
 */

// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });

/**
 * ? Його можна використовувати для того, щоб змінити кожен елемент масиву.
 * ? Оригінальний масив використовується як еталон,
 * ? на основі якого можна зробити іншу колекцію.
 */

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

//! Масив об'єктів
/**
 * ? Ми вже знаємо, що типове завдання — це маніпуляція масивом об'єктів.
 * ? Наприклад, отримати масив значень властивості з усіх об'єктів.
 * ? У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.
 */

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
//--------------------------------------------

/**
 * ? Масив books містить колекцію об'єктів книг,
 * ? кожен з яких містить властивості title, author, rating.
 * ? Використовуючи метод map(),
 * ?зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.
 */
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

//! Метод flatMap()
/**
 * ? застосовується у випадках,
 * ? коли результат — це багатовимірний масив, який необхідно «розгладити».
 */
// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });

/**
 * ? У масиві students зберігається колекція студентів зі списком предметів,
 * ? які відвідує студент у властивості courses.
 * ? Кілька студентів можуть відвідувати один і той самий предмет.
 * ? Кілька студентів можуть відвідувати один і той самий предмет.
 * ?поки що навіть повторюваних.
 */
// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

/**
 * ? Масив books містить колекцію об'єктів книг,
 * ? значенням якої є масив жанрів.
 * ? Використовуючи метод flatMap(),
 * ? зроби так, щоб у змінній genres вийшов масив жанрів усіх книг
 * ? (властивість genres) з масиву books.
 */
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

//TODO:====Методи filter і find==========
//! Метод filter()
/**
 * ? Використовується для фільтрації масиву.
 */
// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });
//-------------------------------------------------
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до bigValues  потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився

//------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

//! Метод filter() на масиві об'єктів
/***
 * Розгляньмо приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:
 * високі бали (від 80 (включно)),
 * низькі бали (нижче 50),
 * середні бали (від 50 (включно) до 80).
 */

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// // У колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

//--------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

//----------------------------------------------------

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

//-----------------------------------------------------

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

//! Метод find()

// array.find((element, index, array) => {
//   // Тіло колбек-функції
// });
//--------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined
//----------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

//TODO:====Методи every, some і reduce=======
//! Метод every()
/**
 * ? Метод every(callback) перевіряє,
 * ? чи задовольняють усі елементи умову колбек-функції.
 */
// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });
//--------------------------------------------

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

//---------------------------------------------
// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false

/**
 * ? Не змінює оригінальний масив
 * ? Поелементно перебирає оригінальний масив
 * ? Повертає true, якщо всі елементи масиву задовольняють умову
 * ? Повертає false, якщо хоча б один елемент масиву не задовольняє умову
 * ? Перебирання масиву припиняється, якщо колбек повертає false
 */
// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };

//! Метод some()
/**
 * ? перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.
 */
// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

// //---------------------------------

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

/**
 * ? Не змінює оригінальний масив
 * ? Поелементно перебирає оригінальний масив
 * ? Повертає true, якщо всі елементи масиву задовольняють умову
 * ? Повертає false, якщо хоча б один елемент масиву не задовольняє умову
 * ? Перебирання масиву припиняється, якщо колбек повертає false
 */
//
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };

//! Метод reduce()
/**
 * ?  використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.
 * ? Трохи складніший за інші методи для засвоєння, але результат вартий того.
 */

// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

/**
 *? Метод reduce() очікує 2 параметри:
 *? -й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
 *? 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.
 */

/**
 *? Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
 *? 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
 *? 2-й параметр — поточний елемент масиву;
 *? 3-й параметр — індекс поточної ітерації;
 *? 4-й параметр — посилання на вихідний масив.
 */
// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12
/**
 *? Не змінює оригінальний масив
 *? Поелементно перебирає оригінальний масив
 *? Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
 *? Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію
 */

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (accumulator, time) => accumulator + time,
//   0
// );

// const averagePlayTime = totalPlayTime / playtimes.length;

//! Метод reduce() і масив об'єктів
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

/**
 *? У прикладі вище метод reduce() використовується для обчислення суми значень властивості score для всіх об'єктів масиву students.
 *? Починаючи зі значення 0, колбек-функція обчислює суму значень властивості score для кожного об'єкта масиву students. Результат (сума) зберігається у змінній totalScore.
 *? const averageScore обчислює середнє значення score для всіх об'єктів масиву students, шляхом ділення суми всіх балів на кількість студентів.
 */

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

//-----------------------------------------------------

// const calculateTotalBalance = users => {
//   return users.reduce((totalBalance, user) => {
//     return totalBalance + user.balance;
//   }, 0);
// };

//TODO:====Метод toSorted=======
//! Метод toSorted()
/**
 * ? Сортує вихідний масив
 * ? Повертає новий масив
 * ? За замовчуванням сортує за зростанням
 * ? array.toSorted();
 */
//! Масив чисел
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//---------------------------------------------------

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

//! Масив рядків
/**
 * ? Масив рядків сортується за алфавітом.
 * ? Водночас порядковий номер великих літер менший, ніж у малих.
 */

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//-----------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

//! Свій порядок сортування чисел
// array.toSorted((a, b) => {
//   // Callback function body
// });
/**
 * ? a — перший елемент для порівняння.
 * ? b — другий елемент для порівняння.
 */

//! Сортування за зростанням
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//! Сортування за спаданням
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//-------------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//! Свій порядок сортування рядків

/**
 * ? Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
 * ? firstString.localeCompare(secondString);
 */

// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0
/**
 * ? Повертає негативне значення, якщо firstString повинен бути перед secondString
 * ? Повертає позитивне значення, якщо firstString повинен бути після secondString
 * ? Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється
 */

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

//--------------------------------------

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

//! Сортування об'єктів
/**
 * ? за зростанням кількості балів
 * ? за спаданням кількості балів
 * ? за ім'ям студента в алфавітному порядку
 */

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

//------------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );
// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

//! Ланцюжки методів

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];
/**
 * ? Відсортуємо масив методом toSorted(),
 * ? Після чого методом map() створимо масив значень властивості name з відсортованого масиву.
 */

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

/**
 * ? Змінна sortedByAscendingScore — зайва.
 */

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

/**
 * ? На масиві викликаємо метод toSorted()
 * ? До результату роботи методу toSorted() застосовуємо метод map()
 * ? Змінній names присвоюється результат роботи методу map()
 */

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

/**
 * ? На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
 * ? До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
 * ? На результаті методу filter() викликаємо toSorted()
 * ? Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()
 */

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted();
console.log(names); // Виводимо масив імен авторів
