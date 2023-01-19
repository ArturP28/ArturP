function somar() {
    var a = document.querySelector('#txt1')

    var b = document.querySelector('#txt2')

    var a1 = document.querySelector('#txt1')

    var b1 = document.querySelector('#txt2')

    var a2 = document.querySelector('#txt1')

    var b2 = document.querySelector('#txt2')

    var res = document.querySelector('#result')

    var res1 = document.querySelector('#result2')

    var res2 = document.querySelector('#result3')

    a = Number(a.value)
    b = Number(b.value)
    a1 = Number(a1.value)
    b1 = Number(b1.value)
    a2 = Number(a2.value)
    b2 = Number(b2.value)

    var c = a + b

    var d = a1 - b1

    var e = a2 / b2

    res.innerHTML = `A soma é de ${c}`
    res1.innerHTML = `A subtração é de ${d}`
    res2.innerHTML = `A divisão é de ${e}`
    
}

function refre() {
    window.location.reload();
}


