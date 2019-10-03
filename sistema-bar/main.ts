export class Bar {
    private nombre: string;//Atributo
    private capacidad: number;//Atributo
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    /**Cambiar el valor de un atributo
    creo el metodo set que recibe como parametro
    el nuevo valor que deseo actualizar*/
    public setNombre(nom: string): void {
        this.nombre = nom;
    }

    public getNombre(): string {
        return this.nombre;
    }
}

export class BarMan {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
}

export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
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

bar1.setNombre("El pueblito");
//bar1.nombre = "pueblito"; forma inconrrecta actualizar un atributo

console.log(bar1);
//console.log(bar1.nombre);//forma incorrecta de perdir valor
console.log(bar1.getNombre());
