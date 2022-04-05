const containerBotoes = document.getElementById('container-botao-cores');
const botaoVerde = document.getElementById('verde');
const botaoVermelho = document.getElementById('vermelho');
const botaoAmarelo = document.getElementById('amarelo');
const botaoAzul = document.getElementById('azul');
const botaoJogarPainel = document.getElementById('botao-jogar');
const recordePagina = document.getElementById('recorde');
const pontosAtualPagina = document.getElementById('pontuacao-atual');
const turno = document.getElementById('chances');

const resultGenius = [];
const resultJogador = [];
let nivel = 0;
let recorde = 0;
let vezes = 3;

function atualizaPontosRecorde() {
    const pontuacao = document.getElementById('pontos-rodada');
    pontuacao.innerText = `${nivel}`;
};

function reiniciaGenius(evento) {
    let click = evento.target.id;
    
    if (click === 'botao-jogar-novamente'){
        resetSequencias(resultGenius);
        resetSequencias(resultJogador);
        nivel = 0;
        vezes = 3;
        genius();
    } else if (click === 'reset') {
        location.reload();
    };
};

function resetSequencias(arr) {
    arr.splice(0, arr.length);
};

function recebeComparaSequenciaJogador(evento) {
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
            if (nivel > recorde) {
                recorde = nivel;
                recordePagina.innerText = recorde;
            };
            painelErrou();
            resetSequencias(resultJogador);
            resetSequencias(resultGenius);
            painelJogo.addEventListener('click', reiniciaGenius);
            atualizaPontosRecorde();
        };
    };

    resultJogador.forEach((element, index) => {
        if (element !== resultGenius[index]) {
            if (nivel > recorde) {
                recorde = nivel;
                recordePagina.innerText = recorde;
            };
            painelErrou();
            resetSequencias(resultJogador);
            resetSequencias(resultGenius);
            painelJogo.addEventListener('click', reiniciaGenius);
            atualizaPontosRecorde();
        };
    });
};

function calcularChances(e) {
    let clique = e.target.id

    if (clique === 'repetir' && vezes > 0) {
        desabilitarBotoes();
        resetSequencias(resultJogador);
        painelAtencao();
        acenderLuzes();
        vezes--;
        setTimeout(function() {
            painelSuaVez();
            const turno = document.getElementById('chances');
            switch (vezes) {
                case 0:
                    turno.innerText = 'Você não pode mais repetir a sequência.';
                    break;
                case 1:
                    turno.innerText = `Você ainda pode repetir ${vezes} vez.`;
                    break;
                default:
                    turno.innerText = `Você ainda pode repetir ${vezes} vezes.`;
                    break;
            };
            habilitarBotoes();
        }, (resultGenius.length + 1) * 1000);
    };
};

function habilitarBotoes() {
    botaoVerde.disabled = false;
    botaoVermelho.disabled = false;
    botaoAmarelo.disabled = false;
    botaoAzul.disabled = false;
};

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
    };
};

function acenderLuzes() {
    resultGenius.forEach(function(element, index) {
        let timer = setTimeout(function() {
            interruptor(element);
        }, (index + 1) * 1000);
    });
};

function desabilitarBotoes() {
    botaoVerde.disabled = true;
    botaoVermelho.disabled = true;
    botaoAmarelo.disabled = true;
    botaoAzul.disabled = true;
};

function genius(){
    desabilitarBotoes();
    pontosAtualPagina.innerText = nivel;
    painelAtencao();
    sortearCor(resultGenius);
    acenderLuzes();
    
    setTimeout(function() {
        painelSuaVez();
        const turno = document.getElementById('chances');
        turno.innerText = `Você ainda pode repetir ${vezes} vezes.`;
        habilitarBotoes();
        painelJogo.addEventListener('click', calcularChances);
        containerBotoes.addEventListener('click', recebeComparaSequenciaJogador);
    }, (resultGenius.length + 1) * 1000);

};


botaoJogarPainel.addEventListener('click', genius);
