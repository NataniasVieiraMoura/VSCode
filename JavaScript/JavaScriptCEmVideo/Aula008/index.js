function carregar(){
    var mensag = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var ano = data.getFullYear()
    var minutos = data.getMinutes()
    var momento = `manhã`
    if(hora < 12){
        momento = `manhã`
        img.src = `manhã.jpg`
        document.body.style.background = `#e2cd9f`
        //manhã
    }
    else if(hora >= 12 && hora <= 18){
        momento = `tarde`
        img.src = `tarde.jpg`
        document.body.style.background = `#b9846f`
        //tarde
    }
    else{
        momento = `noite`
        img.src = `noite.jpg`
        document.body.style.background = `#515154`
        //noite
    }
    mensag.innerHTML = `Agora são ${hora} e ${minutos} horas da ${momento}. Ano ${ano}`
}



/*
var cnt = 1
var get = 10
console.log(`Com do:`)
do{
    if(get < 10){
        break
    }
    get += cnt
    console.log(`${get}`)

}while(get < 10)
get = 10
console.log(`Agora só com while:`)
while(get < 10){
    get += cnt
    console.log(`${get}`)
}
*/