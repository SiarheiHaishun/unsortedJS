"use strict";

let number = 5;

function logNumber() {
    // let number = 4;debugger
    console.log(number);debugger
}

number = 6;
logNumber();debugger

// Каждый вызов функции это создание нового лексического окружения со своими специфичными для этого вызова локальными пара
// метрами и переменными

number = 10;
logNumber();debugger



function createCounter(){debugger
    let counter = 0;debugger

    const myfunction = function(){debugger
        counter = counter +1;debugger
        return counter;debugger
    }
    return myfunction;debugger
}
const increment = createCounter();debugger //Замыкание создается когда функция присваеватся переменной

const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);debugger//1 2 3

// Замыкание — это коллекция всех переменных из области видимости во время создания функции.

// Вы можете спросить, а все ли функции содержат замыкания? Даже те, которые создаются в глобальной области видимости?
//  Ответ будет положительным. Функции, которые создаётся в глобальной области видимости тоже создают замыкания. 
//  Но, так как эти функции были созданы в глобальной области видимости, то они имеют доступ ко всем переменным в глобальной области видимости.
//   В таком случае концепция замыканий не очень уместна.
let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d) //example partial application 7

// Переменная x является частью замыкания. Когда переменная addThree объявляется в локальной области, 
// то ей также присваивается описание функции и замыкание. В замыкании хранится переменная x.

// Поэтому теперь, когда addThree вызвана и исполнена, то она имеет доступ к переменой x из своего замыкания и 
// переменной n, которая была передана как аргумент. А значит теперь эта функция может вернуть сумму.

// Способ, с помощью которого я навсегда запомнил замыкания — это сравнение их с рюкзаком. 
// Когда функция создана и передаётся куда-либо, или возвращается из другой функции, то она 
// носит с собой рюкзак. А в этом рюкзаке хранятся все переменные, которые были в области видимости 
// во время создания этой функции.

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();