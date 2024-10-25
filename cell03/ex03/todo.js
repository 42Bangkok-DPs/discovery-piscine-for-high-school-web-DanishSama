document.addEventListener('DOMContentLoaded', () => {
    const ftList = document.getElementById('ft_list');
    const newTaskButton = document.getElementById('newTaskButton');

    // Load tasks from cookies
    loadTasks();

    newTaskButton.addEventListener('click', () => {
        const task = prompt("Enter a new TO DO:");
        if (task) {
            addTask(task);
        }
    });

    function addTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo-item';
        taskDiv.textContent = task;
        ftList.insertBefore(taskDiv, ftList.firstChild); // Add to the top

        taskDiv.addEventListener('click', () => {
            if (confirm("Do you want to remove this TO DO?")) {
                ftList.removeChild(taskDiv);
                saveTasks();
            }
        });

        saveTasks();
    }

    function saveTasks() {
        const tasks = Array.from(ftList.getElementsByClassName('todo-item')).map(item => item.textContent);
        document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }

    function loadTasks() {
        const cookies = document.cookie.split(';');
        const tasksCookie = cookies.find(cookie => cookie.trim().startsWith('tasks='));
        if (tasksCookie) {
            const tasks = JSON.parse(tasksCookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});