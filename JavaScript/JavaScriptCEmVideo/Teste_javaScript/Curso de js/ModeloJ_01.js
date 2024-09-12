/*
window.alert("Bom dia!")
let txt = window.prompt("Qual seu primeiro nome?")
let txtl =  window.prompt("Qual seu sobre nome?")
window.confirm("Aceita os termos de uso do nosso site Sr(a) "+ txt + " " + txtl+" ?")

var um = Number.parseInt(window.prompt("Escolha um númeoro Inteiro:"))
var outro = Number.parseFloat(window.prompt("Escolha um número decimal:"))

window.alert(`Você digitou respectivamente ${um} e ${outro}.`)
window.alert(`A soma é ${um + outro}, a subtração ${um - outro}`)

var alg = window.prompt(`Digite algo por favor.`)
var maius = alg.toUpperCase()
var minus = alg.toLowerCase()
alert(`A palavra digitada Maiúscula fica : ${maius}`)
alert(`A palavra digitada Minúscula fica : ${minus}`)
//parei na aula 6

let numer = Number(prompt(`Digite algum número:`))
while(numer < 10 || 20 < numer){
    numer = prompt(`Digite um número que eu goste:`)
    if(numer < 10){
        alert(`muito pequeno, não gostei`)
    }
    if(numer > 20){
        alert(`muito grande não gostei`)
    }
}
let textão = numer % 2 === 0 ? `Par`: `Impar` 
alert(`Gostei, parabéms seu número é ${textão}`)
switch(numer){
    case(11):
        alert(`Esse número é suspeito`)
    break
    case(12):
        alert(`Esse número é bom`)
    break
    case(13):
        alert(`Esse número é mal`)
    break
    case(14):
        alert(`Esse número tanto faz`)
    break
}
*/

/*

let data = new Date()
    let horas = new Date().getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    let hora_atual = `${horas}:${min}:${seg}`
    console.log(hora_atual)
    let ano = new Date().getFullYear()
    let dia = data.getDate()
    let mês = data.getMonth()
    let time = data.getTime()
    let rel = document.getElementById("relógio");
    let butão = document.getElementById("botão");
butão.addEventListener('click', () => {
    let has = hora_atual
    rel.textContent = has

});

*/
//alert(`São ${hora_atual} da tarde. Calendário : ${ano}/${mês}/${dia}. Time ${time}. `)
/*function cor_fundo(hora_atual){
    if(hora_atual > 12){
        document.body.style.background = `#e2cd9f`
    }
    else if(hora_atual >= 12 && hora_atual <= 18){
        document.body.style.background = `#b9846f`
    }
    else{
        document.body.style.background = `#515154`
    }
}
*/
