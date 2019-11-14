'use strict';

const express = require('express');
const router = express.Router();
const control = require('../controllers/usuario-controller');

router.post('/', control.post);
router.delete('/:id', control.delete);
router.put('/:id', control.put);
router.get('/',control.get)

module.exports = router;