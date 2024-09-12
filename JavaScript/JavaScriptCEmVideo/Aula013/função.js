/**
 * Funções:
 * Chamada(o que ativa), paramentros, ação(o que vai fazer) e rotorno
 * (resultador gerado).
 * São ações que são chamadas em decorrência de algum evento
 * Uma função pode receber parametros e retornar um resultado
 * 
*/
function ação(parametro){//a função executa uma ação com o parametro que recebeu
    if(parametro % 2 == 0){
        return `Par`
        //return para retornar o resultado
    }
    else{
        return `Impar`
    }
}
let resultado = ação(4)//posso fazer o resultado da função ser armazenada numa variável
console.log(`3 : ${ação(3)}`)
console.log(`4 : ${resultado}`)
function soma(num1, num2){
    var s = num1 + num2
    return console.log(s)
}
soma(9, 4)
soma(10)//Como ele recebe apenas um parametro e estará somando 10 + undefinid que dá NotANumber

var variavel = function ato(prmt){//Você pode inserir uma função numa variavel
    if(prmt > 10){
        return console.log(`Maior que 10`)
    }
    else{
        return console.log(`Menor que 10`)
    }
}
variavel(0)//Você coloca um valor x entre parenteses para a variavel e ela retorna o resultado, ou seja, o valor x é parametro da função da variavel.

//Calcular fatorial:
var fat = function valor(dado){
    var c = dado
    var prod = 1
    while(c != 0){
        prod *= c
        c--
    }
    return console.log(prod)
}
fat(5)
//Abaixo função recursiva: quando uma função chama ela mesma.
function fatorial(dado){//a função recebe um parametro
    if(dado == 1){
        //primeira condição
        return 1
    }
    else{
        return dado * fatorial(dado-1)/*
        * aqui a função fatorial sempre vai ativar a si mesma emquanto a primeira não for
        * satifeita. Quando ela for, a função vai executar de trás para frente todas as funções * que deixou parada.É como se a função abrisse um link para outra função(pagina da web) 
        * toda vez que a primeira condição não fosse satifeita e quando for, ele vai executar 
        * cada função(pagian da web)que deixou aberta, apatir da ultima para a primeira.*/
        
    }
}
fatorial(5)