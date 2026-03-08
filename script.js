// Adicionar tarefa
function lista() {
    
    const input = document.getElementById('taskInput');
    const li = document.createElement('li');
    li.innerHTML = input.value + '<button onclick="deleteTask(this)" class="deleteBtn">Excluir</button>';
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

// Deletar tarefa
function deleteTask(deletiLst) {
    deletiLst.parentElement.remove();
}