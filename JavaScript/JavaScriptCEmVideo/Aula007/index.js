var idade = 85
if(idade >= 18){
    if(idade >= 67){
        console.log(`Voto opcional`)
    }
    else{
    console.log(`Voto obrigatório.`)
    }
}
else{
    if(idade >= 16){
        console.log(`Vai votar?`)
    }
    else{
        console.log(`Não vota`)
    }
}
var horas = 500
var texto = ` Agora são exatamente ${horas} horas da `

if(horas <= 459){
    console.log(`${texto}`+`madrugada`)
}
else if(horas <= 1159){
    console.log(`${texto}`+`manhã`)
}
else{
    if(horas <= 1759){
        console.log(`${texto}`+`tarde`)
    }
    else if(horas <= 2359){
        console.log(`${texto}`+`noite`)
    }
}
//Para conseguir a hora atual:
var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)

//Condição multiplas: para situações especificas.
switch(hora){//serve para testar situações pontuais(só aceita valores inteiros e caracteries(1,2,3,4,5 ou a,b,c,d...))
    case(hora === 3)://condição especifica a variável
        //Aqui vai acontecer caso satisfeito
    break // aqui ele para o switch caso tiver sido satisfeito
    case(hora === 15):
        console.log(`tarde`)
    break
    case(horas === 17):
        console.log(`noite`)
    break
    case(horas === 11):
        console.log(`quase meia noite`)
    break
}