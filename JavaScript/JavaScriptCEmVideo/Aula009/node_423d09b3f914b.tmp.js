function ação(){
    var x = 100
    var y = 0
    while(x >= y){
        console.log(`${y}`)
        y++
    }
    
}
ação()
var oe = 10
var pc = 0
do{
    //Do significa fazer. Ele vai executar o que estiver entre chaves enquanto o while não for satisfeito.
    pc++
    console.log(`${pc}`)
}while(oe > pc)//condição para o fim do processo.
hora = 3
switch(hora){
    //serve para testar situações pontuais(só aceita valores inteiros e caracteries(1,2,3,4,5 ou a,b,c,d...))
    case(hora === 3):
        console.log(`manhã`)
        //condição especifica a variável
        //Aqui vai acontecer caso satisfeito
    break 
    // aqui ele para o switch caso tiver sido satisfeito
    case(hora === 15):
        console.log(`tarde`)
    break
    case(hora === 17):
        console.log(`noite`)
    break
    case(hora === 11):
        console.log(`quase meia noite`)
    break
}
var inicio =  0
var teste = 10
var incremento = 1
while(inicio >= teste){
    inicio += incremento
}
console.log(`${inicio}`)
inicio = 0
console.log(`${incremento}`)
for(inicio;teste;incremento){
}
console.log(`${inicio}`)