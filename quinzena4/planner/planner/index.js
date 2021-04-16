let domingo = document.getElementById("domingo")
let segunda = document.getElementById("segunda")
let terca = document.getElementById("terca")
let quarta = document.getElementById("quarta")
let quinta = document.getElementById("quinta")
let sexta = document.getElementById("sexta")
let sabado = document.getElementById("sabado")

let meuIput = document.getElementById("tarefa")



function addTarefa() {
  var select = document.getElementById("dias-semanas")
  var value = select.options[select.selectedIndex].value;
  const diasSemana = document.getElementById("dias-semana")
  const meuInput = document.getElementById("tarefa")
  if(value == "domingo") {
    domingo.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value == "segunda") {
    segunda.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value == "terca") {
    terca.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value =="quarta") {
    quarta.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value == "quinta") {
    quinta.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value == "sexta") {
    sexta.innerHTML += `<h1>${meuInput.value}</h1>`
  }else if(value == "sabado") {
    sabado.innerHTML += `<h1>${meuInput.value}</h1>`
  }
  meuInput.value = ""
}
