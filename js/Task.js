class Task {
    constructor(text, date, time) {
        this.text = text;
        this.date = date;
        this.time = time;
    }

    render(container) {
        let task = document.createElement('div');
        task.setAttribute('class', 'task');

        let taskCheck = document.createElement('input');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('class', 'form-check-input');
        taskCheck.setAttribute('id', 'flexCheckDefault');

        let taskText = document.createElement('div');
        taskText.textContent = this.text;
        taskText.setAttribute('class', 'task__text');

        let taskTimeContainer = document.createElement('div');
        taskTimeContainer.setAttribute('class', 'task__time-marker');
        let taskTime = document.createElement('div');
        taskTime.textContent = this.time;
        taskTime.setAttribute('class', 'task__time');
        let taskDate = document.createElement('div');
        taskDate.textContent = this.date;
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
}
