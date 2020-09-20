const banners = ["Os melhores do Brasil!", "Qualidade e preço baixo!"];

let bannerAtual = 0;

const h2 = document.createElement("h2");
h2.setAttribute("id", "mensagem");

document
  .querySelectorAll("h1")[0]
  .parentNode.insertBefore(h2, document.querySelectorAll("h1")[0].nextSibling);

function trocaBanner() {
  bannerAtual = bannerAtual == 0 ? 1 : 0;

  document.querySelector("h2#mensagem").innerHTML = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
