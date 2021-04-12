/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de blackJack")

const carta = comprarCarta();

let jogador = carta;
let computador = carta;



let iniciarPArtida = confirm("Deseja inicar uma nova partida ?")
 if(iniciarPArtida == true) {
    for(pontuacaoJogador = carta.valor; pontuacaoJogador <= 21; pontuacaoJogador++)
   for(pontuacaoComputador = carta.valor; pontuacaoComputador <= 21; pontuacaoComputador++)
   if(pontuacaoJogador > pontuacaoComputador) {
      console.log("O jogador Vence")
   }else if(pontuacaoJogador < pontuacaoComputador) {
      console.log(" O Computador venceu")
   }else if(pontuacaoJogador == pontuacaoComputador){
      console.log("Deu empate!")
   }
}else{
    console.log("O jogo acabou")
   }

   console.log("Jogador: " + jogador.texto + " pontuação: " + jogador.valor)
   console.log("Computador: " + computador.texto + " pontuação: " + computador.valor)