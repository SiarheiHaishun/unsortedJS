'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// метод search

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;

// в методе тест мы в аргумент вставляем строку в которой должны проверить
// есть ли в ней что-то похожее на данный паттерн
// console.log(reg.test(ans));//true
// console.log(ans.match(reg));

const str = 'My name is r2D2';
// Вырезать R2D2
console.log(str.match(/\w\d\w\d/i));

// flags
// i вне зависимости от регистра
// g несколько вхождений
// m многострочный режим
// \d мы ищем все цифры
// \w мы ищем все слова
// \s мы ищем все пробелы

// \D не числа
// \W не буквы
console.log(str.match(/\D/ig));
//[
//     'M', 'y', ' ', 'n',
//     'a', 'm', 'e', ' ',
//     'i', 's', ' ', 'r',
//     'D'
//   ]


// Методы регулярных выражений search, match, test

// console.log(ans.search(reg));
// console.log(ans.match(reg));//['n', index: 1, input: 'dnfngnng', groups: undefined]

// console.log(ans.match(reg).input);


// const pass = prompt('Password');
// // регулярное выражение внутри переменной
// console.log(pass.replace(/./g, "*"));//****
// в методе replace первый аргумент что мы меняем, второй - на что
// мы меняем.
// . - это значит все символы
// \. - просто симол точки console.log(pass.replace(/\./g, "*"));//выопио***

// console.log('12-34-56'.replace(/-/g, ":"));
