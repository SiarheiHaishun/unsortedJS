'use strict';



const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];
// map это массив массивов
const map = new Map([
    [{paper: 400}, 8000]
]);



// map.set(shops[0], 5000)
// map.set(shops[1], 15000)
// map.set(shops[2], 25000)

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);

// console.log(map.get(shops[0]));//5000
// console.log(map.has(shops[0]));//true
// map.delete(key);//удаление из карты
// map.clear();//очищение карты
// map.size;//количество элементов внутри карты



// Перебор мапов


// по ключам
console.log(map.keys()); //перебор по ключам
/*Map(4) {
  { paper: 400 } => 8000,
  { rice: 500 } => 5000,
  { oil: 200 } => 15000,
  { bread: 50 } => 25000
}*/

for (let shop of map.keys()){
    console.log(shop);
/*
[Map Iterator] {
  { paper: 400 },
  { rice: 500 },
  { oil: 200 },
  { bread: 50 }
}
*/

}

const goods = [];
for(let shop of map.keys()){
    goods.push(Object.keys(shop))
}
console.log(goods);//[ [ 'paper' ], [ 'rice' ], [ 'oil' ], [ 'bread' ] ]

// по значениям

for (let price of map.values()){
    console.log(price);
    /*
    8000
    5000
    15000
    25000*/
}

for (let price of map.entries()){
    console.log(price);
    /*[ { paper: 400 }, 8000 ]
    [ { rice: 500 }, 5000 ]
    [ { oil: 200 }, 15000 ]
    [ { bread: 50 }, 25000 ]*/
}
// деструктуризация этого массива массивов

for (let [shop, price] of map.entries()) {
    console.log(shop, price);
    /*
    { paper: 400 } 8000
    { rice: 500 } 5000
    { oil: 200 } 15000
    { bread: 50 } 25000*/

}

// перебор forEach

map.forEach((value, key, map) => {
    console.log(key,value);
    /*
    { paper: 400 } 8000
    { rice: 500 } 5000
    { oil: 200 } 15000
    { bread: 50 } 25000

*/
});


const user = {
    4: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1999',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);
/*
Map(4) {
  '4' => 'Alex',
  'surname' => 'Smith',
  'birthday' => '20/04/1999',
  'showMyPublicData' => [Function: showMyPublicData]
}
*/

// чтобы из карты достать объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
/*
{
  '4': 'Alex',
  surname: 'Smith',
  birthday: '20/04/1999',
  showMyPublicData: [Function: showMyPublicData]
}
*/

// у карты ключи могут быть что угодно, у объектов только строки




