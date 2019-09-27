export class Cuenta {
    private saldo: number;
    private movimientos: string[];

    constructor(saldo: number, movimientos: string[]) {
        this.saldo = saldo;
        this.movimientos = movimientos;
    }

    public ingreso(monto: number): void {
        this.saldo = this.saldo + monto;
        this.movimientos.push('ingreso de ' + monto + ' Bs');

    }
    public reintegro(monto: number): void {
        this.saldo = this.saldo + monto;
        this.movimientos.push('Reintegreo de ' + monto + ' Bs');
    }
    public transferencia(monto: number): void {
        this.saldo = this.saldo - monto;
        this.movimientos.push('Transferencia de ' + monto + ' Bs');
    }
}
/**Ejemplo */
let cuentaBCP: Cuenta = new Cuenta(0, []);
console.log(cuentaBCP);//Creando mi cuenta

cuentaBCP.ingreso(100);//Depositado Juan
console.log(cuentaBCP);

cuentaBCP.ingreso(500);//Deposito Maria
console.log(cuentaBCP);

cuentaBCP.transferencia(70);//Compra curso Udemy
console.log(cuentaBCP);

cuentaBCP.reintegro(68);//Devolucion del curso
console.log(cuentaBCP);



