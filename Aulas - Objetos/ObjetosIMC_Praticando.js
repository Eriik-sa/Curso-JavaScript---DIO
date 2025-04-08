class Pessoa {
    constructor(altura, peso) {
        this.altura = parseFloat(altura);
        this.peso = parseFloat(peso);
    }
    calcularIMC() {
        let altura = this.altura;
        let peso = this.peso;

        if (isNaN(altura) || isNaN(peso)) {
            console.log("Altura ou peso não sao um número");
            return;
        }

        const calculo_IMC = peso / (altura * altura);
        console.log(`Seu IMC: ${calculo_IMC.toFixed(2)}`);
    }
}
const joao = new Pessoa("1.64", 67)
joao.calcularIMC()