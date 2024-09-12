// Criando uma lista (array)
//Esse é o java da pesquisa de livros
/*
let minhaLista = [
  "Dom Casmurro - Machado de Assis",
  "Memórias Póstumas de Brás Cubas - Machado de Assis",
  "Grande Sertão: Veredas - Guimarães Rosa",
  "Gabriela, Cravo e Canela - Jorge Amado",
  "Capitães da Areia - Jorge Amado",
  "Quincas Borba - Machado de Assis",
  "Vidas Secas - Graciliano Ramos",
  "O Cortiço - Aluísio Azevedo",
  "O Guarani - José de Alencar",
  "O Alienista - Machado de Assis",
  "Claro Enigma - Carlos Drummond de Andrade",
  "Macunaíma - Mário de Andrade",
  "São Bernardo - Graciliano Ramos",
  "O Auto da Compadecida - Ariano Suassuna",
  "O Quinze - Rachel de Queiroz",
  "O Primo Basílio - José Maria de Eça de Queirós",
  "Cidade de Deus - Paulo Lins",
  "Minha Vida de Menina - Helena Morley",
  "A Hora da Estrela - Clarice Lispector",
  "Tieta do Agreste - Jorge Amado",
  "O Ateneu - Raul Pompeia",
  "O Pagador de Promessas - Dias Gomes",
  "O Guarani - José de Alencar",
  "Iracema - José de Alencar",
  "O Seminarista - Bernardo Guimarães",
  "Mayombe - Pepetela",
  "Os Sertões - Euclides da Cunha",
  "Til - José de Alencar",
  "O Seminarista - Bernardo Guimarães",
  "Capitães da Areia - Jorge Amado",
  "O Triste Fim de Policarpo Quaresma - Lima Barreto",
  "Terra Sonâmbula - Mia Couto",
  "O Seminarista - Bernardo Guimarães",
  "Capitães da Areia - Jorge Amado",
  "O Triste Fim de Policarpo Quaresma - Lima Barreto",
  "Terra Sonâmbula - Mia Couto",
  "Senhora - José de Alencar",
  "O Primo Basílio - José Maria de Eça de Queirós",
  "O Triste Fim de Policarpo Quaresma - Lima Barreto",
  "Terra Sonâmbula - Mia Couto",
  "Senhora - José de Alencar",
  "Iracema - José de Alencar",
  "Tieta do Agreste - Jorge Amado",
  "O Guarani - José de Alencar",
  "Macunaíma - Mário de Andrade",
  "São Bernardo - Graciliano Ramos",
  "O Guarani - José de Alencar",
  "Macunaíma - Mário de Andrade",
  "São Bernardo - Graciliano Ramos",
  "O Guarani - José de Alencar"
];


// Acessando elementos da lista
console.log(minhaLista[0]); // Saída: Item 1
console.log(minhaLista[1]); // Saída: Item 2

// Adicionando um item ao final da lista
minhaLista.push("Novo Item");

// Iterando sobre a lista usando um loop for
for (let i = 0; i < minhaLista.length; i++) {
    console.log(minhaLista[i]);
}

// Iterando sobre a lista usando forEach (uma função de callback é fornecida)
minhaLista.forEach(function(item) {
    console.log(item);
});

// Removendo o último item da lista
minhaLista.pop();

// Verificando o comprimento atual da lista
console.log(minhaLista.length); // Saída: 4
*/
function searchList() {
  // Obtém o valor do campo de pesquisa
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();

  // Obtém a lista
  var ul = document.getElementById('myList');
  var li = ul.getElementsByTagName('li');

  // Itera sobre cada item da lista
  for (var i = 0; i < li.length; i++) {
      var item = li[i];
      var textValue = item.textContent || item.innerText;

      // Verifica se o texto do item contém a string de pesquisa
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          item.style.display = ''; // Exibe o item se corresponder
      } else {
          item.style.display = 'none'; // Oculta o item se não corresponder
      }
  }
}