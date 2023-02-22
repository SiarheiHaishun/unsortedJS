'use strict';

const person = {
    name: 'Alex',
    tel: '+375335553322'
};
console.log(JSON.stringify(person));//{"name":"Alex","tel":"+375335553322"}
// завернуть объкт для отправки на сервер
// Все сущности записаны в двойные кавычки

console.log(JSON.parse(JSON.stringify(person)));//{ name: 'Alex', tel: '+375335553322' }

const personTwo = {
    name: 'Alex',
    tel: '+375335553322',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// Глубокое клонирование
const clone = JSON.parse(JSON.stringify(personTwo));
clone.parents.mom = 'Ann';
console.log(personTwo);
console.log(clone);
