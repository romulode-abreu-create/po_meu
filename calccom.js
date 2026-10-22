//funcao para calcular a conversão de metros para pes ;)

function calculardistancia(valor_original) {
    const valor_convertido = valor_original * 3.28084;
    let classificacao = "";

    if (valor_original < 5) {
        classificacao = "curto"
    } else if (valor_original >= 5 && valor_original <= 50) {
        classificacao = "medio"
    } else if (valor_original > 50) {
        classificacao = "longo"
    }
    return {valor_convertido, classificacao}

}
module.exports = calculardistancia  