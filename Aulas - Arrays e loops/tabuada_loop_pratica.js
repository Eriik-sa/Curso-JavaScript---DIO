sequencia = []
function numero_par(sequencia) {
    for (let i = 0; i < sequencia.length; i++);
        if (sequencia[i] % 2 == 0) {
            console.log(sequencia[i])
        }
}
numero_par([1, 4, 6, 24, 13, 12])