'use strict';
// window.addEventListener('DOMContentLoaded', () => {

//   // Написание табов

//   // получаем переменную с табами
//   const tabs = document.querySelectorAll('.tabheader__item'),
//   // получаем переменную псевдомассив с контентом
//         tabsContent = document.querySelectorAll('.tabcontent'),
//   //получаем блок родитель табов   
//         tabsParent = document.querySelectorAll('.tabheader__items');
        

// // Чтобы создать табы нам сначала нужна функция, которая будет скрывать остальные табы, кроме активного
// // во-вторых - нужно показать действущий там,
// // в-третьих - повесить обработчики событий на меню, которое будет манипулировать этими функциями

// // 1) Скрытие всех ненужных табов

//   function hideTabContent () {
//       // так как это псевдомассив мы его должны перебрать
//       tabsContent.forEach(item => {
//           item.style.display = 'none';

//       });
//       // так же нужно убрать классы активности у всех остальных табов
//       tabs.forEach(tab => {
//           tab.classList.remove('tabheader__item_active')
//       });
//   }

// // 2) Создаем функцию, которая будет показывать нам табы

//    function showTabContent (i=0) {
//       // номер который нужно показать передается как аргумент i в функцию
//       tabsContent[i].style.display = 'block';
//       tabs[i].classList.add('tabheader__item_active');
//    }

//   //  Когда мы заходим на сайт нужно скрыть все табы и показать только первый, активный
//   hideTabContent();
//   // так как я хочу показать 1-ый слайд в аргумент передается 0. Условие по умолчанию i = 0,
//   // если функция без аргумента будет 0
//   showTabContent(i);

//   // 3) Создание обработчика событий и делегирование на блок родитель табов

//    tabsParent.addEventListener('click', (event) => {
//        const target = event.target;
//       //  сначала проверка чтомы попали именно в таб, а не в пустое место родителя
//       if (target && target.classList.contains('tabheader__item')){
//           // когда мы тыкнули в таб, нужно определить его номер, и по этому номеру вызвать функцию showTabContent
//           // Мы определяем если таб содержащийся в псевдомассиве табов совпадает с табом который ткнул пользователь, 
//           // мы его показываем
//           tabs.forEach((item, i) => {
//                   if (target == item) {
//                       hideTabContent();
//                       showTabContent(i);


//                   }
//           });


//       }
//    });

        

// });

window.addEventListener('DOMContentLoaded', function() {

  // Tabs
  
let tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent'),
  tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
      tabsContent.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
      });
      tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
      });
  }

  function showTabContent( i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function(event) {
      const target = event.target;
      if ( target && target.classList.contains('tabheader__item')) {
          tabs.forEach((item, i) => {
              if (target == item) {
                  hideTabContent();
                   showTabContent(i);
              }
          })
      }
  });
});