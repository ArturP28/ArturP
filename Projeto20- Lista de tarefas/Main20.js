

function adicionar() {

    var res = document.querySelector('#res')

    
    const newlist = document.querySelector('#nova-lista')
    const newtask = document.querySelector('#novatarefa')


    const novalista = document.createElement('li')
    const checkbox = document.createElement('input')
    
    checkbox.type = "checkbox"

    const label = document.createElement('label')

    label.textContent = newtask.value

    novalista.appendChild(checkbox)
    novalista.appendChild(label)
    newlist.appendChild(novalista)


    const taskValue = newtask.value;



    if (isNaN(taskValue)) {
        res.textContent = 'Tarefa adicionada'
    } else {
        newtask.value = ''
}

}
