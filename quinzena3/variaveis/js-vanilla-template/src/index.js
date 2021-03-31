// exercicio 1
a = 10
b = 10

// retornará 10

b = 5
//retornará 10 e 5

// exercicio 2
a = 10
b = 20
c = a
b = c
a = b
// retorna 10, 10, 10

// Escrita de códigos
// exercício 1

let name;
let age;

console.log(typeof(name))
console.log(typeof(age))

/* foi retornado undefined pois não foi atribuido valores nas variáveis
por tanto elas podem ser de qualquer tipo, string, number etc... e como o valor
é indefinido, foi retornado undefined */

name = prompt("qual o seu nome?");
age = prompt("qual sua idade?");

console.log(typeof(name))
console.log(typeof(age))

/* as variveis passaram a ter o tipo string, pois por padrão esse é o valor
atribuido ao input do prompt*/

console.log("olá, " + name, "você tem", age, " anos")

// exercicio 2

let color = prompt("qual sua cor favorita?")
console.log(color)

let favoriteMovie = prompt("qual seu filme favorito?")
console.log(favoriteMovie)

let favoriteFood = prompt("Qual sua comida favorita?")
console.log(favoriteFood)

let biggestDream = prompt("Qual seu maior sonho?")
console.log(biggestDream)

let favoriteAnimal = prompt("Qual seu animal favorito")
console.log(favoriteAnimal)

// exercicio 3
let myFavoriteFoods = ["lasanha", "strogonoff", "purê de batata", "pizza",
 "salpicão"]
 console.log(myFavoriteFoods)
 console.log("Essas são suas comidas favoritas:")
 console.log(myFavoriteFoods[0])
 console.log(myFavoriteFoods[1])
 console.log(myFavoriteFoods[2])
 console.log(myFavoriteFoods[3])
 console.log(myFavoriteFoods[4]) 
 
 // exercicio 4

 let questions = ["está chovendo hoje?", "voce está feliz?", "voce gosta de jiló?"]
 let answer = [true, false]
 console.log(questions[0], answer[0])
 console.log(questions[1], answer[0])
 console.log(questions[2], answer[1])

