// Abrir e fechar descrição
const artigos = document.querySelectorAll(".artigo");

artigos.forEach(artigo => {
    artigo.addEventListener("click", () => {
        const descricao = artigo.querySelector(".descricao");
        descricao.style.display =
            descricao.style.display === "block" ? "none" : "block";
    });
});

// Filtro de busca
const campoBusca = document.getElementById("campoBusca");

campoBusca.addEventListener("keyup", () => {
    const filtro = campoBusca.value.toLowerCase();

    artigos.forEach(artigo => {
        const titulo = artigo.querySelector(".titulo").textContent.toLowerCase();
        artigo.style.display = titulo.includes(filtro) ? "block" : "none";
    });
});
