'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

for (const key in user){
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];

Array.prototype.someMethod = function() {};

for (const key in arr){
    console.log(arr[key]);
}
const str = 'string';

for (const key in str){
    console.log(str[key]);
}

// метод for in перебирает не обязательно по порядку, поэтому его 
// не используют в массивах и строках

// Итерируемый элемент - тот который мы можем использовать for of
// Объекты не итерируемые элементы

// Итератор это метод, который возвращает объект с методом некст

// Когда нужно перебрать объект, итератор нужно создать вручную

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello!');
    }

}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            // перебор по 500 единиц
            if (this.current < this.last){
                this.current += 500;
                return {done: false, value: this.current};
            } else {
               return {done: true};
            }
        }
    }
}

// for (let res of salaries) {
//     console.log(res);
// }

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());



