const descontoDebito = 0.9
const jurosParcelado = 1.1
const jurosCheque = 1.2
function aplicarDesconto(valorEtiqueta, formaPagamento) {

    if (formaPagamento === "debito" || formaPagamento === "à vista" || formaPagamento === "em espécie") {
        valorFinal = valorEtiqueta * descontoDebito;

    } else if (formaPagamento === "a prazo" || formaPagamento === "parcelado" || formaPagamento === "credito") {
        valorFinal = valorEtiqueta * jurosParcelado;

    } else if (formaPagamento === "cheque" || formaPagamento === "pix crédito") {
        valorFinal = valorEtiqueta * jurosCheque;

    } else {
        return "Insira uma forma de pagamento válida"
    }
    return `o valor total é: ${valorFinal.toFixed(2)}`;
    //to.Fixed(2) fixa o valor a apenas 2 casas decimais, 
    // já que o JS tem inconsistencia nos valores, tipo 220.00000003
}
console.log(aplicarDesconto(200, "parcelado"));