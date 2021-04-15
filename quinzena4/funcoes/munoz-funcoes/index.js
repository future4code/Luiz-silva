//Exercícios de interpretação de código
// Exercício 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/* 
A - no 1º console exibirá 10 e no 2º 50
B - teriamos os mesmos valora mas nada seria exibido no console.log() 
que faz com que seja exibido algo no console
*/

// Exercício 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

/*
A - Darvas e Caio
B - Amanda e caio
*/

// Exercício 3
const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
	if (x % 2 === 0) {
	    arrayFinal.push(x * x)
	}
  }

  return arrayFinal;
}

/*
recebe um array como parametro, percorre o array, verifica se é par,
adiciona no array final, multiplica por ele mesmo e retorna o resultado
*/

//Escrita de código
// Exercício 4
// A - 

function aboutMe() {
  console.log("Eu sou Luiz Henrique, tenho 26 anos, moro em Belo horizonte e sou estudante")
}

aboutMe()

// B - 
let me = (name, age, city, student) => "eu sou " + name + ", tenho " + age + ", moro em " + city + ", e sou " + student

console.log(me("luiz", 26, "Belo horizonte", "estudante"))

// Exercício 5
//A   

let soma = (num1, num2) => num1 + num2

console.log(soma(1, 2))

//B -

let maiorMenor = (num1, num2) => {
  if(num1 >= num2) {
    return true
  }else{
    return false
  }
}

console.log(maiorMenor(4, 5))

//C - 



let message = function(mensagem) {
  while(mensagem<= 10) {
    mensagem++
  }
  return mensagem
}
console.log(message("Za waaardoo!"))


// A - 

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function arr(arrNum) {
  return array.length
}

console.log(array.length)

//B - 

let parImpar = (num1) => {
  if (num1 % 0 == 0) {
    return true
  }else{
    return false
  }
}

console.log(parImpar(2))

/*
C - Escreva uma função que receba um array de números e devolva a quantidade de
 números pares dentro dele
*/

let funArr = function(arr) {
  for(let index = 0; index.length; index++){
    if(arr % 2 == 0) {
    }
    return arr
  }
  console.log(funArr(array.length))
}

// D - 


let parArr = function(array) {
  if(array % 2 == 0) {
    return array
  }
  if (array.length % 2 == 0) {
    return "par"
  }else{
    return "ímpar"
  }
}
console.log(parArr(array))

