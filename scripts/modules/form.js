export default class Form {
    constructor(form, formPopup) {
        this.form = form;
        this.formPopup = formPopup;
        this.message = formPopup.querySelector('.form-popup__message');
        this.closeButton = formPopup.querySelector('.form-popup__close-button');

        this.closeButton.onclick = this.closePopup.bind(this);
        this.form.onsubmit = this.sumbitHanler.bind(this);
    }

    fillMessage() {
        const subjectField = this.message.querySelector('#subject');
        const descriptionField = this.message.querySelector('#description');
        const { subject, description } = this.getFormInput();
        subjectField.innerHTML = subject;
        descriptionField.innerHTML = description;
    }

    getFormInput() {
        const subject = this.form.querySelector('[name="subject"]').value;
        const description = this.form.querySelector('[name="description"]').value;
        return {
            subject: subject ? subject : 'Без темы',
            description: description ? description : 'Без описания',
        }
    }

    openPopup() {
        this.formPopup.classList.add('form-popup_show');
        setTimeout(() => {
            this.message.classList.add('form-popup__message_show');
        }, 10);
    }

    closePopup() {
        this.message.classList.remove('form-popup__message_show');
        setTimeout(() => {
            this.formPopup.classList.remove('form-popup_show');
            this.reset();
        }, 500);
    }

    reset() {
        const fieldList = this.form.querySelectorAll('[name]');
        fieldList.forEach(element => {
            element.value = '';
        });
    }

    sumbitHanler(event) {
        event.preventDefault();
        this.fillMessage();
        this.openPopup();
        setTimeout(() => {
            this.closePopup();
        }, 5000);
    }
}