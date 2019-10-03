export class Animal {
    private familia: string;
    private nombreCientifico: string;

    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        this.familia = familia;
        this.nombreCientifico = nombreCientifico;
    }
}

export interface AnimalAcuatico {
    nadar(): string;
}

export interface AnimalOviparo {
    nacerHuevo(): string;
}

export interface AnimalMamifero {
    lactar(): string;
    gestar(): string;
}

export class Tigre extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Cocodrilo extends Animal implements AnimalAcuatico, AnimalOviparo {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }

    nadar(): string {
        return "Nada usando sus 4 patas y su cola.";
    }

    nacerHuevo(): string {
        return "Nace en 6 meses";
    }
}

export class Canguro extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Avestruz extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Ornitorrinco extends Animal implements AnimalOviparo, AnimalMamifero {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
    nacerHuevo(): string {
        return "Nace en 3 meses."
    }
    lactar(): string {
        return "Lacta 10 meses."
    }
    gestar(): string {
        return "gestar 3 meses."
    }
}

export class Ballena extends Animal implements AnimalAcuatico, AnimalMamifero {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }

    nadar(): string {
        return "Nada usan aletas.";
    }

    lactar(): string {
        return "Lacta 1 año."
    }

    gestar(): string {
        return "gesta 2 años.";
    }

}

export class Murcielago extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Estrella extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Medusa extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Cangrejo extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Zaryguella extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Tortuga extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Aguila extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Saltamonte extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Hormiga extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Python extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Macaco extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Orangutan extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Gorila extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Leon extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Camello extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

export class Caballo extends Animal {
    /**
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string) {
        super(familia, nombreCientifico);
    }
}

let animal1: Ballena = new Ballena("Ballena Azul", "Balaenidae");

console.log(animal1.gestar());
console.log(animal1.nadar());

