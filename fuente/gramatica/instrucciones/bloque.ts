import {NodoAst} from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";

export class Bloque extends instruccion{
    constructor(private instrucciones: instruccion[], fila:number,columna:number){
        super(fila,columna);
    }

    public getNodo(): NodoAst {
        let nodo = new NodoAst('BLOQUE');
        for (const inst of this.instrucciones) {
            nodo.agregarHijoAST(inst.getNodo())
        }
        return nodo;
    }
}