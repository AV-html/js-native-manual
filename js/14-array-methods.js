// * ===== Array methods 1 part ===== * //
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://learn.javascript.ru/array-methods


// * 0. let hasArray = Array.isArray(<array>);
// Проверка на массив - возвращает true/false

// * 1. <array>.push(item1, item2, ... itemN); // Добавляет элемент(ы) в конец
// Мутирует исходный массив
// Возвращает новую длину массива

// 2. <array>.pop(); // Удаляет последний элемент
// Мутирует исходный массив
// Возвращает удалённый элемент

// 3. array.shift() // удаляет элемент из начала массива
// Мутирует исходный массив
// Возвращает удалённый элемент

// 4. array.unshift(...items) // добавляет элементы в начало
// Мутирует исходный массив
// Возвращает новую длину массива

// 5. let index = <array>.indexOf(value, startIndex) // Ищет индекс первого встречного значения value,
// Поиск индекса первого встречного значения <value> слева на право, начиная с <startIndex>
// Возвращает найденный индекс или -1, если ничего не нашёл
// ! lastIndexOf - аналогичная функция, только начинается -1 индекс (с конца)

// 6. let hasValue = <array>.includes(value, startIndex)); // Проверка на наличие значения, начиная с startIndex
// Возвращает true/false
// Поддерживает отрицательные индексы

// * 7. <array>.splice(ind, deleteCount, ...items) // Удаляет элементы и добавляет на их место новые
// Мутирует исходный массив
// Начиная с индекса <ind>, удаляет кол-во элементов <deleteCount> и вставляет items элементов
// Добавление элементов - необязательный параметр
// Возвращает массив удалённых элементов


// * 8. let array = <array>.slice(start, end) // Копирует в него элементы с позиции <start> до <end> не вкл.
// Возвращает новый массив

// 9. let array = <array>.concat(...items) // Склеивает или поверхностно копирует массивы
// Возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.
// ! Если какой-то из items является массивом, тогда берутся его элементы.

// Пример:
// const testArr = [3, 6, 7, 2, 2, 5, 2];
// const copyTestArr = testArr.concat();
// console.log(copyTestArr);
// console.log(copyTestArr === testArr);


// 11. <array>.reverse() // Изменяет порядок элементов
// Мутирует исходный массив
// Возвращает ссылку на этот же массив

// 12. let array = <string>.split(', '); // Преобразует строку в массив по разделителю ', '
// Возвращает массив из строки по разделителю

// 13. let str = <array>.join('! '); // Преобразует массив в строку, добавляя разделитель '! '
// Возвращает строку

// 14. Array.from(); // Преобразует итерируемый объект в массив (см 11-string-ext)
// Возвращает массив
// Работает с:
// string, object, modelist, HTMLCollection,
// Поддерживает emoji
