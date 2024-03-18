"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoArit = exports.Aritmetica = void 0;
const expresion_1 = require("./expresion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Aritmetica extends expresion_1.Expresion {
    constructor(izquierda, derecha, tipo, fila, columna) {
        super(fila, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.tipo = tipo;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('EXPRESION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == tipoArit.SUMA) {
            nodo.agregarHijo('+');
        }
        else if (this.tipo == tipoArit.RESTA) {
            nodo.agregarHijo('-');
        }
        else if (this.tipo == tipoArit.DIVISION) {
            nodo.agregarHijo('/');
        }
        else if (this.tipo == tipoArit.MULTIPLICACION) {
            nodo.agregarHijo('*');
        }
        else if (this.tipo == tipoArit.MODULO) {
            nodo.agregarHijo('%');
        }
        else if (this.tipo == tipoArit.POTENCIA) {
            nodo.agregarHijo('^');
        }
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
}
exports.Aritmetica = Aritmetica;
var tipoArit;
(function (tipoArit) {
    tipoArit[tipoArit["SUMA"] = 0] = "SUMA";
    tipoArit[tipoArit["RESTA"] = 1] = "RESTA";
    tipoArit[tipoArit["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    tipoArit[tipoArit["DIVISION"] = 3] = "DIVISION";
    tipoArit[tipoArit["POTENCIA"] = 4] = "POTENCIA";
    tipoArit[tipoArit["MODULO"] = 5] = "MODULO";
})(tipoArit = exports.tipoArit || (exports.tipoArit = {}));
