function ip(){
    var d = document.getElementById(`div`)
    var numero = document.querySelector(`input#num`)
    numero = Number(numero.value)
    if(numero % 2 == 0){
        d.innerHTML = `O numero ${numero} é par`
    }
    else{
        d.innerHTML = `O numero ${numero} é impar`
    }
}