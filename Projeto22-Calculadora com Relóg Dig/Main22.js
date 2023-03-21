function clicar(val) {
    document.querySelector('#visor').value+=val

}

function igual() {
    document.querySelector('#visor').value = eval(document.querySelector('#visor').value)
}

function reset(val) {
    document.querySelector('#visor').value=val
}

function HoraAtual() {

    let relogio = new Date()

    let horas = relogio.getHours()

    let minutos = relogio.getMinutes()

    let segundos = relogio.getSeconds()

    document.querySelector('#relogio').innerHTML = horas + ':' + minutos + ':' + segundos


}

setInterval(HoraAtual, 1000)