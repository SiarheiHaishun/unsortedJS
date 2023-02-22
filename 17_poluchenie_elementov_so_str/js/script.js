'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// тоже самое можно в виде css текста записать
box.style.cssText = 'background-color: red; width: 700px;';
// Так меняются инлайн стили в html-документе. Они самые главные,
// то есть перебивают CSS стили

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// Если нужно выполнить свойство для всех элементов массива 
// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item=> {
    item.style.backgroundColor = 'pink';
});


// Создание элементов на странице через скрипт
const div = document.createElement('div');
// Элемент создан, но он существует только внутри JS

// Создание текста без оболочки тега
// const text = document.createTextNode('Тут был я');
// не используется



// Для работы с созданными элементами добавляются классы

div.classList.add('black');

// Добавляем наш див в конец боди
document.body.append(div);
// Чтобы поместить созданный див в другой блок
document.querySelector('.wrapper').append(div);

// Чтобы вставить в начало блока метод prepend
document.querySelector('.black').prepend(div);

// Можно указать перед каким элементом или после какого элемента будет вставляться блок с помощью методов before и after
hearts[0].before(div);
hearts[0].after(div);

// Чтобы удалить элемент метод remove
circles[0].remove();

// Чтобы один элемент заменить другим метод replaceWith
hearts[0].replaceWith(circles[0]);
