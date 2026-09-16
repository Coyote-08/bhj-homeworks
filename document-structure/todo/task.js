const input = document.getElementById('task__input')
const add = document.getElementById('tasks__add')
const taskList = document.getElementById('tasks__list')

add.addEventListener('click', (event) => {

    event.preventDefault()

    let div1 = document.createElement('div');
    div1.classList.add('task');

    let div2 = document.createElement('div');
    div2.classList.add('task__title');
    div2.textContent = input.value;

    let remove = document.createElement('a');
    remove.classList.add('task__remove');
    remove.innerHTML = '&times'

    div1.appendChild(div2)
    div1.appendChild(remove)

    taskList.appendChild(div1)

    input.value = '';

    remove.addEventListener('click', () => {

        div1.remove()
    })

})