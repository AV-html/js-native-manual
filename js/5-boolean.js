// * ===== boolean (логический тип) ===== * //

let hasСompare = 8 > 7; // true
console.log(hasСompare);

// ? Операторы сравнения (приводят неявно к number)
// Больше               >
// Больше или равно     >=
// Меньше               <
// Меньше или равно     <=
// Равно                ==  (с приведением типов)
// Равно                === (без приведения типов)
// Не равно             !=  (с приведением типов)
// Не равно             !== (без приведения типов)

// ? Логические операторы (приводят неявно к boolean)
// ИЛИ                  ||
// И                    && (Приоритет выше, чем у ||)
// НЕ                   !

// Идентичная запись, т.к. && - приоритетнее ||
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
console.log(10 + "10");
console.log(10 - "10");
console.log(isNaN(10 - "10")); // true
console.log(10 - "10" == NaN); // false
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

// ! При сравнении преобразуется к типу Number
console.log("0" == false);

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// * Преобразование к типу boolean
// console.log(Boolean(3));

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

// * null & undefined
// undefined    -> false
// null         -> false



// * String
// "" - пустая строка
// "0" - строка с числом
// " " - строка с одним пробелом
// "t" - строка с текстом

// * Number
// NaN
// 0
// 1
// 3
// -3

// * null & undefined
// undefined
// null
