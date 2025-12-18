const carrosselContainer = document.querySelector('.imagens-carrossel');
const setas = document.querySelectorAll('.seta');
const imagens = document.querySelectorAll('.imagens');
const switchLuzes = document.getElementById('switch-luzes');
const inputsCor = document.querySelectorAll('input[name="cor-video"]');
const totalImagens = imagens.length;
let indiceAtual = 0;
const tituloDivisaoElemento = document.getElementById('titulo-divisao');
const nomesDivisoes = ["Bedroom", "Kitchen", "Bathroom", "Kids' Bedroom", "Living Room", "Nursery"];
let estadosLuzes = new Array(totalImagens).fill(true);
let estadosCores = new Array(totalImagens).fill('original');
function atualizarCarrossel() {
    const deslocamento = -indiceAtual * 100;
    carrosselContainer.style.transform = `translateX(${deslocamento}%)`;
    tituloDivisaoElemento.textContent = nomesDivisoes[indiceAtual];
    switchLuzes.checked = estadosLuzes[indiceAtual];
    const corGuardada = estadosCores[indiceAtual];
    inputsCor.forEach(input => {
        if (input.value === corGuardada) {
            input.checked = true;
        }
    });
}
function limparFiltrosCor(elementoVideo) {
    elementoVideo.classList.remove('filtro-quente', 'filtro-frio', 'filtro-neon');
}
switchLuzes.addEventListener('change', () => {
    estadosLuzes[indiceAtual] = switchLuzes.checked;
    aplicarEfeitosVisuais();
});
inputsCor.forEach(input => {
    input.addEventListener('change', () => {
        if (input.checked) {
            estadosCores[indiceAtual] = input.value;
            aplicarEfeitosVisuais();
        }
    });
});
function aplicarEfeitosVisuais() {
    const videoAtual = imagens[indiceAtual];

    if (estadosLuzes[indiceAtual]) {
        videoAtual.classList.remove('luzes-off');
    } else {
        videoAtual.classList.add('luzes-off');
    }
    limparFiltrosCor(videoAtual);

    if (estadosLuzes[indiceAtual]) {
        const corAtual = estadosCores[indiceAtual];

        if (corAtual === 'quente') {
            videoAtual.classList.add('filtro-quente');
        } else if (corAtual === 'frio') {
            videoAtual.classList.add('filtro-frio');
        } else if (corAtual === 'neon') {
            videoAtual.classList.add('filtro-neon');
        }
    }
}
setas.forEach(seta => {
    seta.addEventListener('click', () => {
        if (seta.id === 'seta_direita') {
            indiceAtual = (indiceAtual < totalImagens - 1) ? indiceAtual + 1 : 0;
        } else {
            indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : totalImagens - 1;
        }
        atualizarCarrossel();
    });
});

atualizarCarrossel();