import { instruccion } from "./instruccion";
import { Expresion } from "../expresion/expresion";
import {NodoAst} from "../simbolo/NodoAst";



export class Print extends instruccion{
    static consola:string="";
    constructor( private valor:Expresion, private salto:boolean, fila:number, columna:number){
        super(fila, columna)
    }
    
    public getNodo(): NodoAst {
        let nodo = new NodoAst('PRINT');
        if(this.salto==true){
            nodo.agregarHijo('println');
        }else{
            nodo.agregarHijo('print');

        }
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.valor.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo(';');
        return nodo;
    }
    
}