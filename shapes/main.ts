/**
 * Clases
 */
export class Rectangle {
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;

    public constructor(px: number, py: number, h: number, w: number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }

    public setPosX(px: number): void {
        this.posX = px;
    }

    public getPosX(): number {
        return this.posX;
    }

    public setPosY(py: number): void {
        this.posY = py;
    }

    public getPosY(): number {
        return this.posY;
    }

    public setWidth(w: number): void {
        this.width = w;
    }

    public getWidth(): number {
        return this.width;
    }

    public setHeight(h: number): void {
        this.height = h;
    }

    public getHeight(): number {
        return this.height;
    }

    public getArea(): number {
        let area: number = this.height * this.width;
        return area;
    }

    public desplazar(posXnew: number, posYnew: number): void {
        this.posX = posXnew;
        this.posY = posYnew;
    }

    public getPerimeter(): number {
        let perimeter: number = 2 * this.height + 2 * this.width;
        return perimeter;
    }

}


export class Circle {
    constructor() {

    }
}
/**
 * Pruebas
 */

let rectangulo1: Rectangle = new Rectangle(5, 5, 10, 15);
console.log(rectangulo1);
rectangulo1.setHeight(10);
rectangulo1.setWidth(20);
console.log(rectangulo1);
rectangulo1.desplazar(100, 100);
console.log(rectangulo1);
let areaRectangle1: number = rectangulo1.getArea();
console.log(areaRectangle1);
let papel: number = rectangulo1.getPerimeter();
console.log(papel);



