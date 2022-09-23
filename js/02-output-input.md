## Задачи по теме 2. Output & Input ##

### 1. Задача
Создать 3 перемнных, все разного типа данных.
Вывести в консоль в одну строчку через пробел.

### 2. Задача 
Создать переменную, которая хранит имя.
Вывести в консоль приветствие: <br>
`Привет, <имя из переменной>!`

### 3. Задача
Объяви переменные intValue, numericValue, size, number с типом number.
Присвой им любые разные значения. 
Вывести в консоль переменные через пробел, в обратном порядке их создания.

### 4. Задача 
Создать 3 перемнных, все разного типа данных.
Вывести их тип в консоль.

### 5. Задача.
Сделать рефакторинг кода:

```
vozrastPolzovatela = 10
boolian = false;
user__text = 'Какой-то текст";
console.log(chiclo boolian user__text)
```

### 6. Задача
Сделать рефакторинг кода:

```
uzerName = Валентин;
user-money = 2000; /* Это монеты */
areAccess = "true";

console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
console.log(uzerName + "имеет" + "доступ:" + "true")
```

### 7. Задача
Убери комментарии с части кода, чтобы в консоль вывелась фраза: <br>
`Happy New Year`

```
let text = '';
// text = text + "Merry";
// text = text + "Christmas\n";
// text = text + "Merry New\n";
// text = text + "New";
// text = text + "weekend\n";
// text = text + "Happy New";
// text = text + "Merry New!";
// text = text + " ";
// text = text + "Year";
console.log(text);
```

### 8. Задача
Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).
- Нельзя изменять строки с объявлением переменных.
- Нельзя изменять строки отвечающие за вывод в консоль.
- Нужно раскомментировать одну строку и не менять остальные.

```
let x = 2;
let y = 12;
// y = x * y; 
// y = x + y; 
x = y - x; 
y = y - x; 
console.log(x);
console.log(y);
```

### 9. Задача
Закомментируй ненужные строки кода, чтобы в консоль вывелась надпись: 2 плюс 3 равно 5
Примечание: комментировать строки с объявлением переменных let a и let b нельзя.
- Нельзя изменять строки с объявленными переменными let a и let b.
- Нужно закомментировать хотя бы одну строку.
- Нельзя изменять или добавлять команды, отвечающие за вывод, только комментировать.

```
let a = 3;
let b = 2;

console.log("два");
console.log(b);
console.log(" плюс ");
console.log(" минус ");
console.log(a);
console.log("три");
console.log(" равно ");
console.log(" будет ");
console.log("пять");
console.log(a + b);
```

### 10. Задача
Пользователь вводит с клавиатуры сначала любое число, а затем текст.
Вывести в консоль в следующем виде: <br>
`Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя>`

### 11. Задача
Попросить пользователя ввести название любимой конфеты. 
Вывести в консоль следующий текст: <br>
`Самая вкусняшная конфетка - это <название>!`

### 12. Задача
Попросить пользователя ввести название фильма и число - количество раз, сколько его смотрел. 
Вывести в консоль следующий текст: <br>
`Я посмотрел <фильм> <количество> раз!`

### 13. Задача
Попросить пользователя ввести название предмета и число - количество раз, сколько его нужно купить. 
Вывести в консоль следующий текст: <br>
`Я посмотрел <фильм> <количество> раз!`



### 12. Задача
Не выполняя код, дать ответ, что выведется в консоль:
Результат записать в комментарий.

```
console.log(typeof "text");
console.log(typeof "1010");
console.log(typeof false);
console.log(typeof "Pavel");
console.log(typeof "undefined");

console.log(typeof -106.432);
console.log(typeof "null");
console.log(typeof 111);
console.log(typeof true);
console.log(typeof " ");
```

### 13. Задача
Не выполняя код, дать ответ, что выведется в консоль:
Результат записать в комментарий.

```
console.log(typeof Infinity);
console.log(typeof 200);
console.log(typeof "");
console.log(typeof "true");
console.log(typeof null);

console.log(typeof "tester");
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof -Infinity);
console.log(typeof undefined);
```



## ★ Задачи повышенной сложности ★ ##

### 14. ★ Задача ★ 
Что выведется в консоли и почему:

```
console.log(numTest); // ?
var numTest = 7;
console.log(numTest); // ?

console.log(numberTest); // ?
let numberTest = 12;
console.log(numberTest); // ?

console.log(PI); // ?
const PI = 3.1415;
console.log(PI); // ?
```

### 15. ★ Задача ★ 
Не выполняя код, дать ответ, что выведется в консоль:
Результат записать в комментарий.

```
console.log(typeof (typeof 10));
console.log(typeof (typeof 'text'));
console.log(typeof (typeof NaN));
console.log(typeof (typeof Infinity));
console.log(typeof (typeof null));
```