const dadosNotificacoes = [
    { texto: "Washing machine finishes in 5 mins." },
    { texto: "Abnormal movement detected in the living room." },
    { texto: "Wendy arrived home." },
    { texto: "Smoke alarm triggered in the kitchen." },
    { texto: "Garage door has been open for more than 15 minutes." },
    { texto: "There is movement in the basement." },
    { texto: "The lion has escaped." }
];

const container = document.getElementById('lista-notificacoes');
let indiceAtual = 0;

// --- FUNÇÃO PARA CRIAR A DATA FORMATADA ---
function obterDataAtual() {
    const agora = new Date();

    // padStart(2, '0') garante que fica "05" em vez de "5"
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro é 0, por isso +1
    const ano = agora.getFullYear();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    // Retorna algo como: "18/12/2025 14:30:05"
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

function adicionarNotificacao() {
    const item = dadosNotificacoes[indiceAtual];

    // 1. Gera a data exata DO MOMENTO ATUAL
    const dataTempoReal = obterDataAtual();

    const div = document.createElement('div');
    div.classList.add('grupo-notificacao');

    // 2. Injeta a 'dataTempoReal' no HTML
    div.innerHTML = `
        <div class="notificacao-data">${dataTempoReal}</div>
        <div class="notificacao-card">
            
            <div class="icon-placeholder" style="display: flex; justify-content: center; align-items: center;">
                
                <img src="../images/danger-icon.png" alt="danger-icon" style="width: 30px; height: auto;">
            
            </div> 
            <div class="notificacao-texto">${item.texto}</div>
        </div>
    `;

    container.prepend(div);

    // Animação de entrada
    setTimeout(() => {
        div.classList.add('entrar');
    }, 50);

    // Limpeza (Mantém apenas as últimas 5)
    if (container.children.length > 5) {
        const notificacaoAntiga = container.lastElementChild;
        notificacaoAntiga.classList.remove('entrar');
        notificacaoAntiga.classList.add('sair');
        setTimeout(() => {
            notificacaoAntiga.remove();
        }, 500);
    }

    // Loop infinito do array de textos
    indiceAtual++;
    if (indiceAtual >= dadosNotificacoes.length) {
        indiceAtual = 0;
    }
}

// Inicia imediatamente e repete a cada 3 segundos
adicionarNotificacao();
setInterval(adicionarNotificacao, 3000);