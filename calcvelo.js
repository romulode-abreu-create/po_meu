// funcao para calcular a conversao de km/h para m/s

function calcularvelocidade(valor_original) {
    const resultado = valor_original / 3.6;

    if (valor_original < 40) {
        classificacao = "baixa velocidade"
    } else if (valor_original < 90) {
        classificacao = "velocidade moderada"
    } else if (valor_original > 90){
        classificacao = "alta velocidade"
    }
    return (resultado , classificacao)
}
module.exports = calcularvelocidade