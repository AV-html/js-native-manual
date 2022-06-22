// * ===== Array methods 2 part (Callbacks - HOF) ===== * //

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://learn.javascript.ru/array-methods

// Вызов функции func()
// Ссылка на функцию func
// Callback, когда подаём на вход в функцию ссылку на функцию

// ** Функции высшего порядка (high order function - hof) ** //

// * 1. arr.forEach( (value, index, arr) => {} );
// Простой перебор элементов
// Метод arr.forEach ничего не возвращает

// ? 2. arr.find( (value, index, arr) => { return ... } );
// Поиск значениЯ по условию
// Метод arr.find возвращает первое встречное value, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт undefined

// ? 3. arr.findIndex( (value, index, arr) => { return ... } );
// Поиск индекса по условию
// Метод arr.findIndex возвращает первый встречный index, на котором callback-функция вернула true
// Если ничего не найдёт, то -1

// * 4. arr.filter( (value, index, arr) => { return ... } );
// Поиск значениЙ по условию
// Метод arr.filter возвращает массив значений, на которых callback-функция вернула true
// Если ничего не найдёт, то возвращается []

// Пример 4: Написать функцию, на вход которой подаётся массив
// Функция возвращает новый массив, состоящий из всех двоек переданного массива
// const testArray = [3, 6, 7, 2, 2, 5, 2];
// const newArr = findTwoArr(testArray);
// console.log(newArr);
// function findTwoArr(arr) {
//     return arr.filter( (value, index) => {
//         return value === 2;
//     } );
// }

// * 5. arr.map( (value, index, arr) => { return ... } );
// Метод arr.map возвращает массив значений, которые вернула callback-функция
// Если не вернулось значение, то оно будет равно undefined

// Пример 5: Написать функцию, на вход которой подаётся массив строк
// Функция возвращает новый массив, заменяя слова ни длину строки (length)
// const strArr = ['text', 'array', 'people', 'advantages'];
// const lengthArr = changeWordToLength(strArr);
// console.log(lengthArr);

// function changeWordToLength(array) {
//     return array.map( (value) => {
//         return value.length;
//     } );
// }


// * 6. arr.reduce( (prValue, value, index, array) => { return ... }, startValue );
// Вычисляет значение, на основе всего массива
// arr.reduce - возвращает одно число
// callback-функция возвращает значение и оно в следующей итерации записано в prValue
// В самую первую итерацию prValue = startValue (по умолчанию startValue = 0)

// Пример 7:
// Посчитать сумму элементов массива:
// const testerArray = [3, 6, 7, 2, 2, 5, 2];
// const sum = testerArray.reduce( (prValue, value) => {
//     return prValue + value;
// }, 0);
// console.log(sum);

// * 7. arr.sort( (num1, num2) => { return ... } )
// Функция мутирует массив и возвращает ссылку на тот же массив.
// <array>.sort(); // Сортировка строки / массива по символам
// <array>.sort((a, b) => a - b); // Сортировка чисел по значению

// * Примеры сортировок * //
// ! reverse помогает получить наоборот!
// * Number
// (sort((a, b) => {a - b}) ) // по возрастанию
// (sort((a, b) => {b - a}) ) // по убыванию

// * String
// (sort((a, b) => {a < b ? -1 : 1}) ) // по алфавиту
// (sort((a, b) => {a.toLowerCase() < b.toLowerCase() ? -1 : 1}) ) // по алфавиту

// * Boolean
// (sort((a, b) => {a ? -1 : 1}) ) // сначала true
// (sort((a, b) => {a ? 1 : -1}) ) // сначала false


// =================================================== //

// ? 8. arr.some( (value, index, array) => { return ... } );
// Проверка на нахождение хотя бы одного элемента в массиве
// Проверяет есть ли в массиве хотя бы один элемент
// arr.some возвращает true - если есть хотя бы один, иначе false
// Элемент есть, если callback-функция вернула true

// Пример 6:
// const isBool = ['text', 'array', 'people', 'advantages'];
// console.log(strArr.some( (value) => value === 'array' )); // true
// console.log(strArr.some( (value) => value === 'array22' )); // false

// ? 9. arr.every( (value, index, array) => { return ... } );
// Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// arr.every возвращает true - если все элементы удовлетворяют условию, иначе false
// callback-функция вернула true для всех элементов
// ! Метод возвращает true при любом условии для пустого массива.



// ! Замечаение

// ! Важно: На NodeList работает только forEach
// * Array.from(); // Создаёт новый экземпляр Array из массивоподобного или итерируемого объекта

// NodeList - коллекция DOM - элементов
// Если мы хотим, чтобы остальные функции работали, нужно привести к структуре Array

// const domNodeList = document.querySelectorAll('div'); // NodeList
// console.log(Array.from(domNodeList)); // Array
