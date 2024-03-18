"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipos = exports.tipo = void 0;
var tipo;
(function (tipo) {
    tipo[tipo["NUMERO"] = 0] = "NUMERO";
    tipo[tipo["STRING"] = 1] = "STRING";
    tipo[tipo["BOOLEAN"] = 2] = "BOOLEAN";
    tipo[tipo["DECIMAL"] = 3] = "DECIMAL";
    tipo[tipo["CHAR"] = 4] = "CHAR";
    tipo[tipo["NULL"] = 5] = "NULL";
})(tipo = exports.tipo || (exports.tipo = {}));
exports.tipos = [
    [
        tipo.NUMERO, tipo.STRING, tipo.NUMERO, tipo.DECIMAL, tipo.NUMERO
    ],
    [
        tipo.STRING, tipo.STRING, tipo.STRING, tipo.STRING, tipo.STRING
    ],
    [
        tipo.NUMERO, tipo.STRING, tipo.NULL, tipo.DECIMAL, tipo.NULL
    ],
    [
        tipo.DECIMAL, tipo.STRING, tipo.DECIMAL, tipo.DECIMAL, tipo.DECIMAL
    ],
    [
        tipo.NUMERO, tipo.STRING, tipo.NULL, tipo.DECIMAL, tipo.STRING
    ]
];
