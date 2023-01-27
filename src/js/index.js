alert('Bem vindo ao meu primeiro projeto!');

const botaoVideo = document. querySelector(".botao-video");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);




console.log('mostrar o document', document);

console.log(document.querySelector(".botao-video"));

botaoVideo.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

const botaoFecharVideo = document.querySelector(".fechar-modal");
console.log(botaoFecharVideo);

botaoFecharVideo.addEventListener("click", () => {
modal.classList.remove("aberto");
video.setAttribute("src", "")
});


