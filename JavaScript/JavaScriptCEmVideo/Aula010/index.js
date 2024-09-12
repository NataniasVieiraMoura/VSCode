/*codigo do emoge de mão U+1F449(site da unecode)*/
function laço(){
    //Quais os erros?
    ini = document.getElementById(`inicio`)
    fim = document.getElementById(`fim`)
    pas = document.getElementById(`passo`)
    //a função length conta a quantidade de caracteries que a variavel recebeu
    //a função value indica que se trata de um valor numerico
    //Number transforma em um número a variável
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.legth == 0){
        //Os valores ini, fim e pas não foram transformados em number
        window.alert(`[Erro] Faltam dados`)
        //alert tem que ser precedido de window.
    }
    else{
    ret = document.getElementById(`retorno`)
    //Não esqueça de transformar as váriaveis em Number => Number(variavel.value)
    // você pode criar uma variavel com let, var ou const
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if(p <= 0){
        p = 1
        window.alert(`Passo 0 não pode executar o laço. Considerando passo padrão ${p}.`)
    }
    let cnt = 0
    if(i < f){
        //contagem crecente
        for(cnt = i; cnt <= f;cnt +=p){
            //O erro aqui foi não usar o inner para receber os valores
            ret.innerHTML += `\u{1F449} ${cnt}`
        }
    }
    else if(i > f){
        //contagem regressiva
        for(cnt = i; cnt >= f; cnt -= p)
        //Para inserir emoge utilize \u{ aqui o codigo do emoge}
        ret.innerHTML += `\u{1f449} ${cnt}`
    }
    if(cnt=f){
        //emoge ao final da pagina
        ret.innerHTML += `\u{1F3c1}`
    }
    
}
}