//Exercícios de interpretação de código
// Exercício 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// verifica se um numero é par caso o numero digitado divido por 2 seja 0

// execício 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* 
A -  verifica o nome da fruta digitada pelo usuário e imprime o nome e o preço
B - "O preço da fruta ", maçã, " é ", "R$ ", 2.25
C -  O preço da fruta pêra é R$ 5
*/

// Exercício 3

const number = Number(prompt("Digite o primeiro número."))

if(number > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*
A - guarda a respota do prompt em uma variavel e converte para o tipo number
B - caso digite 10 retornará Esse numero passou no teste
caso digite -10 será retornado um erro pois mensagem está definida dentro do
escopo do if

C - Ocorrerá um erro pois a mensagem está declarada dentro do escopo do if e o 
console.log está sendo chamado fora do escopo
*/

// Exercícios de escrita de código

// Exercício 4 
let userAge = Number(prompt("DIgite sua idade"))

if(userAge >= 18) {
  console.log("Você pode dirigir")
}else{
  console.log("Você não pode dirigir")
}

// Exercício 5
let turno = prompt("Em qual turno você estuda ? Digite M para matutino, V para vespertino e N para noturno")

if(turno === "m") {
  console.log("Bom Dia !")
}else if(turno === "v") {
  console.log("Boa Tarde !")
}else if(turno === "n"){
  console.log("Boa Noite !")
}

// Exercício 6

let turno = prompt("Em qual turno você estuda ? Digite M para matutino, V para vespertino e N para noturno")

switch (turno) {
  case turno === "m":
    console.log("Bom Dia !")
    break;
    case turno === "v":
      console.log("Boa Tarde !")
      break;
    case turno === "n":
      console.log("Boa Noite !")
      break;
}

// Exercício 7

let generoFilme = prompt("qual o genero do filme ?")
let precoIngresso = prompt("Qual o preço do ingresso ?")

if(generoFilme === "terror" && precoIngresso == 15) {
  console.log("Bom Filme")
}else{
  console.log("Escolha outro filme")
}