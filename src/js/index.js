// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.cartao');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((cartao) => {
    cartao.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        cartao.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(cartao);

        // passo 2 - alterar a imagem do personagem grande
        alterarNomePersonagemSelecionado(cartao);

        // passo 3 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(cartao);
    });
});

function alterarDescricaoPersonagem(cartao) {
    const descricaoPersonagem = document.getElementById('descricao-texto');
    descricaoPersonagem.innerText = cartao.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(cartao) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = cartao.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(cartao) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = cartao.getAttribute('id');
    // Ajustar o caminho da imagem de acordo com os nomes fornecidos
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}


