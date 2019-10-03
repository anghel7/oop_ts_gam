export class Persona {
    private ci: string;
    private nombre: string;
    apellido: string;
    private direccion: string;

    constructor(ci: string, nombre: string, apellido: string, direccion: string) {
        this.ci = ci;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    comer(): void {
        console.log("esta comiendo");
    }
    dormir(): void {
        console.log("esta durmiendo");
    }

    getNombre(): string {
        return this.nombre;
    }
}

export class Estudiante extends Persona {
    codigo: number;

    constructor(ci: string, nombre: string, apellido: string, direccion: string, codigo: number) {
        super(ci, nombre, apellido, direccion);
        this.codigo = codigo;
    }

    estudiar(): void {
        console.log("estoy estudiando");
    }
}

export class Docente extends Persona {
    materias: string[];
    constructor(ci: string, nombre: string, apellido: string, direccion: string, materias: string[]) {
        super(ci, nombre, apellido, direccion);
        this.materias = materias;
    }

    enseñar(): void {
        console.log("el docente esta enseñando");
    }
}

export class Administrativo extends Persona {
    cargo: string;
    sueldo: number;
    constructor(ci: string, nombre: string, apellido: string, direccion: string, cargo: string, sueldo: number) {
        super(ci, nombre, apellido, direccion);
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    cobrarSueldo(sueldo: number): void {
        this.sueldo = this.sueldo + sueldo;
        console.log(this.getNombre() + " cobro " + sueldo);

    }
    getSueldo(): string {
        return this.getNombre() + " tiene " + this.sueldo + " Bs";
    }
    comproXCosa(costo: number): void {
        this.sueldo -= costo;
    }
}


// let rene: Estudiante = new Estudiante("123", "Rene", "Antezana", "calle picaflor", 321);
// rene.estudiar();
// rene.comer();
// rene.dormir();


let erick: Administrativo = new Administrativo("456", "Erick", "Fernandez", "calle de los milagros", "Seguridad", 1000);
console.log(erick.getSueldo());
erick.cobrarSueldo(3000);
console.log(erick.getSueldo());
erick.cobrarSueldo(2000);
console.log(erick.getSueldo());
erick.comproXCosa(2000);
console.log(erick.getSueldo());

