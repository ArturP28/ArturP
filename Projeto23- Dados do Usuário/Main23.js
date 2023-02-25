const caixadetexto = document.querySelectorAll('.inputs')

caixadetexto.forEach(function(caixadetexto) {

    caixadetexto.addEventListener('mouseenter', entrou)

function entrou() {
    caixadetexto.style.background = 'aquamarine'
}


})

const dados = document.querySelectorAll('.inputs')

const res = document.querySelector('#result')

const novidades = document.querySelector('#news').checked

function btncheck() {
    let valores = ""
    dados.forEach(function(dado) {
        valores += dado.value + "<br>"
    })

    res.innerHTML = valores

    if (novidades) {
        res.innerHTML += 'Enviaremos informações de novidades para você'

    } else {

    }
}



