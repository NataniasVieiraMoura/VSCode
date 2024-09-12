function click(){
    let p = document.getElementById(`Horas`)
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    horário = `${horas}`+ `:` +`${minutos}`
    p.innerHTML = `${horário}`
}