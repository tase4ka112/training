//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";

// // if (str.startsWith("a")) {
// //   console.log("yes");
// // } else {
// //   console.log("no");
// // }

// str.startsWith("a") ? console.log("yes") : console.log("no");

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.e

// const firstName = "Viktor";
// const lastName = "Stashko";

// const firstNameLength = firstName.length;
// console.log("   firstNameLength:", firstNameLength);

// const lastNameLength = lastName.length;
// console.log("   lastNameLength:", lastNameLength);

// const totalLength = firstName.length + lastName.length;

// // if (firstNameLength > 4 && lastNameLength > 5) {
// //   console.log(totalLength);
// // } else {
// //   console.log("impossible");
// // }

// firstNameLength > 4 && lastNameLength > 5
//   ? console.log(totalLength)
//   : console.log("impossible");

//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 120;

// if (ageMaxim >= 0 && ageMaxim <= 16) {
//   console.log("Maxim is a child");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log("Maxim is an adult");
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log("Maxim is a pensioner");
// } else {
//   console.log("Error");
// }

//* Цикл while and do while
// TODO: 4 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// const number = 1000;
// let count = 0;

// while (number >= count) {
//   console.log(count);
//   count += 1;
// }

// let num = Number.parseFloat(prompt("enter number"));

// while (num < 100) {
//   num = Number.parseFloat(prompt("enter number"));
// }
// alert(12);
// console.log(12);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 0;
// const max = 12;
// let result = 0;
// for (let i = max; i >= min; i -= 1) {
//   //   if (i % 2 === 0) {
//   //     console.log(i);
//   //       result += i;

//   //   }
//   if (i % 2 !== 0) {
//     continue;
//   }
//   result += i;
// }
// console.log(result);

// lkasjn;

//TODO: 8 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt ("Choise your drink").toLocaleLowerCase ();

// function orderDrink (drink) {
//     let price = 0;
//     switch (drink) {
//         case "cofe" :
//         price = 50;
//         break;

//         case "tea" :
//         price = 30;
//         break;

//         case "juce" :
//         price = 40;
//         break;

//         default:

//         alert ("Error");

//     }
//     alert (`Your order ${price} UA `)
// }

// orderDrink (drink);

// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Jazz", "Blues"];

// styles.push("Rock`n`roll");

// console.log(styles[1]);

// styles.unshift("Rock");

// const index = styles.indexOf("Blues");

// styles[index] = "Classic";

// console.log(styles.includes("Jazz"));

// styles.shift();

// console.log(styles);

///TODO:=============task-02=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i] + array[i + 1]);
  }
  return newArray;
}
console.log(sumArray(someArr));
