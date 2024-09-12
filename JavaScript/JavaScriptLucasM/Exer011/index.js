function vp() {
    const frase = document.getElementById('txt').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');/* recebe como valor, coloca a palavra em minuscuals e esse final eu não entendi =>(replace(/[^a-zA-Z0-9]/g, '')*/
    const resultadoPalindromo = document.getElementById('d');//recebe a div
  
    const reversedFrase = frase.split('').reverse().join('');
  //aqui split coloca em uma lista, reverse inverte essa lista, e join serve para que cada letra se torne um elemento da lista(cada letra pode ser refereciada por um indice, exemplo = para a lista carro => c é 0, a é 1, r é 2...)
    if (frase === reversedFrase) {//aqui ele compara cada exemplo
      resultadoPalindromo.textContent = `É palindromo`
    } else {
      resultadoPalindromo.textContent = `Não é palindromo`
    }
  }
  /*
  var nome = `Nome de Algém`
  var nome  = `Outro alguém`
  let nome = `Texto`//O let torna a variavel exclusiva, evita erros do programador
  */
  var texto = `Beltrano`
  if(true){
    var texto = `Cicrano`
    console.log(texto)
  }
  console.log(texto)
  let algem = `Beltrano`
  if(true){
    let algem = `Cicrano`
    console.log(algem)
  }
  console.log(algem)
/**var é function scoped -> vive até o final da função
 * Quando uma variavel var é alterada, alteração permanece.
 * Quando uma variavel let é alterada, alteração dura apenas no bloco de execução.
 * let é blocked scoped -> vive até o final do bloco
 * var faz um hosting => ou seja, o var é declara de fato nas primeiras linhas de código independente de onde você digitou. E isso pode gerar problemas na execução de comandos.
 * O var quando dá esses problemas ele não retorna o problema.
 */
const gravidade = 9.86
const pi = 3.14
/*
pi = 20//const é constante e o primeiro valor que a variavel receber não vai se alterar e não pode ser alterada durante toda a execução.
*/
for(var i = 0;i < 10; i++){
  setTimeout(() =>  {//esse setTimeout é um delay de execução
    console.log(i)
  },1000)//1000milisegundos ou 1 segundo
}/**Esse for com delay demostra como o var é ruim e pode causar
erro sem apresentar defeito na execução do console 
*/
for(var i = 0;i < 10; i++){
  setTimeout(() =>  {//esse setTimeout é um delay de execução
    console.log(i)
  },1000)//1000milisegundos ou 1 segundo
}