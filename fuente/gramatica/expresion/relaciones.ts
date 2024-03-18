import { Expresion } from "./expresion";
import {NodoAst} from "../simbolo/NodoAst";

export class Relacional extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: TipoRel, fila: number, columna: number) {
        super(fila, columna);
    }

    public getNodo(): NodoAst {
        let nodo = new NodoAst('RELACION');
        nodo.agregarHijoAST(this.izquierda.getNodo());
        if (this.tipo == TipoRel.IGUALIGUAL) {
            nodo.agregarHijo('==');
        } else if (this.tipo == TipoRel.DIFERENTE) {
            nodo.agregarHijo('!=');
        } else if (this.tipo == TipoRel.MAYOR) {
            nodo.agregarHijo('>');
        } else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            nodo.agregarHijo('>=');
        } else if (this.tipo == TipoRel.MENOR) {
            nodo.agregarHijo('<');
        } else if (this.tipo == TipoRel.MENOR_IGUAL) {
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

export enum TipoRel {
    AND,
    OR,
    IGUALIGUAL,
    DIFERENTE,
    MAYOR,
    MAYOR_IGUAL,
    MENOR,
    MENOR_IGUAL,
    NOT
}