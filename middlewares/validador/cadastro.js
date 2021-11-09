const { check } = require("express-validator");

exports.nomeValidador = check("nome")
  .notEmpty()
  .withMessage("Nome é requerido")
  .isLength({ max: 100 })
  .withMessage("Nome deve ter no máximo 100 caracteres");
exports.sobrenomeValidador = check("sobrenome")
  .notEmpty()
  .withMessage("Sobrenome é requerido")
  .isLength({ max: 100 })
  .withMessage("Sobrenome é requerido e com no máximo 100 caracteres");
exports.emailValidador = check("email")
  .notEmpty()
  .withMessage("Email é requerido")
  .isEmail()
  .withMessage("Precisa ser um email válido")
  .isLength({ max: 120 })
  .withMessage("Email é requerido e com no máximo 120 caracteres");
exports.cpfValidador = check("cpf")
  .notEmpty()
  .withMessage("CPF é requerido")
  .isLength({ max: 11 })
  .withMessage("CPF é requerido e com no máximo 11 caracteres");
exports.cpfcnpjValidador = check("cpf_cnpj")
  .notEmpty()
  .withMessage("CPF/CNPJ é requerido")
  .isLength({ max: 14 })
  .withMessage("CPF/CNPJ é requerido e com no máximo 14 caracteres");
exports.enderecoValidador = check("endereco")
  .notEmpty()
  .withMessage("Endereço é requerido")
  .isLength({ max: 150 })
  .withMessage("Endereço é requerido e com máximo de 150 caracteres");
exports.imagemPerfilValidador = check("imagem_perfil")
  .notEmpty()
  .withMessage("Imagem Perfil é requerida")
  .isLength({ max: 150 })
  .withMessage("Imagem perfil requerida");
exports.imagemIdentidadeValidador = check("imagem_identidade")
  .notEmpty()
  .withMessage("Imagem Identidade é requerida")
  .isLength({ max: 150 })
  .withMessage("Imagem identidade requerida");
exports.cepValidador = check("cep")
  .notEmpty()
  .withMessage("Cep é requerido")
  .isLength({ min: 8, max: 8 })
  .withMessage("Endereço é requerido e com máximo de 150 caracteres");
exports.senhaValidador = check("senha")
  .notEmpty()
  .withMessage("Senha é requerido")
  .isLength({ min: 6, max: 16 })
  .withMessage("Senha deve ter entre 6 e 16 caracteres");
exports.telefoneValidador = check("telefone")
  .notEmpty()
  .withMessage("Telefone é requerido")
  .isLength({ max: 11 })
  .withMessage("Telefone é requerido");
// validacao no cadastro do pedido
exports.descricaoResidenciaValidador = check("descricao_residencia")
  .notEmpty()
  .withMessage("Descrição da residência é requerida");
exports.descricaoDemandaValidador = check("descricao_demanda")
  .notEmpty()
  .withMessage("Descrição da demanda é requerida");
exports.descricaoSolicitacaoValidador = check("descricao_solicitacao")
  .notEmpty()
  .withMessage("Descrição da solicitação é requerida")
  .isLength({ max: 240 })
  .withMessage("Descrição da solicitação pode ter no máximo 240 caracteres");
