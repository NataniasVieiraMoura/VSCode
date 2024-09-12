function função() {
    let num = document.getElementById(`numero`)
    let tab = document.getElementById(`seltab`)
    if (num.value.length == 0) {
        window.alert(`Você não pode deixar o campo vazio`)
    }
    
    else{
        var cnt = 0
        var n = Number(num.value)
        tab.innerHTML = ``
        while (cnt <= 10) {
            let item = document.createElement('option')
            item.text = ` ${cnt} x ${n} = ${cnt * n} `
            item.value = `tab${cnt}`
            tab.appendChild(item)
            cnt++
        }
    }
}
