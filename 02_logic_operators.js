"use strict";

// логические операторы

// Оператор && дает первое ложное значение, если оно есть,
// Если все утверждения правильные, выражение проходит до конца и возвращается последнее
// значение

// Приоритет операторов:
// Сначала ===, потом &&, потом ||

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log("я сыт");
}

console.log((hamburger && fries));

// результат логических операций - это какое то булевое значение

const hamburger1 = 3;
const fries1 = null;
const cola = 3;
const nuggets = 2

console.log(hamburger1 === 3 && cola && fries1);
// так как везде true код отработает и выведет в консоль 100,
// числовой результат последнего правдивого утверждения

console.log(1 && 0);
// 1 это true, 0 это всегда false, потому код запнулся на втором
// утверждении и вывел последнее число в консоль( это 0)

console.log(1 && 5);
// 1 и 5 это true, редактор выводит последнее что было в выражении, это 5

console.log(null && 5);
// null-false потому вернулось сразу первое неправдивое выражение - null 

console.log(0 && 'bjhvbjhvjhv');
// 0 - false потому выводится сразу 0




if (hamburger1 === 3 && fries1) {
    console.log("вс сыты");
} else {
    console.log('we are coming out');
}
// false && true

// Оператор или ||

if (hamburger1 || cola || fries) {
    console.log('all precios');
} else {
    console.log('we re going');
}

console.log(1000 || 0 || 'qwe' || null || 5);
// Выведется 1000, потому что 1000 уже правдивое значениеи дальше 
// код не идет и выводит верное утверждение, на котором закончило
// работу

console.log(0 || null || NaN);
// Если все утверждения не верные, работа кода заканчивается
// на последнем неверном утверждении - NaN


let jhonReport,
    alexReport,
    samReport,
    mariaReport = 'done';
console.log(jhonReport || alexReport || samReport || mariaReport);
// Вернется  'done' даже не смотря на то что mariaReport стоит
// в самом конце списка


// комбинация операторов


const hamburger2 = 3;
const fries2 =3;
const cola2 = 0;
const nuggets2 = 2

if (hamburger2 ===3 && cola2 ===2 || fries2 === 3 && nuggets2) {
    console.log('all precios');
} else {
    console.log('we re going');
}

// Пример работы вывода в логических выражениях
console.log(hamburger2 === 3 && cola2 ===2 || fries === 3 && nuggets);