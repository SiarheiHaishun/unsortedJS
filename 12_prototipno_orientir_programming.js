"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello, Sergey. Thx for creating me!");
    }
};

// const john = {
//     health: 100
// };
// // Старый формат прототипирования
// john.__proto__ = soldier;
// console.log(john.armor);
// john.sayHello();

// // Новая запись. Первым аргументом кому прототип, вторым - от какого объекта.
// Object.setPrototypeOf(john, soldier);

// В практике используется создание прототипа во время создания объекта

const john = Object.create(soldier);
john.sayHello();