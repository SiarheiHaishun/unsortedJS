'use strict';
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// Перенос строки это текстовая нода text
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// Для получения именно первого элемента
// console.log(document.body.firstElementChild);

// Получение родителей
// console.log(document.querySelector('#current').parentNode); 
// console.log(document.querySelector('#current').parentElement); 
// console.log(document.querySelector('#current').parentNode.parentNode); 
// Так можно получить верхнего родителя родителя


// Дата атрибуты
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// Получаются текстовые ноды переноса строки

// Для получения следующего элемента
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// Для того чтобы перебирать эти псевдомассивы forEach не подойдет,
// они перебираются через for of
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }

    console.log(node);
}
// Избавление от текстовых нод переносов