$(document).ready(function() {
    const $ftList = $('#ft_list');
    const $newTaskButton = $('#newTaskButton');

    loadTasks();

    $newTaskButton.click(function() {
        const task = prompt("Enter a new task:");
        if (task && task.trim() !== "") {
            addTask(task);
            saveTasks();
        }
    });

    function addTask(task) {
        const $taskDiv = $('<div class="todo-item"></div>').text(task);

        $taskDiv.click(function() {
            if (confirm("Do you really want to remove this task?")) {
                $taskDiv.remove();
                saveTasks();
            }
        });

        $ftList.prepend($taskDiv);
    }

    function saveTasks() {
        const tasks = $ftList.children('.todo-item').map(function() {
            return $(this).text();
        }).get();
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
    }

    function loadTasks() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (cookie) {
            const tasks = JSON.parse(cookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});
