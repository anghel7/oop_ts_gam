export class Bar {
    nombre: string;//Atributo
    capacidad: number;//Atributo
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
}

export class BarMan {
    nombre: string;
    apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
}

export class Trago {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom: string, col: string, cant: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
}
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
let bar1: Bar = new Bar("Nueva Era", 50);


let bar2: Bar = new Bar("El Patio", 200);

console.log(bar1);
console.log(bar2);


