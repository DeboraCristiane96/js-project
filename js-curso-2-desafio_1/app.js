let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

function botaoConsole(){
    console.log("O Botão foi clicado!");
}

function botaoAlert(){
    alert("I love JS!");
}

function botaoPrompt(){
    let cidade = prompt("Qual a sua Cidade?");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
   let number01 = parseInt(prompt('Digite um número:'));
   let number02 = parseInt(prompt(`Digite outro número:`));

   let soma = number01+number02;
   alert(`${number01} + ${number02} = ${soma}`);
}