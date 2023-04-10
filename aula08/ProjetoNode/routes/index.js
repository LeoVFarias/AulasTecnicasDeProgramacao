const { json } = require('express');
const express = require('express')
//rotas (quando o servidor for acessado, para onde ele vai??) (endpoint)
const router = express.Router();

/*router.get('/',(req,res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    
    res.send('Taz Mania, ' + nome + 'tanto faz, ' + idade + ', faustãos')
})*/

/*router.get('/',(req,res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    
    res.json(
        nomeCom = nome + " " + sobrenome
    )
})*/

/*
router.get('/',(req,res)=>{
    res.json(req.query)
})

router.get('/post/:id',(req,res)=>{
    let id = req.params.id;
    res.send('ID: Post: '+ id)
})
*/



module.exports = router;

