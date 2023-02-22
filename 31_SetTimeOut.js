'use strict';
const btn = document.querySelector('.btn');
let timerId;
let i = 0;
// запуск таймера с занесенной функцией
// const timerId = setTimeout(logger, 2000);

// привязка таймера через обработчик событий
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
//     // setInterval запускает функцию через каждые 2 секунды 
// });

// чтобы остановить setTimeout используется clearInterval
// clearInterval(timerId);

// function logger (){
//     if( i === 3 ) {
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// рекурсивный вызов setTimeout

// let id = setTimeout( function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);



// function myAnimation() {
//     const elem = document.querySelector('.box');

//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if ( pos === 300) {
//             // отслеживание конца анимации
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame, 10);
//     function frame() {
//         if(pos === 300){
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);


function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;
   const id = setInterval(frame, 10);

   function frame() {
    if (pos === 300) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
   }
}
btn.addEventListener('click', myAnimation);