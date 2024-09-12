var g = []//variavel global
var numglobal = 0
contador = 0
function função() {
    let num = document.getElementById(`numero`)
    let tab = document.getElementById(`seltab`)
    numglobal = num.value.length//variavel global recebe a quantidade de carateries da variavel num
    if (num.value.length == 0) {
        window.alert(`Adicione um valor antes de finalizar`)
    }
    else{
        var cnt = 0
        var n = Number(num.value)
        g.push(n)//variavel global g recebe os valores da variavel local n
        contador++//contador global da quantidade de elementos da lista global g
        var lista = []
        lista.push(n)
        /*tab.innerHTML = ``*/
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `tab${cnt}`
        tab.appendChild(item)
    }
}
function funfinal(){
    if(numglobal == 0){//se a variavel digitada tem tamanho 0(nada) um alerta vai ser disparado
        window.alert(`Adcione um valor para poder continuar`)
    }
    else{//se um valor foi digitado a função ocorre
    var c = 0
    var max = 0
    var min = 0
    var cnt = contador
    var res = g//variavel local da função recebe a varivavel global g
    var media = 0
    var s = 0
    while(c != cnt){
        if(c == 0){
            max = g[0]
            min = g[0]
        }
        else if(max < g[c]){
            max = g[c]
        }
        else if(min > g[c]){
            min = g[c]
        }
        s += g[c]
        c++
    }
    media = s/c
    var div = document.getElementById(`div1`)
    div.innerHTML = `Ao todo temos ${cnt} numeros cadastrados`
    var div2 = document.getElementById(`div2`)
    div2.innerHTML = `O maior valor informado foi ${max}`
    var div3 = document.getElementById(`div3`)
    div3.innerHTML = `O menor valor informado foi ${min}`
    var div4 = document.getElementById(`div4`)
    div4.innerHTML = `A média dos valores digitados foi de ${media}`
}
}
