const button = document.getElementById('criar-tarefa');
button.addEventListener('click', Add);
// https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript
function Add() {
    const taskList = document.getElementById('lista-tarefas');
    const task = document.getElementById('texto-tarefa');
    const createList = document.createElement('li');

    createList.innerHTML = task.value;
    taskList.appendChild(createList);
    task.value = '';
}
