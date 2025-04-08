const { gets, print } = require('./functions')

function media_aluno() {
    const nota = gets("oi");

    if (isNaN(nota)) {
        return `"${nota}" não é um valor de nota válido.`; 
    }

    if (nota < 5) {
        return `A média do aluno foi ${nota}, o aluno está reprovado.`;
    } else if (nota >= 5 && nota < 7) {
        return `A média do aluno foi ${nota}, o aluno está de recuperação.`;
    } else {
        return `A média do aluno foi ${nota}, o aluno está aprovado.`;
    }
}
print(media_aluno())