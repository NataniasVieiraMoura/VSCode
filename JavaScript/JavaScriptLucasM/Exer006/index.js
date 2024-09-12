
function lucas(){
    var x = document.getElementById(`nome`)
    var senha = document.getElementById(`senha`)
    var santos = document.getElementById(`retorno`)
    var s = String(senha.value)
    var texto = String(x.value)//a variavel recebe outra variavel definida como string
    if(texto.length == 0){
        window.alert(`Você não pode entrar sem um nome`)
    }
    if(s.length == 0){
        santos.innerHTML = `Esqueceu a senha Sr ${texto}, então click no `
        santos.innerHTML += `<a href="https://tecnoblog.net/responde/como-ver-senhas-salvas-no-google-chrome/"> link</a>`
    }
    if(texto.length > 0 && s.length > 0){
        window.location.href = "pagina.html"
    }
}
