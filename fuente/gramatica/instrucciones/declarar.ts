import { instruccion } from "./instruccion";
import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import {NodoAst} from "../simbolo/NodoAst";

export class Declarar extends instruccion{
    constructor(public tipo:tipo ,public id:string, private valor:Expresion, fila:number, columna:number){
        super(fila, columna)
    }

    public getNodo(): NodoAst {
        let nodo = new NodoAst('DECLARACION');
        let tipoD=";"
        if(this.tipo==tipo.NUMERO){
           nodo.agregarHijo('int');
           tipoD="int";
        }
        else if(this.tipo==tipo.STRING){
            nodo.agregarHijo('string');
            tipoD="string";
        }
        else if(this.tipo==tipo.DECIMAL){
            nodo.agregarHijo('double');
            tipoD="double";
        }
        else if(this.tipo==tipo.CHAR){
            nodo.agregarHijo('char');
            tipoD="char";
        }
        else if(this.tipo==tipo.BOOLEAN){
            nodo.agregarHijo('boolean');
            tipoD="boolean";
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if(this.valor!=null){
            nodo.agregarHijoAST(this.valor.getNodo());
            }
        
        
        nodo.agregarHijo(';');
        return nodo;
    }
}