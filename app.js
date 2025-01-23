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

// Função para sortear amigos
function sortearAmigo() {
    // Verifica se o array de amigos está vazio
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear."); // Exibe o alerta
        return; // Sai da função, não realiza o sorteio
    }

    // Gera um índice aleatório para o sorteio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio]; // Obtém o nome correspondente ao índice

    // Limpa a lista de nomes visualmente
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpa o array de amigos
    amigos = [];

    // Exibe o nome sorteado na tela
    exibirResultado(nomeSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(nomeSorteado) {
    let resultado = document.getElementById("resultado"); // Pega o elemento da lista de resultados
    resultado.innerHTML = `<li>${nomeSorteado}</li>`; // Atualiza o conteúdo com o nome sorteado
}