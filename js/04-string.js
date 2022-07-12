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
