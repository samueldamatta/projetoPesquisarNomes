let nomes = [
    "samuel",
    "luiz",
    "leticia",
    "joao"
]

function pesquisarNomes(){
    let nomePesquisa = document.getElementById('campoNome').value
    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]
        if (nomePesquisa == nome){
            itensLista += `
            <li class="list-group-item">
            ${nome}
            </li>` 
        }
    }


}

function carregarNomes(){

    let itensLista = ''

    for(indice in nomes){
        let nome = nomes[indice]

        itensLista += `
            <li class="list-group-item">
            ${nome}
            </li>`          
    }
    document.getElementById('lista').innerHTML = itensLista 
}   
