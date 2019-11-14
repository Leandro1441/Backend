const express = require('express')
const bodyParser = require('body-parser')
const mysql=require('mysql')


const app = express();
const indexRouters = require('./routes/index-router')
const usuarioRouters = require('./routes/usuario-router')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRouters);
app.use('/usuario', usuarioRouters);

module.exports = app;