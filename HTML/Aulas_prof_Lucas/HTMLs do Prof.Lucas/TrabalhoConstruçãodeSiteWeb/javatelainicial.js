//Esse é o java da paginação

// Número total de páginas
var totalPages = 5;

// Função para criar os links das páginas
function createPagination() {
    //crio o nome da função
    var paginationElement = document.getElementById('pagination');
        //pego o id da tag
    for (var i = 1; i <= totalPages; i++) {
        var link = document.createElement('a');
        link.href = 'pagina' + i + '.html'; // Ajuste conforme necessário
        link.textContent = 'Página ' + i;

        // Adiciona um ouvinte de evento ao link para redirecionar ao clicar
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var pageUrl = this.href;
            window.location.href = pageUrl; // Redireciona para o URL da página
        });

        paginationElement.appendChild(link);
    }
}

// Chama a função para criar os links das páginas
createPagination();