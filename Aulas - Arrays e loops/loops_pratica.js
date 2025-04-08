class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    calcular_media() {
        let soma_notas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma_notas += this.notas[i]
        }

        const media = soma_notas / this.notas.length
        console.log(this.nome, soma_notas, media)
    }
}
const Erik = new Aluno("Erik", [5, 5, 5])
Erik.calcular_media()