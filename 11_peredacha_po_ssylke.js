"use strict";

let a = 5,
    b = a;

b = b + 5;
console.log(b); //10
console.log(a); //5

// примитивы передаются по значению

const obj = {
    a: 5,
    b: 1
};
const copy = obj; // по ссылке

copy.a = 10;

console.log(copy); //{a: 10, b: 10}
console.log(obj); //{a: 10, b: 10}

// для дублирования объектов и массивов используются циклы

function copyy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// тестирование копирования объекта

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyy(numbers);
newNumbers.a = 12;
console.log(newNumbers); //{ a: 12, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); //{ a: 2, b: 5, c: { x: 7, y: 4 } }

// если в клоне поменять значение во вложенном объекте, то он изменится
// и в клонируемом объекте
newNumbers.c.x = 10;
console.log(newNumbers); //{ a: 12, b: 5, c: { x: 10, y: 4 } }
console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 } }

// это поверхностная копия когда во вложенном объекте есть объект

// Объединение объектов через Object.assign()

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //первым объектом куда помещаем, вторым - кого

//  Если в аргумент ввести пустой объект, просто создасться копия одного объекта

const clone = Object.assign({}, add);
console.log(clone); //{ d: 17, e: 20 }

clone.d = 20;

console.log(add); //{ d: 17, e: 20 }
console.log(clone); //{ d: 20, e: 20 }

// Метод slice() для клонирования массивов
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'hello krishna';
console.log(oldArray); //[ 'a', 'b', 'c' ]
console.log(newArray); //[ 'a', 'hello krishna', 'c' ]

// оператор spread() троеточие - вытаскивает все переменные

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

const num = [2,5,7];
log(...num); //оператор  spread выводит все элементы из массива по отдельности


const array = ["a", "b"];
const newArray1 = [...array];

const q = {
    one: 1,
    two: 2
};
const newQ = {...q};
console.log(newQ);