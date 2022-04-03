const blocoPlacar = document.createElement("aside");
const blocoRecorde = document.createElement("section");
const tituloRecorde = document.createElement("h2");
const fundoRecorde = document.createElement("div");
const recorde = document.createElement("p");
const tituloPontuacaoAtual = document.createElement("h2");
const fundoPontuacaoAtual = document.createElement("div");
const PontuacaoAtual = document.createElement("p");
const blocoInformacoes = document.createElement("section");
const feitoPor = document.createElement("h2");
const nomeDevMatheus = document.createElement("h3");
const containerImgMatheus = document.createElement("div");
const githubMatheus = document.createElement("a");
const imgGithubMatheus = document.createElement("img");
const linkedinMatheus = document.createElement("a");
const imgLinkedinMatheus = document.createElement("img");


blocoPlacar.id = "bloco-placar";

blocoRecorde.id = "bloco-recorde";

tituloRecorde.classList.add("titulo-recorde");
tituloRecorde.innerText = "Recorde:";

fundoRecorde.id = "fundo-recorde";

recorde.id = "recorde";
recorde.innerText = "0";

tituloPontuacaoAtual.classList.add("titulo-pontuacao-atual");
tituloPontuacaoAtual.innerText = "Pontos:";

fundoPontuacaoAtual.id = "fundo-pontuacao-atual";

PontuacaoAtual.id = "pontuacao-atual";
PontuacaoAtual.innerText = "0";

blocoInformacoes.id = "bloco-informacoes";

feitoPor.id = "feito-por";
feitoPor.innerText = "Develop By:";

nomeDevMatheus.classList.add("nome-dev");
nomeDevMatheus.classList.add("matheus");
nomeDevMatheus.innerText = "Matheus Vieira";

containerImgMatheus.id = "container-img";

githubMatheus.classList.add("link-social");
githubMatheus.href = "https://github.com/th-matheus";
githubMatheus.target = "_blank"

imgGithubMatheus.classList.add("img-social");
imgGithubMatheus.src = "./assets/img/github-amarelo.svg";
imgGithubMatheus.alt = "github-amarelo";

linkedinMatheus.classList.add("link-social");
linkedinMatheus.href = "https://www.linkedin.com/in/th-matheus/";
linkedinMatheus.target = "_blank";

imgLinkedinMatheus.classList.add("img-social");
imgLinkedinMatheus.src = "./assets/img/linkedin-amarelo.svg";
imgLinkedinMatheus.alt = "linkedin-amarelo";

main.appendChild(blocoPlacar);
blocoPlacar.appendChild(blocoRecorde);
blocoRecorde.appendChild(tituloRecorde);
blocoRecorde.appendChild(fundoRecorde);
fundoRecorde.appendChild(recorde);
blocoRecorde.appendChild(tituloPontuacaoAtual);
blocoRecorde.appendChild(fundoPontuacaoAtual);
fundoPontuacaoAtual.appendChild(PontuacaoAtual);
blocoPlacar.appendChild(blocoInformacoes);
blocoInformacoes.appendChild(feitoPor);
blocoInformacoes.appendChild(nomeDevMatheus);
blocoInformacoes.appendChild(containerImgMatheus);
containerImgMatheus.appendChild(githubMatheus);
githubMatheus.appendChild(imgGithubMatheus);
containerImgMatheus.appendChild(linkedinMatheus);
linkedinMatheus.appendChild(imgLinkedinMatheus);
blocoInformacoes.appendChild(nomeDevHerbert);
blocoInformacoes.appendChild(containerImgHerbert);