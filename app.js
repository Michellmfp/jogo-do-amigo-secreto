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

    amigos.push(nomeAmigo); // Adiciona o nome ao array
    console.log(amigos); // Exibe a lista atualizada no console

    // Limpa o campo de entrada após adicionar o nome
    inputAmigo.value = ""; 
    inputAmigo.focus(); // Foca novamente no campo de entrada para facilitar o próximo nome
}
