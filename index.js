const carrosselContainer = document.querySelector('.imagens-carrossel');
const setas = document.querySelectorAll('.seta');
const imagens = document.querySelectorAll('.imagens');
const totalImagens = imagens.length;
let indiceAtual = 0;

const tituloDivisaoElemento = document.getElementById('titulo-divisao');
const nomesDivisoes = [
    "Quarto",
    "Cozinha"
];

//atualiza a posição do carrossel
function atualizarCarrossel() {
    //se estiver no índice 1, o deslocamento será -100%
    const deslocamento = -indiceAtual * 100;

    //aplica a transformação CSS para mover o contentor de imagens
    carrosselContainer.style.transform = `translateX(${deslocamento}%)`;
    tituloDivisaoElemento.textContent = nomesDivisoes[indiceAtual];
}
atualizarCarrossel();

setas.forEach(seta => {
    seta.addEventListener('click', () => {
        if (seta.id === 'seta_direita') {
            if (indiceAtual < totalImagens - 1) {
                indiceAtual++;
            } else {
                //loop
                indiceAtual = 0;
            }
        }
        else if (seta.id === 'seta_esquerda') {
            //se não for a primeira imagem, recua
            if (indiceAtual > 0) {
                indiceAtual--;
            } else {
                //volta ao início se for a última
                indiceAtual = totalImagens - 1;
            }
        }
        atualizarCarrossel();
    });
});