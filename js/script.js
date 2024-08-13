let tasks = [...initialTasks]; 

document.getElementById('page-title').innerText = strings.pageTitle;
document.getElementById('reset-button').innerText = strings.resetButtonText;
document.getElementById('main-heading').innerText = strings.mainHeading;
document.getElementById('get-task-button').innerText = strings.getTaskButtonText;
document.getElementById('task').innerText = strings.initialTaskText;

function getTask() {
    if (tasks.length > 0) {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const task = tasks[randomIndex];
        document.getElementById('task').innerText = `${strings.taskPrefix} ${task}`;
        tasks.splice(randomIndex, 1); 
    } else {
        document.getElementById('task').innerText = strings.allTasksCompletedText;
    }
}

function resetGame() {
    tasks = [...initialTasks]; 
    document.getElementById('task').innerText = strings.gameRestartedText;
}
