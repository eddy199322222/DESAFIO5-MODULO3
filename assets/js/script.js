let tasks = [
    { id: 1, description: "Ir al supermercado", completed: false },
    { id: 2, description: "Estudiar para la prueba", completed: false },
    { id: 3, description: "Sacar a pasear al Pod (mi perro)", completed: false }
];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskRow = document.createElement('tr');
        taskRow.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.description}</td>
            <td>
                <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Marcar'}</button>
                <button onclick="deleteTask(${task.id})">Borrar</button>
            </td>
        `;
        taskList.appendChild(taskRow);
    });
    updateCounters();
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const newTask = taskInput.value.trim();
    if (newTask) {
        const newTaskObj = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            description: newTask,
            completed: false
        };
        tasks.push(newTaskObj);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function updateCounters() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    document.getElementById('total-tasks').innerText = totalTasks;
    document.getElementById('completed-tasks').innerText = completedTasks;
}


renderTasks();
