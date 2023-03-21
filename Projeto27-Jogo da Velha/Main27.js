
let valorAtual = ''


function clicar(id) {
    let quadrado = document.querySelector(`#${id}`)
        

    if (quadrado.textContent === '') {
        quadrado.textContent = valorAtual
        valorAtual = (valorAtual === 'X') ? 'O' : 'X'



    } else {
        
    }
}