// funcao para calcular a conversao de km/h para m/s

function calcularvelocidade(valor_original) {
    const valor_convertido = valor_original / 3.6;

    if (valor_original < 40) {
        classificacao = "baixa velocidade"
    } else if (valor_original >= 40 && valor_original <= 90) {
        classificacao = "velocidade moderada"
    } else if (valor_original > 90){
        classificacao = "alta velocidade"
    }
    return {valor_convertido , classificacao}
}
module.exports = calcularvelocidade