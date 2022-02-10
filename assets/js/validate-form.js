const formulario = document.querySelector('.form-sign-in');
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('last-name');
const inputPassword = document.getElementById('password');

let camposPossuemErros = false;

function limpaErrosDosInputs() {
  const errors = document.querySelectorAll('.errors'); 
  for (error of errors) {
    error.innerHTML = '';
  }
}

function verificaInputVazio(input) {
  if (input.value.length === 0) { 
    mostraErroNoInput(input, 'Campo está vazio');
    camposPossuemErros = true;
  }
}

function verificaCamposVazios() {  
  inputs.forEach((input) => {
    verificaInputVazio(input);
  });
}

function verificaSeTemMenosDeTresCaracteres(inputs) {
  inputs.forEach((input) => {
    if (input.value.length < 3 ) {
      mostraErroNoInput(input, 'Campo precisa de no mínimo 3 caracteres');
      camposPossuemErros = true;
    }
  });
}

function validaSenha() {
  let existeNumeroNaSenha = false;
  let existeAlgumSimboloNaSenha = false;
  const listaDeSimbolosAceitos = ['!', '@', '#', '$', '%', '*'];

  if (inputPassword.value.length < 6) {
    mostraErroNoInput(inputPassword, 'Campo precisa de no mínimo 6 caracteres');
    camposPossuemErros = true;
    return;
  }
  
  for (caracter of inputPassword.value) {
    if (!isNaN(caracter)) {
      existeNumeroNaSenha = true;
    }
  }

  if (!existeNumeroNaSenha) {
    mostraErroNoInput(inputPassword, 'Senha precisa conter números');
    camposPossuemErros = true;
    return;
  }

  for (caracter of inputPassword.value) {
    listaDeSimbolosAceitos.find((simbolo) => {
      if (caracter === simbolo) {
        existeAlgumSimboloNaSenha = true;
      }
    });
  }

  if (!existeAlgumSimboloNaSenha) {
    mostraErroNoInput(inputPassword, 'Senha precisa conter símbolos');
    camposPossuemErros = true;
    return;
  }
}

function mostraErroNoInput(inputElement, msg) { 
  const errorMsg = `<span> ${msg} </span>`;
  inputElement.nextElementSibling.innerHTML = errorMsg;
}

function apagaTextoDosInputs() {
  const inputs = document.querySelectorAll('.input');
  for (input of inputs) {
    input.value = '';
  }
}

function validaCampos() {
  const menosDeTresCaracteresInputs = [inputName, inputLastName];
  
  verificaCamposVazios();
  verificaSeTemMenosDeTresCaracteres(menosDeTresCaracteresInputs);
  validaSenha();
}

formulario.addEventListener('submit', function(e) {
  e.preventDefault();  

  camposPossuemErros = false;

  limpaErrosDosInputs();
  validaCampos();

  if (!camposPossuemErros) {
    apagaTextoDosInputs();
    alert('Você está logado!');
  }
});
