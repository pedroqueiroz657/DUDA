document.getElementById("btnlimpar").addEventListener("click", Limpar);
document.getElementById("btnpesquisar").addEventListener("click", Pesquisar);
document.getElementById("btnsalvar").addEventListener("click", Salvar);
document.getElementById("btneditar").addEventListener("click", Editar);

function Limpar() {
  // Limpar todos os campos
  for (let i = 1; i <= 16; i++) {
    document.getElementById("Campo" + i).value = "";
  }
}

function Pesquisar() {
  var criteriopesquisa = document.getElementById("Campo1").value;
  
  if (criteriopesquisa.trim().length === 0) {
    var m = "CRITÉRIO NÃO PODE SER VAZIO";
    caixaMsgbox(m);
    return false;
  }

  google.script.run.withSuccessHandler(Carregar).PesquisarDados(criteriopesquisa);
}

function Carregar(retorno) {
  if (retorno != "Não encontrado!") {
    for (let i = 0; i < retorno.length; i++) {
      document.getElementById("Campo" + (i + 1)).value = retorno[i];
    }
  } else {
    var m = "REGISTRO NÃO ENCONTRADO!";
    caixaMsgbox(m);
    Limpar();
  }
}

function Salvar() {
  var Dados = {};

  for (let i = 2; i <= 16; i++) {
    Dados["Campo" + i] = document.getElementById("Campo" + i).value;
  }

  google.script.run.withSuccessHandler(Sucesso).SalvarDados(Dados);
}

function Sucesso(response) {
  if (response === "sucesso") {
    caixaMsgbox("DADOS SALVOS COM SUCESSO!");
    Limpar();
  }
}

function Editar() {
  var Dados = {};

  for (let i = 2; i <= 16; i++) {
    Dados["Campo" + i] = document.getElementById("Campo" + i).value;
  }

  google.script.run.withSuccessHandler(Sucesso).EditarDados(Dados);
}

function caixaMsgbox(mensagem) {
  var Caixa = document.getElementById("CaixaMensagem");
  Caixa.style.display = 'block';
  document.getElementById("CorpoMsg").innerHTML = mensagem;
  setTimeout(function() {
    Caixa.style.display = 'none';
  }, 3000);
}
