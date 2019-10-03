export class FiguraGeometrica {
    protected nombre: String;
    private posX: number;
    private posY: number;
    public constructor(nombre: string, posX: number, posY: number) {
        this.nombre = nombre;
        this.posX = posX;
        this.posY = posY;
    }
    public getPrincipalInfo(): string {
        return `Nombre de la figura: ${this.nombre}.
                Posicion en el eje X: ${this.posX}.
                Posicion en el eje Y: ${this.posY}.`;
    }

}

export class Triangulo extends FiguraGeometrica {
    protected base: number;
    protected altura: number;
    public constructor(nombre: string, posX: number, posY: number, base: number, altura: number) {
        super(nombre, posX, posY);
        this.base = base;
        this.altura = altura;
    }
    public getPrincipalInfo(): string {
        return `
        Soy una figura rebelde:
        My nombre es: ${this.nombre}.        
        My altura es: ${this.altura}.
        My base es: ${this.base}.`;
    }
}

export class TrianguloEscaleno extends Triangulo {
    private frase: string;
    public constructor(nombre: string, posX: number, posY: number, base: number, altura: number, frase: string) {
        super(nombre, posX, posY, base, altura);
        this.frase = frase;
    }
    public getPrincipalInfo(): string {
        return `
        Soy Anarquista:
        My nombre es: No es tu problema.
        My frase es: ${this.frase}`;
    }
}

export class Circulo extends FiguraGeometrica {
    private radio: number;
    public constructor(nombre: string, posX: number, posY: number, radio: number) {
        super(nombre, posX, posY);
        this.radio = radio;
    }
}

export class Cuadrado extends FiguraGeometrica {
    private lado: number;
    public constructor(nombre: string, posX: number, posY: number, lado: number) {
        super(nombre, posX, posY);
        this.lado = lado;
    }
}

export class Rectangulo {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
}

let triangulo1: Triangulo = new Triangulo("Escaleno", 10, 10, 20, 35);

let figuraGeometrica1: FiguraGeometrica = new Circulo("Circulo1", 0, 0, 10);
let figuraGeometrica2: FiguraGeometrica = new Cuadrado("Cuadrdo1", 5, 5, 70);

//let figuraGeometrica3: Rectangulo = new Rectangulo(17, 80);
//let cuadradox:Cudrado =  new FiguraGeometrica(); no se puede

let figuraGeometrica4: FiguraGeometrica = new Triangulo('Señor Triangulo para ustedes.', 7, 7, 10, 16);

let figuraGeometrica5: FiguraGeometrica = new TrianguloEscaleno('El Exk4l3n0', -3,-4, 100, 1000, 'Yo no fui.');

var resultado: boolean = figuraGeometrica1 instanceof FiguraGeometrica;

console.log(figuraGeometrica2.getPrincipalInfo());
console.log(figuraGeometrica4.getPrincipalInfo());
console.log(figuraGeometrica5.getPrincipalInfo());
