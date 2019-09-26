"use strict";
exports.__esModule = true;
/**
 * Clases
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangle.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangle.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setHeight = function (h) {
        this.height = h;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.getArea = function () {
        var area = this.height * this.width;
        return area;
    };
    Rectangle.prototype.desplazar = function (posXnew, posYnew) {
        this.posX = posXnew;
        this.posY = posYnew;
    };
    Rectangle.prototype.getPerimeter = function () {
        var perimeter = 2 * this.height + 2 * this.width;
        return perimeter;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    return Circle;
}());
exports.Circle = Circle;
/**
 * Pruebas
 */
var rectangle1 = new Rectangle(5, 5, 10, 15);
console.log(rectangle1);
rectangle1.setHeight(10);
rectangle1.setWidth(20);
console.log(rectangle1);
rectangle1.desplazar(100, 100);
console.log(rectangle1);
var areaRectangle1 = rectangle1.getArea();
console.log(areaRectangle1);
var perimeterRectangle1 = rectangle1.getPerimeter();
console.log(perimeterRectangle1);
