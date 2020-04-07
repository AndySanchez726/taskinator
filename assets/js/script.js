var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do")

var createTaskHandler = function (event) {

    event.preventDefault();

    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = window.prompt("New Task");
    if(taskItemEl.textContent) {
    } else {
        return;
    }
    tasksToDoEl.appendChild(taskItemEl);
}

formEl.addEventListener("submit", createTaskHandler)
