%{
const {Aritmetica,tipoArit} = require('./expresion/Aritmetica')
const {Relacional,TipoRel} = require('./expresion/relaciones')
const {tipo} = require('./expresion/retorno')
const {Variable} = require('./expresion/variable')
const {Nativo,tipoNat} = require('./expresion/nativo')
const {Declarar} = require('./instrucciones/declarar')
const {Print} = require('./instrucciones/print')
const {Bloque} = require('./instrucciones/bloque')
const {If} = require('./instrucciones/If')
%}

%lex

%options case-insensitive

%%

\s+                 //espacios en blanco
"//".*		//comentario simple	

"+"                 return 'mas';
"-"                 return 'menos';
"/"                 return 'divid';
"*"                 return 'por';
"^"                 return 'pot';
"%"                 return 'mod';
"("                 return 'pariz';
")"                 return 'parder';
"{"                 return 'llaveiz';
"}"                 return 'llaveder';
','                 return 'coma';
";"                 return 'puntycom';
":"                 return 'dospunt';
"print"             return 'print';
"println"           return 'println';
"if"                return 'resif';
"else"              return 'reselse';
"int"               return 'resint';
"double"            return 'resdouble';
"string"            return 'resstring';
"boolean"           return 'resbool';
"char"              return 'reschar';
"=="                return 'igualigual';
"!="                return 'noigual';
"="                 return 'igual';
">="                return 'mayorigual';                     
">"                 return 'mayor';
"<="                return 'menorigual';
"<"                 return 'menor';
"||"                 return 'or';
"&&"                return 'and';
"!"                 return 'not';

("true"|"false")\b      return 'bool';
[0-9]+[.][0-9]+\b    return 'decimal';
[0-9]+\b                return 'numero';
([a-zA-Z])[a-zA-Z0-9_]*	return 'id';
\'[^\']\'               return 'caracter';
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; }

<<EOF>>             return 'EOF';
.                   {console.log(yylloc.first_line, yylloc.first_columm, 'Lexico', yytext)}
/lex

%left 'or'
%left 'and'
%left 'not'
%left 'noigual' 'igualigual'
%left 'menorigual' 'mayorigual' 'mayor' 'menor'
%left 'mas', 'menos'
%left 'divid', 'por','mod' 
%left 'pot'
%left Umenos 

%start INI

%%

INI: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES: INSTRUCCIONES INSTRUCCION     {if($2!=false)$1.push($2);$$=$1;}
            |INSTRUCCION                     {$$=($1!=false) ?[$1]:[];}
;

INSTRUCCION: IMPRIMIR            {$$=$1;}
        | DECLARAR  puntycom     {$$=$1;}
        | INSTIF                 {$$=$1;}   
;


INSTIF: resif pariz EXPRESION parder llaveiz BLOQUEINST llaveder INSTELSE  {$$=new If($3,$6,$8,@1.first_line,@1.first_column);}
;

INSTELSE: reselse llaveiz BLOQUEINST llaveder {$$=$3}
        | reselse INSTIF {$$=$2}
        | {$$= null}
;


//primero declara y tercero asigna
DECLARAR: TIPODATO id igual EXPRESION {$$= new Declarar($1,$2,$4,@1.first_line,@1.first_column);}
        | TIPODATO id                 {$$=new Declarar($1,$2,null,@1.first_line,@1.first_column);}
        | id igual EXPRESION          {$$= new Declarar(tipo.NULL,$1,$3,@1.first_line,@1.first_column);}
;

TIPODATO: resint        {$$=tipo.NUMERO;}
        | resdouble     {$$=tipo.DECIMAL;}
        | resstring     {$$=tipo.STRING;}
        | resbool       {$$=tipo.BOOLEAN;}
        | reschar       {$$=tipo.CHAR;}
;

IMPRIMIR: print pariz EXPRESION parder puntycom   {$$=new Print($2,false,@1.first_line,@1.first_column);}
        | println pariz EXPRESION parder puntycom   {$$=new Print($3,true,@1.first_line,@1.first_column);}
;

BLOQUEINST:INSTRUCCIONES        {$$=new Bloque($1,@1.first_line,@1.first_column)}
;

EXPRESION : menos EXPRESION %prec Umenos      {$$= new Aritmetica($2,new Nativo("-1",tipoNat.NUMERO, @1.first_line, @1.first_column),tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)}
        | EXPRESION mas EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.SUMA, @1.first_line, @1.first_column)} 
        | EXPRESION menos EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.RESTA, @1.first_line, @1.first_column)}  
        | EXPRESION divid EXPRESION           {$$= new Aritmetica($1,$3,tipoArit.DIVISION, @1.first_line, @1.first_column)} 
        | EXPRESION por EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.MULTIPLICACION, @1.first_line, @1.first_column)} 
        | EXPRESION pot EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.POTENCIA, @1.first_line, @1.first_column)} 
        | EXPRESION mod EXPRESION             {$$= new Aritmetica($1,$3,tipoArit.MODULO, @1.first_line, @1.first_column)} 
        | EXPRESION igualigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.IGUALIGUAL, @1.first_line, @1.first_column)}
        | EXPRESION noigual EXPRESION         {$$= new Relacional($1,$3,TipoRel.DIFERENTE, @1.first_line, @1.first_column)}
        | EXPRESION mayorigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.MAYOR_IGUAL, @1.first_line, @1.first_column)}
        | EXPRESION mayor EXPRESION           {$$= new Relacional($1,$3,TipoRel.MAYOR, @1.first_line, @1.first_column)}
        | EXPRESION menorigual EXPRESION      {$$= new Relacional($1,$3,TipoRel.MENOR_IGUAL, @1.first_line, @1.first_column)}
        | EXPRESION menor EXPRESION           {$$= new Relacional($1,$3,TipoRel.MENOR, @1.first_line, @1.first_column)}
        | EXPRESION and EXPRESION             {$$= new Relacional($1,$3,TipoRel.AND, @1.first_line, @1.first_column)}
        | EXPRESION or EXPRESION              {$$= new Relacional($1,$3,TipoRel.OR, @1.first_line, @1.first_column)}
        | not EXPRESION                       {$$= new Relacional(null,$2,TipoRel.NOT, @1.first_line, @1.first_column)}
        | pariz EXPRESION parder              {$$ = $2;}
        | NATIVO                              {$$ = $1;}
        | id                                  {$$= new Variable($1,@1.first_line, @1.first_column);}
;

NATIVO :  numero        {$$=new Nativo($1,tipoNat.NUMERO, @1.first_line, @1.first_column)}
        | decimal       {$$=new Nativo($1,tipoNat.DECIMAL, @1.first_line, @1.first_column)}
        | cadena        {$$=new Nativo($1,tipoNat.STRING, @1.first_line, @1.first_column)}
        | bool          {$$=new Nativo($1,tipoNat.BOOLEAN, @1.first_line, @1.first_column)}
        | caracter      {$$=new Nativo($1,tipoNat.CHAR, @1.first_line, @1.first_column)}
;