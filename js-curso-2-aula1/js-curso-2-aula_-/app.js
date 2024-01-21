let numeroSorteados=[];
let numeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function gerarNumeroAleatorio(){
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let qtdElementosNaLista = numeroSorteados.length();

  if(qtdElementosNaLista == numeroLimite){
    numeroSorteados = [];
  }

  if(numeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    //salvando os números escolhidos na lista de números sorteados!
    numeroSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativas} ${msgTentativa}`;
        exibirTextoNaTela('p',mensagem);
        

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
    
   
}

function limparCampo(){
    chute = document.querySelector('input');
     chute.value ='';
}


function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
