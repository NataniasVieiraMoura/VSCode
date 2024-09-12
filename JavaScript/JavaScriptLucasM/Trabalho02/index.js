function vp() {
    const frase = document.getElementById('txt').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');/* recebe como valor, coloca a palavra em minuscuals e esse final eu não entendi =>(replace(/[^a-zA-Z0-9]/g, '')*/
    const resultadoPalindromo = document.getElementById('d');//recebe a div
  
    const reversedFrase = frase.split('').reverse().join('');
  //aqui split coloca em uma lista, reverse inverte essa lista, e join serve para que cada letra se torne um elemento da lista(cada letra pode ser refereciada por um indice, exemplo = para a lista `carro` => c é 0, a é 1, r é 2...)
    if (frase === reversedFrase) {//aqui ele compara cada exemplo
      resultadoPalindromo.textContent = `É palindromo`
    } else {
      resultadoPalindromo.textContent = `Nõa é palindromo`
    }
  }