var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', logged: false, style: 'home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Entrar', logged: false, style: 'login' });
});

router.get('/como-funciona', function(req, res, next) {
  res.render('como-funciona', { title: 'Como Funciona', logged: false, style: 'como-funciona' });
});

router.get('/para-quem-contrata', function(req, res, next) {
  res.render('para-quem-contrata', { title: 'Contratar Serviço', logged: false, style: 'para-quem-contrata' });
});

router.get('/para-profissional', function(req, res, next) {
  res.render('para-profissional', { title: 'Prestar Serviço', logged: false, style: 'para-profissional' });
});

router.get('/dashboard-pedidos-prestador', function(req, res, next) {
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged: true, style: "dashboard-pedidos-prestador" });
});

router.get('/solicitar-servico', function(req, res, next) {
  res.render('solicitar-servico', { title: 'Solicitar serviço', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-eletricista', function(req, res, next) {
  res.render('solicitar-servico-eletricista', { title: 'Solicitar Eletricista', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-encanador', function(req, res, next) {
  res.render('solicitar-servico-encanador', { title: 'Solicitar Encanador', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});


router.get('/solicitar-servico-pintor', function(req, res, next) {
  res.render('solicitar-servico-pintor', { title: 'Solicitar Pintor', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/cadastro-tomador-servico', function(req, res, next) {
  res.render('cadastro-tomador-servico', { title: 'Cadastro Tomador de Serviço', logged: true, style: 'cadastro-solicitante' });
});

router.get('/dashboard-pedidos-tomador', function(req, res, next) {
  res.render('dashboard-pedidos-tomador', { title: 'Dashboard Tomador', logged: true, style: "dashboard-pedidos-tomador" });
});

router.get('/cadastro-prestador', function(req, res, next) {
  res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: true, style: 'cadastro-prestador' });
});

router.get('/criar-conta', function(req, res, next) {
  res.render('criar-conta', { title: 'Tipo de Conta', logged: true, style: 'cadastro-parceiro' });
});

router.get('/assinatura-de-plano', function(req, res, next) {
  res.render('assinatura-plano', { title: 'Assinar Plano', logged: true, style: 'cadastro-parceiro' });
});

router.get('/escolha-de-plano', function(req, res, next) {
  res.render('escolha-plano', { title: 'Escolher Plano', logged: true, style: 'cadastro-parceiro' });
});

// rotas adicionais para cada página deve ser criada aqui
//router.get('/nome-da-pagina', function(req, res, next) {
//  res.render('nome-da-view', { title: 'Titulo da pagina' });
//});

module.exports = router;
