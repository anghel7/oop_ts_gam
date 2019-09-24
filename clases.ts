export class Animal {
    nombre: string;
    color: string;
    constructor(_nombre, _color) {
        this.nombre = _nombre;
        this.color = _color;
    }

    mostrarColor() {
        console.log(this.color);
    }
    caminar(){
        console.log("esta caminando");
        
    }
}

let perro: Animal = new Animal("Firulais", "negro");
perro.mostrarColor();
perro.caminar();
console.log(perro.nombre);
console.log(perro.color);


// TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como parametros (ruedas, color, puertas, marca, modelo)