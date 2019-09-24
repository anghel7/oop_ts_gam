"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(_nombre, _color) {
        this.nombre = _nombre;
        this.color = _color;
    }
    Animal.prototype.mostrarColor = function () {
        console.log(this.color);
    };
    Animal.prototype.caminar = function () {
        console.log("esta caminando");
    };
    return Animal;
}());
exports.Animal = Animal;
var perro = new Animal("Firulais", "negro");
perro.mostrarColor();
perro.caminar();
console.log(perro.nombre);
console.log(perro.color);
