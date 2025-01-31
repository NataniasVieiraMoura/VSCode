//Operadores aritiméticos, atribuições, relacionais, lógicos e ternários.
//Operadores aritméticos e de Atribuição.
/*
Soma +
Subtração - 
Multiplicação *
Divisão /
Resto da Divisão % 
Potência **
Obedeça a precedencia de operações:
0ª Operações entre parenteses;
1ª Operações entre couchetes;
2ª Operações entre chaves;

0ª Da esquerda para a direita;
1ª Potência ou Radiciação;
2ª Divisão(resto da divisão) ou Multiplicação;
3ª Soma ou Subtração;

Ordem para resolver operadores:
0ª Operadores Aritiméticos
1ª Operadores Relacionais
2ª Operadores Lógicos
*/
var a  = 3 + 8
var b = a % 3
var c = 5 * b ** 2
var d = 10 - a / 2
var e = 6 * 2 /d
var f = c - [a % (b + 4)]/e
alert(`${a}`)
alert(`${b}`)
alert(`${c}`)
alert(`${d}`)
alert(`${e}`)
alert(`${f}`)

//Autoatribuições: (Incremento)
var n = 3
n = n - 7
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
n += 4
n -= 4
n *= 4
n **= 4
n %= 4
n++
++n
n--
--n
/*
n++(pós-incremento[adiciona um 1 antes])
++n(pré-incremento[adiciona um 1 depois de aparecer a quantidade anterior])
n--(pró-incremento[subtrai um 1 antes])
--n(pré-incremento[subtrai um 1 depois de aparecer a quantidade anterior])
*/ 

//Operadores relacionais:
/*
Não possuem ordem de precedencia:
Segue a regra do primeiro da esquerda para a direita.
< menor que
> maior que
>= maior igual á
<= menor igual á
== igual á (aqui o que importa é a grandeza e não o tipo)
=== identico á (igualdade restrita[mesmo valor e mesmo tipo])
!= diferênte de
Para operadores relacionais o resultado é booleano(True or False)
5 == `5` = True(para o node eles tem mesma grandeza, logo são iguais)
5 == 5 = True(mesma grandeza)
`5` == `5` = True(mesma grandeza)
5 == `51` = False(grandezas diferêntes)
`52` == `45` = False(grandezas diferêntes)
5 === 5 = True(mesma  grandeza e mesmo tipo numerico)
5 === `5` = False(mesma grandeza e tipos diferêntes)
*/
/* 
Operadores Lógicos:
Tem ordem de precedencia:
0ª ! negação equivale a não [booleano(True ou False)]
1ª && comjunção equivale a e [Duas condições tem de ser True]
2ª || disjunção equivale a ou [Uma condição tem de ser satisfeita para True]
*/
/*
Você pode misturar operadores:
 (23 /2) >= 10 && 10**2 <= 999 -> Nesse exemplo primeiro resolva os operadores aritméticos(**,/,*,+,-) que vão gerar valores, esses vão ser comparados nos operadores relacionais(!=,===,>=,<=), esses vão gerar resultados true or false e por ultimo os operadores lógicos(!,||,&&) vão comparar os true or false gerados pelos relacionais.
*/
/*
Operador Ternário:
teste ? true : false
media >= 7 ? `Aprovado` : `Reprovado`
você escreve uma condição aqui ? caso ela seja satisfeita essa parte aparece : caso não seja satisfeita essa outra aparece
Exemplo: 
var x = 10
var resultado = x % 2 === 0 ? Par : Impar
Nesse exemplo caso a variavel x tiver resto identico a 0 o resutado vai exibir Par e caso a váriavel x tenha resto não-identico(diiferênte) de 0 o resultado vai ser Impar.
logo a variável resultado depende do valor da variável x.
*/