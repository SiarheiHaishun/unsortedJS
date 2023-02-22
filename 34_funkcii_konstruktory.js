'use strict';

// Функции по сути являются объектами

const num = new Number(3);
console.log(num);//[Number: 3]
const numf = new Function (3);
console.log(numf);//[Function: anonymous]

function User(name, id) {
    // первый name принадлежит каждому новому объекту, перед ним слово 
    // this, второй берется из аргумента, он присваивается свойству объекта
    
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);
// внутри ivan не функция, а объект
const alex = new User('Alex', 20);

console.log(ivan, alex);
ivan.hello();

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}
ivan.exit();

// Функции - конструкторы нужны для создания новых однотипных объектов

