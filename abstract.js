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
    // private ancho: number;
    // private alto: number;
    // constructor(ancho: number, alto: number) {
    //     this.ancho = ancho;
    //     this.alto = alto;
    // }
    function FiguraGeometrica(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    FiguraGeometrica.prototype.getAncho = function () {
        return this.ancho;
    };
    FiguraGeometrica.prototype.setAncho = function (ancho) {
        this.ancho = ancho;
    };
    FiguraGeometrica.prototype.getAlto = function () {
        return this.alto;
    };
    FiguraGeometrica.prototype.setAlto = function (alto) {
        this.alto = alto;
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto) {
        return _super.call(this, ancho, alto) || this;
    }
    Rectangulo.prototype.getArea = function () {
        var area = this.getAncho() * this.getAlto();
        return area;
    };
    return Rectangulo;
}(FiguraGeometrica));
exports.Rectangulo = Rectangulo;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    // se refiere al triangulo rectangulo
    function Triangulo(ancho, alto) {
        return _super.call(this, ancho, alto) || this;
    }
    Triangulo.prototype.getArea = function () {
        var area = (this.getAncho() * this.getAlto()) / 2;
        return area;
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var rec1 = new Rectangulo(4, 5);
console.log("el area del rectangulo es ", rec1.getArea());
var tri1 = new Triangulo(4, 5);
console.log("El area del triangulo es ", tri1.getArea());
