function gets(nota) {
    if (isNaN(nota)) {
        console.log("Digite um valor válido.");
    }
    return nota;
}
function print(texto) {
    console.log(texto)
}

module.exports = { gets, print };