//TODO:====Контекст виконання функції========
//! Ключове слово this
//! Глобальний контекст
//! Контекст методу об'єкта
//! Метод call()
//! Метод apply()
//! Метод bind() і втрата контексту
//! Метод bind() і колбеки
//! Стрілочні функції
//! Алгоритм визначення this
//TODO----Прототипи--------
//! Прототип об'єкта
//! Перевірка прототипу
//! Власні і невласні властивості
//! Перебір власних властивостей
//! Ланцюжки прототипів
//! Кінець ланцюжка прототипів
//TODO-------ООП-----------
//! Процедурне програмування
//! Об'єктно-орієнтоване програмування
//! Клас
//! Інтерфейс класу
//TODO---------Класи-------------------
//! Оголошення класу
//! Конструктор класу
//! Об'єкт параметрів
//! Методи класу
//! Прототип екземпляру
//! Приватні методи
//! Геттери і сеттери
//! Статичні властивості
//! Статичні методи
//! Методи дочірнього класу

//TODO:====Контекст виконання функції========
//! Ключове слово this
// const user = {
//   username: 'Victor',
//   showName() {
//     // ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };
// user.showName();

// //--------------------------------------------
// const user = {
//   username: 'Victor',
//   showName() {
//     // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();
/**
 * ? Метод showName — це функція, яка викликається в контексті об'єкта user. Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів.
 */

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (isPizzaAvailable) {
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     }
//     return `Sorry, there is no pizza named «${pizzaName}»`;
//   },
// };

//! Глобальний контекст
// function foo() {
//   console.log(this);
// }

// foo(); // window
/**
 * ? У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.
 */

//---------------------------------------------

// ('use strict');

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

/**
 * ? У суворому режимі значення this у глобальному контексті завжди буде undefined.
 */

//! Контекст методу об'єкта
// const user = {
//   username: 'Poly',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

/**
 * ? Спочатку створюємо функцію в глобальному контексті і викликаємо її. Зверни увагу на використання суворого режиму.
 */
// 'use strict';

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"
/**
 * ? Потім присвоюємо цю функцію властивості об'єкта і викликаємо її як метод цього об'єкта.
 */

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

/**
 * ? Створили об'єкт user з властивістю username
 * ? Об'єкту user методу showContext присвоїли значення функції showThis. Зверни увагу, що це не виклик — немає ()
 * ? Тепер викликаємо метод showContext, у якому знаходиться посилання на функцію showThis, тобто ми викликаємо функцію в контексті об'єкта. this вказуватиме на поточний об'єкт, у якому здійснюється виклик
 */

//! Метод call()
// foo.call(thisArg, arg1, arg2, ...)
/**
 *  ? thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
 * ? arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції
 */
/**
 * ? Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.
 */
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };
// /**
//  * ? За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.
//  */
// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

//! Метод apply()
// Сигнатура методу apply**()** виглядає так:
// foo.apply(thisArg, [arg1, arg2, ...])
/**
 * ? thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
 * ? arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.
 */

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: 'Mango',
//   room: 27,
// };

// const poly = {
//   username: 'Poly',
//   room: 191,
// };

// greet.apply(mango, ['Welcome']); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ['Aloha']); // "Aloha, Poly, your room is 191!"

//! Метод bind() і втрата контексту
// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
/**
 * ? thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
 * ? arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику
 */
//-----------------------------------------------------
// 'use strict';

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')
/**
 * ?Зберегли посилання на метод sayHello у змінну greet
 * ?При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined
 */
// ('use strict');

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"
/**
 * ? Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.
 */

//! Метод bind() і колбеки

// 'use strict';

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

/**
 * ? У цьому випадку метод getFullName передається як колбек-функція callback і втрачає контекст об'єкта customer. Це призводить до помилки, оскільки значення this у методі getFullName, коли він викликається як колбек у глобальному контексті, є undefined. Звертаючись до властивостей firstName і lastName, ми отримаємо помилку, оскільки undefined — це не об'єкт.
 */

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

/**
 * ? Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.
 */

//----------------------------------
// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();
// //724
//---------------------------------
// 'use strict';

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount);
// //TypeError: Cannot read properties of undefined (reading 'books')

//------------------------------------
// 'use strict';

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library)); //1923

//! Стрілочні функції
/**
 * ? Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.
 * ? Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.
 */

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

//------------------------------

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// const user = {
//   username: 'Mango',
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window

//----------------------------------------

// "use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

//------------------------------------------

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}
/**
 * ? Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.
 */
//------------------------------
// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis.call({ username: 'Mango' }); // this in showThis: window
// showThis.apply({ username: 'Mango' }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: 'Mango' });
// boundShowThis(); // this in showThis: window
/**
 * ? Що треба запам’ятати про this у стрілочних функціях?
 * ? 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
 * ? 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
 * ? 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.
 */

//! Алгоритм визначення this
/**
 * ? Крок 1
Це стрілочна функція?
Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
Якщо відповідь Ні, переходь на Крок 2
 * ? Крок 2
Чи використовуються методи call, apply або bind?
Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
Якщо відповідь Ні, переходь на Крок 3
 * ? Крок 3
Функція викликається як метод об’єкта object.method?
Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
Якщо відповідь Ні, переходь на Крок 4
 * ? Крок 4
Скрипт виконується в суворому режимі?
Якщо відповідь Так, значення this — undefined
Якщо відповідь Ні, значення this — window
 */

//TODO----Прототипи--------
//! Прототип об'єкта
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

/**
 * ? Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі об'єкт animal — це прототип для об'єкта dog.
 */

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;
// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.hasOwnProperty('heritage')); // true
// console.log(child.hasOwnProperty('name')); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty('age')); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"

//! Перевірка прототипу
// objA.isPrototypeOf(objB);
/**
 * ? Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
 * ? Якщо так, повертає true, в іншому разі повертає false
 */

// const customer = {
//   username: 'Jacob',
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//! Власні і невласні властивості
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

/**
 * ? Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
 * ? Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog.
 */
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//! Перебір власних властивостей

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }
//--------------------------------------
/**
 * ? Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key). Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false. Розгляньмо приклад:
 */
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }
/**
 * ? Якщо це власна властивість — виконуємо тіло if
 * ? Якщо це невласна властивість — нічого не робимо
 */
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }
/**
 * ? Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.
 */
//! Ланцюжки прототипів
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
/**
 * ? Створюємо об'єкт objC.
 * ? Потім створюємо об'єкт objB і встановлюємо objC як його прототип.
 * ? Після цього створюємо об'єкт objA і встановлюємо objB як його прототип.
 */

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

/**
 * ? Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.
 */
// const apartment = {
//   rooms: 4,
//   floor: 2,
//   taxFree: false,
// };

// const condo = Object.create(apartment);
// condo.rooms = 3;
// console.log('🚀 ~ condo:', condo); //{rooms: 3}

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;
// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(parent.isPrototypeOf(child)); // true

// console.log(ancestor.hasOwnProperty('surname')); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"

// console.log(ancestor.hasOwnProperty('heritage')); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty('heritage')); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"

//! Кінець ланцюжка прототипів
// const objB = {
//   b: 'objB prop',
// };

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);

//TODO-------ООП-----------
/**
 * ? Надійність — навіть дуже об'ємне і складне ПЗ має працювати стабільно.
 * ? Масштабованість — можливість легко адаптувати ПЗ до зростаючого навантаження.
 * ? Адаптивність — продукт має бути гнучким, щоб швидко міняти функціонал/інтерфейс.
 * ?Вартість — зниження витрат на розробку і збільшення ефективності важливі для успішної конкуренції на ринку.
 */
//! Процедурне програмування/
/**
 * ? Процедурне програмування — це парадигма програмування, у якій програми структуровані у вигляді набору функцій, які виконують певні дії над даними.
 * ? 1-Процедури (функції): Основною одиницею програми є функції. Вони призначені для виконання конкретних завдань. Функції приймають аргументи (вхідні дані), обробляють їх і можуть повертати результат (вихідні дані).
 * ? 2-Локальні та глобальні змінні: Змінні, що оголошуються в межах функції, є локальними й доступними лише в цій функції. Змінні, оголошені поза функціями, є глобальними й доступними в усій програмі.
 */
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
/**
 * ? Процедурне програмування — це те, як ми з тобою писали код до сих пір. Воно є простим і зрозумілим і може бути використане для написання простих програм. Проте зі збільшенням складності програми процедурний підхід може стати неефективним, оскільки втрачається зв'язок між даними й методами їх обробки.
 */
//! Об'єктно-орієнтоване програмування
/**
 * ? Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо. Кожен з об’єктів містить дані (властивості) і методи для взаємодії з ними.
 */
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
/**
 * ? При такому підході відсутні або майже відсутні глобальні змінні. Методи не залежать від параметрів, а використовують властивості об'єкта, які задаються при його створенні і можуть бути змінені іншими методами.
 */
//! Клас
/**
 * ? Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів, а також правила для взаємодії з цією сутністю (контракт). Вони виступають в якості шаблонів для створення нових об'єктів.
 */
/**
 * ? У проєкті треба описати:
 * всі запчастини, з яких складається автомобіль
 * яким чином ці запчастини взаємодіють між собою
 * що повинен зробити водій, щоб автомобіль загальмував, увімкнулися фари тощо.
 */
/**
 * ? У нашому прикладі клас визначає сутність: автомобіль.
 * ? Властивостями класу будуть запчастини: двигун, колеса, фари тощо.
 * ? Методами класу будуть дії: відчинити двері, завести двигун, збільшити швидкість тощо.
 */
//! Екземпляр класу
/**
 * ? Екземпляр (об'єкт, інстанція) — це окремий представник класу, який має дані (властивості) і методи (функції), які працюють з цими даними. Екземпляр — це те, що створено за кресленням, тобто на підставі опису з класу
 */
/**
 * ? Клас — це якийсь абстрактний автомобіль на кресленні
 * ? Екземпляр (об'єкт) — це конкретний автомобіль, що стоїть у нас під вікнами
 */

//! Інтерфейс класу
/**
 * ? Інтерфейс — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.
 * Клас із простим інтерфейсом легко використовувати, але будуть існувати завдання, які за допомогою нього буде складно вирішити.
 * Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів. Такий інтерфейс дозволить виконувати дуже багато дій, але його використання буде пов'язане з труднощами й ризиком помилитися, переплутавши щось.
 */

//TODO---------Класи-------------------
//! Оголошення класу
/**
 * ?  Часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними
 */
/**
 * ? Оголошення класу має такий синтаксис:
 * ключове слово class
 * ім’я класу (у прикладі: User)
 * тіло класу у фігурних дужках
 */
// class User {
//   // Тіло класу
// }
/**
 * ? Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.
 */
// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//! Конструктор класу
/**
 * ?  У нашому прикладі клас User представляє користувача, тому ми додамо до нього поля для імені та пошти.
 * Для ініціалізації екземпляра класу використовується метод constructor.
 * Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу.
 */
// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
//     // ...
//   }
// }

//---------------------------------------------
/**
 * ? Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.
 */
// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

//---------------------------------------------
/**
 * ? Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.
 */
// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

//------------------------------------------------
/**
 * ? Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.
 */
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
/**
 * ? Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.
 */
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const audi = new Car('Audi', 'Q3', 36000);
// console.log('audi:', audi);
// const bmw = new Car('BMW', 'X5', 58900);
// console.log('bmw:', bmw);
// const nissan = new Car('Nissan', 'Murano', 31700);
// console.log('nissan:', nissan);

//! Об'єкт параметрів
/**
 * ? До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.
 */
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango);
// // { name: "Mango", email: "mango@mail.com" }

//-----------------------------------------

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// const audi = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 36000,
// });

// console.log('audi:', audi);
// const bmw = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 58900,
// });

// console.log('bmw:', bmw);
// const nissan = new Car({
//   brand: 'Nissan',
//   model: 'Murano',
//   price: 31700,
// });
// console.log('nissan:', nissan);

//! Методи класу
/**
 * ? Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.
 */
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
//     // ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     // ...
//   }
// }
/**
 * ? Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра.
 */
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail('new@mail.com');

// console.log(mango.getEmail()); // "new@mail.com"

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrise) {
//     this.price = newPrise;
//   }
// }

//! Прототип екземпляру
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // “mango@mail.com”
/**
 * ? Методи класу не стають власними властивостями екземпляра. І це правильно, оскільки, на відміну від значень властивостей, вони не є унікальними. Це одна й та сама функція, яка викликається в контексті різних об'єктів. Немає сенсу копіювати методи для кожного екземпляра, враховуючи, що може існувати багато тисяч екземплярів.
 */

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
/**
 * ? При створенні екземпляра через new, об'єкт, збережений у властивості prototype класу, автоматично стає його прототипом. Це означає, що властивість [[Prototype]] екземпляра отримує посилання на властивість prototype класу.
 */
//! Приватні властивості
/**
 * ? Інкапсуляція — це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від зовнішнього коду. Інкапсуляція реалізується приватними властивостями та методами, доступ до яких можна отримати тільки всередині класу
 */
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість
/**
 * ? Додаючи до імені властивості на початку символ #, ми робимо її приватною.
 */
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // "mango@supermail.com"
/**
 * ? Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.
 */

// class Car {
//   #brand; // Приватна властивість

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi); // { model: "Q3", price: 36000 }
// console.log(audi.getBrand()); // "Audi"

// const bmw = new Car({ brand: 'bmw', model: 'X5', price: 58900 });
// console.log(bmw); // { model: "X5", price: 58900 }
// console.log(bmw.getBrand()); // "bmw"

// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(nissan); // { model: "Murano", price: 31700 }
// console.log(nissan.getBrand()); // "Nissan"

// nissan.changeBrand('Honda');
// console.log(nissan.getBrand()); // "Honda"

//! Приватні методи
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // "mango@supermail.com"
/**
 * ? Іноді потрібно не просто отримувати або змінювати адресу електронної пошти, але й проводити певні дії, які мають бути приховані від "зовнішнього світу".
 * ?Скажімо, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
 * ? Це можна зробити за допомогою приватних методів. Додаючи до назви методу на початку символ #, ми робимо його приватним.
 */
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

//! Геттери і сеттери

/**
 * ? Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом.
 */

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

/**
 * ? повертаємо значення приватної властивості #email за допомогою геттера
 * ? змінюємо її значення за допомогою сеттера
 */
//----------------------------------------------------
// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.email); // mango@mail.com

// mango.email = 'mango@supermail.com';

// console.log(mango.email); // mango@supermail.com
/**
 * ? Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код.
 * ? При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...}, і рядок "mango@supermail.com" буде значенням параметра newEmail.
 */
// set email(newEmail) {
//   if(newEmail === "") {
//     console.log("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }
//------------------------------------------
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
// }

//! Статичні властивості
/**
 * ? Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.
 */
// class MyClass {
//   static myProp = 'value';
// }

// console.log(MyClass.myProp); // "value"
/**
 * ? У екземпляра немає доступу до статичних властивостей класу.
 */
// class MyClass {
// 	static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined
/**
 * ? Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт із властивостями.
 */
// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

//------------------------------------------
// class MyClass {
//   static b = 5;

//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(instance.b); // undefined

//-----------------------------------------------
// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//! Статичні методи
/**
 * ?Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.
 */
// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }

// MyClass.myMethod(); // "A static method"
/**
 * ? статичну властивість takenEmails для зберігання зайнятих пошт користувачів
 * ? статичний метод isEmailTaken, який перевіряє, чи доступна пошта
 */

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true
/**
 * ? Особливість статичних методів 
Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.
 */

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     } else {
//       return 'Success! Price is within acceptable limits';
//     }
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//! Наслідування класів
/**
 * ? Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).
 */
class Parent {}

class Child extends Parent {
  // ...
}
/**
 * ? створити загальний клас User, який буде зберігати набір загальних властивостей і методів
 * ? після чого створити класи для кожного типу користувача, які наслідують цей набір від класу User
 */
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

//------------------------------------
// class User {
//   constructor(email) {
//     this._email = email; // Використання "слабкої" приватної властивості
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     this._email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }
//! Конструктор дочірнього класу
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"
/**
 * ? У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.
 */
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }

// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
//! Методи дочірнього класу
// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']
/**
 * ? У прикладі бачимо, що ContentEditor успадковує клас User.
 * ? User — це базовий клас, який має приватну властивість #email.
 * ? ContentEditor розширює клас User і має власну властивість posts. Клас ContentEditor також має метод addPost, який дозволяє додавати нові повідомлення до posts.
 * ? ContentEditor розширює клас User і має власну властивість posts. Клас ContentEditor також має метод addPost, який дозволяє додавати нові повідомлення до posts.
 */

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  blacklistedEmails = [];

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
