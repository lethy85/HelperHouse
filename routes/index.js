const express = require('express');
const PrestadoresController = require('../controllers/PrestadoresController');
const TomadoresController = require('../controllers/TomadoresController');
const PedidosController = require('../controllers/PedidosController');
const StatusController = require('../controllers/StatusController');
const ServicosController = require('../controllers/ServicosController');
const seUsuarioLogado = require('../middlewares/verificarSeUsuarioLogado');
const usuarioLogado = require('../middlewares/retornarUsuarioLogado');
const validadorCadastro = require('../middlewares/validador/cadastro')
const { nomeValidador, sobrenomeValidador, emailValidador, cpfValidador, cpfcnpjValidador, cepValidador, telefoneValidador, enderecoValidador, senhaValidador, descricaoResidenciaValidador, descricaoDemandaValidador, descricaoSolicitacaoValidador, servicoValidador } = validadorCadastro
const validadorCadastroTomador = [nomeValidador, sobrenomeValidador, emailValidador, cpfValidador, enderecoValidador, senhaValidador]
const validadorCadastroPrestador = [nomeValidador, sobrenomeValidador, emailValidador, cpfcnpjValidador, cepValidador, telefoneValidador, senhaValidador, servicoValidador]
const validadorCadastroPedido = [enderecoValidador, descricaoSolicitacaoValidador, descricaoDemandaValidador, descricaoResidenciaValidador]
const multer = require('multer');
const multerConfig = require('../config/multer');
const router = express.Router();
const { validationResult } = require("express-validator");

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
  res.render('cadastro-tomador-servico', { title: 'Cadastro Tomador de Serviço', logged: false, errors: false, style: 'cadastro-solicitante' });
});
// lembrar de colocar validacao para campos e aproveitar pra colocar a confirmacao da senha por lá
router.post('/cadastro-tomador-servico', validadorCadastroTomador, async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.render("cadastro-tomador-servico", { errors, title: 'Cadastro Tomador de Serviço', logged: false, style: 'cadastro-solicitante' });
  }
  const { nome, sobrenome, email, cpf, telefone, endereco, senha, confsenha } = req.body;

  try {
    const usuario = await TomadoresController.criarUmTomador({ nome, sobrenome, email, cpf, telefone, endereco, senha, confsenha })
    usuario.senha = ''
    req.session.user = usuario
    res.status(201).redirect('/solicitar-servico')
  } catch (err) {
    res.render("cadastro-tomador-servico", { message: err.message, errors: false , title: 'Cadastro Tomador de Serviço', logged: false, style: 'cadastro-solicitante' })
  }
});

/* Minha Conta Tomador */
router.get('/minha-conta-tomador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('minha-conta-tomador', { title: 'Minha Conta - Tomador', logged, usuario, style: 'cadastro-solicitante' });
});

/* Editar Minha Conta Tomador */

router.post('/minha-conta-tomador', seUsuarioLogado, async (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const { nome, sobrenome, email, cpf, endereco, senha, confsenha } = req.body
  console.log(req.body)
  try {
    await TomadoresController.editarUmTomador({ id: usuario.id, nome, sobrenome, email, endereco, cpf, senha, confsenha })
    req.session.user = { id: usuario.id, nome, sobrenome, email, endereco, cpf, senha, confsenha }
    res.status(201).redirect('/minha-conta-tomador')
  } catch (err) {
    res.render("minha-conta-tomador", { message: err.message, title: 'Minha Conta - Tomador', logged, usuario, style: 'cadastro-solicitante'  })
  }
});

/* Cadastro Prestador */

router.get('/cadastro-prestador', (req, res, next) => {
  res.render('cadastro-prestador', { title: 'Cadastro Prestador', errors:false, logged: false, style: 'cadastro-prestador' });
});

router.post('/cadastro-prestador', multer(multerConfig).fields([{ name: 'foto', maxCount: 1 }, { name: 'ident', maxCount: 1 }]), validadorCadastroPrestador, async (req, res, next) => {
  const errors = validationResult(req);
  console.log(req)
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.render("cadastro-prestador", { errors , usuario: req.body, title: 'Cadastro Prestador', logged: false, style: 'cadastro-prestador' });
  }
  const { nome, sobrenome, cep, email, cpf_cnpj, telefone, senha, confsenha, servico_id } = req.body;
  try {
    const dateInit = new Date().toLocaleDateString().replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, "$3-$2-$1")
    const usuario = await PrestadoresController.criarUmPrestador({ nome, sobrenome, servico_id, email, cep, cpf_cnpj, telefone, data_inicio: dateInit, senha, confsenha, imagem_perfil: '/uploads/foto/' + req.files['foto'][0].filename, imagem_identidade: '/uploads/ident/' + req.files['ident'][0].filename })
    usuario.senha = ''
    usuario.imagem_identidade = ''
    req.session.user = usuario
    res.status(201).redirect('/plano')
  } catch (err) {
    res.render("cadastro-prestador", { message: err.message, errors: false, logged: false, style: 'cadastro-prestador', title: 'Cadastro Prestador' })
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
    await PrestadoresController.editarUmPrestador({ id: usuario.id, nome, sobrenome, email, data_inicio: usuario.data_inicio, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil: usuario.imagem_perfil, imagem_identidade: usuario.imagem_identidade })
    req.session.user = { id: usuario.id, nome, sobrenome, email, cep, cpf_cnpj, data_inicio: usuario.data_inicio, telefone, imagem_perfil: usuario.imagem_perfil }
    res.status(201).redirect('/dashboard-pedidos-prestador')
  } catch (err) {
    console.log(err)
  }
});

/* Listar Pedidos Prestador */

router.get('/dashboard-pedidos-prestador', seUsuarioLogado, async (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedidos = await PedidosController.listarTodosPorPrestadorEServico({ prestador_id: 1, servico_id: usuario.servico_id })
  const status = await StatusController.listarTodos()
  res.render('dashboard-pedidos-prestador', { title: 'Dashboard Prestador', logged, usuario, pedidos, status, style: 'dashboard-pedidos-tomador' });
});

/* Listar Servicos Prestador */

router.get('/dashboard-servicos-prestador', seUsuarioLogado, async (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedidos = await PedidosController.listarTodosPorPrestadorEServico({ prestador_id: usuario.id, servico_id: usuario.servico_id })
  const status = await StatusController.listarTodos()
  res.render('dashboard-servicos-prestador', { title: 'Dashboard Prestador', logged, usuario, pedidos, status, style: 'dashboard-pedidos-tomador' });
});

/* Mostrar Detalhes do Pedido Prestador */
router.get('/dashboard-prestador-pedido/:id', seUsuarioLogado, async (req, res, next) => {
  const { id } = req.params
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedido = await PedidosController.buscarPedidoPeloId(id)
  res.render('dashboard-prestador-pedido', { title: 'Dashboard Prestador - Pedido', logged, usuario, pedido, style: 'dashboard-tomador-pedido' });
});

/* Aceitar Serviço */
router.post('/dashboard-prestador-pedido/:id', seUsuarioLogado, async (req, res, next) => {
  const { id } = req.params
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const { prestador_id, price } = req.body
  try {
    await PedidosController.inserirPrestadorPedido({ id, prestador_id, price: Number(price) })
    res.redirect('/dashboard-servicos-prestador')
  } catch (error) {
    console.log(error) 
  }
});


/* Nova solicitação */

router.get('/solicitar-servico', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico', { title: 'Solicitar serviço', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

/* Nova solicitação - Eletricista */

router.get('/solicitar-servico-eletricista', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-eletricista', { title: 'Solicitar Eletricista', logged, errors: false, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

router.post('/solicitar-servico-eletricista', validadorCadastroPedido, async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors)
  console.log(!errors.isEmpty())
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  if (!errors.isEmpty()) {
    return res.render("solicitar-servico-eletricista", { errors , cadastro: req.body, title: 'Solicitar Eletricista', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
  }
  
  const { descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, descricao_solicitacao } = req.body
  try {
    const pedidoCriado = await PedidosController.criarUmPedido({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id: usuario.id })
    console.log(pedidoCriado)
    req.session.order = pedidoCriado
    console.log(req.session.order)
    res.status(201).redirect('/dashboard-pedidos-tomador')
  } catch (err) {
    console.log(err)
  }
});

/* Nova solicitação - Encanador */

router.get('/solicitar-servico-encanador', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-encanador', { title: 'Solicitar Encanador', logged, errors: false, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

router.post('/solicitar-servico-encanador', validadorCadastroPedido, async (req, res, next) => {
  const errors = validationResult(req);
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  if (!errors.isEmpty()) {
    return res.render("solicitar-servico-encanador", { errors , cadastro: req.body, title: 'Solicitar Encanador', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
  }
  const { descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, descricao_solicitacao } = req.body
  try {
    const pedidoCriado = await PedidosController.criarUmPedido({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id: usuario.id })
    console.log(pedidoCriado)
    req.session.order = pedidoCriado
    console.log(req.session.order)
    res.status(201).redirect('/dashboard-pedidos-tomador')
  } catch (err) {
    console.log(err)
  }
});


/* Nova solicitação - Pintor */
router.get('/solicitar-servico-pintor', seUsuarioLogado, (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  res.render('solicitar-servico-pintor', { title: 'Solicitar Pintor', logged, errors: false, usuario, style: 'novaSolicitaçãoTomadorServico' });
});

router.post('/solicitar-servico-pintor', validadorCadastroPedido, async (req, res, next) => {
  const errors = validationResult(req);
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  if (!errors.isEmpty()) {
    return res.render("solicitar-servico-pintor", { errors , cadastro: req.body, title: 'Solicitar pintor', logged, usuario, style: 'novaSolicitaçãoTomadorServico' });
  }
  const { descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, descricao_solicitacao } = req.body
  try {
    const pedidoCriado = await PedidosController.criarUmPedido({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id: usuario.id })
    console.log(pedidoCriado)
    req.session.order = pedidoCriado
    console.log(req.session.order)
    res.status(201).redirect('/dashboard-pedidos-tomador')
  } catch (err) {
    console.log(err)
  }
});

/* Listar Pedidos Tomador */

router.get('/dashboard-pedidos-tomador', seUsuarioLogado, async (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedidos = await PedidosController.listarTodosPorTomador({ tomador_id: usuario.id })
  const status = await StatusController.listarTodos()
  res.render('dashboard-pedidos-tomador', { title: 'Dashboard Tomador', logged, usuario, pedidos, status, style: 'dashboard-pedidos-tomador' });
});

/* Mostrar Detalhes do Pedido */
router.get('/dashboard-tomador-pedido/:id', seUsuarioLogado, async (req, res, next) => {
  const { id } = req.params
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedido = await PedidosController.buscarPedidoPeloId(id)
  const prestador = await PrestadoresController.buscarPrestadorPeloId(pedido.prestador_id)
  const status = await StatusController.buscarStatusPeloId(pedido.status_id)
  const servico = await ServicosController.buscarServicoPorId(pedido.servico_id)
  res.render('dashboard-tomador-pedido', { title: 'Dashboard Tomador - Pedido', logged, usuario, pedido, prestador, status, servico, style: 'dashboard-tomador-pedido' });
});

/* Ação no Pedido */
router.post('/dashboard-tomador-pedido/:id', async (req, res, next) => {
  const { id } = req.params
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const { status_id, prestador_id, price } = req.body
  console.log(status_id)
  try {
    const editOrder = await PedidosController.editarStatusPedido({ id, status_id, prestador_id, price })
    console.log(editOrder)
    res.redirect('/dashboard-pedidos-tomador')
  } catch (error) {
    console.log(error) 
  }
});

/* Criar Conta Por Tipo */

router.get('/criar-conta', (req, res, next) => {
  res.render('criar-conta', { title: 'Tipo de Conta', logged: false, style: 'cadastro-parceiro' });
});

router.get('/plano', seUsuarioLogado, async (req, res, next) => {
  const { logged, usuario } = usuarioLogado.loggedInfo(req.session.user)
  const pedidos = await PedidosController.listarTodosPorPrestadorEServico({ prestador_id: usuario.id, servico_id: usuario.servico_id })
  res.render('plano', { title: 'Plano', logged, usuario, pedidos, style: 'cadastro-parceiro' });
});

module.exports = router;
