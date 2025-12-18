const dadosNotificacoes = [
    { texto: "The psychologist has arrived." },
    { texto: "Wendy and Peter have the control now." },
    { texto: "Wendy prepared some tea." },
    { texto: "System Alert: The walls are becoming real." },
    { texto: "Undefined odor detected: Hot straw and raw meat." },
    { texto: "Undefined audio detected in Nursery." },
    { texto: "The lion has escaped." },
    { texto: "Undefined liquid detected in Kids' Bedroom." },
    { texto: "Undefined liquid detected in Kids' Bedroom." }
];

const container = document.getElementById('lista-notificacoes');
let indiceAtual = 0;

function obterDataAtual() {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

function adicionarNotificacao() {
    const item = dadosNotificacoes[indiceAtual];
    const dataTempoReal = obterDataAtual();
    const div = document.createElement('div');
    div.classList.add('grupo-notificacao');

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

    setTimeout(() => {
        div.classList.add('entrar');
    }, 50);

    if (container.children.length > 5) {
        const notificacaoAntiga = container.lastElementChild;
        notificacaoAntiga.classList.remove('entrar');
        notificacaoAntiga.classList.add('sair');
        setTimeout(() => {
            notificacaoAntiga.remove();
        }, 500);
    }
    indiceAtual++;
    if (indiceAtual >= dadosNotificacoes.length) {
        indiceAtual = 0;
    }
}
adicionarNotificacao();
setInterval(adicionarNotificacao, 3000);