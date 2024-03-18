import { Expresion } from "../expresion/expresion";
import {NodoAst} from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";

export class If extends instruccion{
    constructor(private condicion:Expresion, private contenido: instruccion, private SiNo: instruccion, fila: number, columna: number){
        super(fila,columna)
    }

    public getNodo(): NodoAst {
        let nodo = new NodoAst('IF');
        nodo.agregarHijo('if');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
}