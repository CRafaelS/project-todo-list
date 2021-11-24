const button = document.getElementById('criar-tarefa');

// https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript

function Add() {
  const taskList = document.getElementById('lista-tarefas');
  const task = document.getElementById('texto-tarefa');
  const createList = document.createElement('li');

  createList.innerHTML = task.value;
  taskList.appendChild(createList);
  createList.classList.add('Lista');
  task.value = '';
}
button.addEventListener('click', Add);

// https://pt.stackoverflow.com/questions/146423/como-adicionar-e-remover-classes-com-javascript

const taskList = document.getElementById('lista-tarefas');

function changeBG(event) {
  const check = document.getElementsByTagName('li');
  for (let i = 0; i < check.length; i += 1) {
    if (check[i].classList.contains('select')) {
      check[i].classList.remove('select');
    }
  }
  event.target.classList.add('select');
}
taskList.addEventListener('click', changeBG);

// https://www.w3schools.com/jsref/event_ondblclick.asp

taskList.addEventListener('dblclick', completDpClick);

function completDpClick(e) {
  if (e.target.classList.contains('select')) {
    e.target.classList.remove('select');
    if(e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    }
    else {
      e.target.classList.add('completed');
    }
  }
}
