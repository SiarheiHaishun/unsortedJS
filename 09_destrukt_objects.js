"use strict";

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
};
console.log(options["colors"]["border"]);

// удаление из объекта

// delete options.name;

// console.log(options);

// перебор в объекте for in

    let counter = 0;
for(let key in options){
    if( typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
   
}
console.log(counter); //5

// Метод узнать сколько свойств в объекте

console.log(Object.keys(options));//[ 'name', 'width', 'height', 'colors' ]

// Создается массив из ключей объекта

// Узнать длину этого массива
console.log(Object.keys(options).length);//4

// Функция в объекте

options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
console.log(options);
options.makeTest();

// Деструктуризация объекта

 const {border, background} = options.colors;
 console.log(border);

 let options1 = {
    title1: "Меню",
    width: 100,
    height: 200
  };
  
  let {width: w, height: h, title1} = options1;
  
  console.log(title1);  // Меню
  console.log(w);      // 100
  console.log(h);      // 200

  

//   Можно и сочетать одновременно двоеточие и равенство:

let options3 = {
    title3: "Меню"
  };
  
  let {width3:w3=100, height3:h3=200, title3} = options3;
  
  console.log(title3);  // Меню
  console.log(w3);      // 100
  console.log(h3);      // 200

//   если в объекте больше значений, чем переменных

let options4 = {
    title4: "Меню",
    width4: 100,
    height4: 200
  };
  
  let {title4, ...size} = options4;
  console.log(title4);
  console.log(size);
  
  // title = "Меню"
  // size = { width: 100, height: 200} (остаток)

 let [, , title] = "Юлий Цезарь Император Рима".split(" ");
 console.log(title);

 let [fristName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(' ');
console.log(lastName);
//  Значение по умолчанию
let [fristName1="Guest", lastName1="fred"] = [];
console.log(fristName1);

// Функция в значении по умолчанию
function defaultLastName() {
    return Date.now() + '-visitor';
  }
  
  // lastName получит значение, соответствующее текущей дате:
  let [firstName, lastName2=defaultLastName()] = ["Вася"];
  
  console.log(firstName, lastName2); // Вася
  