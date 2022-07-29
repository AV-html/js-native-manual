// * ===== number ===== * //

// 1. Number(<any>); // Приводит к типу number

// 2. parseInt("19.5px"); // 19 -> Отбросить дробную часть, а также откинуть текст справа

// 3. parseFloat("19.5px"); // 19.5 -> Отбросить текст справа

// 4. isNaN(<any>); // Проверка на NaN (преобразует значение к типу number и проверяет является ли оно NaN)

// * Округление
// 5. .toFixed(n); // Округляет число до n знаков после запятой и возвращает СТРОКОВОЕ представление

// 6. Math.floor(<number>); // Округление в меньшую сторону
// 7. Math.ceil(<number>); // Округление в большую сторону
// 8. Math.round(<number>); // Округление до ближайшего целого (почти как в математике)


// * Другие функции в Math * //
// 9. Math.max(a, b, c, ..., z); // Возвращает наибольшее число
// 10. Math.min(a, b, c, ..., z); // Возвращает наименьшее число

// 11. Math.random(); // * Возвращает псевдослучайное число от 0 вкл до 1 НЕ вкл

// * Случайное целое число от min до max вкл
// Math.floor(min + Math.random() * (max + 1 - min));
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let step1 = Math.random(); // от [0 ; 1)
    let step2 = step1 * (max + 1 - min); // [0 ; max + 1 - min)
    let step3 = min + step2; // [min ; max + 1)
    // * let step3 = min + Math.random() * (max + 1 - min);
    return Math.floor(step3); // 2.9999999999  округлится до 2, т.к. округление в меньшую сторону
}
console.log(randomInteger(1, 5)); // [1, 5.99999] с округлением в меньшую сторону


console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));


// * Унарный опаретор
// * Бинарный оператор
// * Тернарный оператор