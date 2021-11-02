const express = require('express');
const router = express.Router();
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado')
const usuarioLogado = require('../middlewares/retornarUsuarioLogado')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', async (rec, res) => {
    const {nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident} = req.body;
    //validação com express validator
    const prestador = await prestadorController.cadastrarPrestador({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident});
    res.render('prestador', {prestador});
}); 



module.exports = router;
