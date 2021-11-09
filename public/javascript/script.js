
const form = document.querySelector('.cadform');

const {nome: nameImput, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil, imagem_identidade} = form.elements;
const {nome, sobrenome, email, cpf, endereco, senha} = form.elements;

const {descricao_solicitacao} = form.elements;

form.addEventListener('submit', function(event) {
    if(!nameImput.value.length ) {
        alert('Preencha o campo nome!')
        event.preventDefault();
    };
 
});

form.addEventListener('submit', function(event) {
    if(!sobrenome.value.length) {
        alert('Preencha o campo sobrenome!')
        event.preventDefault();
    };
});

form.addEventListener('submit', function(event) {
    const emailValido = email.value.includes('@') && email.value.includes('.')
    const tamanhoEmailValido = email.value.trim().length >10 && email.value.trim().length <= 120; 
    if(!email.value.length) {
        alert('Preencha o campo email!')
        event.preventDefault();
    } else if( !emailValido) {
        alert('Formato de email incorreto!')
    } else if(!tamanhoEmailValido) {
        alert('Tamanho de email menor que 10 ou maior que 120 caracteres ')
    }
}); 

form.addEventListener('submit', function(event) {
    if(!senha.value.length) {
        alert('Preencha o campo senha!')
        event.preventDefault();
    };
});

form.addEventListener('submit', function(event) {
    if(!confsenha.value.length) {
        alert('Confirme a senha!')
        event.preventDefault();
    };
});

form.addEventListener('submit', function(event) {
    if(senha.value != confsenha.value) {
        alert('Senhas não conferem!')
        event.preventDefault();
    };
});

form.addEventListener('submit', function(event) {
    var alphaNum = /^[0-9]+$/;
    if(!cep.value.match(alphaNum)) {
        alert('Preencher campo CEP somente com números!')
        event.preventDefault();
    } else if(cep.value.length != 8) {
        alert('CEP deve conter 8 dígitos!')
        event.preventDefault();
    }
});

form.addEventListener('submit', function(event) {
    var alphaNum = /^[0-9]+$/;
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
});


form.addEventListener('submit', function(event) {
    const tamanhocpfCnpjValido = cpf_cnpj.value.trim().length ==11 || cpf_cnpj.value.trim().length == 14; 
    var alphaNum = /^[0-9]+$/;
    if(!cpf_cnpj.value.length) {
        alert('Preencha o campo cpf_cnpj')
        event.preventDefault();
    } else if(!cpf_cnpj.value.match(alphaNum)) {
        alert('Preencher campo cpf/cnpj somente com números')
        event.preventDefault();
    } else if(!tamanhocpfCnpjValido) {
        alert('O tamanho do CPF deve ser de 11 caracteres numéricos e do CNPJ 14')
        event.preventDefault();
    }
});

form.addEventListener('submit', function(event) {
    const tamanhocpfValido = cpf.value.trim().length ==11; 
    var alphaNum = /^[0-9]+$/;
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
});


form.addEventListener('submit', function(event) {
  
    if(!endereco.value.length) {
        alert('Preencher o campo endereço!')
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
  
    if(!descricao_solicitacao.value.length) {
        alert('Preencher o campo de descrição da solicitação!')
        event.preventDefault();
    } else if(descricao_solicitacao.value.lenth <50) { 
       alert('A descrição deve conter no mínimo 50 caracteres!')
        event.preventDefault(); 
    }
});


