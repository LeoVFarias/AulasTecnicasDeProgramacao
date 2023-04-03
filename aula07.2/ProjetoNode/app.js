//fazer a importação do express
const express = require('express')
const router = require('./routes/index')

//conf. básicas do app
const app = express();
app.use('/', router);//foi passado apenas uma rota, pois criamos apenas uma

module.exports = app;