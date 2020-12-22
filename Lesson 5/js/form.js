function validateForm() {
    let regexp_name = /^[а-яА-ЯёЁa-zA-Z]+$/ig,
        regexp_tel = /^\+\d{1,3}\(\d{3}\)\d{3}\-\d{4}$/,
        regexp_email = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_]+)\.([a-z]{2,6})$/,
        regexp_area = /[a-zA-Z0-9а-яА-ЯёЁ]/;

    let name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        phone = document.getElementsByName('phone')[0].value,
        message = document.getElementsByName('message')[0].value;
    
    if(regexp_name.test(name) === true){
        document.getElementById('name').className = 'done_val';
    } else {
        document.getElementById('name').className = 'error_val';
    }
    if(regexp_tel.test(phone) === true) {
        document.getElementById('phone').className = 'done_val';
    } else {
        document.getElementById('phone').className = 'error_val';
    }
    if(regexp_email.test(email) === true) {
        document.getElementById('email').className = 'done_val';
    } else {
        document.getElementById('email').className = 'error_val';
    }
    if(regexp_area.test(message) === true) {
        document.getElementById('message').className = 'done_val';
    } else {
        document.getElementById('message').className = 'error_val';
    }
}
document.querySelector('.form').addEventListener("click", validateForm);

/*class validate {
    constructor(form) {
        this.patterns = {
            name: /^[а-яА-ЯёЁa-zA-Z]+$/ig,
            tel: /^\+\d{1,3}\(\d{3}\)\d{3}\-\d{4}$/,
            email: /^([a-zA-Z0-9_\.-]+)@([a-z0-9_]+)\.([a-z]{2,6})$/i,
        };
        this.errors = {
            name: 'Имя должно содержать только буквы',
            tel: 'Телефон должен быть в формате +7(000)000-0000',
            email: 'Не корректный e-mail должен быть (mymail@mail.ru)'
        };
        this.errorsClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this.#validateForm();
    }
    #validateForm() {
        let errors = [...document.getElementById(this.form).querySelectorAll(`${this.errorsClass}`)];
        for (let error of errors) {
            error.remove();
        }
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields){
            this.#validate(field);
        }
        if(![...document.getElementById(this.form).querySelectorAll('.invalid')].length){
            this.valid = true
        }
    }
    #validate(field) {
        if(this.patterns[field.name]) {
            if(!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');
                this.#addErrorMsg(field);
                this.#watchField(field);
            }
        }
    }
    #addErrorMsg(field){
        let error = `<div class="${this.errorsClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend',error);
    }
    #watchField(field){
        field.addEventListener('input',() => {
            let error = field.parentNode.querySelector(`.${this.errorsClass}`);
            if(this.patterns[field.name].test(field.value)){
                field.classList.remove('invalid');
                field.classList.add('valid');
                if(error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if(!error) {
                    this.#addErrorMsg(field);
                }
            }
        });
    }
}*/