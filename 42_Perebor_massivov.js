'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// фильтр имен меньше 5 символов
const shortNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(shortNames);

//map

const answers = ['IvAn ', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLocaleLowerCase());

console.log(result);

// let answers = ['IvAn ', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLocaleLowerCase());

// console.log(answers);



// every/some
// Возвращает true или false

// Проверка есть ли хоть одно число в массиве
const some = [4, 'duksgfb', 'eiurtyei'];
console.log(some.some(item=> typeof(item) === 'number'));

// метод every возвращает true если все элементы массива будут числами

console.log(some.every(item=> typeof(item) === 'number'));


//reduce

const arr = [4,5,1,3,2,6];

const res = arr.reduce((sum, current) => sum + current);
// на первой итерации sum = 0, потом складывается + 4
// sum = 4 затем + 5, и так пока все элементы массива не сложатся
console.log(res);//21

// если через запятую поставить цифру, то отсчет будет с нее
const res2 = arr.reduce((sum, current) => sum + current, 3);
console.log(res2);

const arr1 = ['apple', 'orange', 'tomato', 'plum'];
// складываем все элементы массива через запятую, чтобы получилась
// строка
const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);

console.log(res1);//apple, orange, tomato, plum

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
// фильтруем массивы только те где значение person
const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')//[ [ 'ivan', 'person' ], [ 'ann', 'person' ] ]
// получаем только имена из массивов
.map(item => item[0]); //[ 'ivan', 'ann' ]
console.log(newArr);



const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const newArrr = Object.entries(arr)
    .filter(function(item) {
        return item[1].rating >= 8;
    })
    .map(function(item) {
        return item[1];

    });
    return newArrr;
}
    
console.log(showGoodFilms(films));




function showListOfFilms(arr) {
    const newLine = films.map(function(item) {
        return item.name;
    
    })
    .reduce((sum, current) => `${sum}, ${current}`);
}

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);


console.log(tranformedArray);
function checkFilms(arr){
    return arr.every(film => film.id || film.id === 0 ? true : false);
}
console.log(checkFilms(films));

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {

    return data.filter(item => item.amount > 0)
.reduce((sum, item) => sum + item.amount, 0);
};

const getTotalIncomeAmount = (data) => {
if(data.some(item => item.amount < 0)) {
   return data.reduce((amount, item) => amount + item.amount, 0);
} else {
    getPositiveIncomeAmount();
}
};