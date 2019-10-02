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
var Disco = /** @class */ (function () {
    function Disco(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    return Disco;
}());
exports.Disco = Disco;
var CD = /** @class */ (function (_super) {
    __extends(CD, _super);
    function CD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CD;
}(Disco));
exports.CD = CD;
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DVD;
}(Disco));
exports.DVD = DVD;
var BluRay = /** @class */ (function (_super) {
    __extends(BluRay, _super);
    function BluRay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BluRay;
}(Disco));
exports.BluRay = BluRay;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cliente1 = new Cliente("Aleida", 15);
var cliente2 = new Cliente("Erick", 60);
var cliente3 = new Cliente("Noelia", 18);
var dumbo = new DVD("Dumbo", 5, "infantil");
var rambo = new BluRay("Rambo", 10, "accion");
var hachiko = new CD("Hachiko", 3, "familiar");
var pinocho = new CD("pinocho", 3, "familiar");
var Venta = /** @class */ (function () {
    function Venta(producto, cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    Venta.prototype.montoDeLaVenta = function () {
        var monto = this.producto.precio;
        console.log(monto);
        return monto;
    };
    return Venta;
}());
exports.Venta = Venta;
var venta1 = new Venta(dumbo, cliente1);
var venta2 = new Venta(rambo, cliente2);
var venta3 = new Venta(hachiko, cliente3);
var venta4 = new Venta(pinocho, cliente1);
var Tienda = /** @class */ (function () {
    function Tienda(nombre) {
        this.nombreTienda = nombre;
        this.ventas = [];
    }
    Tienda.prototype.realizarVenta = function (venta) {
        this.ventas.push(venta);
    };
    Tienda.prototype.calcularVentaCDs = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof CD) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calcularVentaDVDs = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof DVD) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calcularVentaBluRays = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof BluRay) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.totalVentas = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            suma += prod.precio;
        }
        return suma;
    };
    return Tienda;
}());
exports.Tienda = Tienda;
var tienda1 = new Tienda("Center");
tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
var ingresosCDs = tienda1.calcularVentaCDs();
console.log("los ingresos de la venta de CDs es " + ingresosCDs + "Bs");
var ingresosDVDs = tienda1.calcularVentaDVDs();
console.log("los ingresos de la venta de DVDs es " + ingresosDVDs + "Bs");
var ingresosBluRays = tienda1.calcularVentaBluRays();
console.log("los ingresos de la venta de BluRays es " + ingresosBluRays + "Bs");
console.log("Total Ventas ", tienda1.totalVentas());
