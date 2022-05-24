// * ===== Array methods 1 part ===== * //
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
// 13. Array.from(); // Преобразует итерируемый объект в массив (Строку, объект, нодлист, html-коллекцию ...)
