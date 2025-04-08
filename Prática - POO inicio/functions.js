function print(texto) {
    console.log(texto);
}

function calcular_impostos(Funcionario) {
    let desconto;
    const salario = Funcionario.salario_bruto;

    if (salario <= 1100) {
        desconto = 0.95;
    } else if (salario > 1100 && salario <= 2500) {
        desconto = 0.90;
    } else {
        desconto = 0.85;
    }
    return salario * desconto;
}

function salario_final(Funcionario) {
    const salario_descontado = calcular_impostos(Funcionario);
    const salario_liquido = salario_descontado + Funcionario.beneficios;

    return `Salário bruto: R$ ${Funcionario.salario_bruto.toFixed(2)}\nBenefício: R$ ${Funcionario.beneficios.toFixed(2)}\nSalário líquido: R$ ${salario_liquido.toFixed(2)}`;
}

module.exports = { print, salario_final };