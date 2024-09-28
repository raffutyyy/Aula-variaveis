let nome = ''
let idade = ''

console.log(typeof nome, typeof idade)
//foi impresso que o nome e a idade sao de tipo string. Isso ocorre pois eu utilizei para nao atribuir nenhum valor '', que são de tipo string, tambem poderia utilizar undefined na variavel idade para nao deixar definido

let nome1 = prompt('Qual seu nome?')
let idade1 = prompt('Qual a sua idade?')
//console.log(typeof nome1, typeof idade1)
//ambas continuam sendo string

console.log(`Olá ${nome1}, você tem ${idade1} anos.`)