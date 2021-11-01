const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click' , addtodo);
todoList.addEventListener('click' , deleteCheck)
filterOption.addEventListener('click' , filterTodo)


function addtodo(event) {
    event.preventDefault();

    const createDiv = document.createElement('div');

    createDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    createDiv.appendChild(newTodo);

    const createdButton = document.createElement('button');
    createdButton.innerHTML = '<i class="fas fa-check"></i>';
    createdButton.classList.add('completed-btn');
    createDiv.appendChild(createdButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    createDiv.appendChild(trashButton);
    todoList.appendChild(createDiv);
    todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend' , function () {
            todo.remove();
        });
    }
    if (item.classList[0] === "completed-btn"){
    todo = item.parentElement;
    todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
             case "all":
                 todo.style.display = "flex";
             break;
             case "completed":
              if(todo.classList.contains('completed')){
                  todo.style.display = "flex";
              }else{
                  todo.style.display = " none"
              }
              break;
              case "uncompleted":
                  if(!todo.classList.contains('completed')){
                      todo.style.display = "flex"
                  }
                  else{
                      todo.style.display = " none"
                  }
                  break;
              
    
        }
    });
    
}