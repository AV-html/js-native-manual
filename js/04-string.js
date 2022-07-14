// * ===== string (строковый тип) ===== * //

// * Esc-последовательности (экранирование)
// \n - enter (newline)
// \t - tab
// \' - single quote '
// \" - double quote "
// \\ - backslash \

// Более редкие:
// \r	carriage return
// \b	word boundary
// \f	form feed
console.log();


// Узнать количество символов
let text = 'This is text of the user';
console.log(text.length); // 24 - символа в строке text


// Функции не меняют саму строку
// console.log(text.toUpperCase()); // Возвращает строку в верхнем регистре

// console.log(text.toLowerCase()); // Возвращает строку в нижнем регистре


let numStr = String(24); // преоразовать в тип String
console.log(numStr); // '24'

// String(123) // явное преобразование
// 123 + ''    // неявное преобразование
console.log(String(123));                   // '123'
console.log(String(-12.3));                 // '-12.3'
console.log(String(null));                  // 'null'
console.log(String(undefined));             // 'undefined'
console.log(String(true));                  // 'true'
console.log(String(false));                 // 'false'


let userName = 'Pavel';
// * 3 способа вывести в консоль
console.log("Моё имя -", userName); // Параметры через запятую
console.log('Моё имя - ' + userName); // Конкатенация (склеивание)
console.log(`Моё имя - ${userName}`); // Шаблонные литералы


// * Тип строки

console.log(typeof '');
console.log(typeof ' ');
console.log(typeof '1');
console.log(typeof '0');
console.log(typeof '5 * 4');
console.log(typeof 't');
console.log(typeof 'text');


