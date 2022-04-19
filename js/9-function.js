// * ===== Function (Функции) ===== * //
// Function Decalration
// Функция выводит в консоль переданный текст:
function showMessage(param) {
    // body function
    console.log(param);
}

// Неявно: param = "Test message!"
showMessage("Test message!"); // Вызов функции 

// Неявно: param = "Test!"
showMessage("Test!"); // Повторный вызов функции с другим значением

console.log(showMessage); // f { ... } - как правило никогда не выводим функцию
console.log(typeof showMessage); // function


let resultFunction = showMessage("Test repeat"); // По умолчанию функция возвращает undefined
console.log(resultFunction); // undefined



// ? == Как писать функции? == //
// Написать функцию, которая складывает 2 или 3 числа.
// Результат функции - сумма 2 или 3 чисел, в зависимости от того, сколько подал пользователь


// 1. Имя функции (Что она делает?)
// 2. Сколько параметров на вход?
// 3. Есть ли параметры по умолчанию?
// 4. Что на выход из функции, что она возвращает? (return)
// ======================================================== //
// 5. Проверка
// 6. Попробовать упростить запись внутри функции (повысить чистаемость кода)


// * 1. Имя функции
// Название функции должно отражать суть того, что она выполняет

// function calcNumbers() { }


// ? Пример названий функций: (Как правило, функция - глагол)

// showMessage(..)     // Показывает сообщение (функция ничего не возвращает)
// getAge(..)          // Получить возраст (возвращает переменная)
// calcEven(..)        // Вычисляет сумму и возвращает результат

// createTag(..)       // Что-то создаёт
// generateArray(..)   // Создаёт массив (возвращает его)

// changeArray(..)     // Что-то меняет в массиве (может мутировать, а может возвращать новый)

// checkPermission(..) // проверяет доступ, возвращая true/false
// isEven(..)          // Проверяет на чётность, возвращая true/false




// * 2. Параметры на вход (Выясняется из условия)

// 2 или 3 параметра (максимум 3, поэтому пишем 3 переменных)
// Область видимости этих переменных только внутри скобок

// function calcNumbers(a, b, c) { }



// * 3. Параметры на вход (Выясняется из условия)
// function calcNumbers(a, b, c = 0) { }


// * 4. Что на выход из функции, что она возвращает? (return)
function calcNumbers(a, b, c = 0) {
    let result = 0;
    result = a + b + c;
    return result;
}

// * 5 Проверка
// Можно подать сразу в консоль
console.log(calcNumbers(4, 3)); // Должно вернуть 7
console.log(calcNumbers(4, 3, 3)); // Должно вернуть 10

// Можно подать через переменные, если результат функции будет использована дальше в коде

let result = calcNumbers(40, 30);
console.log(result); // 70


// * 6 Упрощение
function calcNumbersEasy(a, b, c = 0) {
    return a + b + c;
}



// * Эффекту hoisting (всплытие или подъём).
// Проявляется он в том, что функцию можно вызывать до её объявления.

add(2, 3); // 5

function add(x, y) {
    return x + y;
}


// * Функия может возвращать новый массив (объект);
// * Функция может изменять (мутировать) исходный массив (объект);
// Работает со всеми (object)

let testArray = [-41, 34, -45, 416, -31, 54, 11, -312, -13];

// 1. Пример:
// Написать функцию на вход которой подаётся массив
// Функция создаёт новый массив, заменяя отрицательные значения на положительные:

// input: [-41, 34, -45, 416, -31, 54, 11, -312, -13];
// output: [41, 34, 45, 416, 31, 54, 11, 312, 13];

function generatePositiveArray(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArr.push(-array[i]);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
console.log(generatePositiveArray(testArray));



// 2. Пример:
// Написать функцию на вход которой подаётся массив
// Функция изменяет исходный массив, заменяя отрицательные значения на положительные:

function changePositiveArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = -array[i];
        }
    }
}

changePositiveArray(testArray);
console.log(testArray);


// * ключевое слово: arguments
function testFun(x, y) {
    console.log(arguments); // { '0': 2, '1': 3, '2': 5, '3': 7 }
    return x + y;
}

console.log(testFun(2)); // x = 2, y = undefined
console.log(testFun(2, 3, 5, 7)); // x = 2, y = 3
// 5 и 7 куда уходят?
