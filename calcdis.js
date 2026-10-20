//funcao para calcular a conversão de metros para pes ;)

function calculardistancia(valor_original) {
    const resultado = valor_original * 3.28084;

    if (valor_original < 5) {
        classificacao = "curto"
    } else if (valor_original < 5) {
        classificacao = "medio"
    } else if (valor_original < 50) {
        classificacao = "longo"
    }
    return (resultado, classificacao)

}
module.exports = calculardistancia