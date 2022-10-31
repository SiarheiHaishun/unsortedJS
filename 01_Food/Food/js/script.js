// window.addEventListener('DOMContentLoaded', function() {

//     // Tabs
    

window.addEventListener('DOMContentLoaded', function (){
    let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {
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
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                    
                }
            })
        }
    });

    
    
    
    
    // Таймер

// 1.Нужна функция, которая будет устанавливать таймер. Получать элементы даты и что то с ними делать
// 2. Функция которая будет определять разницу между временем (дедлайн до конца акции). Нужно будет найти время у пользователя и ра
// зницу, которая будет отображаться на сайте.
// 3. Третья функция будет ответственна за обновления на сайте(часы, минуты, секунды...)

    // установка даты, конца таймера 
    // const deadline = '2022-11-9'

    // // Получаем разницу между датами
    // function getTimeRemaining(endTime) {
    //     let days, hours, minutes, seconds;
    //     const t = Date.parse((endTime)) - Date.parse(new Date());
    //     // создание переменных дней, часов, минут, секунда
    //     if (t <= 0) {
    //         days = 0,
    //         hours = 0,
    //         minutes = 0,
    //         seconds = 0;
    //     } else {
    //         days = Math.floor(t / (1000 * 60 * 60 * 24));
    //         hours = Math.floor( (t/(1000*60*60) % 24) ),
    //         minutes = Math.floor((t / 1000 /60) % 60),
    //         seconds = Math.floor( (t / 1000) % 60);
    //     }
          

    //         // функция возвращает обект из разницы миллисекунд,
    //         // заданных переменных даты
    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours':hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }
    // // подстановка нуля перед цифрами
    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // // функция, устанавливающая таймер на страницу
    // function setClock(selector, endtime){
    //     const  timer = document.querySelector(selector),
    //           days = timer.querySelector('#days'),
    //           hours = timer.querySelector('#hours'),
    //           minutes = timer.querySelector('#minutes'),
    //           seconds = timer.querySelector('#seconds'),
    //         //   запуск интервала 
    //           timeInterval = setInterval(updateClock, 1000);
    //     // функция устанавливающая обновитель времени

    //     // чтобы цифры выставлялись сразу, а не ждали секунду,
    //     // запускаем функцию updateClock() сразу
    //     updateClock()

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);
    //         // вписываем обновленные данные прямо на страницу
    //         // через команду innerHTML данные берутся из объекта который возвращается
    //         // через return в методе getTimeRemaining
    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);
           
    //         // условие прерывания интервала
    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    // setClock('.timer', deadline);

    
    const deadline = "2022-11-12";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date);

        const days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes =Math.floor ((t / 1000 / 60) % 60),
              seconds = Math.floor((t/ 1000) % 60);

              return {
                'total': t,
                'hours': hours,
                'days': days,
                'minutes': minutes,
                'seconds': seconds
              };
    }

    function getZero(num){
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              
              updateClock();

              function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days),
                hours.innerHTML = getZero(t.hours),
                minutes.innerHTML = getZero(t.minutes),
                seconds.innerHTML = getZero(t.seconds);

                if(t.total <= 0) {
                    clearInterval(timeInterval);
                }
              }
    }
    setClock('.timer', deadline);
               
    
});








