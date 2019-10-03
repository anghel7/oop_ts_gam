"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    /**
     * constructor
     */
    function Animal(familia, nombreCientifico) {
        this.familia = familia;
        this.nombreCientifico = nombreCientifico;
    }
    return Animal;
}());
exports.Animal = Animal;
var Tigre = /** @class */ (function (_super) {
    __extends(Tigre, _super);
    /**
     * constructor
     */
    function Tigre(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Tigre;
}(Animal));
exports.Tigre = Tigre;
var Cocodrilo = /** @class */ (function (_super) {
    __extends(Cocodrilo, _super);
    /**
     * constructor
     */
    function Cocodrilo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Cocodrilo.prototype.nadar = function () {
        return "Nada usando sus 4 patas y su cola.";
    };
    Cocodrilo.prototype.nacerHuevo = function () {
        return "Nace en 6 meses";
    };
    return Cocodrilo;
}(Animal));
exports.Cocodrilo = Cocodrilo;
var Canguro = /** @class */ (function (_super) {
    __extends(Canguro, _super);
    /**
     * constructor
     */
    function Canguro(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Canguro;
}(Animal));
exports.Canguro = Canguro;
var Avestruz = /** @class */ (function (_super) {
    __extends(Avestruz, _super);
    /**
     * constructor
     */
    function Avestruz(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Avestruz;
}(Animal));
exports.Avestruz = Avestruz;
var Ornitorrinco = /** @class */ (function (_super) {
    __extends(Ornitorrinco, _super);
    /**
     * constructor
     */
    function Ornitorrinco(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Ornitorrinco.prototype.nacerHuevo = function () {
        return "Nace en 3 meses.";
    };
    Ornitorrinco.prototype.lactar = function () {
        return "Lacta 10 meses.";
    };
    Ornitorrinco.prototype.gestar = function () {
        return "gestar 3 meses.";
    };
    return Ornitorrinco;
}(Animal));
exports.Ornitorrinco = Ornitorrinco;
var Ballena = /** @class */ (function (_super) {
    __extends(Ballena, _super);
    /**
     * constructor
     */
    function Ballena(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Ballena.prototype.nadar = function () {
        return "Nada usan aletas.";
    };
    Ballena.prototype.lactar = function () {
        return "Lacta 1 año.";
    };
    Ballena.prototype.gestar = function () {
        return "gesta 2 años.";
    };
    return Ballena;
}(Animal));
exports.Ballena = Ballena;
var Murcielago = /** @class */ (function (_super) {
    __extends(Murcielago, _super);
    /**
     * constructor
     */
    function Murcielago(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Murcielago;
}(Animal));
exports.Murcielago = Murcielago;
var Estrella = /** @class */ (function (_super) {
    __extends(Estrella, _super);
    /**
     * constructor
     */
    function Estrella(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Estrella;
}(Animal));
exports.Estrella = Estrella;
var Medusa = /** @class */ (function (_super) {
    __extends(Medusa, _super);
    /**
     * constructor
     */
    function Medusa(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Medusa;
}(Animal));
exports.Medusa = Medusa;
var Cangrejo = /** @class */ (function (_super) {
    __extends(Cangrejo, _super);
    /**
     * constructor
     */
    function Cangrejo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Cangrejo;
}(Animal));
exports.Cangrejo = Cangrejo;
var Zaryguella = /** @class */ (function (_super) {
    __extends(Zaryguella, _super);
    /**
     * constructor
     */
    function Zaryguella(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Zaryguella;
}(Animal));
exports.Zaryguella = Zaryguella;
var Tortuga = /** @class */ (function (_super) {
    __extends(Tortuga, _super);
    /**
     * constructor
     */
    function Tortuga(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Tortuga;
}(Animal));
exports.Tortuga = Tortuga;
var Aguila = /** @class */ (function (_super) {
    __extends(Aguila, _super);
    /**
     * constructor
     */
    function Aguila(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Aguila;
}(Animal));
exports.Aguila = Aguila;
var Saltamonte = /** @class */ (function (_super) {
    __extends(Saltamonte, _super);
    /**
     * constructor
     */
    function Saltamonte(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Saltamonte;
}(Animal));
exports.Saltamonte = Saltamonte;
var Hormiga = /** @class */ (function (_super) {
    __extends(Hormiga, _super);
    /**
     * constructor
     */
    function Hormiga(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Hormiga;
}(Animal));
exports.Hormiga = Hormiga;
var Python = /** @class */ (function (_super) {
    __extends(Python, _super);
    /**
     * constructor
     */
    function Python(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Python;
}(Animal));
exports.Python = Python;
var Macaco = /** @class */ (function (_super) {
    __extends(Macaco, _super);
    /**
     * constructor
     */
    function Macaco(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Macaco;
}(Animal));
exports.Macaco = Macaco;
var Orangutan = /** @class */ (function (_super) {
    __extends(Orangutan, _super);
    /**
     * constructor
     */
    function Orangutan(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Orangutan;
}(Animal));
exports.Orangutan = Orangutan;
var Gorila = /** @class */ (function (_super) {
    __extends(Gorila, _super);
    /**
     * constructor
     */
    function Gorila(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Gorila;
}(Animal));
exports.Gorila = Gorila;
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    /**
     * constructor
     */
    function Leon(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Leon;
}(Animal));
exports.Leon = Leon;
var Camello = /** @class */ (function (_super) {
    __extends(Camello, _super);
    /**
     * constructor
     */
    function Camello(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Camello;
}(Animal));
exports.Camello = Camello;
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    /**
     * constructor
     */
    function Caballo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Caballo;
}(Animal));
exports.Caballo = Caballo;
var animal1 = new Ballena("Ballena Azul", "Balaenidae");
console.log(animal1.gestar());
console.log(animal1.nadar());
