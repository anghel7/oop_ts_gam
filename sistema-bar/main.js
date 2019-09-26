"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    /**Cambiar el valor de un atributo
    //creo el metodo set que recibe como parametro
    el nuevo valor que deseo actualizar*/
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
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
bar1.setNombre("El pueblito");
//bar1.nombre = "pueblito"; forma inconrrecta actualizar un atributo
console.log(bar1);
//console.log(bar1.nombre);//forma incorrecta de perdir valor
console.log(bar1.getNombre());
