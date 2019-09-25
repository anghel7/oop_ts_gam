"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan() {
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago() {
    }
    return Trago;
}());
exports.Trago = Trago;
/**
 * Concepto: Los atributos son las características individuales
 * que diferencian un objeto de otro y determinan su apariencia,
 * estado u otras cualidades. Los atributos se guardan en variables
 * denominadas de instancia, y cada objeto particular puede tener
 * valores distintos para estas variables.
 */
/**
 * En programación orientada a objetos (POO), un constructor
 * es unasubrutina cuya misión es inicializar un objeto
 * de una clase con valodres predeterminados.
 */
/******************************************************/
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patio", 200);
console.log(bar1);
console.log(bar2);
