/*
Variáeveis simples armazenam apenas uma valor
Variáveis compostas : variáveis que armazenam os valores que recebe sem eliminar o valor que ja possui*/
var auto = [`carro`,`moto`,`onibus`]
var array = []
var lista = [1,2,3,4]
console.log(auto[0])
console.log(auto[1])
console.log(auto[2])
console.log(array)
console.log(lista)
/*acrecentar valores digite:*/
lista[4] = 12
console.log(lista)
lista.push(76)
console.log(lista)
/*Para saber o comprimento da lista digite:*/
lista.length
/*length é um atributo, não um metodo*/
console.log(`O comprimento da lista é ${lista.length}`)
/*Metodo sort para ordenar de forma crecente a lista*/
let t = [23,54,565,653,12,98,3,1,0,98]
let ordenado = t.sort()
console.log(`A lista ordenada fica ${ordenado}`)
var cnt = 0
while(cnt <= 5){
    console.log(`${lista[cnt]}`)
    cnt++
}
cnt = 0
do{
    console.log(`${lista[cnt]}`)
    cnt++
}while(cnt < lista.length)
cnt =0 
for(cnt= 0;lista.length;cnt++){
    console.log(`${lista[cnt]}`)
}