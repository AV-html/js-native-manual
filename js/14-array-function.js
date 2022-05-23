// * ===== Array Function. Callbacks - HOF ===== * //
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://learn.javascript.ru/array-methods


// ! Стандартные функции
// 0. let hasArray = Array.isArray(<array>); // Проверка на массив true/false
// 1. <array>.push(item1, item2, ... itemN); // Добавляет элементы в конец
// 2. <array>.pop(); // Удаляет элемент в конце массива

// 4. let index = <array>.indexOf(3, 0) // Возвращает индекс первого встречного значения 3, начиная с index = 0 //! Поиск слева направо // Если не найдёт, вернётся -1
// 5. let index = <array>.lastIndexOf(3, -1); // Возвращает индекс первого встречного значения 3, начиная с index = -1 (c конца) //! Поиск справа налево // Если не найдёт, вернётся -1
// 6. let hasIndex = <array>.includes(3, -2)); // Возвращает true/false, ищет значение 3, начиная с предпоследнего элемента

// 7. <array>.splice(ind, deleteCount, ...items) – начиная с индекса <ind>, удаляет кол-во элементов <deleteCount> и вставляет items элементов.
// 8. let array = <array>.slice(start, end) – создаёт новый массив, копируя в него элементы с позиции <start> до <end> не вкл.
// 9. let array = <array>.concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

// Пример:
// const testArr = [3, 6, 7, 2, 2, 5, 2];
// const copyTestArr = testArr.concat();
// console.log(copyTestArr);
// console.log(copyTestArr === testArr);


// 10. <array>.reverse() // Изменяет порядок элементов
// 11. let array = <string>.split(', '); // Преобразует строку в массив по разделителю ', '
// 12. let str = <array>.join('! '); // Преобразует массив в строку, добавляя разделитель '! '
// 13. Array.from(); // Преобразует итерируемый объект в массив



// ! Функции с callback

// Функции высшего порядка (high order function - hof)


// * 1. arr.forEach( (value, index, arr) => {} );
// Простой перебор элементов
// Метод arr.forEach ничего не возвращает

// 2. arr.find( (value, index, arr) => { return ... } );
// Поиск значениЯ по условию
// Метод arr.find возвращает первое встречное value, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт undefined


// 3. arr.findIndex( (value, index, arr) => { return ... } );
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



// 6. arr.some( (value, index, array) => { return ... } );

// Проверка на нахождение хотя бы одного элемента в массиве
// Проверяет есть ли в массиве хотя бы один элемент
// arr.some возвращает true - если есть хотя бы один, иначе false
// Элемент есть, если callback-функция вернула true

// Пример 6:
// const isBool = ['text', 'array', 'people', 'advantages'];
// console.log(strArr.some( (value) => value === 'array' )); // true
// console.log(strArr.some( (value) => value === 'array22' )); // false


// * 7. arr.reduce( (prValue, value, index, array) => { return ... }, startValue );
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


// 8. arr.every( () => {} );

// 9. <array>.sort( (num1, num2) => { return ... } )
// Функция мутирует массив и возвращает новый.
// <array>.sort(); // Сортировка строки / массива по символам
// <array>.sort((a, b) => a - b); // Сортировка чисел по значению





// * Array.from(); // Создаёт новый экземпляр Array из массивоподобного или итерируемого
// ! Важно: На NodeList работает только forEach

// NodeList - коллекция DOM - элементов
// Если мы хотим,чтобы остальные функции работали, нужно привести к типу Array

// const domNodeList = document.querySelectorAll('div'); // NodeList
// console.log(Array.from(domNodeList)); // Array

