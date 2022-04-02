const containerBotoes = document.getElementById('container-botao-cores');
const botaoVerde = document.getElementById('verde');
const botaoVermelho = document.getElementById('vermelho');
const botaoAmarelo = document.getElementById('amarelo');
const botaoAzul = document.getElementById('azul');
const botaoJogarPainel = document.getElementById('botao-jogar');
const recordePagina = document.getElementById('recorde');
const PontosAtualPagina = document.getElementById('pontuacao-atual');


const resultGenius = [];
const resultJogador = [];
let nivel = 0;
let recordeRAM = 0;

function resetSequencias(arr) {
    arr.splice(0, arr.length);
}

function interruptor(cor) {
    switch (cor) {
        case 'verde':
            let timerVerde = setInterval(function() {
                botaoVerde.classList.toggle('selected');
            }, 499);
            setTimeout(function() {
                clearInterval(timerVerde);
            }, 1000);
            break;
        case 'vermelho':
            let timerVermelho = setInterval(function() {
                botaoVermelho.classList.toggle('selected');
            }, 499);
            setTimeout(function() {
                clearInterval(timerVermelho);
            }, 1000);
            break;
        case 'amarelo':
            let timerAmarelo = setInterval(function() {
                botaoAmarelo.classList.toggle('selected');
            }, 499);
            setTimeout(function() {
                clearInterval(timerAmarelo);
            }, 1000);
            break;
        case 'azul':
            let timerAzul = setInterval(function() {
                botaoAzul.classList.toggle('selected');
            }, 499);
            setTimeout(function() {
                clearInterval(timerAzul);
            }, 1000);
            break;
    }
};

function acenderLuzes() {
    resultGenius.forEach(function(element, index) {
        let timer = setTimeout(function() {
            interruptor(element);
        }, (index + 1) * 1000);
    });
};

function atualizaPontosRecorde() {
    const pontuacao = document.getElementById('pontos-rodada');
    pontuacao.innerText = `${nivel}`;
}

function reiniciaGenius(evento) {
    let click = evento.target.id;
    
    if (click === 'botao-jogar-novamente'){
        resetSequencias(resultGenius);
        resetSequencias(resultJogador);
        nivel = 0;
        genius();
    } else if (click === 'reset') {
        location.reload();
    }
}

function jogarNovamente() {
    painelJogo.addEventListener('click', reiniciaGenius);
}

function recebeComparaSequenciaJogador(evento) {
    console.log(resultJogador);
    resultJogador.push(evento.target.id);

    if (resultJogador.length === resultGenius.length) {
        let validacao = resultJogador.every(function(element, index) {
            return element === resultGenius[index];
        });
        if (validacao) {
            painelAcertou();
            nivel++;
            resetSequencias(resultJogador);
            setTimeout(function() {
                genius();
            }, 1000);
        } else {
            if (nivel > recordeRAM) {
                recordePagina.innerText = nivel;
            }
            painelErrou();
            resetSequencias(resultJogador);
            resetSequencias(resultGenius);
            jogarNovamente();
            atualizaPontosRecorde();
        };
    };
}

function genius(){
    PontosAtualPagina.innerText = nivel
    painelAtencao();
    sortearCor(resultGenius);
    acenderLuzes();
    
    setTimeout(function() {
        painelSuaVez();
    }, (resultGenius.length + 1) * 1000);

    containerBotoes.addEventListener('click', recebeComparaSequenciaJogador);
}


botaoJogarPainel.addEventListener('click', genius);

