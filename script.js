function adicionarFilme() {
    //função para adicionar algo o input
    var filmeFavorito = document.getElementById("filme").value;
    //var do input para colocar o filme

    if (filmeFavorito.endsWith(".jpg")) {
        //endsWith é usado para colocar uma condição de que se algo terminar da maneira desejada 
        filmesNaTela(filmeFavorito);
        //ligação entre a outra function que fará as ações de acordo com as condições do if e else
    } else {
        console.error("Endereço de filme inválido");
        //mostra um erro no console e não aparece uma imagem quebrada a página
    }

    document.getElementById("filme").value = ""   
    //quando a pessoa enviar a imagem o input é limpado automaticamente
}

function filmesNaTela(filme) {
    //função que fará os elementos aparecerem na tela
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}