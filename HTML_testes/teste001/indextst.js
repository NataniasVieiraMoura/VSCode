function somador(){
    var nume1 = window.document.querySelector(`input#t1`)
    //Você só pode utilizar a querySelector para tag + # + nome da id da tag que deseja
    var nume2 = window.document.getElementById(`t2`)
    var rs = window.document.getElementById(`resultado`)
    var n1 = Number(nume1.value)
    var n2 = Number(nume2.value)
    var somafeita = n1 + n2
    rs.innerHTML = `O resultado é ${somafeita}`
}
