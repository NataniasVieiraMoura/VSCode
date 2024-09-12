var nome = prompt(`Digite seu nome: `)
var idade = confirm(`Você é maior de 18 anos?`)
var ano = Number(prompt(`Digite seu ano de nacimento: `))
var numero = Number(prompt(`Digite um preço :`))
numero.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
while((2023+ano)>=2143){
    var ano = Number(prompt(`Digite uma idade válida: `))
}
alert(`Bem vindo Sr ${nome}, você está na Wirelles.Corp`)
alert(`Curiosidade: Seu nome têm ${nome.length} letras.`)
if(ano >= 2023){
    confirm(`Sr ${nome}, gostaria de receber notificação de nosso site?`)
}
if(nome.length > 10){
    alert(`Ok, mais alguns passos e você poderá entrar na nossa comunidade de bate-papo.`)
}
else{
    if(ano >= 2.143){
        alert(`Sua idade foi recusada!`)
    }
}
