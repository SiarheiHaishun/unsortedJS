'use strict';

const arr = ['Oleg', 'Sveta', 'Oleg', 'Ivan', 'Sergey'];

const set = new Set(arr);

console.log(set);//Set(5) { 1, 2, 3, 5, 6 }

// добавление в карту
set.add('Sveta')
    .add('Dima');

console.log(set);//Set(5) { 'Oleg', 'Sveta', 'Ivan', 'Sergey', 'Dima' }
console.log(typeof(set))//object

// Set - карта уникальных значений

// set.delete(value);//удаление из карты
// set.has(value);//проверка на содержание
// set.clear();// очистка
console.log(set.size);//5

// перебор Set

for (let value of set) console.log(value)
/*
Oleg
Sveta
Ivan
Sergey
Dima
*/

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
    /*
   Oleg Oleg
Sveta Sveta
Ivan Ivan
Sergey Sergey
Dima Dima */
});

console.log(set.values());//[Set Iterator] { 'Oleg', 'Sveta', 'Ivan', 'Sergey', 'Dima' }
console.log( set.entries());
/*
[Set Entries] {
  [ 'Oleg', 'Oleg' ],
  [ 'Sveta', 'Sveta' ],
  [ 'Ivan', 'Ivan' ],
  [ 'Sergey', 'Sergey' ],
  [ 'Dima', 'Dima' ]
}
*/

// фильтр
function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(arr));