/*
var pais = `EUA`
if(pais === `Brasil`){
   var cid = `Brasileiro`
}
else{
    var cid = `Gringo`
}
console.log(`Você é ${cid}`)
*/
function somar(){
    var num1 = document.getElementById(`snum1`)
    var num2 = document.getElementById(`snum2`)
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    var soma = num1 + num2
    var divres = document.getElementById(`rsoma`)
    divres.innerHTML = `Para ${num1} + ${num2}. O resultado é ${soma}`
}
function sub(){
    var subn1 = document.getElementById(`n1`)
    var subn2 = document.getElementById(`n2`)
    var subr = document.querySelector(`div#ressub`)
    subn1 = Number(subn1.value)
    subn2 = Number(subn2.value)
    var subtr = subn1 - subn2
    subr.innerHTML  = `A operação entre ${subn1} menos ${subn2} é igual á ${subtr}`
}    
function div(){
 var numero1 = document.getElementById(`divn1`)
 var numero2  = document.getElementById(`divn2`)
 var resut = document.getElementById(`rdivis`)
 numero1 = Number(numero1.value)
 numero2 = Number(numero2.value)
var d = numero1 /numero2
resut.innerHTML  = `O resultado de ${numero1} por ${numero2} é igual á ${d}`
}

function mult(){
 var numer1 = document.getElementById(`mult1`)
 var numer2 = document.getElementById(`mult2`)
 var multrtn = document.getElementById(`rmult`)
 numer1 = Number(numer1.value)
 numer2 = Number(numer2.value)
 rstado = numer1 * numer2
 multrtn.innerHTML = `O resultado da operação entre ${numer1} vezes ${numer2} é igual á ${rstado}`

}

function pot(){
 var bas = document.getElementById(`base`)
 var e = document.getElementById(`exp`)
 var rd = document.getElementById(`rpot`)
 bas = Number(bas.value)
 e = Number(e.value)
 resultado = bas**e
 rd.innerHTML = `O resultado entre a base ${bas} elevada a ${e} é o valor ${resultado}`
}
