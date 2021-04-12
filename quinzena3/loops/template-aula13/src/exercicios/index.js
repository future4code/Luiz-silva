// Exrcícios Interpretação de código
// Exercício 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// pega o valor de de i e soma com valor enquanto for menor que 5 e retorna 10

// Exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/* 
A - retorna os números maior que 18
B - sim, poderia usar o [] e o i
*/ 

//**Exercícios de escrita de código**
// Exercício 1

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A - 
for(let array of arrayOriginal) {
  console.log(array)
}

// B - 
for(let array of arrayOriginal) {
  console.log(array / 10)
}

// C - 
for(let arrayPar of arrayOriginal){
  if(arrayPar % 2 === 0) {
    console.log(arrayPar)
  }
}

// D -

let stringArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let indexArray of stringArray) {
  console.log("O elemento do index " + indexArray + " é " + indexArray)
}


let maior = 11
let menor = 40

for(let i of arrayOriginal) {
  if(i > maior) {
    maior = i
  }
}

for(let index of arrayOriginal) {
  if(index < menor) {
    menor = index
  }
}
console.log("O maior numero é: " + maior + " e o menor numero é: " + menor)