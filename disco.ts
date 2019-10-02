export class Disco {
    nombre: string;
    precio: number;
    categoria: string;
    constructor(nombre: string, precio: number, categoria: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

export class CD extends Disco {

}

export class DVD extends Disco {

}

export class BluRay extends Disco {

}

export class Cliente {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let cliente1: Cliente = new Cliente("Aleida", 15);
let cliente2: Cliente = new Cliente("Erick", 60);
let cliente3: Cliente = new Cliente("Noelia", 18);

let dumbo: DVD = new DVD("Dumbo", 5, "infantil");
let rambo: BluRay = new BluRay("Rambo", 10, "accion");
let hachiko: CD = new CD("Hachiko", 3, "familiar");
let pinocho: CD = new CD("pinocho", 3, "familiar");


export class Venta {
    producto: Disco;
    cliente: Cliente;
    constructor(producto: Disco, cliente: Cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }

    montoDeLaVenta(): number {
        let monto = this.producto.precio;
        console.log(monto);
        return monto
    }
}


let venta1: Venta = new Venta(dumbo, cliente1);
let venta2: Venta = new Venta(rambo, cliente2);
let venta3: Venta = new Venta(hachiko, cliente3);
let venta4: Venta = new Venta(pinocho, cliente1);

export class Tienda {
    ventas: Venta[];
    nombreTienda: string;
    constructor(nombre: string) {
        this.nombreTienda = nombre;
        this.ventas = [];
    }

    realizarVenta(venta: Venta): void {
        this.ventas.push(venta);
    }

    calcularVentaCDs(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let prod = this.ventas[i].producto;
            if (prod instanceof CD) {
                suma += prod.precio;
            }
        }
        return suma;
    }

    calcularVentaDVDs(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let prod = this.ventas[i].producto;
            if (prod instanceof DVD) {
                suma += prod.precio;
            }
        }
        return suma;
    }

    calcularVentaBluRays(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let prod = this.ventas[i].producto;
            if (prod instanceof BluRay) {
                suma += prod.precio;
            }
        }
        return suma;
    }

    totalVentas(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let prod = this.ventas[i].producto;
            suma += prod.precio;
        }
        return suma;
    }
}


let tienda1: Tienda = new Tienda("Center");
tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);

let ingresosCDs = tienda1.calcularVentaCDs();
console.log("los ingresos de la venta de CDs es " + ingresosCDs + "Bs");

let ingresosDVDs = tienda1.calcularVentaDVDs();
console.log("los ingresos de la venta de DVDs es " + ingresosDVDs + "Bs");

let ingresosBluRays = tienda1.calcularVentaBluRays();
console.log("los ingresos de la venta de BluRays es " + ingresosBluRays + "Bs");

console.log("Total Ventas ", tienda1.totalVentas());
