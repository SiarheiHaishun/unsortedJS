"use strict";

const arr = [1, 2, 3, 4, 5, 7];

// удаление последнего элемента из массива
arr.pop();
console.log(arr);

// добавление элемента в конец массива
arr.push(19);

console.log(arr);

// преебор массива

for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// for of работает только с массивами, псевдомассивами  и строками
// в цикл for of можно использовать break и continue
for( let value of arr){
    console.log(value);
}

// Свойство массива length равняется индексу последнего числа в массиве плюс 1

console.log(arr.length);

// arr[23] = 0;
// console.log(arr);



// метод forEach()

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// метод split

const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// объединение элементов массива в строку через разделитель

console.log(products.join('; '))

// сортировка массива

const trix = [2,4,1,20,13,43,21];
trix.sort();
console.log(trix );
// числа сортируются как строки, для правильной сортировки чисел
// нужно использовать компаратор

trix.sort(compareNum);
console.log(trix);

function compareNum(a, b) {
    return a - b;
}

// Псевдомассивы отличаются от обычных массивов тем что у них нет 
// методов обычных массивов типа pop, for each, push