import {NodoAst} from "../simbolo/NodoAst";

export abstract class instruccion {

    public fila: number;
    public columna: number;

    constructor(fila: number, columna: number) {
        this.fila = fila
        this.columna = columna
    }


    public abstract getNodo():NodoAst;


}