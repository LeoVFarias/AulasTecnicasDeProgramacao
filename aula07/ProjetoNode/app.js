//fazer a importação do express
const express = require('express')

//rotas (quando o servidor for acessado, para onde ele vai??) (endpoint)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá mundo')
})

//conf. básicas do app
const app = express();
app.use('/', router);//foi passado apenas uma rota, pois criamos apenas uma

module.exports = app;