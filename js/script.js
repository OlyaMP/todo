const taskInput = document.querySelector('.header__input');
const submitTaskButton = document.querySelector('.header__button');
const tasksSection = document.querySelector('.tasks');

function getTemplate(task) {
    return `<div class="task">
    <input type="text" readonly class="tasks__input" value="${task}">
    <button type="button" class="tasks__button">Редактировать</button>
    <button type="button" class="tasks__button">Удалить</button>
</div>`
}

function addTask() {
    if (!taskInput.value) {
        return;
    }
    tasksSection.innerHTML += getTemplate(taskInput.value);
    taskInput.value='';
}
submitTaskButton.addEventListener ('click', addTask);