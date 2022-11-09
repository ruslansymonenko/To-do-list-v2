document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.tasks__container');
    const addTask = document.querySelector('.add__task');
    const modalTask = document.querySelector('.modal__task');
    const appWrapper = document.querySelector('.wrapper');
    const modalBtnClose = document.querySelector('.modal__btn-close');
    const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
    const modalTaskText = document.querySelector('.modal__text-area');
    let deleteBtns = document.querySelectorAll('.task__btn-trash');
    let favoriteBtns = document.querySelectorAll('.task__btn-favorite');
    let taskChecks = document.querySelectorAll('.form-check-input');

    const allTasks = [];

    let taskToCheck;

    function createNewTask (taskText, taskDate, taskTime, className, taskId) {
        if (taskText != '') {
            let newTask = new Task(taskText, taskDate, taskTime, className, taskId);
            newTask.render(taskContainer);
            allTasks.push(newTask);
            console.log(allTasks);

            //Redefining buttons for proper tracking
            deleteBtns = document.querySelectorAll('.task__btn-trash');
            favoriteBtns = document.querySelectorAll('.task__btn-favorite');
            taskChecks = document.querySelectorAll('.form-check-input');
            watchBtns(deleteBtns, 'delete');
            watchBtns(favoriteBtns, 'favorite'); 
            watchInputs();
        } else {
            let newTask = new Task('empty task', taskDate, taskTime, 'task');
            newTask.render(taskContainer);

            //Redefining buttons for proper tracking
            deleteBtns = document.querySelectorAll('.task__btn-trash');
            favoriteBtns = document.querySelectorAll('.task__btn-favorite');
            taskChecks = document.querySelectorAll('.form-check-input');
            watchBtns(deleteBtns, 'delete');
            watchBtns(favoriteBtns, 'favorite'); 
            watchInputs();
        }
    }

    function getTime () {
        let time = new Date();
        let minutes = time.getMinutes();
        let hours = time.getHours();
        

        if (minutes < 10) {
            let currentTime = `${hours}:0${minutes}`;
            return currentTime
        } else if (hours < 10) {
            let currentTime = `0${hours}:${minutes}`;
            return currentTime
        } else {
            let currentTime = `${hours}:${minutes}`;
            return currentTime
        }
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

    function makeId () {
        let id = Math.floor(Math.random() * 10000000);
        return id
    }

    function showModal () {
        appWrapper.classList.add('wrapper--inactive');
        modalTask.classList.add('modal__task--active');
    }

    function closeModal () {
        appWrapper.classList.remove('wrapper--inactive');
        modalTask.classList.remove('modal__task--active');
    }

    function addToFavorite (el) {
        el.closest('.task').classList.toggle('task__favorite');
        el.classList.toggle('task__btn-favorite--active');
    }

    function watchBtns(btns, option) {
        btns.forEach(item => {
            item.addEventListener('click', (e) => {
                if (option == 'delete') {
                    e.target.closest('.task').remove();
                } else if ('favorite') {
                    addToFavorite(e.target);
                }
            })
        });
    }

    function watchInputs () {
        taskChecks.forEach(item => {
            item.addEventListener('click', (e) => {
                let idForCheck = e.target.closest('.task').getAttribute('data-id');
                let newOption = toogleOption(e.target.checked);

                findTask(idForCheck);

                let checkingTask = taskToCheck;
                checkingTask.status = newOption;

                if (checkingTask.status == true) {
                    let wholeTasks = document.querySelectorAll('.task');
                    wholeTasks.forEach(item => {
                        if (item.getAttribute('data-id') == idForCheck) {
                            item.classList.add('task__done');
                        }
                    })
                } else if (checkingTask.status == false) {
                    let wholeTasks = document.querySelectorAll('.task');
                    wholeTasks.forEach(item => {
                        if (item.getAttribute('data-id') == idForCheck) {
                            item.classList.remove('task__done');
                        }
                    })
                }
            })
        })
    }

    function toogleOption (currentOption) {
        if (currentOption == false) {
            return false
        } else {
            return true
        }
    }

    function findTask (id) {
        allTasks.forEach(item => {
            if (item['id'] == parseInt(id)) {
                taskToCheck = item;
                return taskToCheck;
            }
        })
    }

    addTask.addEventListener('click', () => {
        showModal();
    });

    modalBtnClose.addEventListener('click', () => {
        closeModal();
    });


    //Creating new tasks
    modalBtnConfirm.addEventListener('click', () => {
        let text = modalTaskText.value;
        let currentTime = getTime();
        let currentDate = getDate();
        let taksId = makeId();

        createNewTask(text, currentDate, currentTime, 'task', taksId);

        modalTaskText.value = '';
        text = '';
        closeModal();
    });

    watchBtns(deleteBtns, 'delete');
    watchBtns(favoriteBtns, 'favorite');
    watchInputs(); 
})