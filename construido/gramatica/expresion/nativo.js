"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoNat = exports.Nativo = void 0;
const NodoAst_1 = require("../simbolo/NodoAst");
const expresion_1 = require("./expresion");
class Nativo extends expresion_1.Expresion {
    constructor(valor, tipoN, fila, columna) {
        super(fila, columna);
        this.valor = valor;
        this.tipoN = tipoN;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('nativo');
        nodo.agregarHijo(this.valor.toString());
        return nodo;
    }
}
exports.Nativo = Nativo;
var tipoNat;
(function (tipoNat) {
    tipoNat[tipoNat["NUMERO"] = 0] = "NUMERO";
    tipoNat[tipoNat["STRING"] = 1] = "STRING";
    tipoNat[tipoNat["BOOLEAN"] = 2] = "BOOLEAN";
    tipoNat[tipoNat["DECIMAL"] = 3] = "DECIMAL";
    tipoNat[tipoNat["CHAR"] = 4] = "CHAR";
    tipoNat[tipoNat["NULL"] = 5] = "NULL";
})(tipoNat = exports.tipoNat || (exports.tipoNat = {}));
