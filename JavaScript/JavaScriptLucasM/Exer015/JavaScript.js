console.log(`Olá, mundo`)
document.write(`Olá, mundo`)
function adicionar(){
    let botao = document.getElementById("botao")
    let paragrafo = document.getElementById("paragrafo")
    let texto = document.getElementById("texto")
    let senhor = document.getElementById("nome")
    texto = String(texto.value)
    senhor = String(senhor.value)
    paragrafo.innerHTML = `${texto}`
    alert(`Bom dia Sr(a). ${senhor}`)
}
function calculadora(){
    let resultado = document.getElementById("resultado")
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    resposta = Number(num1 + num2)
    resultado.innerHTML = `${resposta}`
}
function corfundo(){
    let tela = document.getElementById(`tela`)
    let nomecor = document.getElementById(`cor`)
    nomecor = String(nomecor.value)
    if(nomecor == `vermelho`){
        document.body.style.background = `#ff0000`
    }
    else if(nomecor == `azul`){
        document.body.style.background = `#0127ff`
    }
    else if(nomecor == "verde"){
        document.body.style.background = `#09ff01`      
    }
    else if(nomecor == "amarelo"){
        document.body.style.background = `#d9ff01`
    }
    else if(nomecor == "rosa"){
        document.body.style.background = `#ff01f2`
    }
    else if(nomecor == "preto"){
        document.body.style.background = `#000000`
    }
    else{
        document.body.style.background = `#ffffff`
    }
}

