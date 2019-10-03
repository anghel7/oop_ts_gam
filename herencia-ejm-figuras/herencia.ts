export class FiguraGeometrica {
    private nombre: String;
    private posX: number;
    private posY: number;
    public constructor(nombre: string, posX: number, posY: number) {
        this.nombre = nombre;
        this.posX = posX;
        this.posY = posY;
    }
}

export class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;
    public constructor(nombre: string, posX: number, posY: number, base: number, altura: number) {
        super(nombre, posX, posY);
        this.base = base;
        this.altura = altura;
    }
}

export class Circulo extends FiguraGeometrica {
    private radio: number;
    public constructor(nombre: string, posX: number, posY: number, radio: number) {
        super(nombre, posX, posY);
        this.radio = radio;
    }
}

export class Cudrado extends FiguraGeometrica {
    private lado: number;
    public constructor(nombre: string, posX: number, posY: number, lado: number) {
        super(nombre, posX, posY);
        this.lado = lado;
    }
}

export class Rectangulo {
    base:number;
    altura:number;
    constructor(base:number, altura:number) {
        this.base = base;
        this.altura = altura;
    }
}

let triangulo1: Triangulo = new Triangulo("Escaleno", 10, 10, 20, 35);

let figuraGeometrica1: FiguraGeometrica = new Circulo("Circulo1", 0, 0, 10);
let figuraGeometrica2: FiguraGeometrica = new Cudrado("Cuadrdo1", 5, 5, 70);
let figuraGeometrica3: Rectangulo = new Rectangulo(17, 80);
//let cuadradox:Cudrado =  new FiguraGeometrica(); no se puede

var resultado:boolean = figuraGeometrica1 instanceof FiguraGeometrica;

console.log(resultado);
