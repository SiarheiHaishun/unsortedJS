'use strict';

// Один из способов вызова обработчиков событий - из html атрибутов
// <button onclick="alert('click')" id="btn">Нажми меня</button>
// Такой код практически не используется

// Второй способ - использование DOM дерева
const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };
// Такой способ тоже не используется, потому что второй вызов 
// этого обработчика будет перекрывать первый
// btn.onclick = function() {
//     alert('Second Click');
// };

// Третий способ - вызов обработчика событий

btn.addEventListener('click', () => {
    alert('click');
});
btn.addEventListener('click', () => {
    alert('second click');
});

btn.addEventListener('mouseenter', (event) => {
    console.log('Hi');
    console.log(event);
    console.log(event.target);
    
});
// В колбэк функцию первым аргументом всегда передается объект
// события event или просто e
// let i = 0;
// Создание функции и вызов ее в обработчике событий
const checkElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if( i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
}
btn.addEventListener('click', checkElement);
overlay.addEventListener('click', checkElement);
// Удаление обработчика событий
// btn.removeEventListener('click', deleteElement);

// Всплытие событий - когда обработчик сначала выполняется на вложенном
// объекте, потом поднимается к его родителю

// Отмена стандартного поведения браузера методом preventDefault
const link = document.querySelector('a');
link.addEventListener('click', (event) =>{
        event.preventDefault();

        console.log(event.target);
});


// Навесить обработчик событий на псевдомассив элементов через
// forEach
btns.forEach(item => {
    item.addEventListener('click', checkElement, {once: true});
});
// В обработчике третьим аргументом идет Опции, чтобы выполнить 
// функцию один раз {once: true}
