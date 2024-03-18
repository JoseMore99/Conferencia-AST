export enum tipo {
    NUMERO ,
    STRING ,
    BOOLEAN,
    DECIMAL,
    CHAR,
    NULL 
}

export type Retorno = {
    valor: any,
    type: tipo
}
 
export const tipos = [
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