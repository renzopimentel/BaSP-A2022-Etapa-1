window.onload = function() {

    //Variables
    var formEmail = document.getElementById('email-form');
    var formPassword = document.getElementById('password-form');
    var passwordInput = document.getElementById('password-input');
    var emailInput = document.getElementById('email-input');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var p = document.createElement('p');
    var button = document.getElementById('btn-login');

   /* EMAIL VALIDATION */
    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('border-red');
            p.innerHTML = 'Email is required'
            emailInput.appendChild(p);
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('border-red');
            p.innerHTML = 'Correct format should be email@domain.com';
            emailInput.appendChild(p);
        } else {
            formEmail.classList.add('border-green');
        }
    }

    formEmail.onfocus = function () {
        formEmail.classList.remove('border-red');
        emailInput.removeChild(p);
    }

    /* PASSWORD VALIDATION */
    formPassword.onblur = function() {
        var numbers = "0123456789";
        var validationNumber = false
        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validationLetters = false

        for(i=0; i<formPassword.value.length; i++){
            if (numbers.indexOf(formPassword.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
            if (letters.indexOf(formPassword.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formPassword.value === '') {
            formPassword.classList.add('border-red');
            p.innerHTML = 'Password is required';
            passwordInput.appendChild(p);
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('border-red');
            p.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            passwordInput.appendChild(p);
        } else {
            formPassword.classList.add('border-green');
        }
    }

    formPassword.onfocus = function () {
        formPassword.classList.remove('border-red');
        passwordInput.removeChild(p);
    }

    /* BUTTON */
    button.onclick = function(){
        if (formEmail.classList.contains('border-green') && formPassword.classList.contains('border-green')){
            alert('Mail: ' + formEmail.value + '\nPassword: ' + formPassword.value);
        } else {
            alert('Login Error');
        }
  }
}