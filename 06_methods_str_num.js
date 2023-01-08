"use strict";

const str = "test";

console.log(str.length);

// Получить третью букву в слове

console.log(str[2]);

// Метод высокого регистра
console.log(str.toUpperCase());

const fruit = "some fruit";

console.log(fruit.indexOf("fruit"));

// -1 значит что этого знака в строке нет
console.log(fruit.indexOf("q"));

const logg = "Hello World";

// метод slice() вырезает часть строки, первый аргумент буква
// с которой начать вырезать, второй аргумент
// плюс 1, где конец вырезаемой строки
console.log(logg.slice(6, 11));

// если стоит только один аргумент, строка будет
// вырезаться до конца с данной буквы

console.log(logg.slice(6));

// если отрицательные значения, вырезаться будут строки
// с конца строки


// метод substring() отличается от slice тем что 
// если аргумент отрицательный, он будет приравниваться к нулю
console.log(logg.substring(6, 11));


// метод substr() второй аргумент показывает сколько нужно вырезать 
// символов
console.log(logg.substr(6, 5));

// Округление до ближайшего целого
const num = 12.2
console.log(Math.round(num));


// Преобразование строки в число
const te = "12.2px";
console.log(parseInt(te));
// Преобразование вместе с дробью
console.log(parseFloat(te));
