const painelJogo = document.getElementById('bloco-centro-genius');

function painelAtencao() {
    painelJogo.style.backgroundColor = '#ffe478';
    painelJogo.innerHTML = `
    <h2 class="atencao">ATENÇÃO!</h2>
    `;
};

function painelSuaVez() {
    painelJogo.style.backgroundColor = '#fff';
    painelJogo.innerHTML = `
    <h2 class="sua-vez">SUA VEZ</h2>
    `;
};

function painelAcertou() {
    painelJogo.style.backgroundColor = '#59ab59';
    painelJogo.innerHTML = `
    <h2 class="acertou">ACERTOU!</h2>
    `;
};

function painelErrou() {
    painelJogo.innerHTML ='';
    painelJogo.style.backgroundColor = '#ff7979';
    
    let tituloErrou = document.createElement('h2');
    let tituloPontos = document.createElement('h4');
    let pontos = document.createElement('p');
    let jogarNovamente = document.createElement('button');
    let resetjogo = document.createElement('button');

    tituloErrou.classList.add('errou');
    tituloErrou.innerText = 'VOCÊ ERROU!';
    tituloPontos.classList.add('titulo-pontos');
    tituloPontos.innerText = 'pontos';
    pontos.id = 'pontos-rodada';
    pontos.classList.add('pontos-rodada');
    pontos.innerText = '0';
    jogarNovamente.id = 'botao-jogar-novamente'
    jogarNovamente.classList.add('botao-jogar-novamente');
    jogarNovamente.innerText = 'JOGAR NOVAMENTE';
    resetjogo.id = 'reset';
    resetjogo.innerText = 'INICIO'

    painelJogo.appendChild(tituloErrou);
    painelJogo.appendChild(tituloPontos);
    painelJogo.appendChild(pontos);
    painelJogo.appendChild(jogarNovamente);
    painelJogo.appendChild(resetjogo);
};