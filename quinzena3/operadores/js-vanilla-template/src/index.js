// Exercício 1 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// retorna false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// retorna false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// retorna true

console.log("e. ", typeof resultado)
// retorna boolean

//Exercício 2
let array
console.log('a. ', array)
//retorna undefined

array = null
console.log('b. ', array)
//retorna null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//retorna 11

let i = 0
console.log('d. ', array[i])
// retorna 3

array[i+1] = 19
console.log('e. ', array)
// retorna [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)

//retorna 9

// Escrita de código, Exercício 1

let yourAge = (Number(prompt("Qual a sua idade?")))
let friendAge = (Number(prompt("Qual a idade do seu melhor amigo ?")))

console.log("Sua idade é maior que a do seu melhor amigo? " + yourAge > friendAge)

console.log(yourAge % friendAge)


//Exercício 2

let numberPar = prompt("insira um numero par")
console.log(Number(numberPar) % 2)

/* Exercicio 2 C-
sempre retornará 0 pois todo numero par divido por 0 dá como diferença */

/* Exercicio 2 D-
sempre retornará 0 pois todo numero impar divido por 1 dá como diferença */

/* Exercicio 3 */

let listaDeTarefa = []

let tarefa1 = prompt("digite a 1ª tarefas ")
let tarefa2 = prompt("digite a 2ª tarefas ")
let tarefa3 = prompt("digite a 3ª tarefas ")

listaDeTarefa.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefa)

let checked = prompt("Digite uma tarefa concluída representadas apenas pelos numeros 0, 1 ou 2")

listaDeTarefa.splice(checked, 1)
console.log(listaDeTarefa)

let nomeDoUsuario = prompt("Digite o seu nome")
let emailDoUsuario = prompt("Digite o seu email")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vindo, " + nomeDoUsuario)


 