let numAleatorio = function() {
    return parseInt(Math.random() * (5 - 1) + 1);
};

function sortearCor(arr, callback = numAleatorio()) {
    let cor = callback;
    switch (cor) {
        case 1:
            cor = 'verde';
            break;
        case 2:
            cor = 'amarelo';
            break;
        case 3:
            cor = 'vermelho';
            break;
        case 4:
            cor = 'azul';
            break;
    };

    arr.push(cor)
};


