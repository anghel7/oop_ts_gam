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
    return Circulo;
}(FiguraGeometrica));
exports.Circulo = Circulo;
var Cudrado = /** @class */ (function (_super) {
    __extends(Cudrado, _super);
    function Cudrado(nombre, posX, posY, lado) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.lado = lado;
        return _this;
    }
    return Cudrado;
}(FiguraGeometrica));
exports.Cudrado = Cudrado;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
var triangulo1 = new Triangulo("Escaleno", 10, 10, 20, 35);
var figuraGeometrica1 = new Circulo("Circulo1", 0, 0, 10);
var figuraGeometrica2 = new Cudrado("Cuadrdo1", 5, 5, 70);
var figuraGeometrica3 = new Rectangulo(17, 80);
//let cuadradox:Cudrado =  new FiguraGeometrica(); no se puede
var resultado = figuraGeometrica1 instanceof Cudrado;
console.log(resultado);
