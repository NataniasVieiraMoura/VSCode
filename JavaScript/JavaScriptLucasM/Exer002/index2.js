var opção = Number(prompt(`Escolha uma operação 1(+), 2(-), 3(/), 4(*) ou 5 para sair : `))
if(opção == 5){
    alert(`Programa finalizado com sucesso.`)
}
else{
    var num1 = Number(prompt(`Digite o primeiro número:`))
    var num2 = Number(prompt(`Segundo numero: `))
    if(opção == 1){
        alert(`A soma é ${num1+num2}`)
    }
    if(opção == 2){
        alert(`A subtração é ${num1-num2}`)
    }
    if(opção == 3){
        alert(`A divisão é ${num1 / num2}`)
    }
    if(opção == 4){
        alert(`O produto é ${num1*num2}`)
    }
}
