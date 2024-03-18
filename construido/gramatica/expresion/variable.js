"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const expresion_1 = require("./expresion");
const NodoAst_1 = require("../simbolo/NodoAst");
class Variable extends expresion_1.Expresion {
    constructor(id, line, column) {
        super(line, column);
        this.id = id;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('ID');
        nodo.agregarHijo(this.id);
        return nodo;
    }
}
exports.Variable = Variable;
