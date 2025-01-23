let amigos = []; 

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Pegando o campo de entrada
    let nomeAmigo = inputAmigo.value.trim(); // Pegando o valor e removendo espaços extras

    // Validação: Verifica se o nome está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome."); // Exibe o alerta
        return; // Sai da função, não adiciona nada ao array
    }

    // Validação: Verifica se o nome já existe no array
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado."); // Exibe o alerta
        return; // Sai da função, não adiciona o nome duplicado
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array
    console.log(amigos); // Exibe a lista atualizada no console

    // Obtém o elemento da lista onde os amigos serão exibidos
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e cria elementos de lista (<li>) para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li"); // Cria um novo elemento <li>
        itemLista.textContent = amigos[i]; // Define o texto do item
        listaAmigos.appendChild(itemLista); // Adiciona o item à lista
    }

    // Limpa o campo de entrada após adicionar o nome
    inputAmigo.value = ""; 
    inputAmigo.focus(); // Foca novamente no campo de entrada para facilitar o próximo nome
}