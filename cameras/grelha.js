const divisoes = [
    {nome: "Kitchen", img: "../images/cozinha.jpg"},
    {nome: "Bedroom", img: "../images/cozinha.jpg"},
    {nome: "Living Room", img: "../images/cozinha.jpg"},
    {nome: "Nursery", img: "../images/cozinha.jpg"},
    {nome: "Nursery", img: "../images/cozinha.jpg"},
    {nome: "Nursery", img: "../images/cozinha.jpg"},
    {nome: "Nursery", img: "../images/cozinha.jpg"},
    {nome: "Nursery", img: "../images/cozinha.jpg"},
];

const container = document.getElementById('grid-container');
let htmlGerado = "";

divisoes.forEach(item => {
    htmlGerado += `
            <a href="#" class="card-divisao">
                <img class="imagens" src="${item.img}" alt="${item.nome}">
                <div class="titulo-divisao">
                    <span>${item.nome}</span>
                    <img class="seta" src="../images/seta_direita.png" alt="seta direita">
                </div>
            </a>
        `;
});
container.innerHTML = htmlGerado