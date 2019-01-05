let inputCep = document.querySelector('input[id=cep]');
inputCep.addEventListener('change', buscaCep);

function preencheCampos(json) {
  document.querySelector('input[id=logradouro]').value = json.logradouro;
  document.querySelector('input[id=bairro]').value = json.bairro;
  document.querySelector('input[id=complemento]').value = json.complemento;
  document.querySelector('input[id=cidade]').value = json.localidade;
  document.querySelector('input[id=uf]').value = json.uf;
}

function buscaCep() {
  // Captura CEP e tira traço
  let inputCep = document.querySelector('input[id=cep]');
  let cep = inputCep.value.replace('-', '');
  // Prepara URL
  let url = 'http://viacep.com.br/ws/' + cep + '/json';
  // Cria instância do objeto AJAX
  let xhr = new XMLHttpRequest();
  // Utiliza o método OPEN para abrir a conexão com o WS
  xhr.open('GET', url, true);
  //Propriedade 'OnReadyStateChange' dispara quando houver alteração no AJAX
  xhr.onreadystatechange = function() {
    // Verificar se a verificação foi finalizada
    if (xhr.readyState == 4) {
      // Verificar se foi bem sucedida
      if (xhr.status == 200) {
        preencheCampos(JSON.parse(xhr.responseText));
      }
    }
  }
  xhr.send();
}
