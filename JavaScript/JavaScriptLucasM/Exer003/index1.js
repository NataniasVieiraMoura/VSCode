var operação = Number(prompt(`Escolha a operação: 1(+)      2(-)    3(/)    4(*)    5(Sair)     6(Recarregar)`))
do{
    var operação = Number(prompt(`Escolha a operação: 1(+)2(-)3(/)4(*)5(Sair)6(Recarregar)`))
}while(operação == 6);
var num1 = Number(prompt(`Digite um número: `))
var num2 = Number(prompt(`Digite outro número: `))
resultado = 0
operador = ``
if(operação === 1){
    resultado = num1 + num2
    operador = `+`
}
else if(operação === 2){
    resultado = num1 - num2
    operador = `-`
}
else if(operação === 3){
    resultado = num1/num2
    operador = `/`
}
else if(operação === 4){
    resultado = num1 * num2
    operador = `*`
}
else if(operação === 5){
    alert(`Programa finalizado com sucesso!`)
}
alert(`O resultado da operação ${num1} `+operador+` ${num2} é igual a ${resultado}`)