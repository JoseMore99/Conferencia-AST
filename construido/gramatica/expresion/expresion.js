"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expresion = void 0;
const retorno_1 = require("./retorno");
class Expresion {
    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
    }
    tipoDom(tipo1, tipo2) {
        return retorno_1.tipos[tipo1][tipo2];
    }
}
exports.Expresion = Expresion;
