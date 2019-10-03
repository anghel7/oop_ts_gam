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
var Persona = /** @class */ (function () {
    function Persona(ci, nombre, apellido, direccion) {
        this.ci = ci;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
    Persona.prototype.comer = function () {
        console.log("esta comiendo");
    };
    Persona.prototype.dormir = function () {
        console.log("esta durmiendo");
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
exports.Persona = Persona;
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(ci, nombre, apellido, direccion, codigo) {
        var _this = _super.call(this, ci, nombre, apellido, direccion) || this;
        _this.codigo = codigo;
        return _this;
    }
    Estudiante.prototype.estudiar = function () {
        console.log("estoy estudiando");
    };
    return Estudiante;
}(Persona));
exports.Estudiante = Estudiante;
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(ci, nombre, apellido, direccion, materias) {
        var _this = _super.call(this, ci, nombre, apellido, direccion) || this;
        _this.materias = materias;
        return _this;
    }
    Docente.prototype.enseñar = function () {
        console.log("el docente esta enseñando");
    };
    return Docente;
}(Persona));
exports.Docente = Docente;
var Administrativo = /** @class */ (function (_super) {
    __extends(Administrativo, _super);
    function Administrativo(ci, nombre, apellido, direccion, cargo, sueldo) {
        var _this = _super.call(this, ci, nombre, apellido, direccion) || this;
        _this.cargo = cargo;
        _this.sueldo = sueldo;
        return _this;
    }
    Administrativo.prototype.cobrarSueldo = function (sueldo) {
        this.sueldo = this.sueldo + sueldo;
        console.log(this.getNombre() + " cobro " + sueldo);
    };
    Administrativo.prototype.getSueldo = function () {
        return this.getNombre() + " tiene " + this.sueldo + " Bs";
    };
    Administrativo.prototype.comproXCosa = function (costo) {
        this.sueldo -= costo;
    };
    return Administrativo;
}(Persona));
exports.Administrativo = Administrativo;
// let rene: Estudiante = new Estudiante("123", "Rene", "Antezana", "calle picaflor", 321);
// rene.estudiar();
// rene.comer();
// rene.dormir();
var erick = new Administrativo("456", "Erick", "Fernandez", "calle de los milagros", "Seguridad", 1000);
console.log(erick.getSueldo());
erick.cobrarSueldo(3000);
console.log(erick.getSueldo());
erick.cobrarSueldo(2000);
console.log(erick.getSueldo());
erick.comproXCosa(2000);
console.log(erick.getSueldo());
