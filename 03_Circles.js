"use strict";

// Circles

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// for ( let i = 1; i < 10; i++) {
//     if (i===6){
//         break; 
//         // Цикл останавливается. Выведутся цифры от 1-5
//     } else if ( i=== 3){
//         continue;
//         // Число вылетает, но цикл не останавливается до конца
//     }
//     console.log (i); 
// };



// Цикл в цикле

// for (let i = 0; i < 3; i++) {
//     console.log(i+'i');
//     for (let j = 0; j < 3; j++) {
//         console.log(j+'j');
//         for (let k = 0; k < 3; k++) {
//             console.log(k+'k');
// } 
// }
// }

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for ( let i = 1; i < length; i++) {

    for ( let j = 0; j < i; j++){
        // Цикл сработсает только один раз потому что i = 0, а j =1
        result += "*";
    }

    result += '\n';
}


console.log(result);

// Метки 

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k===2) continue first; 
            console.log(`Third level: ${k}`);
} 
}
}
// Метка first: указывает циклу, что после continue нужно пропустить
// выполнение текущего участка кода и перейти на первый цикл,
// break указывает на прекращение итерации третьего цикла