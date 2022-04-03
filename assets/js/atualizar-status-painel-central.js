const painelJogo = document.getElementById('bloco-centro-genius');

function painelAtencao() {
    painelJogo.innerHTML ='';
    painelJogo.style.backgroundColor = '#ffe478';

    const atencao = document.createElement('h2');

    atencao.classList.add('acertou');
    atencao.innerText = 'ATENÇÃO!';

    painelJogo.appendChild(atencao);
};

function painelSuaVez() {
    painelJogo.innerHTML ='';
    painelJogo.style.backgroundColor = '#fff';

    const suaVez = document.createElement('h2');
    const repetir = document.createElement('button');
    const chances = document.createElement('p');

    suaVez.classList.add('sua-vez');
    suaVez.innerText = 'SUA VEZ';
    repetir.id = 'repetir';
    repetir.innerText = 'repetir sequência';
    chances.id = 'chances';

    painelJogo.appendChild(suaVez);
    painelJogo.appendChild(repetir);
    painelJogo.appendChild(chances);
};

function painelAcertou() {
    painelJogo.innerHTML ='';
    painelJogo.style.backgroundColor = '#59ab59';

    const acertou = document.createElement('h2');

    acertou.classList.add('acertou');
    acertou.innerText = 'ACERTOU!';

    painelJogo.appendChild(acertou);
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