class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas
    }

    calcular_media() {
        // reduce percorre uma lista e soma os seus elementos. 
        // reduce usa um acumulador: "acc" que guarda os valores parciais que foram somados enquanto você percorre o array. 
        // o 0 define o valor inicial do acc
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / this.notas.length

        console.log(`O aluno ${this.nome} que possui ${this.idade} anos de idade, teve uma média final de ${media}`)
        if (media >= 7) {
            console.log(`Parabéns ${this.nome}, você foi aprovado!`)
        } else {
            console.log(`Estude mais na próxima, ${this.nome}`)
        }
    }
}
const Erik = new Aluno("Erik", 17, [5, 4, 9, 10]);
Erik.calcular_media();
