const express = require('express');
const router = express.Router();

router.post('/', async (rec, res) => {
    const {nome, sobrenome, email, telefone, endereco, senha, confsenha} = req.body;
    //validação com express validator
    const tomador = await tomadorController.cadastrarTomador({nome, sobrenome, email, telefone, endereco, senha, confsenha});
    res.render('tomador', {tomador});
}); 

module.export = router;