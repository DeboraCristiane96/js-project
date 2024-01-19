alert("Boas vindas ao jogo do número secreto!") ;
let numberMax = 100;
let numeroSecreto = parseInt(Math.random() * numberMax + 1);
let userNumber;
let numberError = 1;
//Enquanto o numeroSecreto for diferente do userNumber
while(numeroSecreto != userNumber){

    userNumber = prompt(`Escolha um número de 1 e ${numberMax}`);
    if( userNumber == numeroSecreto){
        break;
    }else{
        if(userNumber > numeroSecreto){
            alert(`O Número Secreto é menor que ${userNumber}`);
        }else {
            alert(`O Número Secreto é maior que ${userNumber}`);
        }
        numberError++; 
    }
}

let palavraTentativa = numberError > 1 ? 'tentativas' : 'tentativa' ;

alert(`você acertou o número secreto é ${numeroSecreto} com ${numberError} ${palavraTentativa}`);