sequencia = [5, 6, 9, 11, 12, 67];
function percorrer_lista() {
    let maior_valor = sequencia[0];
 
    for (let i = 0; sequencia.length > i; i++) {
        if (sequencia[i] > maior_valor) {
            maior_valor = sequencia[i];

        }
    }
    console.log(maior_valor);
}
percorrer_lista();