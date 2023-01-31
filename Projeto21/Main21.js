function clicar(val) {
    document.querySelector('#textresult').value+=val
}


function resetar(val) {
    document.querySelector('#textresult').value=val
}

function result() {
    document.querySelector('#textresult').value = eval(document.querySelector('#textresult').value);
}