"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const instruccion_1 = require("./instruccion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Print extends instruccion_1.instruccion {
    constructor(valor, salto, fila, columna) {
        super(fila, columna);
        this.valor = valor;
        this.salto = salto;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('PRINT');
        if (this.salto == true) {
            nodo.agregarHijo('println');
        }
        else {
            nodo.agregarHijo('print');
        }
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.valor.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Print = Print;
Print.consola = "";
