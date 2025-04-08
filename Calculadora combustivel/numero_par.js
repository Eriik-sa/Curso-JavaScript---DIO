function calcular() {
    let combustivel = document.querySelector('input[name="combustivel"]:checked').value;

    const conversao_distancia = document.getElementById("distancia");
    const distancia_viagem = Number(conversao_distancia.value);

    if (isNaN(distancia_viagem) || distancia_viagem <= 0) {
        alert("Insira um valor de distância válido");
        conversao_distancia.focus();
        return;
    }

    const diesel_preco = (distancia_viagem / 6) * 4;

    let gasolina_preco = (distancia_viagem / 5) * 4.5;

    const resultado = combustivel === "gasolina".toLowerCase()
        ? `Custo com Gasolina: R$ ${gasolina_preco.toFixed(2)} `
        : `Custo com Diesel: R$ ${diesel_preco.toFixed(2)}`;
    document.getElementById("resultado").innerText = resultado
}
