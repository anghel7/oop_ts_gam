export abstract class FiguraGeometrica {
    // private ancho: number;
    // private alto: number;
    // constructor(ancho: number, alto: number) {
    //     this.ancho = ancho;
    //     this.alto = alto;
    // }

    constructor(private ancho: number, private alto: number) {
    }

    abstract getArea(): number;

    abstract getVolumen(): number;

    getAncho(): number {
        return this.ancho;
    }
    setAncho(ancho): void {
        this.ancho = ancho;
    }

    getAlto(): number {
        return this.alto;
    }
    setAlto(alto): void {
        this.alto = alto;
    }
}

export class Rectangulo extends FiguraGeometrica {
    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }
    getArea(): number {
        let area = this.getAncho() * this.getAlto();
        return area;
    }
}

export class Triangulo extends FiguraGeometrica {
    // se refiere al triangulo rectangulo
    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }
    getArea(): number {
        let area = (this.getAncho() * this.getAlto()) / 2;
        return area;
    }
}

let rec1: Rectangulo = new Rectangulo(4, 5);
console.log("el area del rectangulo es ", rec1.getArea());

let tri1: Triangulo = new Triangulo(4, 5);
console.log("El area del triangulo es ", tri1.getArea());
