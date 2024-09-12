function calculadora(){
    var nume = document.getElementById(`numero`)
    nume = Number(nume.value)
    var div = document.getElementById(`div`)
    nume = Number(nume.value);
    x = 0
    y = 0
    for(x=0;x <= 10; x++){  
        var resposta = x * nume
    }
    for(y = 0;y <= 10; y++){
        div.innerHTML = `${x} x ${nume} = ${resposta}`
    }
}



function pares(){
    x = 0
    somador = 0
    
    for(x; x === 100; x++){
        if(x % 2 === 0){
            somador += x
        }
    }
    div01.innerHTML = `${somador}`
}