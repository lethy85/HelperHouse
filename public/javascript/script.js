
const form = document.querySelector('form');

const {nome: nameImput, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, foto, identidade} = form.elements;
const {nome, cpf, endereco} = form.elements;


const validateString = (inputName, maxlength) => {
    const isNameWithinLimit = inputName.value.length >= 2 && inputName.value.length <= maxlength
    const span = inputName.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isNameWithinLimit) {
      inputName.style.borderColor = "red";
      span.innerText = `Por favor inclua até ${maxlength} caracteres`;
      span.style.cssText =
        "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      inputName.insertAdjacentElement("afterend", span);
      return false;
    }
  
    inputName.style.borderColor = "#28a745";
    inputName.style.borderWidth = "2px";
    return true;
  }
  if(typeof nameImput !== 'undefined' || typeof sobrenome !== 'undefined') {
    nameImput.onblur = () => validateString(nameImput, 100)
    sobrenome.onblur = () => validateString(sobrenome, 100)
  }

  const validateEmailInput = () => {
    const isValidEmail = email.value.includes('@') && email.value.includes('.');
    const isEmailWithinLimit = email.value.trim().length >= 10 && email.value.trim().length <= 100
  
    const span = email.nextElementSibling;
    span.innerText = "";
  
    if(!isValidEmail){
      email.style.borderColor = "red";
      span.innerText = 'O email deve ser valido!';
      email.insertAdjacentElement('afterend', span);
      return false;
    }
  
    if(!isEmailWithinLimit){
      email.style.borderColor = "red";
      span.innerText = 'O email deve ter até 120 caracteres!';
      email.insertAdjacentElement('afterend', span);
      return false;
    }
  
    email.style.borderColor = "#28a745";
    email.style.borderWidth = "2px";
  
    return true;
  }

  if(typeof email !== 'undefined') {
    email.onblur = validateEmailInput;
    senha.onblur = () => validateString(senha, 16)
    confsenha.onblur = () => validateString(confsenha, 16)
  }


const validateCpf = () => {
    isValidCpf = cpf.value.length === 11 && cpf.value.match(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/)
    const span = cpf.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isValidCpf) {
      cpf.style.borderColor = "red";
      span.innerText = `Por favor inclua o cpf com 11 dígitos`;
      span.style.cssText =
        "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      cpf.insertAdjacentElement("afterend", span);
      return false;
    }
  
    cpf.style.borderColor = "#28a745";
    cpf.style.borderWidth = "2px";
    return true;
}


if(typeof cpf !== 'undefined') {
    cpf.onblur = validateCpf
}
if(typeof endereco !== 'undefined') {
    endereco.onblur = () => validateString(endereco, 120)
}

const validateCpfCnpj = () => {
    isValidCpfCnpj = cpf_cnpj.value.length <= 14 && cpf_cnpj.value.match(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/)
    const span = cpf_cnpj.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isValidCpfCnpj) {
      cpf_cnpj.style.borderColor = "red";
      span.innerText = `Por favor inclua até 14 dígitos`;
      span.style.cssText =
        "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      cpf_cnpj.insertAdjacentElement("afterend", span);
      return false;
    }
  
    cpf_cnpj.style.borderColor = "#28a745";
    cpf_cnpj.style.borderWidth = "2px";
    return true;
}

if(typeof cpf_cnpj !== 'undefined') {
    cpf_cnpj.onblur = validateCpfCnpj
}

const validateTelefone = () => {
    isValidTelefone = telefone.value.length <= 11 && telefone.value.match(/([0-9])\w+/g)
    const span = telefone.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isValidTelefone) {
      telefone.style.borderColor = "red";
      span.innerText = `Por favor inclua até 11 dígitos`;
      span.style.cssText =
        "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      telefone.insertAdjacentElement("afterend", span);
      return false;
    }
  
    telefone.style.borderColor = "#28a745";
    telefone.style.borderWidth = "2px";
    return true;
}

if(typeof telefone !== 'undefined') {
    telefone.onblur = validateTelefone
}

const validateCep = () => {
    isValidCep = cep.value.length === 8 && cep.value.match(/([0-9])\w+/g)
    const span = cep.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isValidCep) {
      cep.style.borderColor = "red";
      span.innerText = `Por favor inclua 8 dígitos`;
      span.style.cssText =
        "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      cep.insertAdjacentElement("afterend", span);
      return false;
    }
  
    cep.style.borderColor = "#28a745";
    cep.style.borderWidth = "2px";
    return true;
}

if(typeof cep !== 'undefined') {
    cep.onblur = validateCep
}

window.addEventListener('load', function () {
    form.addEventListener('submit', function(event) {
        if(!nameImput.value.length ) {
            alert('Preencha o campo nome!')
            event.preventDefault();
        };
        if(!sobrenome.value.length) {
            alert('Preencha o campo sobrenome!')
            event.preventDefault();
        };
        const emailValido = email.value.includes('@') && email.value.includes('.')
        const tamanhoEmailValido = email.value.trim().length >10 && email.value.trim().length <= 120; 
        if(!email.value.length) {
            alert('Preencha o campo email!')
            event.preventDefault();
        } else if(!emailValido) {
            alert('Formato de email incorreto!')
            event.preventDefault();
        } else if(!tamanhoEmailValido) {
            alert('Tamanho de email menor que 10 ou maior que 120 caracteres ')
            event.preventDefault();
        }
        if(!senha.value.length) {
            alert('Preencha o campo senha!')
            event.preventDefault();
        };
        if(!confsenha.value.length) {
            alert('Confirme a senha!')
            event.preventDefault();
        };
        if(senha.value != confsenha.value) {
            alert('Senhas não conferem!')
            event.preventDefault();
        };
        if (!foto.files.length) {
            alert('A imagem de perfil precisa ser inserida')
            event.preventDefault();
        }
        if (!identidade.files.length) {
            alert('A imagem de identidade precisa ser inserida')
            event.preventDefault();
        }
        const alphaNum = /^[0-9]+$/;
        if(!cep.value.match(alphaNum)) {
            alert('Preencher campo CEP somente com números!')
            event.preventDefault();
        } else if(cep.value.length != 8) {
            alert('CEP deve conter 8 dígitos!')
            event.preventDefault();
        }
        if(!telefone.value.length) {
            alert('Preencher o campo telefone!')
            event.preventDefault();
        } else if(!telefone.value.match(alphaNum)) {
            alert('Preencher campo telefone somente com números!')
            event.preventDefault();
        } else if(telefone.value.length < 10) {
            alert('Formato de telefone inválido. O telefone deve conter 10 ou 11 digitos. conforme exemplo: 11955554444 ou 1155554444')
            event.preventDefault();
        }
        const tamanhocpfCnpjValido = cpf_cnpj.value.trim().length ==11 || cpf_cnpj.value.trim().length == 14; 
        if(!cpf_cnpj.value.length) {
            alert('Preencha o campo cpf_cnpj')
            event.preventDefault();
        } else if(!cpf_cnpj.value.match(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/)) {
            alert('Preencher campo cpf/cnpj somente com números')
            event.preventDefault();
        } else if(!tamanhocpfCnpjValido) {
            alert('O tamanho do CPF deve ser de 11 caracteres numéricos e do CNPJ 14')
            event.preventDefault();
        }
        const tamanhocpfValido = cpf.value.trim().length ==11; 
        if(!cpf.value.length) {
            alert('Preencha o campo cpf')
            event.preventDefault();
        } else if(!cpf.value.match(alphaNum)) {
            alert('Preencher campo cpf somente com números')
            event.preventDefault();
        } else if(!tamanhocpfValido) {
            alert('O tamanho do CPF deve ser de 11 caracteres numéricos')
            event.preventDefault();
        }
        if(!endereco.value.length) {
            alert('Preencher o campo endereço!')
            event.preventDefault();
        }
        if(!descricao_solicitacao.value.length) {
            alert('Preencher o campo de descrição da solicitação!')
            event.preventDefault();
        } else if(descricao_solicitacao.value.lenth <50) { 
           alert('A descrição deve conter no mínimo 50 caracteres!')
            event.preventDefault(); 
        }
 
    });
})

