

'use strict';

const box = document.getElementById('box');
console.log(box);//<div class="box" id="box"></div>

const btns = document.getElementsByTagName('button');
console.log(btns);//HTMLCollection(5) [button, button, button, button, button]

const btn2 = document.getElementsByTagName('button')[1];
console.log(btn2);//<button>2</button>

console.log(btns[2]);//<button>3</button>

const circles = document.getElementsByClassName('circle');

console.log(circles);//HTMLCollection(3) [div.circle, div.circle, div.circle]

// Вызов этими методами выводит псевдомассив, у которого нет методов массивов



// Новые методы получают псевдомассивы у которых есть метода forEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);//NodeList(3) [div.heart, div.heart, div.heart]

// hearts.forEach(item => {
//     console.log(item);
// });

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

// querySelector возвращает первый селектор из всех

const firstDiv = document.querySelector('div');
console.log(firstDiv);//<div class="box" id="box"></div>