const form = document.getElementById('task-form')

const deleteTask = function(e){
    console.log('Elimino la task', e)

    e.target.parentElement.remove()
}

const handleForm = function(e){
    e.preventDefault()
    console.log('Recupero i dati')

    //1) recuperiamo i riferimenti a tutti gli input
    const taskInput = document.getElementById('task')

    //2) recuperiamo i valori
    const valoreTask = taskInput.value 

    //3) conferma con il console.log
    console.log(valoreTask)

    //4) Task salvate possiamo fare quello che vogliamo
    //vado a creare un div
    const list = document.createElement('div')
    list.classList.add('task-list')

    //riempio il div con i dati presi dal form
    list.innerHTML = `
    <p>${valoreTask}</p>
    <button onclick = "deleteTask(event)">Cancella</button>
    `
    //la list è completa ma ancora non esiste, adesso la vado a creare

    const container = document.getElementById('save-task')
    container.appendChild(list)

    //reset dei campi
    form.reset()

}

form.addEventListener('submit', handleForm)