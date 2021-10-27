const express = require('express');
const PrestadoresController = require('../controllers/PrestadoresController');
const TomadoresController = require('../controllers/TomadoresController');
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado');
const usuarioLogado = require('../middlewares/retornarUsuarioLogado')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', logged: false, style: 'home' });
});

/* Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Entrar', logged: false, style: 'login' });
});

router.post("/login", async (req, res, next) => {
  const { email, senha, tipo } = req.body;
  console.log(req.body)
  console.log(email)
  console.log(senha)
  let usuario
  if (tipo === 't') {
    // efetuar login com tomador
    try {
      usuario = await TomadoresController.logIn({ email, senha })
      req.session.user = usuario
      console.log(req.session)
      res.redirect('/criar-conta')
    } catch (err) {
      res.render("login", { message: err.message, logged: false, style: 'login', title: 'Entrar' })
    }
  } else {
    try {
      usuario = await PrestadoresController.logIn({ email, senha })
      req.session.user = usuario
      console.log(req.session)
      res.redirect('/criar-conta')
    } catch (err) {
      res.render("login", { message: err.message, logged: false, style: 'login', title: 'Entrar' })
    }
  }
});

/* Logout */
router.get('/logout', function(req, res) {
  req.session.destroy()
  res.redirect('/')
})

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
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged: true, style: 'dashboard-pedidos-prestador' });
});

router.get('/dashboard-pedidos-prestador-status', function(req, res, next) {
  res.render('dashboard-pedidos-prestador-status', { title: 'Dashboard Prestador - Status', logged: true, style: "dashboard-pedidos-prestador-status" });
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

router.get('/cadastro-prestador', function(req, res, next) {
  res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: true, style: 'cadastro-prestador' });
});

router.get('/criar-conta', seUsuarioLogado, function(req, res, next) {
  let usuario
  let logged
  if (req.session && req.session.user) {
    usuario = req.session.user
    logged = true
  } 
  res.render('criar-conta', { title: 'Tipo de Conta', logged, style: 'cadastro-parceiro', usuario });
});

router.get('/assinatura-de-plano', function(req, res, next) {
  res.render('assinatura-plano', { title: 'Assinar Plano', logged: true, style: 'cadastro-parceiro' });
});

router.get('/escolha-de-plano', function(req, res, next) {
  res.render('escolha-plano', { title: 'Escolher Plano', logged: true, style: 'cadastro-parceiro' });
});

router.get('/dashboard-pedidos-tomador', function(req, res, next) {
  res.render('dashboard-pedidos-tomador', { title: 'Dashboard Tomador', logged: true, style: 'dashboard-pedidos-tomador' });
});

router.get('/dashboard-tomador-pedido', function(req, res, next) {
  res.render('dashboard-tomador-pedido', { title: 'Dashboard Tomador - Pedido', logged: true, style: 'dashboard-tomador-pedido' });
});

module.exports = router;
