// * ===== boolean ===== * //

let hasСompare = 8 > 7; // true
console.log(hasСompare);

// ? Операторы сравнения
// Больше               >
// Больше или равно     >=
// Меньше               <
// Меньше или равно     <=
// Равно                ==  (с приведением типов)
// Равно                === (без приведения типов)
// Не равно             !=  (с приведением типов)
// Не равно             !== (без приведения типов)

// ? Логические операторы
// ИЛИ                  ||
// И                    && (Приоритет выше, чем у ||)
// НЕ                   !

// a && b || c && d  ===  (a && b) || (c && d)

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


// * Неявное преобразование типов

// ! NaN == NaN // false -> Поэтому используем isNaN()

// ! Сравнение строк
// console.log( 'Я' > 'А' ); // true
// console.log( 'Коты' > 'Кода' ); // true
// console.log( 'Сонный' > 'Сон' ); // true

// ! Сравнение разных типов
// console.log('2' > 1); // true, строка '2' становится числом 2
// console.log('03' == 3); // true, строка '03' становится числом 3

// ! Логическое значение true становится 1, а false – 0.
// console.log(true == 1); // true, true == 3 => false
// console.log(false == 0); // true,

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// * Преобразование к типу boolean
// console.log(Boolean(3));

// undefined -> false
// null -> false
// "" пустая строка -> false
// "0" -> true
// " " -> true - строка с одним пробелом
// "t" -> true
// 0 -> false
// 1 -> true
// 3 -> true
// -3 -> true