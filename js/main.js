document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.tasks__container');
    const addTask = document.querySelector('.add__task');


    function renderTask (container) {
        let task = document.createElement('div');
        task.setAttribute('class', 'task');

        let taskCheck = document.createElement('input');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('class', 'form-check-input');
        taskCheck.setAttribute('id', 'flexCheckDefault');

        let taskText = document.createElement('div');
        taskText.textContent = 'My created task';
        taskText.setAttribute('class', 'task__text');

        let taskTimeContainer = document.createElement('div');
        taskTimeContainer.setAttribute('class', 'task__time-marker');
        let taskTime = document.createElement('div');
        taskTime.textContent = '13:32';
        taskTime.setAttribute('class', 'task__time');
        let taskDate = document.createElement('div');
        taskDate.textContent = '09.11.22'
        taskTime.setAttribute('class', 'task__date');

        let taskBtns = document.createElement('div');
        taskTime.setAttribute('class', 'task__btns');

        let taskBtnFavorite = document.createElement('button');
        let taskBtnFavoriteImg = document.createElement('div');
        taskBtnFavorite.setAttribute('class', 'task__btn task__btn--important');
        taskBtnFavoriteImg.setAttribute('class', 'task__btn-img task__btn-favorite');
        taskBtnFavorite.append(taskBtnFavoriteImg);


        let taskBtnDelete = document.createElement('button');
        let taskBtnDeleteImg = document.createElement('div');
        taskBtnDelete.setAttribute('class', 'task__btn task__btn--delete');
        taskBtnDeleteImg.setAttribute('class', 'task__btn-img task__btn-trash');
        taskBtnDelete.append(taskBtnDeleteImg);

        taskTimeContainer.append(taskTime, taskDate);
        taskBtns.append(taskBtnFavorite, taskBtnDelete)
        task.append(taskCheck, taskText, taskTimeContainer, taskBtns);
        container.append(task);
    }

    addTask.addEventListener('click', () => {
        console.log('yes');
        renderTask(taskContainer);
    })
})