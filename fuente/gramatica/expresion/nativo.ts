import {NodoAst} from "../simbolo/NodoAst";
import { Expresion } from "./expresion";

export class Nativo extends Expresion {

    constructor(private valor: any,private tipoN: tipoNat,  fila: number, columna: number) {
        super(fila, columna);
    }

    public getNodo(): NodoAst {
        let nodo = new NodoAst('nativo');
        nodo.agregarHijo(this.valor.toString());
        return nodo;
    }
    }

export enum tipoNat {
    NUMERO ,
    STRING ,
    BOOLEAN,
    DECIMAL,
    CHAR,
    NULL 
}