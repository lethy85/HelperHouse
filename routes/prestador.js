const express = require('express');
const router = express.Router();

router.post('/', async (rec, res) => {
    const {nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident} = req.body;
    //validação com express validator
    const prestador = await prestadorController.cadastrarPrestador({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident});
    res.render('prestador', {prestador});
}); 

module.export = router;