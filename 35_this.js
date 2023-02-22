'use strict';

// контекст вызова

// в функциях
function showThis(a,b) {
    console.log(this);//undefined
    function sum() {
        console.log(this)//undefined
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);//9
// в объектах
const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this);
    }
};
obj.sum(); //{ a: 20, b: 15, sum: [Function: sum] }
// в функциях-конструкторах
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello " + this.name);
//     }

// }
// let Ivan = new User ('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');//{ name: 'John' } JohnSmith
sayName.apply(user, ['Smith']);////{ name: 'John' } JohnSmith

function count(num) {
    return this * num;
}

const double = count.bind(2);//привязывает к this контекст 2

console.log(double(2));//4
console.log(double(13));//26


// 1) Обычная функция: this = window, но если стоит Use Strict = undefined
// 2) Контекст у методов объекта = сам объект. Контекст в функции 
// внутри метода будет undefined
// 3) This в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind.
 
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);//<button></button>
// Когда обработчик записан в классическом виде function() {}
// this будет тоже самое что event.target
    this.style.backgroundColor = 'red';
});

// У стрелочных функций нет контекста вызова, он берет его у своего родителя


const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj1.sayNumber();//{num: 5, sayNumber: ƒ}
// Стрелочная функция say обращается к родителю obj1
// и выводит контекст объект.

const double1 = a => a * 2;
console.log(double1(1234234));

// В обработчике событий стрелочная функция с this будет выдавать ошибку
// потому что родителем будет window, а в строгом режиме undefined
    
