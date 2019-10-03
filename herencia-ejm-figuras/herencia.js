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
    Triangulo.prototype.getPrincipalInfo = function () {
        return "\n        Soy una figura rebelde:\n        My nombre es: " + this.nombre + ".        \n        My altura es: " + this.altura + ".\n        My base es: " + this.base + ".";
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var TrianguloEscaleno = /** @class */ (function (_super) {
    __extends(TrianguloEscaleno, _super);
    function TrianguloEscaleno(nombre, posX, posY, base, altura, frase) {
        var _this = _super.call(this, nombre, posX, posY, base, altura) || this;
        _this.frase = frase;
        return _this;
    }
    TrianguloEscaleno.prototype.getPrincipalInfo = function () {
        return "\n        Soy Anarquista:\n        My nombre es: No es tu problema.\n        My frase es: " + this.frase;
    };
    return TrianguloEscaleno;
}(Triangulo));
exports.TrianguloEscaleno = TrianguloEscaleno;
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
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(nombre, posX, posY, lado) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.lado = lado;
        return _this;
    }
    return Cuadrado;
}(FiguraGeometrica));
exports.Cuadrado = Cuadrado;
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
var figuraGeometrica2 = new Cuadrado("Cuadrdo1", 5, 5, 70);
//let figuraGeometrica3: Rectangulo = new Rectangulo(17, 80);
//let cuadradox:Cudrado =  new FiguraGeometrica(); no se puede
var figuraGeometrica4 = new Triangulo('Señor Triangulo para ustedes.', 7, 7, 10, 16);
var figuraGeometrica5 = new TrianguloEscaleno('El Exk4l3n0', -3, -4, 100, 1000, 'Yo no fui.');
var resultado = figuraGeometrica1 instanceof FiguraGeometrica;
console.log(figuraGeometrica2.getPrincipalInfo());
console.log(figuraGeometrica4.getPrincipalInfo());
console.log(figuraGeometrica5.getPrincipalInfo());
