"use strict";
exports.__esModule = true;
var Cuenta = /** @class */ (function () {
    function Cuenta(saldo, movimientos) {
        this.saldo = saldo;
        this.movimientos = movimientos;
    }
    Cuenta.prototype.ingreso = function (monto) {
        this.saldo = this.saldo + monto;
        this.movimientos.push('ingreso de ' + monto + ' Bs');
    };
    Cuenta.prototype.reintegro = function (monto) {
        this.saldo = this.saldo + monto;
        this.movimientos.push('Reintegreo de ' + monto + ' Bs');
    };
    Cuenta.prototype.transferencia = function (monto) {
        this.saldo = this.saldo - monto;
        this.movimientos.push('Transferencia de ' + monto + ' Bs');
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
/**Ejemplo */
var cuentaBCP = new Cuenta(0, []);
console.log(cuentaBCP); //Creando mi cuenta
cuentaBCP.ingreso(100); //Depositado Juan
console.log(cuentaBCP);
cuentaBCP.ingreso(500); //Deposito Maria
console.log(cuentaBCP);
cuentaBCP.transferencia(70); //Compra curso Udemy
console.log(cuentaBCP);
cuentaBCP.reintegro(68); //Devolucion del curso
console.log(cuentaBCP);
