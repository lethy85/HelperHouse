const express = require('express');
const PrestadoresController = require('../controllers/PrestadoresController');
const TomadoresController = require('../controllers/TomadoresController');
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado');
const usuarioLogado = require('../middlewares/retornarUsuarioLogado');
const multer = require('multer');
const multerConfig = require('../config/multer');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const { logged } = usuarioLogado.loggedInfo(req.session.user)
  res.render('index', { title: 'Home', logged, style: 'home' });
});

router.get('/como-funciona', (req, res, next) => {
  res.render('como-funciona', { title: 'Como Funciona', logged: false, style: 'como-funciona' });
});

router.get('/para-quem-contrata', (req, res, next) => {
  res.render('para-quem-contrata', { title: 'Contratar Serviço', logged: false, style: 'para-quem-contrata' });
});

router.get('/para-profissional', (req, res, next) => {
  res.render('para-profissional', { title: 'Prestar Serviço', logged: false, style: 'para-profissional' });
});


/* Login */
router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Entrar', logged: false, style: 'login' });
});

router.post("/login", async (req, res, next) => {
  const { email, senha, tipo } = req.body;
  let usuario
  if (tipo === 't') {
    // efetuar login com tomador
    try {
      usuario = await TomadoresController.logIn({ email, senha })
      req.session.user = usuario
      console.log(req.session)
      res.redirect('/solicitar-servico')
    } catch (err) {
      res.render("login", { message: err.message, logged: false, style: 'login', title: 'Entrar' })
    }
  } else {
    try {
      usuario = await PrestadoresController.logIn({ email, senha })
      req.session.user = usuario
      console.log(req.session)
      res.redirect('/dashboard-pedidos-prestador')
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

/* Cadastro tomador */
router.get('/cadastro-tomador-servico', (req, res, next) => {
  res.render('cadastro-tomador-servico', { title: 'Cadastro Tomador de Serviço', logged: true, style: 'cadastro-solicitante' });
});
// lembrar de colocar validacao para campos e aproveitar pra colocar a confirmacao da senha por lá
router.post('/cadastro-tomador-servico', async (req, res, next) => {
  const { nome, sobrenome, email, cpf, telefone, endereco, senha, confsenha } = req.body;
  console.log(req.body)
  if (senha !== confsenha) {
    throw new Error("Senhas não conferem!")
  }
  const usuario = await TomadoresController.criarUmTomador({ nome, sobrenome, email, cpf, telefone, endereco, senha })
  usuario.senha = ''
  req.session.user = usuario
  res.status(201).redirect('/solicitar-servico')
});

/* Cadastro Prestador */

router.get('/cadastro-prestador', (req, res, next) => {
  res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: false, style: 'cadastro-prestador' });
});

router.post('/cadastro-prestador', multer(multerConfig).fields([{ name: 'foto', maxCount: 1 }, { name: 'ident', maxCount: 1 }]), async (req, res, next) => {
  const { nome, sobrenome, cep, email, cpf_cnpj, telefone, senha, confsenha } = req.body;
 
  //const imagem_perfil = { imagem_perfil: '/uploads/foto/' + req.files['foto'][0].filename }
  //const imagem_ident = { imagem_ident: '/uploads/ident/' + req.files['ident'][0].filename }
/*   req.body.imagem_perfil = '/uploads/foto/' + req.files['foto'][0].filename
  req.body.imagem_ident = '/uploads/ident/' + req.files['ident'][0].filename */
  console.log(req.body)
  if (senha !== confsenha) {
    throw new Error("Senhas não conferem!")
  }
  console.log({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil: '/uploads/foto/' + req.files['foto'][0].filename, imagem_identidade: '/uploads/ident/' + req.files['ident'][0].filename })
  const usuario = await PrestadoresController.criarUmPrestador({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil: '/uploads/foto/' + req.files['foto'][0].filename, imagem_identidade: '/uploads/ident/' + req.files['ident'][0].filename })
  usuario.senha = ''
  usuario.cpf_cnpj = ''
  usuario.imagem_identidade = ''
  req.session.user = usuario
  res.status(201).redirect('/assinatura-de-plano')

  res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: false, style: 'cadastro-prestador' });
});

router.get('/dashboard-pedidos-prestador', seUsuarioLogado, (req, res, next) => {
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged: true, style: 'dashboard-pedidos-prestador' });
});

router.get('/dashboard-pedidos-prestador-status', seUsuarioLogado, (req, res, next) => {
  res.render('dashboard-pedidos-prestador-status', { title: 'Dashboard Prestador - Status', logged: true, style: "dashboard-pedidos-prestador-status" });
});

router.get('/solicitar-servico', (req, res, next) => {
  res.render('solicitar-servico', { title: 'Solicitar serviço', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-eletricista', (req, res, next) => {
  res.render('solicitar-servico-eletricista', { title: 'Solicitar Eletricista', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-encanador', (req, res, next) => {
  res.render('solicitar-servico-encanador', { title: 'Solicitar Encanador', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});


router.get('/solicitar-servico-pintor', (req, res, next) => {
  res.render('solicitar-servico-pintor', { title: 'Solicitar Pintor', logged: true, style: 'novaSolicitaçãoTomadorServico' });
});


router.get('/criar-conta', (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('criar-conta', { title: 'Tipo de Conta', logged, style: 'cadastro-parceiro', usuario });
});

router.get('/assinatura-de-plano', (req, res, next) => {
  res.render('assinatura-plano', { title: 'Assinar Plano', logged: true, style: 'cadastro-parceiro' });
});

router.get('/escolha-de-plano', (req, res, next) => {
  res.render('escolha-plano', { title: 'Escolher Plano', logged: true, style: 'cadastro-parceiro' });
});

router.get('/dashboard-pedidos-tomador', (req, res, next) => {
  res.render('dashboard-pedidos-tomador', { title: 'Dashboard Tomador', logged: true, style: 'dashboard-pedidos-tomador' });
});

router.get('/dashboard-tomador-pedido', (req, res, next) => {
  res.render('dashboard-tomador-pedido', { title: 'Dashboard Tomador - Pedido', logged: true, style: 'dashboard-tomador-pedido' });
});

module.exports = router;
