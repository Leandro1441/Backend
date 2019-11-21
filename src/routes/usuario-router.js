'use strict';

const express = require('express');
const router = express.Router();
const control = require('../controllers/usuario-controller');

router.post('/:usuario/:senha/:senha2', control.post);
router.delete('/:id', control.delete);
router.put('/:id/:nusuario/:nsenha', control.put);

router.get('/', control.get)

router.get('/login/:usuario/:senha', control.login)

router.get('/user/:usuario', control.getByUser)

router.get('/id/:id', control.getById)

module.exports = router;