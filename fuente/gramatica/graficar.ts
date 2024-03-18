
import {NodoAst} from './simbolo/NodoAst';

import { exec } from 'child_process';
var fs = require('fs');
let cuerpo = '';
let contador = 0;

export  function graficarArbol(arbolitos: NodoAst) {
  
  contador = 1;
  cuerpo = '';
  graphAST('n0', arbolitos);
  let principal = `digraph arbolAST{ 
      n0[label="${arbolitos.valor.replace('"', '\\"')}"];
      ${cuerpo}
    }`;
    fs.writeFile('arbolAST.dot', principal, () => {});
  exec('dot -Tsvg arbolAST.dot -o arbolAST.svg',(error, stdout, stderr) => {
      if (error) {
        return;
      }
      if (stderr) {
        return;
      }
    }
  );
  return principal
}

function graphAST(texto: string, padre: NodoAst) {
  for (let hijo of padre.listaHijos) {
    let nombreHijo = `n${contador}`;
    cuerpo += `${nombreHijo}[label="${hijo.valor.replace('"', '\\"')}"];
      ${texto} -> ${nombreHijo};\n`;
    contador++;
    graphAST(nombreHijo, hijo);
  }
}