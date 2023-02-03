"use strict";

//To String преобразование в строку

//1)
console.log(String(null));//null
console.log(typeof(String(null)));//string
console.log(String(4));//4
console.log(typeof(String(4)));//string

// 2)
console.log(5 + '');//5
console.log(typeof(5 + ''));//string

const num = 5;
console.log("https://vk.com/catalog/" + 5);//https://vk.com/catalog/5

const fontSize = 26 + 'px';//для передачи стилей преобразование в строку


// To Number

// 1)

console.log(typeof(Number('4')));//number

// 2)
// унарный плюс
console.log(typeof(+'4'));//number

// 30)

// parseInt. 10 - обозначает десятичную систему

console.log(typeof(parseInt('26px', 10)));//number
console.log(parseInt('26px', 10));//26

// let answ = +prompt("Hello!","");


// To Boolean

// 0, '', null, undefined, NaN; - всегда false

// 1)

let switcher = null;

if(switcher){
    console.log("Working...");  
}
// условие не сработало, потому что switcher = null = false


switcher = 1;

if(switcher){
    console.log("Working...");  //Working...
}

// 2)
console.log(Boolean("4"));//true
console.log(typeof(Boolean('4')));//boolean

//3)
console.log(Boolean(!!'2'));//true двойное отрицание
