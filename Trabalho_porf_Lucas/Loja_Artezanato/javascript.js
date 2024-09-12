
let cnt = 1
function acao(){
    let div = document.getElementById(`tela`)
    cnt += 1
    let imagem =`<img src="imgs/`+ cnt +`.jpg" alt="nada" width= "1200px"
    height= "500px">`
    if(cnt ===  6){
        cnt = 1
    }
    div.innerHTML = imagem
}
function menos(){
    let div = document.getElementById(`tela`)
    if(cnt == 1){
        cnt = 6
    }
    cnt -= 1
    let imagem =`<img src="imgs/`+ cnt +`.jpg" alt="nada" width= "1200px"
    height= "500px">`
    div.innerHTML = imagem
}
