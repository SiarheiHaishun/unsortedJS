
"use strict";

let num = 20;
function showMessage(text) {
    console.log(text);
    console.log(num);

}
// Замыкание функции - это сама функция со всеми внешними пере
// менными, которые ей доступны

showMessage("Hello World!");
console.log(num);

// Function declaration можно использовать вызов функции, а потом
// определять функцию. Точку с запятой в конце определения функции не ставят
console.log(calc(4,3));
console.log(calc(6,3));
console.log(calc(10,3));

function calc(a,b) {
    return (a +b);
}



function ret(){
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


// Function exspression функция создается до ее объявления.
// В конце ставится точка с запятой
const logger = function() {
    console.log("Hello");
};
logger();

// Стрелочные функции, переменные вписываются в месте определения.

const calc1 = (a,b) => { return a+b};
console.log(calc1(1,2));


const usdCur = 28,
eurCur = 40;
const discount = 0.91;

function convert(amount,curr){
    return curr * amount;
}

function promotion(result) {
    console.log(result*discount);
}
// convert(400, usdCur);
// convert(400, eurCur);
const res1 = convert(500, usdCur);
promotion(convert(500, usdCur));
promotion(res1);


function test() {
    for(let i = 0; i < 5 ; i++){
        console.log(i);
        if(i === 3) return
    }
    console.log('Done');
}
test();

function doNothing() {};
console.log(doNothing() === undefined);
// Функция всегда что-то возвращает, даже когда ее значение undefined
// любая функция которая не срдержит ретурн, будет возвращать undefined