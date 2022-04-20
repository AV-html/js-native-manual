// * ===== object (объект) ===== * //


let objTest = {}; // Создание пустого массива, как пустая строка
console.log(typeof objTest); // object

// ! Если объект const, то свойства можно менять, но переприсвоить саму переменную нельзя
const user = {
    name: 'Bob',
    age: 33
    // ключ: значение - (поле или свойство)
};

// * Действия над объектами
user.name = 'Gale'; // Изменить значение свойства (т.к. свойство name уже есть)

user.secondName = "London"; // Добавление нового свойства (т.к. свойство secondName нету)

delete user.secondName; // Удаление свойства


// * Добавление нового поля
const newProp = 'isAdmin';

// Добавить новое свойство с ключом newProp и значением true
user.newProp = true; // .newProp - это не обращение к переменной newProp, это создание нового свойства

// ! Если хотим взять значение из переменной, то необходимо использовать:

user[newProp] = true; // Добавить новое свойство с ключом isAdmin и значением true
user['test'] = 'tester'; // Добавить новое свойство с ключом test и значением 'tester'
user['likes cat'] = true; // Добавить новое свойство с ключом likes cat и значением true

// user.likes cat = true; // error, можно обратиться только через скобки


// * Перебор - for in

// а) Перебрать все ключи
for (const key in user) {
    console.log(user); // объект
    console.log(key); // ключ
    console.log(user[key]); // значение
    console.log(user.key); // ! значение ключа key из объекта user
}

// * Проверить существует ли ключ (свойство)

// Если свойства нет, а мы обращаемся к нему, то возвращается undefined
// (При этом свойство может быть, но значение его равно undefined), поэтому лучше использовать:

console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // true
console.log(user.hasOwnProperty('like bird')); // false



// * Копирование объекта * //

const man1 = {
    name: 'Pavel',
    address: {
        city: 'Moscow'
    }
};

const copyMan1 = man1;
copyMan1.name = 'Maks';
console.log(copyMan1); // name: "Maks"
console.log(man1); // name: "Maks"

// ! Сравнение возвращает true, только если объекты связаны по ссылки:
console.log(copyMan1 === man1); // true
console.log(copyMan1.address === man1.address); // true - вложенный объект тоже передаётся по ссылке


const man2 = {
    name: 'Maks',
    address: {
        city: 'Moscow'
    }
};

// Разные объекты даже с одинаковыми свойствами не равны
console.log(man1 === man2); // false - объекты не связаны по ссылке - значит объекты разные


// * === Дополнительная информация === * //

// ? Ключи могут называться, даже if, for, return

const testerObject = {
    name: 'noname',
    age: 33,
    isAdmin: false
};

// * Функция может возвращать новый объект
function createObj(obj) {
    const newObj = {}

    for (const key in obj) {
        newObj[key] = obj[key]; // Простое копирование
    }
    newObj['name'] = 'Kate'; // Изменение имени

    return newObj;
}
const newObject = createObj(testerObject);
console.log(testerObject);
console.log(newObject);


// * Функция может мутировать объект (изменять)
function changeObj(obj) {
    obj['name'] = 'Kate';
}
changeObj(testerObject);
console.log(testerObject);
