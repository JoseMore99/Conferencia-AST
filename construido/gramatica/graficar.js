"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graficarArbol = void 0;
const child_process_1 = require("child_process");
var fs = require('fs');
let cuerpo = '';
let contador = 0;
function graficarArbol(arbolitos) {
    contador = 1;
    cuerpo = '';
    graphAST('n0', arbolitos);
    let principal = `digraph arbolAST{ 
      n0[label="${arbolitos.valor.replace('"', '\\"')}"];
      ${cuerpo}
    }`;
    fs.writeFile('arbolAST.dot', principal, () => { });
    (0, child_process_1.exec)('dot -Tsvg arbolAST.dot -o arbolAST.svg', (error, stdout, stderr) => {
        if (error) {
            return;
        }
        if (stderr) {
            return;
        }
    });
    return principal;
}
exports.graficarArbol = graficarArbol;
function graphAST(texto, padre) {
    for (let hijo of padre.listaHijos) {
        let nombreHijo = `n${contador}`;
        cuerpo += `${nombreHijo}[label="${hijo.valor.replace('"', '\\"')}"];
      ${texto} -> ${nombreHijo};\n`;
        contador++;
        graphAST(nombreHijo, hijo);
    }
}
