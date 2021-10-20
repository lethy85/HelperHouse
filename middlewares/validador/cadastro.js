const { check } = require("express-validator");

exports.nome = check("nome")
  .notEmpty()
  .withMessage("Nome é requerido")
  .bail();
exports.sobrenome = check("sobrenome")
  .notEmpty()
  .withMessage("Sobrenome é requerido")
  .bail();
exports.email = check("email")
  .notEmpty()
  .isEmail()
  .withMessage("Email é requerido");
exports.telefone = check("telefone")
  .notEmpty()
  .isEmail()
  .withMessage("Email é requerido");
exports.endereco = check("endereco")
  .notEmpty()
  .withMessage("Endereço é requerido");
exports.senha = check("senha")
  .notEmpty()
  .isLength({ min: 6, max: 16 })
  .withMessage("Senha deve ter entre 6 e 16 caracteres")
