const { print, salario_final } = require('./functions');

class Funcionario {
    constructor(salario_bruto, beneficios) {
        this.salario_bruto = salario_bruto;
        this.beneficios = beneficios;
    }
}

const joao = new Funcionario(3000, 250);
print(salario_final(joao));