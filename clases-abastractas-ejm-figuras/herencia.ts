export abstract class FiguraGeometrica {
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

    //public abstract calcularArea():number;
    public abstract dibujar(): string;

}

export class Triangulo extends FiguraGeometrica {
    protected base: number;
    protected altura: number;
    public constructor(nombre: string, posX: number, posY: number, base: number, altura: number) {
        super(nombre, posX, posY);
        this.base = base;
        this.altura = altura;
    }

    public dibujar(): string {
        return `
                        *
                       ***
                      *****
                     ********`;
    }
}


export class Circulo extends FiguraGeometrica {
    private radio: number;
    public constructor(nombre: string, posX: number, posY: number, radio: number) {
        super(nombre, posX, posY);
        this.radio = radio;
    }
    /**
     * dibujar
     */
    public dibujar(): string {
        return `
                ***
               *   *
                *** `;
    }
}

export class Cuadrado extends FiguraGeometrica {
    private lado: number;
    public constructor(nombre: string, posX: number, posY: number, lado: number) {
        super(nombre, posX, posY);
        this.lado = lado;
    }
    /**
     * dibujar
     * */
    public dibujar(): string {
        return `
                _____________________
               |                     |
               |                     |
               |                     |
               |                     |
               |                     |
               |                     |
               |_____________________|`;
    }
}


//let figuraGeometrica: FiguraGeometrica = new FiguraGeometrica("figura", 3, 3);
let figuraGeometrica1: FiguraGeometrica = new Triangulo("Triangulo Esc", 2, 2, 5, 8);
let figuraGeometrica2: FiguraGeometrica = new Circulo("Circulo", 3, 3, 5);
let figuraGeometrica3: FiguraGeometrica = new Cuadrado("Cuadrado", 0, 0, 20);
console.log(figuraGeometrica1.dibujar());
console.log(figuraGeometrica2.dibujar());
console.log(figuraGeometrica3.dibujar());





