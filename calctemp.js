//calcular a conversao de celcius para fahrenheit

function calculartemperatura(valor_original) {
    const valor_convertido = (valor_original * 9 / 5) + 32;

    if (valor_original < 10) {
        classificacao = "frio"
    } else if (valor_original >= 10 && valor_original <= 25) {
        classificacao = "agradavel"
    } else {
        classificacao = "quente"
    }
    return { valor_convertido, classificacao }
}
module.exports = calculartemperatura