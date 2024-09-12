function vp() {
   var texto = document.getElementById(`txt`)
   texto = String(texto.value)
   var div = document.getElementById(`d`)
   var lista = []
   lista = texto
   var w = []
   var r = []
   for(x in lista){
        w += lista[x]
   }
   var c = (lista.length) -1
  for(var k = 1; c>=0; c--){
    r += lista[c]
  }
  if(r == lista){
    div.innerHTML = `É palindromo`
  }
  else{
    div.innerHTML = `Não é palindromo`
  }
}