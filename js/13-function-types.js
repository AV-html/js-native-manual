// * ===== Function types ===== * //

// * Function Decalration
console.log(sum1(3, 4)); // 7

function sum1(a, b) {
    return a + b;
}

console.log(sum1(6, 2)); // 8


// * Function Expression
// console.log(sum2(3, 4)); // ! ReferenceError

const sum2 = function (a, b) {
    return a + b;
};

console.log(sum2(6, 2)); // 8


// * Arrow Function
// console.log(sum3(3, 4)); // ! ReferenceError

const sum3 = (a, b) => {
    return a + b;
};

console.log(sum3(6, 2)); // 8


// const addTen = a => { return a + 10 };
const addTen = a => a + 10;

// Examples:
// 1)
const checkMoreTen = num => num > 10;

// 2)
const getGender = text => text === 'm' ? 'male' : 'female';


// * arguments & rest operator * //


// * arguments
const summator1 = function () {
    // console.log(arguments);
    // let sum = 0;
    // for (const key in arguments) {
    //     sum += arguments[key];
    // }
    // return sum;

    console.log(Array.from(arguments));
    let sum = 0;
    for (const num of Array.from(arguments)) {
        sum += num;
    }
    return sum;
}
console.log(summator1(3, 7, 10));


// ! arguments нет у стрелочной функции
// * rest operator (работает во всех функциях)
const summator2 = (...numbers) => {
    // console.log(arguments); // ! ReferenceError

    // * const numbers = [...numbers];
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(summator2(3, 7, 10));
