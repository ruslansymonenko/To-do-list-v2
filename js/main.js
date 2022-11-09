document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.tasks__container');
    const addTask = document.querySelector('.add__task');


    addTask.addEventListener('click', () => {
        let newTask = new Task('my task', '09.11.22', '13:42');
        newTask.render(taskContainer);
        console.log(newTask);
    })
})