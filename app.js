/* let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Jodo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

exibirMensagemInicial()

/* Função com parametros e sem retorno*/
function alteraTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

/* Função para exibir mensagem inicial */
function exibirMensagemInicial() {
    alteraTexto('h1', 'Jogo do número Secreto');
    alteraTexto('p', 'Escolha um número entre 1 e 10');
}


/* Função sem parametro e retorno */
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        alteraTexto('h1', 'Parabéns');
        let singularTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${singularTentativa}!`;
        alteraTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            alteraTexto('p', 'O número secreto é menor');
        } else {
            alteraTexto('p', 'O número secreto é maior');
        }
        tentativas++;

        limparCampo();
    }
}

/* Função sem parametro e com retorno */
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);

}
console.log(numeroSecreto);

/* Função para limpar o campo de input */
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

/* Função para reiniciar o jogo */
function reiniciarJogo() {

 
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial()
        document.getElementById('reiniciar').setAttribute('disabled', true);


}