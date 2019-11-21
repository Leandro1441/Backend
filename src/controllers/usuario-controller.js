'use strict';
const Sequelize = require('sequelize')
const db = require('../models/model-Usuario')
const Usuarios = db.Usuario
const Op = Sequelize.Op

exports.post = (req, res, next) => {
    const senha = req.params.senha;
    const usuario = req.params.usuario
    const senha2 = req.params.senha2
    console.log(usuario + ' ' + senha + ' ' + senha2)
    if (usuario.length > 7) {
        if (senha === senha2 && senha.length > 7) {
            Usuarios.create({
                usuario: usuario,
                senha: senha
            }).then(function (rowsCreated) {
                res.send('Usuario cadastrado com sucesso!')
            }).catch(function (erro) {
                if (erro == "SequelizeUniqueConstraintError: Validation error") {
                    res.send('Usuario já Existente!');
                }
                else {
                    res.send("Error " + erro)
                }
            })
        }
        else {
            res.send('Senhas Invalidas!');
        }
    }
    else {
        res.send('Usuario Invalido!');
    }
};

exports.get = (req, res, next) => {
    Usuarios.findAll().then(function (usuario) {
        if (usuario != '')
            res.send(usuario)
        else
            res.send([{ id: '?', senha: '?', usuario: '?' }])
    })
};

exports.getById = (req, res, next) => {
    Usuarios.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (rows) {
        if (rows != '')
            res.send(rows)
        else
            res.send('ID invalido!')
    }).catch(function (erro) {
        res.send("c" + erro)
    })
};

exports.getByUser = (req, res, next) => {
    Usuarios.findAll({
        where: {
            usuario: { [Op.like]: "%" + req.params.usuario + "%" }
        }
    }).then(function (rows) {
        if (rows != '')
            res.send(rows)
        else
            res.send([{ id: '?', senha: '?', usuario: '?' }])
    }).catch(function (erro) {
        res.send(erro)
    })
};

exports.login = (req, res, next) => {
    if (req.params.usuario.length > 7 && req.params.senha.length > 7) {
        Usuarios.findAll({
            where: {
                usuario: req.params.usuario,
                senha: req.params.senha
            }
        }).then(function (rows) {
            if (rows != '') {
                res.send(true)
            }
            else
                res.send(false)
        }).catch(function (erro) {
            res.send(erro)
        })
    }
    else {
        res.send(false)
    }
}

exports.put = (req, res, next) => {
    if (req.params.nusuario.length > 7 && req.params.nsenha.length > 7) {
        Usuarios.update({
            usuario: req.params.nusuario,
            senha: req.params.nsenha,
            updatedAt:Date.now()
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (rowsUpdate) {
            if (rowsUpdate > 0) {
                res.send(true)
            }
            else {
                res.send("a")
            }
        }).catch(function (error) {
            if (error.name == 'SequelizeUniqueConstraintError')
                res.send('b')
            else
                res.send(error)
        })
    }
    else
        res.send('c')
};

exports.delete = (req, res, next) => {
    Usuarios.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (rowsDeleted) {
        if (rowsDeleted === 1) {
            res.json("Usuario Deletado!")
        }
        else if (rowsDeleted === 0) {
            res.json("ID errado!")
        }
    }).catch(function (erro) {
        res.send("Error " + erro)
    });
}
