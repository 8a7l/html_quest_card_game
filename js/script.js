let tasks = [...initialTasks]; 

document.getElementById('page-title').innerText = texts.pageTitle;
document.getElementById('reset-button').innerText = texts.resetButtonText;
document.getElementById('main-heading').innerText = texts.mainHeading;
document.getElementById('get-task-button').innerText = texts.getTaskButtonText;
document.getElementById('task').innerText = texts.initialTaskText;

function getTask() {
    if (tasks.length > 0) {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const task = tasks[randomIndex];
        document.getElementById('task').innerText = `${texts.taskPrefix} ${task}`;
        tasks.splice(randomIndex, 1); 
    } else {
        document.getElementById('task').innerText = texts.allTasksCompletedText;
    }
}

function resetGame() {
    tasks = [...initialTasks]; 
    document.getElementById('task').innerText = texts.gameRestartedText;
}

