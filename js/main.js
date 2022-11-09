document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.tasks__container');
    const addTask = document.querySelector('.add__task');
    const modalTask = document.querySelector('.modal__task');
    const appWrapper = document.querySelector('.wrapper');
    const modalBtnClose = document.querySelector('.modal__btn-close');
    const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
    const modalTaskText = document.querySelector('.modal__text-area');
    let deleteBtns = document.querySelectorAll('.task__btn-trash');

    function createNewTask (taskText, taskDate, taskTime, className) {
        if (taskText != '') {
            let newTask = new Task(taskText, taskDate, taskTime, className);
            newTask.render(taskContainer);
            console.log(newTask);
            deleteBtns = document.querySelectorAll('.task__btn-trash');
            watchBtns(deleteBtns);
        } else {
            let newTask = new Task('empty task', '09.11.22', '13:42');
            newTask.render(taskContainer);
            deleteBtns = document.querySelectorAll('.task__btn-trash');
            watchBtns(deleteBtns);
        }
    }

    function getTime () {
        let time = new Date();
        let currentTime = `${time.getHours()}:${time.getMinutes()}`;
        return currentTime
    }

    function getDate () {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const d = date.getDate();

        let currentDate = ``;

        if (d < 10) {
            currentDate = `0${d}.${month}.${year}`;
            return currentDate
        } else {
            currentDate = `${d}.${month}.${year}`;
            return currentDate
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

    function watchBtns(btns) {
        btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.closest('.task').remove();
            })
        })
    }

    addTask.addEventListener('click', () => {
        showModal();
    });

    modalBtnClose.addEventListener('click', () => {
        closeModal();
    });

    modalBtnConfirm.addEventListener('click', () => {
        let text = modalTaskText.value;
        let currentTime = getTime();
        let currentDate = getDate();

        createNewTask(text, currentDate, currentTime, 'task');

        modalTaskText.value = '';
        text = '';
        closeModal();
    });

    watchBtns(deleteBtns);
})