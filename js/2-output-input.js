// * ===== Вывод в консоль ===== * //
// snippets for VS Code:
// JavaScript Snippet Pack
// Author: Mahmoud Ali

let userMoney = 9900;
let userName = "Pavel";

console.log(userMoney);
console.log(userName);

// Склеивание строк:
// 1 способ:
console.log(userName + " has " + userMoney + " coins"); // "Pavel has 9900 coins"

// 2 способ:
let result = userName + " has " + userMoney + " coins";
console.log(result); "Pavel has 9900 coins"


// ? Как проверить тип: (оператор typeof возвращает строку с названием типа данных)
console.log(typeof key);
console.log(typeof userMoney);
console.log(typeof userName);
console.log(typeof isUserAccess);
console.log(typeof book); // Объект - известная ошибка JS, должен быть тип null


// Альтернатива: всплывающее окно с сообщением
// alert("text"); // al

// * ===== Ввод с клавиатуры ===== * //
// let userText = prompt('сообщение'); // pm
// Если нажать отмену, то будет null

// console.log(userText);


// Преобразование к типу number - функция Number()

console.log("17" + 1);
console.log(Number("17") + 1);

// ! 1. Если хотим запросить символ/слово/текст
// let userMessage = prompt('сообщение');

// ! 2. Если хотим запросить цифру/число:
// let userNumber = Number(prompt('сообщение'));
