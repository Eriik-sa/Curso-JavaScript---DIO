class Carro {
    constructor(marca, cor, gastoMedio_Km_litro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio_Km_litro = gastoMedio_Km_litro;
    }

    calcular_preco_deslocamento(distancia, precoCombustivel) {
        const litrosConsumidos = distancia / this.gastoMedio_Km_litro;
        const custoFinal = litrosConsumidos * precoCombustivel;

        console.log(`Você se deslocará por ${distancia}km e seu gasto médio de gasolina por litro é: ${this.gastoMedio_Km_litro} KM/L.\nTotal de custos: R$${custoFinal.toFixed(2)}`);

    }


}
const rx7 = new Carro("Mazda", "Preto", 6);

rx7.calcular_preco_deslocamento(150, 5.50);
console.log(rx7);