// /**
// Напишіть програму, яка отримає від користувача
//  число (кількість хвилин) та виведе в консоль
//  рядок у форматі годин та хвилин
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  70 === 01:10
//  */
// const userTime = prompt("Введіть число");

// function calcTime(number) {
//     const hours = String(Math.floor(number / 60)).padStart(2, "0");
//     const minutes = String(number % 60).padStart(2, "0");
//     const stringTime = `${hours}:${minutes}`;
//     return stringTime;
// }

// console.log(calcTime(userTime));

// Створіть змінну з ім'ям "userAge" і присвойте їй значення вашого віку.
//  Напишіть функцію з ім'ям "checkAge", яка приймає один параметр "вік" і перевіряє, чи є цей вік дорослим (більше або дорівнює 18).
//  Функція повинна повертати true, якщо вік дорослий, і false в іншому випадку.Викличте цю функцію, передаючи змінну "userAge", і виведіть результат в консоль.

// const userAge = 23;

// function checkAge(age) {
//   //   return age >= 18;
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkAge(userAge));

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */

// const min = 29;

// function isTime(minutes) {
//   if (minutes > 0 && minutes <= 15) {
//     return "Перша чверть";
//   } else if (minutes > 15 && minutes <= 30) {
//     return "Дурга чверть";
//   } else if (minutes > 30 && minutes <= 45) {
//     return "Дурга чверть";
//   } else {
//     return "Четверта чверть";
//   }
// }

// console.log(isTime(min));

/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
 */

// const login = prompt("enter login");
// console.log(login);
// if (login === "Admin") {
//   const password = prompt("enter password");
//   console.log(password);
//   if (password === "Я головний") {
//     alert("Здрастуйте!");
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (login === "" || login === null) {
//   alert("canceled");
// } else {
//   alert("Я вас не знаю");
// }
/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const answer = prompt('Яка офіційна назва JavaScript?');
if (answer === 'ECMAScript') {
  alert('Вірно!');
} else {
  alert('Не знаєте? ECMAScript!');
}
