var Task = /** @class */ (function () {
    function Task(name, subject, date, completed) {
        if (completed === void 0) { completed = false; }
        this.name = name;
        this.subject = subject;
        this.date = date;
        this.completed = completed;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (taskName, subject, date) {
        var task = new Task(taskName, subject, date);
        this.tasks.push(task);
        this.renderTasks();
    };
    TaskManager.prototype.deleteTask = function (index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    };
    TaskManager.prototype.toggleTaskStatus = function (index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    };
    TaskManager.prototype.renderTasks = function () {
        var taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        this.tasks.forEach(function (task, index) {
            var li = document.createElement('li');
            li.classList.add('task-item');
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = "\n                <span>".concat(task.name, " - ").concat(task.subject, " - ").concat(task.date, "</span>\n                <button onclick=\"taskManager.deleteTask(").concat(index, ")\">Delete</button>\n                <input type=\"checkbox\" ").concat(task.completed ? 'checked' : '', " onchange=\"taskManager.toggleTaskStatus(").concat(index, ")\">\n            ");
            taskList.appendChild(li);
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
document.getElementById('addTaskBtn').addEventListener('click', function () {
    var taskInput = document.getElementById('taskInput');
    var subjectInput = document.getElementById('subject');
    var dateInput = document.getElementById('date');
    var taskName = taskInput.value.trim();
    var subject = subjectInput.value.trim();
    var date = dateInput.value.trim();
    if (taskName !== '' && subject !== '' && date !== '') {
        taskManager.addTask(taskName, subject, date);
        taskInput.value = '';
        subjectInput.value = '';
        dateInput.value = '';
    }
    else {
        alert('Please fill out all fields.');
    }
});
