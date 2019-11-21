const db = require('../../bin/db')
const op = db.sequelize.op;
const Usuario = db.sequelize.define('usuarios', {
    usuario: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

//Usuario.sync({force:true});

module.exports ={Usuario, op}