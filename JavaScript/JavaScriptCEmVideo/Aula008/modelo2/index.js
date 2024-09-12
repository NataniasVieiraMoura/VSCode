function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    var img = document.createElement(`img`)//aqui cria a tag imagem
    img.setAttribute(`id`,`foto`)//aqui cria o id foto da imagem
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[Erro]. Algo errado foi digitado, por favor tente novamente!`)
    }
    else{
        var fsex = document.getElementByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ` `
        if(fsex[0].checked){
            genero = `Homem`
            if(idade <= 15){
                img.setAttribute(`src`,`menino.jpg`)
            }
            else if(idade <=60 && idade >15){
                img.setAttribute(`src`,`homen.jpg`)
            }
            else{
                img.setAttribute(`src`,`idoso.jpg`)
            }
        } 
        else{
            genero = `Mulher`
            if(idade <= 15){
                img.setAttribute(`src`,`menina.jpg`)
            }
            else if(idade <=60 && idade >15){
                img.setAttribute(`src`,`mulher.jpg`)
            }
            else{
                img.setAttribute(`src`,`idosa.jpg`)
            }
        }
    }
    res.style.textAlign = `center`
    res.innerHTML = `Detectamos genero ${genero} com idade ${idade} anos.`
}