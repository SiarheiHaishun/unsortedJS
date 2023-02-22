'use strict';

// В Rest операторе сначала пишутся переменные, которые будут обязательно,
// потом те, которых количество неизвестно через 3 точки
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'senior', 'middle', 'high', 'usage');//basic senior [ 'middle', 'high', 'usage' ]
// То есть Рест оператор собрал оставшиеся пришедшие переменные в массив
// То есть обратное действие Спред оператору, который имеет такой же синтаксис


// Параметры по умолчанию

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(2);