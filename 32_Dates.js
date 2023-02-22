'use strict';

const now = new Date();
console.log(now);//2022-10-29T13:07:19.097Z

// const now = new Date('2022-10-29');
// console.log(now);//2022-10-29T00:00:00.000Z

// const now = new Date(2022, 10, 29, 20);
// console.log(now);//2022-11-29T17:00:00.000Z месяцы считаются с нуля, потому 11, 17 стоит потому что часовой пояс +3

// const now = new Date(0);
// console.log(now);//1970-01-01T00:00:00.000Z дата начала отсчета

// const now = new Date(-99999999999);
// console.log(now);//1966-10-31T14:13:20.001Z




// Получение компонентов даты

console.log(now.getFullYear());//2022
console.log(now.getMonth());//9 это 10ый месяц
console.log(now.getDate());//29 день месяца
console.log(now.getHours());//16
console.log(now.getMinutes());//41
console.log(now.getSeconds());//29
console.log(now.getMilliseconds());//913
console.log(now.getDay());//6 день недели
console.log(now.getUTCHours());//13 минус 3 часовых пояса, по гринвичу
console.log(now.getTimezoneOffset());//-180 разница между моим временем и UTC вминутах

console.log(now.getTime());//1667051282393 количество миллисекунд которые прошли



// Установка даты

console.log(now.setHours(18));
console.log(now);



let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // ** значок возведения в степень
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);



