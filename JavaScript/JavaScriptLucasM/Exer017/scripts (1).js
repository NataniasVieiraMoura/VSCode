document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

let cnt = 1
function acao(){
    let div = document.getElementById(`tela`)
    cnt += 1
    let imagem =`<img src="`+ cnt +`.jpg" alt="nada" width= "400px"
    height= "400px">`
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
    let imagem =`<img src="`+ cnt +`.jpg" alt="nada" width= "400px"
    height= "400px">`
    div.innerHTML = imagem
}