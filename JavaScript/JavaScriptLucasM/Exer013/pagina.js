/*alert("Você foi corronpido ppr esse site!")
//let forma = "consumo de bebidas..."
//var variavel_mal = "Esta variável é perigosa"
//const g_terra = 9.89
//console.log(" texto texto texto texto"+234+forma)
//console.log(g_terra)
//console.log(variavel_mal)
//var num = pronpt(`Digite um número:`)
//var num2 = prompt(`Dite um número:`)
//alert(`${num+num2}`)
//Teste com HTML:*/
/*
function adicionador(){
    let nome = document.getElementById(`nome`)
    let sobren = document.getElementById(`sobre_nome`)
    let div = document.getElementById(`exibir`)
    let soma = nome+sobren 
    soma = String(soma.value)
    div.innerHTML += `\n${soma}`
}
*/
let num1 = prompt()
let num2 = prompt()
let resultado = prompt(`/1  *2   -3   +4   `)
let valor
switch(resultado){
    case `1`:
    let valor = num1/num2
    //alert(valor)
    break
    case `2`:
    valor = num1*num2
    //alert(valor)
        break
    case`3`:
    valor = num1-num2
    //alert(valor)
    break
    case`4`:
    valor = num1+num2
    //alert(valor)
        break
    default:
         alert(`deu erro`)
        break
}
alert(valor)


