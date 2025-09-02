// Array que vai guardar os nomes dos participantes
let amigos = [];

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se já existe o nome no array, ignorando maiúsculas/minúsculas
    let existe = amigos.some(a => a.toLowerCase() === nome.toLowerCase());

    if (existe) {
        alert("Este amigo já foi adicionado!");
        input.value = "";
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);
    atualizarLista();
    input.value = "";

    console.log("Amigos cadastrados:", amigos);
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert("Nenhum amigo cadastrado para sortear!");
        resultado.innerHTML = "";
        return;
    }

    if (amigos.length === 1) {
        alert("Não dá para sortear com apenas um amigo!");
        resultado.innerHTML = "";
        return;
    }

    // Sorteia aleatoriamente
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

    console.log("Amigo sorteado:", amigoSorteado);
}
