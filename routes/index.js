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
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('index', { title: 'Home', logged, style: 'home', usuario });
});

router.get('/como-funciona', (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('como-funciona', { title: 'Como Funciona', logged, usuario, style: 'como-funciona' });
});

router.get('/para-quem-contrata', (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('para-quem-contrata', { title: 'Contratar Serviço', logged, usuario, style: 'para-quem-contrata' });
});

router.get('/para-profissional', (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('para-profissional', { title: 'Prestar Serviço', logged, usuario, style: 'para-profissional' });
});


/* Login */
router.get('/login', (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  if (logged) {
    if (usuario.hasOwnProperty('cpf_cnpj')) {
      res.redirect('/dashboard-pedidos-prestador')
    } else {
      res.redirect('/solicitar-servico')
    }
  }
  res.render('login', { title: 'Entrar', logged, usuario, style: 'login' });
});

router.post("/login", async (req, res, next) => {
  const { email, senha, tipo } = req.body;
  let usuario
  if (tipo === 't') {
    // efetuar login com tomador
    try {
      usuario = await TomadoresController.logIn({ email, senha })
      req.session.user = usuario
      res.redirect('/solicitar-servico')
    } catch (err) {
      res.render("login", { message: err.message, logged: false, style: 'login', title: 'Entrar' })
    }
  } else {
    try {
      usuario = await PrestadoresController.logIn({ email, senha })
      req.session.user = usuario
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
  res.render('cadastro-tomador-servico', { title: 'Cadastro Tomador de Serviço', logged: false, style: 'cadastro-solicitante' });
});
// lembrar de colocar validacao para campos e aproveitar pra colocar a confirmacao da senha por lá
router.post('/cadastro-tomador-servico', async (req, res, next) => {
  const { nome, sobrenome, email, cpf, telefone, endereco, senha, confsenha } = req.body;
  if (senha !== confsenha) {
    throw new Error("Senhas não conferem!")
  }
  const usuario = await TomadoresController.criarUmTomador({ nome, sobrenome, email, cpf, telefone, endereco, senha })
  usuario.senha = ''
  req.session.user = usuario
  res.status(201).redirect('/solicitar-servico')
});

/* Minha Conta Tomador */
router.get('/minha-conta-tomador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('minha-conta-tomador', { title: 'Minha Conta - Tomador', logged, usuario, style: 'cadastro-solicitante' });
});

/* Editar Minha Conta Tomador */

router.post('/minha-conta-tomador', async (req, res, next) => {
  const { usuario } = usuarioLogado.loggedInfo(req.session.user)
  const { nome, sobrenome, email, cpf, endereco, senha, confsenha } = req.body
  console.log(req.body)
  try {
    await TomadoresController.editarUmTomador({ id: usuario.id, nome, sobrenome, email, endereco, cpf, senha, confsenha })
    req.session.user = { id: usuario.id, nome, sobrenome, email, endereco, cpf, senha, confsenha }
    res.status(201).redirect('/dashboard-tomador-pedido')
  } catch (err) {
    console.log(err)
  }
  
});

/* Cadastro Prestador */

router.get('/cadastro-prestador', (req, res, next) => {
  res.render('cadastro-prestador', { title: 'Cadastro Prestador', logged: false, style: 'cadastro-prestador' });
});

router.post('/cadastro-prestador', multer(multerConfig).fields([{ name: 'foto', maxCount: 1 }, { name: 'ident', maxCount: 1 }]), async (req, res, next) => {
  const { nome, sobrenome, cep, email, cpf_cnpj, telefone, senha, confsenha } = req.body;
  try {
    if (senha !== confsenha) {
      throw new Error("Senhas não conferem!")
    }
    const usuario = await PrestadoresController.criarUmPrestador({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil: '/uploads/foto/' + req.files['foto'][0].filename, imagem_identidade: '/uploads/ident/' + req.files['ident'][0].filename })
    usuario.senha = ''
    usuario.cpf_cnpj = ''
    usuario.imagem_identidade = ''
    req.session.user = usuario
    res.status(201).redirect('/assinatura-de-plano')
  } catch (err) {
    res.render("cadastro-prestador", { message: err.message, logged: false, style: 'cadastro-prestador', title: 'Cadastro Prestador' })
  }
});

/* Minha Conta Prestador */
router.get('/minha-conta-prestador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('minha-conta-prestador', { title: 'Minha Conta - Prestador', logged, usuario, style: 'dashboard-pedidos-prestador' });
});

/* Editar Minha Conta Prestador */
router.post('/minha-conta-prestador', async (req, res, next) => {
  const { usuario } = usuarioLogado.loggedInfo(req.session.user)
  const { nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha } = req.body
  try {
    await PrestadoresController.editarUmPrestador({ id: usuario.id, nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil: usuario.imagem_perfil, imagem_identidade: usuario.imagem_identidade })
    req.session.user = { id: usuario.id, nome, sobrenome, email, cep, cpf_cnpj, telefone, imagem_perfil: usuario.imagem_perfil }
    res.status(201).redirect('/dashboard-pedidos-prestador')
  } catch (err) {
    console.log(err)
  }
  
});

router.get('/dashboard-pedidos-prestador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged, usuario, style: 'dashboard-pedidos-prestador' });
});

router.get('/dashboard-pedidos-prestador-status', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('dashboard-pedidos-prestador-status', { title: 'Dashboard Prestador - Status', logged, usuario, style: "dashboard-pedidos-prestador-status" });
});

router.get('/solicitar-servico', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico', { title: 'Solicitar serviço', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-eletricista', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-eletricista', { title: 'Solicitar Eletricista', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

router.get('/solicitar-servico-encanador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-encanador', { title: 'Solicitar Encanador', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
});


router.get('/solicitar-servico-pintor', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-pintor', { title: 'Solicitar Pintor', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
});


router.get('/criar-conta', (req, res, next) => {
  res.render('criar-conta', { title: 'Tipo de Conta', logged: false, style: 'cadastro-parceiro' });
});

router.get('/assinatura-de-plano', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('assinatura-plano', { title: 'Assinar Plano', logged, usuario, style: 'cadastro-parceiro' });
});

router.get('/escolha-de-plano', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('escolha-plano', { title: 'Escolher Plano', logged, usuario, style: 'cadastro-parceiro' });
});

router.get('/dashboard-pedidos-tomador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('dashboard-pedidos-tomador', { title: 'Dashboard Tomador', logged, usuario, style: 'dashboard-pedidos-tomador' });
});

router.get('/dashboard-tomador-pedido', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('dashboard-tomador-pedido', { title: 'Dashboard Tomador - Pedido', logged, usuario, style: 'dashboard-tomador-pedido' });
});

module.exports = router;
