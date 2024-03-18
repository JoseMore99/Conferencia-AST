/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,10],$V2=[1,12],$V3=[1,13],$V4=[1,14],$V5=[1,15],$V6=[1,16],$V7=[1,7],$V8=[1,8],$V9=[5,11,17,21,23,24,25,26,27,28,29],$Va=[1,28],$Vb=[1,30],$Vc=[1,26],$Vd=[1,27],$Ve=[1,31],$Vf=[1,32],$Vg=[1,33],$Vh=[1,34],$Vi=[1,35],$Vj=[1,42],$Vk=[1,41],$Vl=[1,43],$Vm=[1,44],$Vn=[1,45],$Vo=[1,46],$Vp=[1,47],$Vq=[1,48],$Vr=[1,49],$Vs=[1,50],$Vt=[1,51],$Vu=[1,52],$Vv=[1,53],$Vw=[1,54],$Vx=[9,14,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vy=[9,14,42,43],$Vz=[9,14,30,31,36,37,38,39,40,41,42,43],$VA=[9,14,30,31,32,33,35,36,37,38,39,40,41,42,43],$VB=[9,14,36,37,42,43],$VC=[9,14,36,37,38,39,40,41,42,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"DECLARAR":8,"puntycom":9,"INSTIF":10,"resif":11,"pariz":12,"EXPRESION":13,"parder":14,"llaveiz":15,"BLOQUEINST":16,"llaveder":17,"INSTELSE":18,"reselse":19,"TIPODATO":20,"id":21,"igual":22,"resint":23,"resdouble":24,"resstring":25,"resbool":26,"reschar":27,"print":28,"println":29,"menos":30,"mas":31,"divid":32,"por":33,"pot":34,"mod":35,"igualigual":36,"noigual":37,"mayorigual":38,"mayor":39,"menorigual":40,"menor":41,"and":42,"or":43,"not":44,"NATIVO":45,"numero":46,"decimal":47,"cadena":48,"bool":49,"caracter":50,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"puntycom",11:"resif",12:"pariz",14:"parder",15:"llaveiz",17:"llaveder",19:"reselse",21:"id",22:"igual",23:"resint",24:"resdouble",25:"resstring",26:"resbool",27:"reschar",28:"print",29:"println",30:"menos",31:"mas",32:"divid",33:"por",34:"pot",35:"mod",36:"igualigual",37:"noigual",38:"mayorigual",39:"mayor",40:"menorigual",41:"menor",42:"and",43:"or",44:"not",46:"numero",47:"decimal",48:"cadena",49:"bool",50:"caracter"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,2],[6,1],[10,8],[18,4],[18,2],[18,0],[8,4],[8,2],[8,3],[20,1],[20,1],[20,1],[20,1],[20,1],[7,5],[7,5],[16,1],[13,2],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,2],[13,3],[13,1],[13,1],[45,1],[45,1],[45,1],[45,1],[45,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
if($$[$0]!=false)$$[$0-1].push($$[$0]);this.$=$$[$0-1];
break;
case 3:
this.$=($$[$0]!=false) ?[$$[$0]]:[];
break;
case 4: case 6:
this.$=$$[$0];
break;
case 5:
this.$=$$[$0-1];
break;
case 7:
this.$=new If($$[$0-5],$$[$0-2],$$[$0],_$[$0-7].first_line,_$[$0-7].first_column);
break;
case 8:
this.$=$$[$0-1]
break;
case 9:
this.$=$$[$0]
break;
case 10:
this.$= null
break;
case 11:
this.$= new Declarar($$[$0-3],$$[$0-2],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);
break;
case 12:
this.$=new Declarar($$[$0-1],$$[$0],null,_$[$0-1].first_line,_$[$0-1].first_column);
break;
case 13:
this.$= new Declarar(tipo.NULL,$$[$0-2],$$[$0],_$[$0-2].first_line,_$[$0-2].first_column);
break;
case 14:
this.$=tipo.NUMERO;
break;
case 15:
this.$=tipo.DECIMAL;
break;
case 16:
this.$=tipo.STRING;
break;
case 17:
this.$=tipo.BOOLEAN;
break;
case 18:
this.$=tipo.CHAR;
break;
case 19:
this.$=new Print($$[$0-2],false,_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 20:
this.$=new Print($$[$0-2],true,_$[$0-4].first_line,_$[$0-4].first_column);
break;
case 21:
this.$=new Bloque($$[$0],_$[$0].first_line,_$[$0].first_column)
break;
case 22:
this.$= new Aritmetica($$[$0],new Nativo("-1",tipoNat.NUMERO, _$[$0-1].first_line, _$[$0-1].first_column),tipoArit.MULTIPLICACION, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 23:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.SUMA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 24:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.RESTA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 25:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 26:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 27:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.POTENCIA, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 28:
this.$= new Aritmetica($$[$0-2],$$[$0],tipoArit.MODULO, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 29:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.IGUALIGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 30:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.DIFERENTE, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 31:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 32:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 33:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR_IGUAL, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 34:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.MENOR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 35:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.AND, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 36:
this.$= new Relacional($$[$0-2],$$[$0],TipoRel.OR, _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 37:
this.$= new Relacional(null,$$[$0],TipoRel.NOT, _$[$0-1].first_line, _$[$0-1].first_column)
break;
case 38:
this.$ = $$[$0-1];
break;
case 39:
this.$ = $$[$0];
break;
case 40:
this.$= new Variable($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
case 41:
this.$=new Nativo($$[$0],tipoNat.NUMERO, _$[$0].first_line, _$[$0].first_column)
break;
case 42:
this.$=new Nativo($$[$0],tipoNat.DECIMAL, _$[$0].first_line, _$[$0].first_column)
break;
case 43:
this.$=new Nativo($$[$0],tipoNat.STRING, _$[$0].first_line, _$[$0].first_column)
break;
case 44:
this.$=new Nativo($$[$0],tipoNat.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
case 45:
this.$=new Nativo($$[$0],tipoNat.CHAR, _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,10:6,11:$V0,20:9,21:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},{1:[3]},{5:[1,17],6:18,7:4,8:5,10:6,11:$V0,20:9,21:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},o($V9,[2,3]),o($V9,[2,4]),{9:[1,19]},o($V9,[2,6]),{12:[1,20]},{12:[1,21]},{21:[1,22]},{22:[1,23]},{12:[1,24]},{21:[2,14]},{21:[2,15]},{21:[2,16]},{21:[2,17]},{21:[2,18]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,5]),{12:$Va,13:25,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:36,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{9:[2,12],22:[1,37]},{12:$Va,13:38,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:39,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{14:[1,40],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{12:$Va,13:55,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:56,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:57,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},o($Vx,[2,39]),o($Vx,[2,40]),o($Vx,[2,41]),o($Vx,[2,42]),o($Vx,[2,43]),o($Vx,[2,44]),o($Vx,[2,45]),{14:[1,58],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{12:$Va,13:59,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{9:[2,13],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{14:[1,60],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{9:[1,61]},{12:$Va,13:62,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:63,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:64,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:65,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:66,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:67,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:68,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:69,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:70,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:71,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:72,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:73,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:74,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},{12:$Va,13:75,21:$Vb,30:$Vc,44:$Vd,45:29,46:$Ve,47:$Vf,48:$Vg,49:$Vh,50:$Vi},o($Vx,[2,22]),o($Vy,[2,37],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu}),{14:[1,76],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{9:[1,77]},{9:[2,11],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{15:[1,78]},o($V9,[2,19]),o($Vz,[2,23],{32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($Vz,[2,24],{32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($VA,[2,25],{34:$Vn}),o($VA,[2,26],{34:$Vn}),o($Vx,[2,27]),o($VA,[2,28],{34:$Vn}),o($VB,[2,29],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,38:$Vr,39:$Vs,40:$Vt,41:$Vu}),o($VB,[2,30],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,38:$Vr,39:$Vs,40:$Vt,41:$Vu}),o($VC,[2,31],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($VC,[2,32],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($VC,[2,33],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($VC,[2,34],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo}),o($Vy,[2,35],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu}),o([9,14,43],[2,36],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($Vx,[2,38]),o($V9,[2,20]),{4:80,6:3,7:4,8:5,10:6,11:$V0,16:79,20:9,21:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},{17:[1,81]},{6:18,7:4,8:5,10:6,11:$V0,17:[2,21],20:9,21:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},o($V9,[2,10],{18:82,19:[1,83]}),o($V9,[2,7]),{10:85,11:$V0,15:[1,84]},{4:80,6:3,7:4,8:5,10:6,11:$V0,16:86,20:9,21:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},o($V9,[2,9]),{17:[1,87]},o($V9,[2,8])],
defaultActions: {12:[2,14],13:[2,15],14:[2,16],15:[2,17],16:[2,18],17:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

const {Aritmetica,tipoArit} = require('./expresion/Aritmetica')
const {Relacional,TipoRel} = require('./expresion/relaciones')
const {tipo} = require('./expresion/retorno')
const {Variable} = require('./expresion/variable')
const {Nativo,tipoNat} = require('./expresion/nativo')
const {Declarar} = require('./instrucciones/declarar')
const {Print} = require('./instrucciones/print')
const {Bloque} = require('./instrucciones/bloque')
const {If} = require('./instrucciones/If')
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://espacios en blanco
break;
case 1://comentario simple	
break;
case 2:return 31;
break;
case 3:return 30;
break;
case 4:return 32;
break;
case 5:return 33;
break;
case 6:return 34;
break;
case 7:return 35;
break;
case 8:return 12;
break;
case 9:return 14;
break;
case 10:return 15;
break;
case 11:return 17;
break;
case 12:return 'coma';
break;
case 13:return 9;
break;
case 14:return 'dospunt';
break;
case 15:return 28;
break;
case 16:return 29;
break;
case 17:return 11;
break;
case 18:return 19;
break;
case 19:return 23;
break;
case 20:return 24;
break;
case 21:return 25;
break;
case 22:return 26;
break;
case 23:return 27;
break;
case 24:return 36;
break;
case 25:return 37;
break;
case 26:return 22;
break;
case 27:return 38;                     
break;
case 28:return 39;
break;
case 29:return 40;
break;
case 30:return 41;
break;
case 31:return 43;
break;
case 32:return 42;
break;
case 33:return 44;
break;
case 34:return 49;
break;
case 35:return 47;
break;
case 36:return 46;
break;
case 37:return 21;
break;
case 38:return 50;
break;
case 39: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 48; 
break;
case 40:return 5;
break;
case 41:console.log(yy_.yylloc.first_line, yy_.yylloc.first_columm, 'Lexico', yy_.yytext)
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\/)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:,)/i,/^(?:;)/i,/^(?::)/i,/^(?:print\b)/i,/^(?:println\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:string\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:(true|false)\b)/i,/^(?:[0-9]+[.][0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:'[^\']')/i,/^(?:"[^\"]*")/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}