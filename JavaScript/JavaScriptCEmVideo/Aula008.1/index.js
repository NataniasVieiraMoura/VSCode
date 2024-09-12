function ato(){
    var horario = new Date()
    agora = horario.getHours()
    agora = 19
    console.log(`${agora}`)
    switch(agora){
    case(12):
    //manhã
    console.log(`manhã`)
    document.body.style.background = `#e2cd9f`
    break
    case(18):
    console.log(`tarde`)
    //tarde
    document.body.style.background = `#b9846f`
    break
    case(19):
    console.log(`noite`)
    document.body.style.background = `#515154`
    //noite
    break
    case(2):
    console.log(`madrugada`)
    document.body.style.background = `#51515e`
    //madrugada
    break
}
}
ato()