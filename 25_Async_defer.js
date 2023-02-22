'use strict';
// В HTML в скрипт ставится атрибут defer

const p = document.querySelectorAll('p');

console.log(p);

// Атрибут defer говорит браузеру загружать скрипт в фоновом режиме
// Атрибут async также загружается в фоновом режиме, но он 
// не ждет пока другие скрипты загрузятся

function loadScript (src) {
    const script = document.createElement('script');
script.src = src;
script.async = "false";
document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");