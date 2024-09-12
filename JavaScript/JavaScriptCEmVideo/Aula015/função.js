let num = document.getElementById(`numero`)
let lista = document.getElementById(`flista`)
let res = document.getElementById(`res`)
let valores = []
function énumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}
function nalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false 
    }
}
function adicionar(){
    if(énumero(num.value) && !nalista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
        //window.alert(`tudo ok`)

    }
    else{
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = ``
    num.focus()//apaga o numero logo após o usuário da enter
}
function funfinal(){
    if(valores.length == 0){
        window.alert(`Adicione valores antes de finalizar.`)
    }
    else{
        var total = valores.length
        var max = valores[0]
        var min = valores[0]
        var soma = 0
        var media = 0
        for(let pos in valores){
            if(valores[pos] > max){
                max = valores[pos]
            }
            else if(valores[pos] < min){
                min = valores[pos]
            }
            soma += valores[pos]
        }
    }
    media = soma/total
    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${max} .</p>`
    res.innerHTML += `<p>O menor valor informado foi ${min} .</p>`
    res.innerHTML += `<p>A soma de todos os valores temos ${soma} .</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media} .</p>`
}
/**Fundamentos;
 * Variáveis e tipos de dados;
 * Operadores aritméticos, lógicos e relacionais;
 * condições;
 * repetições;
 * Estudar muito sobre funções;
 * DOM;
 * Estudar HTML5 e CSS3;
 * Objetos(linguagem orientada a objeto);
 * Estudar modularização;
 * RegEx;
 * JSON;
 * AJAX;
 * Node.js;
 */

//vetor:
let lsts = [`valor`, 23, `Texot`, 235]
//objeto:
let amigo = {nome:`josé`,
sexo:`masculino`,
peso:85.8,
idade: 34,
engordar(){//um objeto pode receber uma função
    if(peso > 100){
        return `acima do peso`
    }
}}
