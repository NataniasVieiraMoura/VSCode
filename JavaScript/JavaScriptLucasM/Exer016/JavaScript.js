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
    let nome = document.getElementById(`nomecor`)
    let tom = document.getElementById(`tom`)
    dado = Number(tom.value)
    let hexa = dado.toString(16);
    cor = `#`+`${hexa}`
    document.body.style.background = cor
    nome.innerHTML = `Decimal: ` + dado +` | Hexacimal:`+ hexa
}

