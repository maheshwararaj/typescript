//2023178028 MAHESHWARARAJ

class Task {
    constructor(public name: string, public subject: string, public date: string, public completed: boolean = false) {}
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(taskName: string, subject: string, date: string) {
        const task = new Task(taskName, subject, date);
        this.tasks.push(task);
        this.renderTasks();
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    toggleTaskStatus(index: number) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.classList.add('task-item');
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <span>${task.name} - ${task.subject} - ${task.date}</span>
                <button onclick="taskManager.deleteTask(${index})">Delete</button>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="taskManager.toggleTaskStatus(${index})">
            `;
            taskList.appendChild(li);
        });
    }
}

const taskManager = new TaskManager();

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = <HTMLInputElement>document.getElementById('taskInput');
    const subjectInput = <HTMLInputElement>document.getElementById('subject');
    const dateInput = <HTMLInputElement>document.getElementById('date');
    const taskName = taskInput.value.trim();
    const subject = subjectInput.value.trim();
    const date = dateInput.value.trim();
    if (taskName !== '' && subject !== '' && date !== '') {
        taskManager.addTask(taskName, subject, date);
        taskInput.value = '';
        subjectInput.value = '';
        dateInput.value = '';
    } else {
        alert('Please fill out all fields.');
    }
});
