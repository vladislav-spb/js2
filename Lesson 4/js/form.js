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
document.querySelector('.formButton').addEventListener("click", validateForm);

