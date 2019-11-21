const express = require('express')
const bodyParser = require('body-parser')
const indexRouters = require('./routes/index-router')
const usuarioRouters = require('./routes/usuario-router')

const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    res.setHeader('Access-Control-Allow-Credentials', 1);

    next();
  });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRouters);
app.use('/usuario', usuarioRouters);

module.exports = app;