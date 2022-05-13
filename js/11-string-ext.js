// * ===== string-extanded (строка-углубленный) ===== * //


const stringList = 'Sample text!'
// ! Строка - как массив, состоящий из символов

// Получить символ:
console.log(stringList[0]); // S
console.log(stringList[43]); // undefined

// По символьный вывод (либо через стандартный цикл for)
for (const symbol of stringList) {
    console.log(symbol);
}

// ! Замена символа невозможна!
// stringList[0] = "T";


// * Функции (методы) строк *
const text = "  stRing ";


// * 0. Длина строки (свойство length)
// console.log(text.length);
// 1. let newString = <string>.toUpperCase(); // Возвращает строку в верхнем регистре
// console.log(text.toUpperCase());
// 2. let newString = <string>.toLowerCase(); // Возвращает строку в нижнем регистре
// console.log(text.toLowerCase());
// 3. let newStr = <string>.trim(); // Удаляет пробелы слева и справа от строки


// * 4. let index = <string>.indexOf("Ri", 0) // Возвращает индекс первого встречного значения "Ri", начиная с index = 0
// Поиск слева направо. Если не найдёт, вернётся -1
// console.log(text.indexOf("Ri", 0));

// ? 5. let hasIndex = <string>.includes("Ri", 0); // Возвращет true, если подстрока есть, иначе - false
// По умолчанию начинается с 0 символа
// let hasIndex = text.includes("Ri", 0);
// console.log(hasIndex);

// ? 6. Проверка в начале или в конце строки
// console.log(text.startsWith("st")); // true, "st" — начало "stRing"
// console.log(text.endsWith("ing")); // true, "ing" — окончание "stRing"

// * 7. let newStr = <string>.slice(start, end); // Возвращает новую строку, копируя в неё элементы с позиции <start> до <end> НЕ вкл.
// slice(start) - создаёт новую строку с позиции start до конца строки


// * Array (Массивы) * //

// * 8. let array = <string>.split('R'); // Преобразует строку в массив по разделителю 'R'
// console.log(text.trim().split('R')); // ['st', 'ing']
// console.log(str.split('')); // Посимвольно превратить в массив


// 9. Array.from(<string>); // Посимвольно преобразует строку в массив (Хорошо работает для составных символов)
// let str = '𝒳😂';
// console.log(Array.from(str)); // ['𝒳', '😂']
// console.log(str.split('')); // ['�', '�', '�', '�']
// В отличие от str.split, этот метод в работе опирается на итерируемость строки

// * 10. let string = <array>.join("R"); // Преобразует массив в строку, добавляя разделитель 'R'

// * 11. <array>.reverse(); // Поменять местами элементы массива
// split('').reverse().join('') // Поменять местами буквы

