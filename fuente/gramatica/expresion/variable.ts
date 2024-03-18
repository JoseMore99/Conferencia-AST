import { Expresion } from "./expresion";
import {NodoAst} from "../simbolo/NodoAst";

export class Variable extends Expresion{
    constructor(private id:string,line:number, column:number ){
        super(line, column)
    }
    
    public getNodo(): NodoAst {
        let nodo = new NodoAst('ID');
        nodo.agregarHijo(this.id);
        return nodo;
    }
}