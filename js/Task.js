class Task {
    constructor(text, date, time, classname, id, favorite = false, status = false) {
        this.text = text;
        this.date = date;
        this.time = time;
        this.favorite = favorite;
        this.status = status;
        this.classname = classname;
        this.id = id;
    }

    render(container) {
        let task = document.createElement('div');
        
        if (!this.status && !this.favorite) {
            task.setAttribute('class', this.classname);
        } else if (this.status) {
            task.setAttribute('class', `${this.classname} task__done`);
        } else if (this.favorite) {
            task.setAttribute('class', `${this.classname} task__favorite`);
        }
        task.setAttribute('data-id', `${this.id}`);

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

    makeFavorite() {

    }
}
