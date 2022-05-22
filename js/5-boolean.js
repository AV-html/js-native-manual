// * ===== boolean (логический тип) ===== * //

let hasСompare = 8 > 7; // true
console.log(hasСompare);

// ? Операторы сравнения (Возвращают логический тип данных)
// * Если типы сравниваемых значений разные, то неявно к number
// * Если типы одинаковые, то сравниваются значения

// Больше               >
// Больше или равно     >=
// Меньше               <
// Меньше или равно     <=
// Равно                ==  (с приведением типов)
// Равно                === (без приведения типов)
// Не равно             !=  (с приведением типов)
// Не равно             !== (без приведения типов)

// ? Логические операторы (Возвращают тот тип данных, с которым работал)

//
// ИЛИ                  ||
// И                    && (Приоритет выше, чем у ||)
// НЕ                   ! (Неявно приводит к типу boolean)

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



// * Преобразование к типу Number (Number(), >, <, >=, <=, ==, !=)
// * String
// ""           -> 0
// " "          -> 0
// "    "       -> 0

// "0"          -> 0
// "000"        -> 0
// "007"        -> 7
// "-7.5"       -> -7.5

// "t"          -> NaN
// "7px"        -> NaN
// "!?/,."      -> NaN

// * Boolean 
// true         -> 1
// false        -> 0

// * null & undefined
// null         -> 0
// undefined    -> NaN




// * Преобразование к типу boolean (Boolean(), ||, &&, !)
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


// * Примеры * //
// * Неявное преобразование типов:
console.log(10 + "10"); // '1010'
console.log(10 - "10"); // 0

// * Сравнение разных типов
// console.log('2' > 1); // true, строка '2' становится числом 2
// console.log('03' == 3); // true, строка '03' становится числом 3

// * Логическое значение true становится 1, а false – 0.
// console.log(true == 1); // true,
// console.log(false == 0); // true,
// console.log("0" == false); // true

// * Сравнение строк
// console.log( 'Я' > 'А' ); // true
// console.log( 'Коты' > 'Кода' ); // true
// console.log( 'Сонный' > 'Сон' ); // true

// * Исключения * //
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// ! NaN == NaN // false -> Поэтому используем isNaN()
// isNaN (Внутри преобразует в NaN)
// console.log(isNaN(10 - "10")); // false
// console.log(isNaN(10 - "10px")); // true
// console.log(isNaN("10px")); // true 


