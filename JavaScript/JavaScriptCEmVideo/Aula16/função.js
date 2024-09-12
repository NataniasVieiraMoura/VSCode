let amigo = {}
console.log(typeof amigo)
let array = []
console.log(typeof array)
amigo = {nome:`José`, sexo:`Masculino`, idade:45, peso:89.7
,emgordar(p = 0){//a função do objeto altera o peso da variavel peso
    console.log(`engordou`)
    this.peso += p
}}
amigo.emgordar(3)/*você chama os valores do objeto amigo com objeto + . + *nome da variavel. Você insere na função o parametro.
*Observe que a variavel peso é alterada pela função
*/

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)