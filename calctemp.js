//calcular a conversao de celcius para fahrenheit

function calculartemperatura(valor_original) {
    const resultado = (valor_original * 9 / 5) + 32;

    if (valor_original < 10) {
        classificacao = "frio"
    } else if (valor_original < 10) {
        classificacao = "agradavel"
    } else if (valor_original < 25) {
        classificacao = "quente"
    }
    return { resultado, classificacao }
}
module.exports = calculartemperatura