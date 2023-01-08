"use strict";

// Callback функции позволяет быть уверенным что один код не начнет свое 
// исполнение пока другой код не закончит свое исполнение

function first(){
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();

function learnJS (lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
// callback функции передаются в аргумент без круглых скобок

