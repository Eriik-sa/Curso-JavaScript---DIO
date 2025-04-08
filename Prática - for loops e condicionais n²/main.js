
const { gets, print } = require('./functions');
const lista = gets([3, 4, 6, 7, 10, 9, 22, 35]);

function maior_valor_par() {
    let maiorPar = null;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            if (maiorPar === null || lista[i] > maiorPar) {
                maiorPar = lista[i];
            }
        }
    }
    return maiorPar !== null
        ? `O maior valor par é: ${maiorPar}`
        : "Não há números pares na lista";
}

function maior_valor_impar() {
    let maiorImpar = null;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            if (maiorImpar === null || lista[i] > maiorImpar) {
                maiorImpar = lista[i];
            }
        }
    }
    return maiorImpar !== null
        ? `O maior valor ímpar é: ${maiorImpar}`
        : "Não há números ímpares na lista";
}

print(maior_valor_par());
print(maior_valor_impar()); 