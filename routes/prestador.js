const express = require('express');
const router = express.Router();
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado')
const usuarioLogado = require('../middlewares/retornarUsuarioLogado')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/cadastro', (req, res, next) => {
    res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: false, style: 'cadastro-prestador' });
});



module.exports = router;
