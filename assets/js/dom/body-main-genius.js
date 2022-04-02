const blocoPrincipal = document.createElement("section");
const containerGenius = document.createElement("div");
const containerBotaoCores = document.createElement("div");
const botaoGeniusVerde = document.createElement("button");
const botaoGeniusVermelho = document.createElement("button");
const botaoGeniusAmarelo = document.createElement("button");
const botaoGeniusAzul = document.createElement("button");
const blocoCentroGenius = document.createElement("div");
const botaoJogar = document.createElement("button");

blocoPrincipal.id = "bloco-principal";

containerGenius.id = "container-genius";

containerBotaoCores.id = "container-botao-cores";

botaoGeniusVerde.id = "verde";
botaoGeniusVerde.classList.add("botao-genius");

botaoGeniusVermelho.id = "vermelho";
botaoGeniusVermelho.classList.add("botao-genius");

botaoGeniusAmarelo.id = "amarelo";
botaoGeniusAmarelo.classList.add("botao-genius");

botaoGeniusAzul.id = "azul";
botaoGeniusAzul.classList.add("botao-genius");

blocoCentroGenius.id = "bloco-centro-genius";

botaoJogar.id = "botao-jogar";
botaoJogar.innerText = "JOGAR";

main.appendChild(blocoPrincipal);
blocoPrincipal.appendChild(containerGenius);
containerGenius.appendChild(containerBotaoCores);
containerBotaoCores.appendChild(botaoGeniusVerde);
containerBotaoCores.appendChild(botaoGeniusVermelho);
containerBotaoCores.appendChild(botaoGeniusAmarelo);
containerBotaoCores.appendChild(botaoGeniusAzul);
containerGenius.appendChild(blocoCentroGenius);
blocoCentroGenius.appendChild(botaoJogar);
