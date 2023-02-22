'use strict';

// const person = {
//     name: "Alex",
//     age: 25,

//     get userAge() {
//         return this.age;
//     },
//     set userAge(value) {
//         this.age = value;
//     }
// };

// console.log(person.userAge = 30);
// console.log(person.userAge);



// Инкапсуляция

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
   
    #surname = 'Petrychenko';

    say () {
        console.log(`Имя пользователя: ${this.name } ${this.#surname}, возраст: ${this._age}`);
    }

   get age() {
    return this._age;
   }
   set age(age) {
    if(typeof age === 'number' && age > 0 && age < 110) {
        this._age = age;
    } else{
        console.log('Недопустимое значение');
    }
   }
}

const ivan = new User('Ivan', 27);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());


ivan.say();
console.log(ivan.surname);







