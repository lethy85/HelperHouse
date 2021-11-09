const express = require('express');
const router = express.Router();
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado')
const usuarioLogado = require('../middlewares/retornarUsuarioLogado')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});




module.exports = router;
