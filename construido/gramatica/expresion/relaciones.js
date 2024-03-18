"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoRel = exports.Relacional = void 0;
const expresion_1 = require("./expresion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Relacional extends expresion_1.Expresion {
    constructor(izquierda, derecha, tipo, fila, columna) {
        super(fila, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.tipo = tipo;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('RELACION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == TipoRel.IGUALIGUAL) {
            nodo.agregarHijo('==');
        }
        else if (this.tipo == TipoRel.DIFERENTE) {
            nodo.agregarHijo('!=');
        }
        else if (this.tipo == TipoRel.MAYOR) {
            nodo.agregarHijo('>');
        }
        else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            nodo.agregarHijo('>=');
        }
        else if (this.tipo == TipoRel.MENOR) {
            nodo.agregarHijo('<');
        }
        else if (this.tipo == TipoRel.MENOR_IGUAL) {
            nodo.agregarHijo('<=');
        }
        else if (this.tipo == TipoRel.AND) {
            nodo.agregarHijo('&&');
        }
        else if (this.tipo == TipoRel.OR) {
            nodo.agregarHijo('||');
        }
        else if (this.tipo == TipoRel.NOT) {
            nodo.agregarHijo('!');
        }
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
}
exports.Relacional = Relacional;
var TipoRel;
(function (TipoRel) {
    TipoRel[TipoRel["AND"] = 0] = "AND";
    TipoRel[TipoRel["OR"] = 1] = "OR";
    TipoRel[TipoRel["IGUALIGUAL"] = 2] = "IGUALIGUAL";
    TipoRel[TipoRel["DIFERENTE"] = 3] = "DIFERENTE";
    TipoRel[TipoRel["MAYOR"] = 4] = "MAYOR";
    TipoRel[TipoRel["MAYOR_IGUAL"] = 5] = "MAYOR_IGUAL";
    TipoRel[TipoRel["MENOR"] = 6] = "MENOR";
    TipoRel[TipoRel["MENOR_IGUAL"] = 7] = "MENOR_IGUAL";
    TipoRel[TipoRel["NOT"] = 8] = "NOT";
})(TipoRel = exports.TipoRel || (exports.TipoRel = {}));
