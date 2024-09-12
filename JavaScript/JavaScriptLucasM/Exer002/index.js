var opção = Number(prompt(`Escolha uma operação 1(+), 2(-), 3(/), 4(*) ou 5 para sair : `))
if(opção == 1){
    var num1 = Number(prompt(`Digite um número: `))
    var num2 = Number(prompt(`Digite outro número: `))
    alert(`A soma é ${num1+num2}`)
}
if(opção == 2){
    var num1 = Number(prompt(`Digite um número: `))
    var num2 = Number(prompt(`Digite outro número: `))
    alert(`A Subtração é ${num1-num2}`)
}
if(opção == 3){
    var num1 = Number(prompt(`Digite um número: `))
    var num2 = Number(prompt(`Digite outro número: `))
    alert(`A divisão é ${num1/num2}`)
}
if(opção == 4){
    var num1 = Number(prompt(`Digite um número: `))
    var num2 = Number(prompt(`Digite outro número: `))
    alert(`O produto é ${num1*num2}`)
}
else{
    alert(`Programa finalizado com sucesso.`)
    }