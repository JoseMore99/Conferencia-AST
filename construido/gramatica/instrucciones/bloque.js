"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
const NodoAst_1 = require("../simbolo/NodoAst");
const instruccion_1 = require("./instruccion");
class Bloque extends instruccion_1.instruccion {
    constructor(instrucciones, fila, columna) {
        super(fila, columna);
        this.instrucciones = instrucciones;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('BLOQUE');
        for (const inst of this.instrucciones) {
            nodo.agregarHijoAST(inst.getNodo());
        }
        return nodo;
    }
}
exports.Bloque = Bloque;
