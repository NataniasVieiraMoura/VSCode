/*
console.log(`Texto`)
var idade = 65
if(idade <= 17 && idade >= 16){
    console.log(`Menor de idade`)
    if(idade > 16){
        console.log(`Voto opcional`)
    }
}
else if(idade <=15){
    console.log(`Você não vota`)
}
else{
    console.log(`Maior de idade.`)
    if(idade < 65){
        console.log(`Voto obrigatório`)
    }
    else if(idade >= 65){
        console.log(`Voto opcional`)
    }
}
*/
//No java script o java existe o if, else, else if.
var agora = new Date()
//new Date() --> para armazernar na variável dados de data
var horas = agora.getHours()
// .getHours() --> serve para adiquirir dados de data como .getDay ou .getMounth e etc...
console.log(`Agora são exatamente ${horas} horas.`)
if(horas < 12){
    console.log(`Bom dia!`)
}
else if(horas >=12  && horas <= 18.30){
    console.log(`Boa Tarde!`)
}
else{
    console.log(`Boa Noite!`)
}