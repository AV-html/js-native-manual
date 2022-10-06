// Оператор in возвращает true, если свойство содержится в указанном объекте или в его цепочке прототипов.
// console.log('name' in obj); // true
// console.log('toString' in obj); // true - ищет в прототипе



// Скопировать объект: Object.assign() - склекивает объекты

// Неглубокое копирование
console.log('Неглубокое копирование');
const newCopyMan1 = Object.assign({}, man1);
console.log(newCopyMan1 === man1); // false
console.log(newCopyMan1.address === man1.address); // true

// Неглубокое копирование
// function deepCopyObject(obj) {
//     const copyObj = {};

//     for (const key in obj) {
//         copyObj[key] = obj[key];
//     }

//     return copyObj;
// }


// * ===== Глубокое копирование ===== * //
// Через рекурсию или циклы

function deepCopyObject(obj) {
    const copyObj = {};

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            copyObj[key] = deepCopyObject(obj[key]);
        } else {
            copyObj[key] = obj[key]; // Копирование примитивов
        }
    }
    return copyObj;
}


const testObj = {
    name: 'Pavel',
    test: null,
    address: {
        city: 'Moscow',
        house: {
            numberHouse: 12,
            numberFlat: 9,
            arr: [1, 2, 3]
        }
    }
};



const copy = {
    name: 'Pavel',
    address: {
        city: 'Moscow',
    }
};

console.log('Глубокое копирование')
const newCopyObj = deepCopyObject(testObj)
console.log(newCopyObj === testObj);
console.log(newCopyObj.address === testObj.address);
console.log(newCopyObj.address.house === testObj.address.house);
console.log(newCopyObj.address.house.arr === testObj.address.house.arr);

console.log(newCopyObj);

