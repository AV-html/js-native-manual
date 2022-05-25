// * ===== Немного теории ===== * //
// * Примитивы:
// 1. undefined
// 2. null

// 3. number
// 4. string
// 5. boolean

// * Ссылочный тип данных [структура данных]
// 6. object -> [Array, Function, Object]
//              [NodeList, HTMLCollection, Map, Set, Date, WeekMap, WeekSet]
//              [Error, SyntaxError, ReferenceError, TypeError]

// * Другие примитивы (редкие):
// 7. bigint
// 8. symbol

// Если переменную не собираемся переопределять, то ставим const

// * ===== Array (Массив) ===== * //

const arrTest = []; // Создание пустого массива, как пустая строка
console.log(typeof arrTest); // object
// ! Если объект (массив) const, то свойства (элементы) можно менять, но переприсвоить саму переменную нельзя


// * == Нумерация элементов массива == * //
//                    0         1      2      3
const usersNames = ["Pavel", "Alex", "Dan", "Pupa"];
console.log(usersNames);

// * == Кол-во элементов == * // 
const countItems = usersNames.length; // ! Как в типе string
console.log(countItems); // 4


// * == Вывода элемента массива == * //
console.log(usersNames[0]); // Первый элемент
console.log(usersNames[1]);
console.log(usersNames[2]);
console.log(usersNames[3]); // Последний элемент
console.log(usersNames[4]); // undefined

// Вывод последнего элемента массива, если количество элементов неизвестно
console.log(usersNames[countItems - 1]);



// * == Методы массивов == *

const taskArray = [7, 12, 32, 44, 50];

// 1. array.push(...items) - добавляет элемент в конец массива, изменяя сам массив, и возвращает новую длину массива.
taskArray.push(7, 3, 1); // [7, 12, 32, 44, 50, 7, 3, 1]


// 2. deleteItem = array.pop() - удаляет последний элемент, изменяя сам массив возвращает удалённый элемент
const deleteItem = taskArray.pop(); // [7, 12, 32, 44, 50, 7, 3]
console.log(deleteItem); // 1


// 3. array.shift() – извлекает элемент из начала
// возвращает удалённое значение

// 4. array.unshift(...items) – добавляет элементы в начало и возвращает новую длину массива.


// 5. Array.isArray(array) - Проверить объект на массив
console.log(Array.isArray(taskArray));

// ? 6. Array.from() - преобразует массиво-подобный тип данных к типу Array


// * == Обратиться сразу ко всем элементам (перебор массива) == * //
// Мы не можем обратиться к массиву и прибавить к нему 10 (taskArray + 10), чтобы все значения внутри увеличились, 
// но можем это сделать с помощью цикла

// 1 способ
for (let i = 0; i < taskArray.length; i++) {
    console.log(taskArray[i]); // Значение
    console.log(taskArray); // Весь массив
    console.log(i); // Индекс, перебираемого элемента (итератор цикла)
}

// 2 способ (более простой и короткий)
for (const value of taskArray) {
    console.log(value); // Значение
    console.log(taskArray); // Весь массив
}

// * == Объект - ссылочный тип данных == * //
// ! Массив копируется по ссылке, а не по значению ! //
const city = ["Moscow", "London", "Los Angeles"];
const copyCity = city;
console.log(copyCity); // ["Moscow", "London", "Los Angeles"]
console.log(city); // ["Moscow", "London", "Los Angeles"]

copyCity[1] = "Prontera";
console.log(copyCity); // ["Moscow", "Prontera", "Los Angeles"]
console.log(city); // ["Moscow", "Prontera", "Los Angeles"]
// ! Заменяются оба массива. На самом деле заменяется один массив, он просто связан по ссылке


// * == Дополнительная информация == * //
// * Массив может хранить переменные любого типа, пример:
const variable = "data";
const testing = ["Текст", 6, variable, true, null, undefined, [4, 3, true, 7]];
console.log(testing[6][2]); // true


// * Альтернативная запись массива:
const cityAnother = [
    "Moscow",
    "London",
    "Los Angeles", // Висячая запятая, её лучше не ставить
];

// * Раздать 30 ученикам варианты к/р из массива
const exam = ['1 вариант', '2 вариант', '3 вариант', '4 вариант'];

for (let i = 0; i < 30; i++) {
    console.log(`${i + 1} ученик получит - ${exam[i % exam.length]}`);
}


const testArr1 = [1, 2, 3];
const testArr2 = [1, 2, 3];
console.log(testArr1 === testArr2); // false - объекты (массивы) не связаны по ссылке - значит объекты разные
// ! Сравнение возвращает true, только если объекты связаны по ссылки
const copyArr1 = testArr1;
console.log(copyArr1 === testArr1); // true