// * ===== Object ===== * //

const objTest = {}
console.log(typeof objTest); // 'obejct'

const arr = [
    10,
    4,
    7,
    3
]
console.log(arr);


// * === Create (создание)
const user = {
    // Поля (Свойства) состоит из
    // key: value
    name: 'Bob',
    age: 33,
    isMonster: false,
    'test': 108,
    'likes cat': true

    // ключ имеет тип string, но когда мы создаём объект, мы можем не писать кавычки
}

console.log(user);

// * Действия над объектами
// CRUD - Create Read Update Delete

// * === Read (Прочитать значение)
console.log(user.age); // 33 +
console.log(user['age']); // 33

console.log(user.test); // 108 +
console.log(user['test']); // 108

// ? Вычисляемое свойство объекта
// ! (https://learn.javascript.ru/es-object#vychislyaemye-svoystva)
const query = 'isMonster';
console.log(user[query]); // false

console.log(user['likes cat']);

console.log(user.pupa); // undefined


// * === Update (мутирование)
user.name = 'Gale'
user['likes cat'] = false

// Если обращаемся к тому свйоству, которого нет и присваиваем значение, то мы создаём новое свойство

// * === Create (создание нового свойства)
user.isAdmin = true
user['likes catssss'] = true

console.log(user);


// * === delete (удаление)
delete user['likes catssss']
delete user.isAdmin

console.log(user);


// * === Как обратиться ко всем свойствам сразу? === * //

// for, for-of - массивы (forEach)
// for-in - для объектов


for (const el of arr) {
    console.log(arr); // array
    console.log(el); // value
    // ! Нету индекса, поэтому цикл только для чтения
}

for (const key in user) {
    // console.log(user); // object
    // console.log(key); // key
    // console.log(user.key); // ! Обращаемся к свойству ключ, которого не существует
    // console.log(user[key]); // value

    console.log(`${key}: ${user[key]}`);
    // В этому цикле можно мутировать и просто использовать для чтения
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
// * Благодаря объектам можно вернуть из функии более одного параметра

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
