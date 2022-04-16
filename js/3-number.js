// * ===== number (числовой тип) ===== * //
let firstOperand = 12;
let SecondOperand = 5;
let mathOperation;
let result;

// Сложение +
// Сложение и бинарный оператор '+'
mathOperation = firstOperand + SecondOperand;
console.log(firstOperand + " + " + SecondOperand + " = " + mathOperation);

// Без скобок будет конкатенация
console.log(firstOperand + " + " + SecondOperand + " = " + (firstOperand + SecondOperand));

// Вычитание -
mathOperation = firstOperand - SecondOperand;
console.log(firstOperand, "-", SecondOperand, "=", mathOperation);

// Умножение *
mathOperation = firstOperand * SecondOperand;
console.log(`${firstOperand} × ${SecondOperand} = ${mathOperation}`);

// Деление / (неважно результат float или int)
mathOperation = firstOperand / SecondOperand;
console.log(`${firstOperand} : ${SecondOperand} = ${mathOperation}`);


// Остаток при делении % (Деление по модулю)
mathOperation = firstOperand % SecondOperand;
console.log(`${firstOperand} : ${SecondOperand} = ${mathOperation} - остаток`);
// ? == Пример перевода минут в часы и минуты == ? //

// Возведение в степень **
mathOperation = firstOperand ** SecondOperand;
console.log(`${firstOperand} ^ ${SecondOperand} = ${mathOperation} - остаток`);

// ! Важно учитывать, что порядок действий такой же, как в математике!
// ! Порядок действий можно регулировать скобками

// Получить целое число при делении:
console.log(parseInt(5 / 3));
console.log(Math.floor(5 / 3));

// Вычитаем остаток из числа (5 % 3), чтобы оно поделилось нацело
console.log(5 - 5 % 3) / 3;



// * ===== Инкремент | Декремент ===== * //
// ! Применяется только над переменной

let index = 1;
index++;
++index;
console.log("Пост-инкремент: " + index++);
console.log("Пре-инкремент: " + ++index);

let idx;
console.log(idx++ + ++idx);


// ! Если хотим увеличить саму переменную, но не на единицу, а на любое значение
index = index + 2;
index += 2;
// Аналогично работают и += -= *= /= %=


// С помощью скобок можно применить a *= 2
let a = 2;
let x = 1 + (a *= 2);
console.log(x);


// * Неявное преобразование
console.log("Неявное преобразование: " + "6" / "2");


console.log("3" + 2);
console.log(10 + "5");
console.log("5" + "5");

console.log("3" - 2);
console.log(100 / "5");
console.log("5" * "5");

console.log("25" + 7 + 5);
console.log("25" + (7 + 5));
