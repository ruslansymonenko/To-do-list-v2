document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.tasks__container');
    const addTask = document.querySelector('.add__task');
    const modalTask = document.querySelector('.modal__task');
    const appWrapper = document.querySelector('.wrapper');
    const modalBtnClose = document.querySelector('.modal__btn-close');
    const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
    const modalTaskText = document.querySelector('.modal__text-area');

    function createNewTask (taskText, taskDate, taskTime) {
        if (taskText != '') {
            let newTask = new Task(taskText, '09.11.22', '13:42');
            newTask.render(taskContainer);
            console.log(newTask);
        } else {
            let newTask = new Task('empty task', '09.11.22', '13:42');
            newTask.render(taskContainer);
        }
    }

    function showModal () {
        appWrapper.classList.add('wrapper--inactive');
        modalTask.classList.add('modal__task--active');
    }

    function closeModal () {
        appWrapper.classList.remove('wrapper--inactive');
        modalTask.classList.remove('modal__task--active');
    }

    addTask.addEventListener('click', () => {
        showModal();
    });

    modalBtnClose.addEventListener('click', () => {
        closeModal();
    })

    modalBtnConfirm.addEventListener('click', () => {
        let text = modalTaskText.value;
        createNewTask(text);

        modalTaskText.value = '';
        text = '';
        closeModal();
    })
})