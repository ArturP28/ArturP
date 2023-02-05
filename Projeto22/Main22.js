
function adicionar () {

    const listatarefas = document.querySelector('#listatarefas')
    const newTaskInput = document.querySelector('#novoitem')

    const novalistaItem = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.type = "checkbox"

    const label = document.createElement('label')

    label.innerHTML = newTaskInput.value

    novalistaItem.appendChild(checkbox)
    novalistaItem.appendChild(label)
    listatarefas.appendChild(novalistaItem)

    newTaskInput.value = ''
}




