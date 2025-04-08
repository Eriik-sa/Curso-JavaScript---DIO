//objetos são compostos de chaves e valores. Chave é `idade:` o valor é ´21´ 
const erik = {

    idade: 21,
    nomeCompleto: "Erik Fernando Brito de Sá",
    // uma função dentro de um objeto, se chama método
    meDescreva() {
        console.log(`${this.nomeCompleto} tem ${this.idade} anos e ${this.altura} cm de altura `);
        //this. puxa valores do objeto em que o método está dentro 
    }
}
erik.altura = 1.64;
const atributo = "idade";

console.log(erik[atributo]); // [] em conjunto com um objeto, permite retornar e alterar chaves mesmo fora do objeto
console.log(erik['nomeCompleto']); // utilizando[] para puxar a chave 'nomeCompleto'. 
// OBS: Deve estar em string, msm sendo uma variável

erik['nomeCompleto'] = "teste";
console.log(erik['nomeCompleto']);
console.log(erik)


class pessoa  {
    nome;
    idade;
    saudação() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade`);
        if (this.nome === "Joao") {
            return this.cargo;
        }
    }
}
const joao = new pessoa();
joao.nome = "Joao";
joao.idade = 24;
joao.cargo = "programador ";

console.log(joao);
console.log(joao.saudação())