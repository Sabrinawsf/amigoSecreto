//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array que vai guardar os nomes dos participantes
// Array de amigos
let amigos = [];

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    console.log("Amigos cadastrados:", amigos);
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos cadastrados
    if (amigos.length === 0) {
        alert("Nenhum amigo cadastrado para sortear!");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostra o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

    console.log("Amigo sorteado:", amigoSorteado);
}



