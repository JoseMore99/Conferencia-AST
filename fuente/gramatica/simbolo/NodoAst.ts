export  class NodoAst {
    public listaHijos: Array<NodoAst>;
  
    constructor(public valor: string) {
      this.listaHijos = new Array<NodoAst>();
    }
    public agregarHijo(val: string) {
        this.listaHijos.push(new NodoAst(val))
    }
    public agregarHijoAST(hijo: NodoAst | undefined) {
      if (hijo != undefined) this.listaHijos.push(hijo);
    }
  }