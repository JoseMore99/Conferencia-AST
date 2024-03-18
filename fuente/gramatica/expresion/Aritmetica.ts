import { Expresion } from "./expresion";
import {NodoAst} from "../simbolo/NodoAst";

export class Aritmetica extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: tipoArit, fila: number, columna: number) {
        super(fila, columna);
    } 
    
    public getNodo(): NodoAst {
        let nodo = new NodoAst('EXPRESION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == tipoArit.SUMA) {
            nodo.agregarHijo('+');
        } else if (this.tipo == tipoArit.RESTA) {
            nodo.agregarHijo('-');
        } else if (this.tipo == tipoArit.DIVISION) {
            nodo.agregarHijo('/');
        } else if (this.tipo == tipoArit.MULTIPLICACION) {
            nodo.agregarHijo('*');
        } else if (this.tipo == tipoArit.MODULO) {
            nodo.agregarHijo('%');
        } else if (this.tipo == tipoArit.POTENCIA) {
            nodo.agregarHijo('^');
        }
        
        nodo.agregarHijoAST(this.derecha.getNodo());
        return nodo;
    }
    
}
export enum tipoArit {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    POTENCIA,
    MODULO
}