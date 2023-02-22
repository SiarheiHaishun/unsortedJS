'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // собираем настройку запроса
    // method - это метод который используется для запроса(GET и POST),
    // URL - путь по которому будет идти запрос
    // async - говорит что код будет асинхронным
    // login, pass - некоторые запросы мы можем делать только через логин
    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json'); 
    // теперь через http заголовок говорим что мы посылаем
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // отправляем запрос
    request.send();

    // прием ответа от сервера

    //status здесь код успешности или неуспешности запроса, например ошибка 404
    // statusText текст который идет после кода
    // response ответ который задал бекенд разработчик
    // readyState текущее состояние запроса


    // События
    // событие отслеживающее статус готовности нашего запроса readystatechange
    
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status == 200) {
    //         console.log(request.response); 
    //         // парсинг json ответа от сервера
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Что-то пошло не так.";
    //     }
    // });

    // творой метод load, выполняется когда страница загрузится
    request.addEventListener('load', () => {
        if(request.status == 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так.";
        }
    });
});