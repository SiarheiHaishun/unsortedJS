'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// значения с полосой прокрутки
// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height);//383 333


// значения без полосы прокрутки
// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height);// 400 350


// ширина и высота прокрутки
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);// 383 1408



btn.addEventListener('click', () => {
    
// Чтобы весь текст в прокрутке выпадал при нажатии кнопки
    // box.style.height = box.scrollHeight + 'px';

// узнать сколько прокрученого контента не показано
    console.log(box.scrollTop);
});

// координаты элемента
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);
console.log(box.getBoundingClientRect().right);


const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);//block

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

window.scrollBy(400, 0);
window.scrollBy(400, 0);




