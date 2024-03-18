"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declarar = void 0;
const instruccion_1 = require("./instruccion");
const retorno_1 = require("../expresion/retorno");
const NodoAst_1 = require("../simbolo/NodoAst");
class Declarar extends instruccion_1.instruccion {
    constructor(tipo, id, valor, fila, columna) {
        super(fila, columna);
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
    }
    getNodo() {
        let nodo = new NodoAst_1.NodoAst('DECLARACION');
        let tipoD = ";";
        if (this.tipo == retorno_1.tipo.NUMERO) {
            nodo.agregarHijo('int');
            tipoD = "int";
        }
        else if (this.tipo == retorno_1.tipo.STRING) {
            nodo.agregarHijo('string');
            tipoD = "string";
        }
        else if (this.tipo == retorno_1.tipo.DECIMAL) {
            nodo.agregarHijo('double');
            tipoD = "double";
        }
        else if (this.tipo == retorno_1.tipo.CHAR) {
            nodo.agregarHijo('char');
            tipoD = "char";
        }
        else if (this.tipo == retorno_1.tipo.BOOLEAN) {
            nodo.agregarHijo('boolean');
            tipoD = "boolean";
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if (this.valor != null) {
            nodo.agregarHijoAST(this.valor.getNodo());
        }
        nodo.agregarHijo(';');
        return nodo;
    }
}
exports.Declarar = Declarar;
