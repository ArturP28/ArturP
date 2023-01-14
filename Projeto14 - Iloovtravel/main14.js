    
    function resultado(){
        var txt = document.querySelector('#txt1')
        var res = document.getElementById('res')
        var txt2 = document.querySelector('#textname')
        
        var a = String(txt.value)
        var b = String(txt2.value)

        res.innerHTML = `Olá ${b}, Sua viagem para ${a} terá um descontão!! 😍`

    }
