const listaParagrafoResposta = document.querySelectorAll('.resposta')
const listaIconeSeta = document.querySelectorAll('.icone')

function abrirResposta(botaoSelecionado) {
    let paragrafoSelecionado = document.querySelectorAll('.resposta')[botaoSelecionado]
    let iconeSelecionado = document.querySelectorAll('.icone')[botaoSelecionado]


    listaIconeSeta.forEach(function (item) {
        if (item.classList.contains('selecionado')) {
            item.classList.remove('selecionado')
        }
    })

    iconeSelecionado.classList.add('selecionado')

    if (paragrafoSelecionado.hidden) {
        listaParagrafoResposta.forEach(function (item) {
            item.hidden = true
        })
        paragrafoSelecionado.hidden = false
    } else {
        paragrafoSelecionado.hidden = true
        iconeSelecionado.classList.remove('selecionado')
    }

}