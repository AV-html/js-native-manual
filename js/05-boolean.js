// * ===== boolean (логический тип) ===== * //

let hasСompare = 8 > 7; // true
console.log(hasСompare);

// ? Операторы сравнения (Возвращают логический тип данных)
// * Если типы данных разные, то происходит неявное преобразование к типу Number
// ! Искл: null & undefined не приводится к типу
// ! Искл: null == undefined -> true
// ! Искл: NaN == NaN -> false
// ! Искл: null >= 0 -> true

// Больше               >
// Больше или равно     >=
// Меньше               <
// Меньше или равно     <=
// Равно                ==  (с приведением типов)
// Равно                === (без приведения типов)
// Не равно             !=  (с приведением типов)
// Не равно             !== (без приведения типов)

console.log(10 > 5);
console.log(10 < 5);
console.log(10 == 10);
console.log(10 == '10'); // 'Неявное преобразование'
console.log(10 === '10');
console.log('10' == '10');
console.log('7' > 3); // 'Неявное преобразование'

console.log(null == 0);
console.log(null == undefined);
console.log(undefined == NaN);
console.log(NaN == NaN);

console.log(true == 1); // 'Неявное преобразование'
console.log(true == 11); // 'Неявное преобразование'
console.log(true == '1'); // 'Неявное преобразование'
console.log(true <= '1'); // 'Неявное преобразование'
console.log(10 >= '10'); // 'Неявное преобразование'
console.log('10px' == '10px');

// ! NaN == NaN // false -> Поэтому используем функцию isNaN()
// isNaN (Внутри сам преобразует в Number, еслт подали не числовой тип)
console.log(isNaN(10 - "10")); // false
console.log(isNaN(10 - "10px")); // true
console.log(isNaN("10px")); // true

// * Сравнение строк
console.log('a' == 'b');
console.log('a' == 'a');
console.log('a' > 'b'); // false 0041 > 0042
console.log('b' > 'a'); // true 0042 > 0041
console.log('Alex' > 'Abram'); // true
console.log('a' > 'A'); // true (маленькие буквы расположены дальше заглавных в Unicode)
console.log('aBram' > 'Alex'); // true
console.log('aBram'.toLowerCase() > 'Alex'.toLowerCase()); // true

// ? Логические операторы (Возвращают тот тип данных, с которым работал)
// Приоритет математических (+ конкатенация) выше над сравнением
// Приоритет сранвения выше над логическими

// ИЛИ                  ||
// И                    && (Приоритет выше, чем у ||)
// НЕ                   ! // !(Неявно приводит к типу boolean)

// * Таблица истинности ||
//  true  || true   =>  true
//  false || true   =>  true
//  true  || false  =>  true
//  false || false  =>  false

// * Таблица истинности &&
//  true  && true   =>  true
//  false && true   =>  false
//  true  && false  =>  false
//  false && false  =>  false

// * Таблица истинности !
//  !true  =>  false
//  !false  =>  true


// * === Преобразование к типу boolean (Boolean(), ||, &&, !)
// * String
// ""           -> false (Пустая строка)
// "0"          -> true
// " "          -> true - строка с одним пробелом
// "t"          -> true

// * Number
// NaN          -> false
// 0            -> false
// 1            -> true
// 3            -> true
// -3           -> true
// Infinity     -> true
// -Infinity    -> true

// * null & undefined
// null         -> false
// undefined    -> false



// Приоритеты:
// ()
// **
// * / %
// + -
// > < >= === == !=
// !
// &&
// ||