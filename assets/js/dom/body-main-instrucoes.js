const main = document.createElement("main");
const blocoInstrucoes = document.createElement("aside");
const primeiroTituloInstrucoes = document.createElement("h2");
const primeiroParagrafoInstrucoes = document.createElement("p");
const segundoTituloInstrucoes = document.createElement("h2");
const segundoParagrafoInstrucoes = document.createElement("p");
const terceiroParagrafoInstrucoes = document.createElement("p");
const quartoParagrafoInstrucoes = document.createElement("p");
const quintoParagrafoInstrucoes = document.createElement("p");

main.id = "container-principal";

blocoInstrucoes.id = "bloco-instrucoes";

primeiroTituloInstrucoes.classList.add("titulo-instrucoes");
primeiroTituloInstrucoes.innerText = "Objetivo";

primeiroParagrafoInstrucoes.classList.add("paragrafo-instrucoes");
primeiroParagrafoInstrucoes.innerText = "O objetivo é acertar o máximo de sequências quanto for possível.";

segundoTituloInstrucoes.classList.add("titulo-instrucoes");
segundoTituloInstrucoes.innerText = "Instruções";

segundoParagrafoInstrucoes.classList.add("paragrafo-instrucoes");
segundoParagrafoInstrucoes.innerText = "Ao clicar no botão 'Jogar', o Genius irá mostrar a primeira seqüência de cores.";

terceiroParagrafoInstrucoes.classList.add("paragrafo-instrucoes");
terceiroParagrafoInstrucoes.innerText = "Então você deve repetir a seqüência exatamente igual ao que o Genius mostrou. Se você acertar o Gênius irá repetir a seqüência e adicionar mais uma cor e assim por diante.";

quartoParagrafoInstrucoes.classList.add("paragrafo-instrucoes");
quartoParagrafoInstrucoes.innerText = "Qual o seu recorde máximo?";

quintoParagrafoInstrucoes.classList.add("paragrafo-instrucoes");
quintoParagrafoInstrucoes.innerText = "Desafie os amigos e família e venha ser um Gênius!";

body.appendChild(main);
main.appendChild(blocoInstrucoes);
blocoInstrucoes.appendChild(primeiroTituloInstrucoes);
blocoInstrucoes.appendChild(primeiroParagrafoInstrucoes);
blocoInstrucoes.appendChild(segundoTituloInstrucoes);
blocoInstrucoes.appendChild(segundoParagrafoInstrucoes);
blocoInstrucoes.appendChild(terceiroParagrafoInstrucoes);
blocoInstrucoes.appendChild(quartoParagrafoInstrucoes);
blocoInstrucoes.appendChild(quintoParagrafoInstrucoes);