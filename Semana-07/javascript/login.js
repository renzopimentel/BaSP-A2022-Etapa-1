window.onload = function() {

    var p = document.createElement('p');
    var button = document.getElementById('btn-login');

   /* EMAIL VALIDATION */
   var formEmail = document.getElementById('email-form');
   var emailInput = document.getElementById('email-input');
   var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('error');
            p.innerHTML = 'Email is required'
            emailInput.appendChild(p);
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('error');
            p.innerHTML = 'Correct format should be email@domain.com';
            emailInput.appendChild(p);
        } else {
            formEmail.classList.add('valid');
        }
    }

    formEmail.onfocus = function () {
        formEmail.classList.remove('error');
        emailInput.removeChild(p);
    }

    /* PASSWORD VALIDATION */
    var formPassword = document.getElementById('password-form');
    var passwordInput = document.getElementById('password-input');

    formPassword.onblur = function() {
        var numbers = "0123456789";
        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validationNumber = false
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
            formPassword.classList.add('error');
            p.innerHTML = 'Password is required';
            passwordInput.appendChild(p);
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('error');
            p.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            passwordInput.appendChild(p);
        } else {
            formPassword.classList.add('valid');
        }
    }

    formPassword.onfocus = function () {
        formPassword.classList.remove('error');
        passwordInput.removeChild(p);
    }

    /* BUTTON */
    button.onclick = function(){
        if (formEmail.classList.contains('valid') && formPassword.classList.contains('valid')){
            alert('Mail: ' + formEmail.value + '\nPassword: ' + formPassword.value);
        } else {
            alert('Login Error');
        }
  }
}