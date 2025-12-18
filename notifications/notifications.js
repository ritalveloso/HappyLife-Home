const dadosNotificacoes = [
    {
        texto: "Washing machine finishes in 5 mins.",
        data: "12/12 17:03h"
    },
    {
        texto: "Abnormal movement detected in the living room.",
        data: "09/12 09:54h"
    },
    {
        texto: "Wendy arrived home.",
        data: "09/12 18:30h"
    },
    {
        texto: "Smoke alarm triggered in the kitchen.",
        data: "08/12 12:15h"
    },
    {
        texto: "Garage door has been open for more than 15 minutes.",
        data: "08/12 10:00h"
    },
    {
        texto: "Garage door has been open for more than 15 minutes.",
        data: "08/12 10:00h"
    },
    {
        texto: "Garage door has been open for more than 15 minutes.",
        data: "08/12 10:00h"
    }
];
const container = document.getElementById('lista-notificacoes');
function carregarNotificacoes() {
    let htmlFinal = "";

    dadosNotificacoes.forEach(item => {
        htmlFinal += `
            <div class="grupo-notificacao">
                <div class="notificacao-data">${item.data}</div>
                <div class="notificacao-card">
                    <div class="icon-placeholder"></div> <div class="notificacao-texto">${item.texto}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlFinal;
}
document.addEventListener('DOMContentLoaded', carregarNotificacoes);