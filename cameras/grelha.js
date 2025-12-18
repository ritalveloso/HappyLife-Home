const divisoes = [
    {nome: "Kitchen", video: "../videos/kitchen.mp4"},
    {nome: "Kitchen", image: "../images/kitchen.jpg"},
    {nome: "Nursery", video: "../videos/nursery.mp4"},
    {nome: "Nursery", image: "../images/nursery.jpg"},
    {nome: "Bathroom", video: "../videos/bathroom.mp4"},
    {nome: "Bathroom", image: "../images/bathroom.jpg"},
    {nome: "Kids' Bedroom", video: "../videos/kids-bedroom.mp4"},
    {nome: "Kid's Bedroom", image: "../images/kids-bedroom.jpg"},
    {nome: "Living Room", video: "../videos/living-room.mp4"},
    {nome: "Living Room", image: "../images/living-room.jpg"},
    {nome: "Parent's Bedroom", video: "../videos/bedroom.mp4"},
    {nome: "Parent's Bedroom", image: "../images/bedroom.jpg"},
];

const container = document.getElementById('grid-container');
let htmlGerado = "";

divisoes.forEach(item => {
    if (item.video) {
        htmlGerado += `
        <div class="card-divisao hidden">
            <video autoplay muted playsinline>
                <source src="${item.video}" type="video/mp4">
            </video>
            <div class="effect_Cam">
                <img src="../images/effect_Camera.png" alt="Camera Effect">
            </div>
            <div class="titulo-divisao">
                ${item.nome}
            </div>
        </div>
    `;
    } else {
        htmlGerado += `
        <div class="card-divisao">
            <img class="imageRoom" src="${item.image}" alt="${item.nome}">
            <div class="effect_Cam">
                <img src="../images/effect_Camera.png" alt="Camera Effect">
            </div>
            <div class="titulo-divisao">
                ${item.nome}
            </div>
        </div>
    `;
    }
});

container.innerHTML = htmlGerado;

const room = document.querySelectorAll('.card-divisao');

function seeRandom() {
    let oneIsPlaying = 0;
    let chance = Math.floor(Math.random() * );
    for (let i = 0; i < room.length; i += 2) {
        if (!room[i].classList.contains("hidden")) {
            oneIsPlaying = 1;
        }
    }
        if (chance === 1 && oneIsPlaying != 1) {
        let whitchOne = Math.floor(Math.random() * 6);

        if (whitchOne === 0) {
            room[0].classList.remove('hidden');
            room[1].classList.add('hidden');
            const video = room[0].querySelector("video");
            if (video) video.play();
        } else if (whitchOne === 1) {
            room[2].classList.remove('hidden');
            room[3].classList.add('hidden');
            const video = room[2].querySelector("video");
            if (video) video.play();
        } else if (whitchOne === 2) {
            room[4].classList.remove('hidden');
            room[5].classList.add('hidden');
            const video = room[4].querySelector("video");
            if (video) video.play();
        } else if (whitchOne === 3) {
            room[6].classList.remove('hidden');
            room[7].classList.add('hidden');
            const video = room[6].querySelector("video");
            if (video) video.play();
        } else if (whitchOne === 4) {
            room[8].classList.remove('hidden');
            room[9].classList.add('hidden');
            const video = room[8].querySelector("video");
            if (video) video.play();
        } else if (whitchOne === 5) {
            room[10].classList.remove('hidden');
            room[11].classList.add('hidden');
            const video = room[10].querySelector("video");
            if (video) video.play();
        }
    }
}

setInterval(seeRandom, 1000);

for (let i = 0; i < room.length; i += 2) {
    const video = room[i].querySelector("video");

    if (video) {
        const videoIndex = i;
        const imageIndex = i + 1;

        video.addEventListener("ended", () => {
            room[videoIndex].classList.add("hidden");
            room[imageIndex].classList.remove("hidden");
        });
    }
}

