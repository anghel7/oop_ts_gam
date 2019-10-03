"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nombre, posX, posY) {
        this.nombre = nombre;
        this.posX = posX;
        this.posY = posY;
    }
    FiguraGeometrica.prototype.getPrincipalInfo = function () {
        return "Nombre de la figura: " + this.nombre + ".\n                Posicion en el eje X: " + this.posX + ".\n                Posicion en el eje Y: " + this.posY + ".";
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(nombre, posX, posY, base, altura) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        return "\n                        *\n                       ***\n                      *****\n                     ********";
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(nombre, posX, posY, radio) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.radio = radio;
        return _this;
    }
    /**
     * dibujar
     */
    Circulo.prototype.dibujar = function () {
        return "\n                ***\n               *   *\n                *** ";
    };
    return Circulo;
}(FiguraGeometrica));
exports.Circulo = Circulo;
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(nombre, posX, posY, lado) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.lado = lado;
        return _this;
    }
    /**
     * dibujar
     * */
    Cuadrado.prototype.dibujar = function () {
        return "\n                _____________________\n               |                     |\n               |                     |\n               |                     |\n               |                     |\n               |                     |\n               |                     |\n               |_____________________|";
    };
    return Cuadrado;
}(FiguraGeometrica));
exports.Cuadrado = Cuadrado;
//let figuraGeometrica: FiguraGeometrica = new FiguraGeometrica("figura", 3, 3);
var figuraGeometrica1 = new Triangulo("Triangulo Esc", 2, 2, 5, 8);
var figuraGeometrica2 = new Circulo("Circulo", 3, 3, 5);
var figuraGeometrica3 = new Cuadrado("Cuadrado", 0, 0, 20);
console.log(figuraGeometrica1.dibujar());
console.log(figuraGeometrica2.dibujar());
console.log(figuraGeometrica3.dibujar());
