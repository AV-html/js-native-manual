// * ===== Variables (Переменные) ===== * //

// - комментарий однострочный - ctrl + ?

/*
    Большой комментарий
    На несколько строк
*/


// Переменные хранят данные
// Стиль написания: lowerCamelCase
// Как называть: Название отражает суть того, что в ней хранится


// "=" - знак присвоить (процесс инициализации переменной)
// ! нельзя создавать переменную с таким же названием let
// 1. Создание переменной
// 2. Инициализация переменной (присваение значения)

// * Типа данных: undefined, null, number, string, boolean, [object | bigint, symbol]


let key; // Хранит undefined - "значение не было присвоено"
let book = null; // null - пусто (мы сами не присваеваем undefined, а лучше присвоить null)

let userMoney = 9900; // number: от -2e53-1 до 2e53-1 вкл.
// NaN - Not a Number
// Infinity 
// -Infinity 

let userName = "Alexander"; // string // '' // "" // ``
let isUserAccess = true; // boolean - true|false


// var - устарешее создание переменной

// const
const PI = 3.1415; // Невозможно переприсовить
const COLOR_BLUE = "#00F"; // Константа
const arrayList = ['text', 'anotherText', 'etc'];
// Их необходимо сразу инициализировать