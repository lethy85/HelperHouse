var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', logged: false });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Entrar', logged: false });
});

router.get('/como-funciona', function(req, res, next) {
  res.render('como-funciona', { title: 'Como Funciona', logged: false });
});

router.get('/para-quem-contrata', function(req, res, next) {
  res.render('para-quem-contrata', { title: 'Contratar Serviço', logged: false });
});

router.get('/para-profissional', function(req, res, next) {
  res.render('para-profissional', { title: 'Prestar Serviço', logged: false });
});

router.get('/dashboard-pedidos-prestador', function(req, res, next) {
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged: true });
});
// rotas adicionais para cada página deve ser criada aqui
//router.get('/nome-da-pagina', function(req, res, next) {
//  res.render('nome-da-view', { title: 'Titulo da pagina' });
//});

module.exports = router;
