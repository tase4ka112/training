/**
* ? const string = 'JavaScript';
* ? string.length;
//10
* ? string[0];
//"J"
* ? string[string.length - 1];
//"t"
 */

//! Перетворення типів: числа
//TODO:  ============01=======================
/**
 *?
 *? - Явне перетворення типів
 *? - Неявне перетворення типів
 */

// console.log(String('5')); // 5 (String-Рядок)
// console.log(Number('5')); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN

// console.log('5' * 2); // 10
// console.log('10' - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4
// console.log('5px' - false); // NaN

//! Оператори
///TODO:=============02=================
/**
 *?
 *? - Оператори порівняння > < >= <=
 *? - Оператори рівності == === != !==
 *? - Приведення типів операндів
 */

// console.log('5 > 4:', 5 > 4); // 5>4: true

// console.log("10 >= '7':", 10 >= '7'); // 10>='7':true

// console.log("'2' > '12':", '2' > '12'); // '2' > '12':true
// // Юнікод '2' (це 50) > '12'(1 це 49, 2 не читається)

// console.log("'2' < '12':", '2' < '12'); // '2' < '12': false

// console.log("'4' == 4:", '4' == 4); // 4 == 4: true

// console.log("'6' === 6:", '6' === 6); // string === number: false

// console.log("'false' === false:", 'false' === false); // string === boolean: false

// console.log('1 == true:', 1 == true); //true

// console.log('1 === true:', 1 !== true); // number === boolean:true

// console.log("'0' == false:", '0' == false); // 0 == 0:true

// console.log("'0' === false:", '0' === false); //false

// console.log("'Papaya' < 'papaya':", 'Papaya' < 'papaya'); // 80 < 112: true

// console.log("'papaya' === 'papaya':", 'papaya' === 'papaya'); //true

// console.log('undefined == null:', undefined == null); //true

// console.log('undefined === null:', undefined === null); // false

//! Арифметичні функції
///TODO:=============03=================
/**
 *?
 *? - Number.parseInt(ціле число)
 *? - Number.parseFloat(дробове число)
 *? - Math(округлення)
 */

// let elementWidth = '50px';
// console.log('elementWidth: ', Number.parseInt(elementWidth)); //50

// let elementHeight = '200.7498px';
// console.log('elementHeight: ', Number.parseFloat(elementHeight)); //200.7498

/**
 *? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 *? значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 *? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.9;

// console.log(Math.ceil(value)); //28(округлює вгору)
// console.log(Math.floor(value)); // 27(округлює вниз)
// console.log(Math.round(value));// 28(округлює до 0.50(1.3=1) вниз, вище 0.5(1,3=2) вверх)

// Math.SQRT2;
// console.log('🚀 ~ Math:', Math.SQRT2);// 1.4142135623730951

// !  функції
///TODO:=============04=================

//!- Оголошення та виклик функції
/**
 *? - Параметри та аргументи
 *? - Повернення значення
 */

// function multiply(params) {
//   console.log(5 + 3);
// }
// multiply();

//-----------------------

// function multiply(number_1, number_2) {
//   // let  number_1 = 5
//   // let  number_2 = 3
//   const result = number_1 * number_2;
//   console.log('🚀 ~ multiply ~ result:', result);
//   return result;
// }
// const result_1 = multiply(5, 3);
// console.log('🚀 ~ result_1:', result_1);

//------------------------

// function fnA() {
//   console.log('Inside fnA');
// }
// function fnB() {
//   console.log('Inside fnB');
// }
// function fnC() {
//   console.log('Inside fnC');
// }

// console.log('Before fnA execution');
// fnA(); //Переходить у функцію "function fnA"
// console.log('After fnA execution');

// console.log('Before fnB execution');

// fnB(); //Переходить у функцію "function fnB"
// console.log('After fnB execution');

// console.log('Before fnC execution');
// fnC(); //Переходить у функцію "function fnC"
// console.log('After fnC execution');

//---------------------------------------

/**
 *? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 *? маси тіла людини. Для цього необхідно розділити вагу на
 *? квадрат висоти.
 *
 *? Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 *? бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 *? частини може бути кома.
 *
 *? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   // weight = '88,3';
//   // height = '1,75';
//   const comaToDotWeight = weight.replace(',', '.'); //переробляє кому на крапку
//   const comaToDotHeight = height.replace(',', '.'); //переробляє кому на крапку
//   //console.log(comaToDotWeight, comaToDotHeight); //88.3 1.75

//   //*   const weightToNumber = Number.parseFloat(comaToDotWeight); //'88.3'(рядок) переробляє в 88.3(число)
//   //*   const heighToNumber = Number.parseFloat(comaToDotHeight); //'1.75'(рядок) переробляє в 1.75(число)
//   //*   const result = weightToNumber / heighToNumber ** 2;// /* проміжна змінна з рядка у число

//   const result = comaToDotWeight / comaToDotHeight ** 2; //ділення переробляє рядок в число
//   //   return result.toFixed(1); // .toFixed виводить результат чисел після коми. Рядок.
//   //   return Math.round(result * 10) / 10; // другій варіант. Число
//   return Number(result.toFixed(1)); //Третій варіант. Число
// }

// const bmi = calcBMI('88,3', '1,75');
// console.log('🚀 ~ bmi:', bmi);// 28.8
