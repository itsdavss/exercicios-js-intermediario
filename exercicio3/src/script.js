const caixa = document.getElementsByClassName('caixa')[0]
caixa.addEventListener('click', mudarCor)

function mudarCor() {

    let temClasseAzul = caixa.classList.contains('azul')

    if (temClasseAzul) {
        caixa.classList.remove('azul')
    } else if (!temClasseAzul) {
        caixa.classList.add('azul')
    }

}
