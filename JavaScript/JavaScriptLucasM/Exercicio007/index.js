var contador = 0//variavel global
var dv = document.querySelector(`div#retorno`)//variavel global da div que exibe o resultado 
var a = 10
var porta = true 
function entrar(){
    porta = true
    contador++//encremento
    dv.innerHTML = `${contador}`//exibe o resutado

}
function sair(){
    porta = false
    contador--//decremento
    dv.innerHTML = `${contador}`//exibe o resultado
}


