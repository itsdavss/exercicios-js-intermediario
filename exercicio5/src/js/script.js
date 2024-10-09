let indicadorPagina = 1


const elementoTitulo = document.getElementById('titulo')

const elementoSetaDireita = document.querySelector('.seta-direita')
elementoSetaDireita.addEventListener('click', clickDireito)

const elementoSetaEsquerda = document.querySelector('.seta-esquerda')
elementoSetaEsquerda.addEventListener('click', clickEsquerdo)

const elementoMain = document.querySelector('.principal')
const elementoLink = document.querySelector('.link-saiba-mais')

checarPagina()

function clickDireito() {
    indicadorPagina += 1
    checarPagina()
}

function clickEsquerdo() {
    indicadorPagina -= 1
    checarPagina()
}

function checarPagina() {
    switch (indicadorPagina) {
        case 1:

            elementoTitulo.innerHTML = 'Titulo imagem 1'

            elementoMain.classList.add('fundo-imagem1')
            elementoLink.classList.add('link-imagem1')
            elementoSetaEsquerda.classList.add('opacidade')
            elementoSetaEsquerda.disabled = true
            
            elementoMain.classList.remove('fundo-imagem2')
            elementoLink.classList.remove('link-imagem2')

            break
        case 2:

            elementoTitulo.innerHTML = 'Titulo imagem 2'

            elementoMain.classList.add('fundo-imagem2')
            elementoLink.classList.add('link-imagem2')
            elementoSetaEsquerda.classList.remove('opacidade')
            elementoSetaEsquerda.disabled = false

            elementoMain.classList.remove('fundo-imagem1')
            elementoMain.classList.remove('fundo-imagem3')
            elementoLink.classList.remove('link-imagem1')
            elementoLink.classList.remove('link-imagem3')

            break
        case 3:

            elementoTitulo.innerHTML = 'Titulo imagem 3'

            elementoMain.classList.add('fundo-imagem3')
            elementoLink.classList.add('link-imagem3')
            elementoSetaDireita.classList.remove('opacidade')
            elementoSetaDireita.disabled = false
            
            elementoMain.classList.remove('fundo-imagem2')
            elementoMain.classList.remove('fundo-imagem4')
            elementoLink.classList.remove('link-imagem2')
            elementoLink.classList.remove('link-imagem4')

            break
        case 4:

            elementoTitulo.innerHTML = 'Titulo imagem 4'

            elementoMain.classList.add('fundo-imagem4')
            elementoLink.classList.add('link-imagem4')
            elementoSetaDireita.classList.add('opacidade')
            elementoSetaDireita.disabled = true

            elementoMain.classList.remove('fundo-imagem3')
            elementoLink.classList.remove('link-imagem3')

            break
        default:
            console.log('Pagina nao existente')
            break
    }
}

