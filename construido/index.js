const parser = require('./gramatica/gramatica')
const {graficarArbol} = require('./gramatica/graficar')
const express = require('express')
const cors=require('cors')
const  {NodoAst} = require('./gramatica/simbolo/NodoAst')

const app = express()
const dot=""

app.use(express.json())
app.use(cors())

const PORT = 5000


app.post('/ast', (req, res) => {
    const contenido = req.body.codigo
    console.log(req.body)
    console.log("------------")
    const resultado = parser.parse(contenido)
    let respuesta =""
    try {

        let init = new NodoAst('INIT')
        let instrucciones = new NodoAst('INSTRUCCIONES')
        for (const iterar of resultado) {
            instrucciones.agregarHijoAST(iterar.getNodo())
        }
        init.agregarHijoAST(instrucciones)
        //En este punto, el arbol ast a nivel de codigo esta realizado
        respuesta = {"result":graficarArbol(init)};
    } catch (error) {
        console.log(error)
    }
    
    return res.send(JSON.stringify(respuesta))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))