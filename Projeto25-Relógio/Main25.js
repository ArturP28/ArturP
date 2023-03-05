function HoraAtual() {


    const data = new Date()
    
    let horas = data.getHours()

    let minutos = data.getMinutes()

    let segundos = data.getSeconds()


    document.getElementById("relogio").innerHTML = horas + ":" + minutos + ":" + segundos



}

setInterval(HoraAtual, 1000)





