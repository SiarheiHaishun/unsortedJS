"use strict";

if (4 == 9){
    console.log('ok!');
} else {
    console.log('no!');
}

const num = 50;

if (num < 49){
    console.log('Error')
} else if (num > 100){
    console.log( 'Too mutch')
} else {
    console.log('Ok');
}

(num===50) ? console.log('Ok') : console.log('Error');

switch(num){
    case 49:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');  
        break;
}