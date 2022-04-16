// * ===== Conditions (Условия) ===== * //
// Оператор if ()
// Оператор else ()
// Оператор else if ()

// * Простые условия
// 1 Пример:
let answer = prompt('Сколько будет 20 + 5?');
let condition = answer == 25;
if (condition) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// 2 Пример:
let anotherAnswer = prompt('Чему равен интеграл по dx?');
// let condition = anotherAnswer == 'x';
if (anotherAnswer === 'x') {
    console.log(true);
} else {
    console.log(false);
}


// * Промежутки:
// Если попали в промежуток, то вывести сообщение в консоль, иначе ничего не делать
// От 0 вкл. до 10 вкл.
let num = 6;
if (num >= 0 && num <= 10) {
    console.log("Попали в промежуток!");
}

// От 5 вкл. до 15 не вкл.
if (num >= 5 && num < 15) {
    console.log("Попали в промежуток!");
}


let number = 21;
// * Проверка числа на чётность (делится ли число на 2)
if (number % 2 === 0) {
    console.log("Чётное число");
}
// * Делится ли число на 7 или 17?
// Вывести в консоль, делится ли число на 7 или на 17
// 1 способ:
if (number % 7 === 0 || number % 17 === 0) {
    console.log("Число делится ли на 7 или 17");
}


// 2 способ:
// При number = 119 выведется 2 сообщение:
if (number % 7 === 0) {
    console.log("Число делится на 7");
}
if (number % 117 === 0) {
    console.log("Число делится на 17");
}

// 3 способ:
// При number = 119 выведется только 1 сообщение:
if (number % 7 === 0) {
    console.log("Число делится на 7");
} else if (number % 117 === 0) {
    console.log("Число делится на 17");
}



// * Сложные условия
let answerUser = Number(prompt('Введите число'));

if (answerUser === 1) {
    console.log("1");
} else if (answerUser === 2) {
    console.log("2");
} else if (answerUser === 3) {
    console.log("3");
} else {
    console.log("Остальные числа");
}


// * Простые проверки на различные типы данных
let testNumber = 100;
let testString = "text";
let undefinedVariable; // undefined
let nullVariable = null;
let nanVariable = NaN;

if (typeof testNumber === "number") {
    console.log("Переменная testString - number");
}
if (typeof testString === "string") {
    console.log("Переменная testString - string");
}
if (undefinedVariable === undefined) {
    console.log("Переменная undefinedVariable - undefined");
}
if (nullVariable === null) {
    console.log("Переменная nullVariable - null");
}
if (isNaN(nanVariable)) {
    console.log("Переменная nanVariable - NaN");
}
