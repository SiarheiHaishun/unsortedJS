'use strict';

// Классы как и функции-конструкторы служат для создания новых объектов
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());//100
console.log(long.calcArea());//2000

// Принципы абстрактно-ориентированного программирования:
// 1.Абстракция, когда мы создаем классы в одном месте, а экземпляры объекты в 
// другом, то есть отделяем концепцию от ее экземпляра
// 2.Наследование, способность одного объекта или класса базироваться Наследованиедругом объекте или классе
 
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        // Конструкция super() вызывает конструктор родителя
        // то есть вызывает this.height = height;this.width = width;
        
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text }, Цвет: ${this.bgColor}` );
    }
}

const div = new ColoredRectangleWithText(25,10,'Hello World','red');

div.showMyProps();
console.log(div.calcArea());

