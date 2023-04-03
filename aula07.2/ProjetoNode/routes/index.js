const express = require('express')
//rotas (quando o servidor for acessado, para onde ele vai??) (endpoint)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('kuslçagvavukdadpgfdiusapgbiusdbpfsiuhbaoufsdbgpsdibiufabgpdiau')
})

module.exports = router;

router.get('/contato',(req,res)=>{
    res.send('2d')
})

module.exports = router;

