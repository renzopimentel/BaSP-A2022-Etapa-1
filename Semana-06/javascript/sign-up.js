window.onload = function(){
    /* FUNCTIONS */
    function hasLetters(input) {
        for (var i = 0; i < input.length; i++){
            var charCode = input.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function hasNumbers(input) {
        for (var i = 0; i < input.length; i++){
            var charCode = input.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function removeP(input) {
        input.classList.remove('error');
        if (input.nextElementSibling) {
            input.parentElement.removeChild(input.nextElementSibling);
        }
    }

    var inputs = document.getElementsByTagName('input');
    var inputsP = document.getElementsByClassName('form-input');
    var numbers = "0123456789";
    var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    /* NAME VALIDATION */
    var formName = inputs[0];
    var nameP = document.createElement('p');

    formName.onblur = function() {
        var letters;
        for (var i = 0; i < formName.value.length; i++){
            var element = formName.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                letters = true;
            } else {
                letters = false;
                break
            }
        }

        if (formName.value == '') {
            formName.classList.add('error')
            nameP.innerHTML = 'Name is required'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else if (formName.value.length < 4) {
            formName.classList.add('error')
            nameP.innerHTML = 'Name should have more than 3 letters'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else if (!letters) {
            formName.classList.add('error')
            nameP.innerHTML = 'Name should have only letters'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else {
            formName.classList.add('valid')
        }
    }

    formName.onfocus = function () {
        removeP(formName);
    }

    /* LAST NAME VALIDATION */
    var formLastName = inputs[1];
    var lastNameP = document.createElement('p');

    formLastName.onblur = function() {
        var letters;
        for (var i = 0; i < formLastName.value.length; i++){
            var element = formLastName.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                letters = true;
            } else {
                letters = false;
                break
            }
        }

        if (formLastName.value == '') {
            formLastName.classList.add('error')
            lastNameP.innerHTML = 'Last name is required'
            formLastName.parentElement.insertBefore(lastNameP, formLastName.nextElementSibling)
        } else if (formLastName.value.length < 4) {
            formLastName.classList.add('error')
            lastNameP.innerHTML = 'Last name should have more than 3 letters'
            formLastName.parentElement.insertBefore(lastNameP, formLastName.nextElementSibling)
        } else if (!letters) {
            formLastName.classList.add('error')
            lastNameP.innerHTML = 'Last name should have only letters'
            formLastName.parentElement.insertBefore(lastNameP, formLastName.nextElementSibling)
        } else {
            formLastName.classList.add('valid')
        }
    }

    formLastName.onfocus = function () {
        removeP(formLastName);
    }

    /* ID VALIDATION */
    var formId = inputs[2];
    var idP = document.createElement('p');

    formId.onblur = function () {
        var numbers;
        for (var i = 0; i < formId.value.length; i++){
            var element = formId.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formId.value == ''){
            formId.classList.add('error')
            idP.innerHTML = 'ID is required'
            formId.parentElement.insertBefore(idP, formId.nextElementSibling)
        } else if (formId.value.length < 7) {
            formId.classList.add('error');
            idP.innerHTML = 'ID should have at least 7 numbers'
            formId.parentElement.insertBefore(idP, formId.nextElementSibling)
        } else if (!numbers){
            formId.classList.add('error')
            idP.innerHTML = 'ID should have only numbers'
            formId.parentElement.insertBefore(idP, formId.nextElementSibling)
        } else {
            formId.classList.add('valid')
        }
    }

    formId.onfocus = function () {
        removeP(formId);
    }

    /* BIRTHDAY VALIDATION */
    var formBirthday = inputs[3];
    var birthdayP = document.createElement('p');

    formBirthday.onblur = function() {
        if (formBirthday.value == '') {
            formBirthday.classList.add('error');
            birthdayP.innerHTML = 'Birthday is required'
            formBirthday.parentElement.insertBefore(birthdayP, formBirthday.nextElementSibling)
        } else {
            formBirthday.classList.add('valid')
        }
    }

    formBirthday.onfocus = function () {
        removeP(formBirthday);
    }

    /* PHONE VALIDATION */
    var formPhone = inputs[4];
    var phoneP = document.createElement('p');

    formPhone.onblur = function () {
        var numbers;
        for (var i = 0; i < formPhone.value.length; i++){
            var element = formPhone.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formPhone.value == ''){
            formPhone.classList.add('error')
            phoneP.innerHTML = 'Phone number is required'
            formPhone.parentElement.insertBefore(phoneP, formPhone.nextElementSibling)
        } else if (!numbers){
            formPhone.classList.add('error')
            phoneP.innerHTML = 'Phone number should have only numbers'
            formPhone.parentElement.insertBefore(phoneP, formPhone.nextElementSibling)
        } else if (formPhone.value.length != 10) {
            formPhone.classList.add('error');
            phoneP.innerHTML = 'Phone number should have 10 numbers'
            formPhone.parentElement.insertBefore(phoneP, formPhone.nextElementSibling)
        } else {
            formPhone.classList.add('valid')
        }
    }

    formPhone.onfocus = function () {
        removeP(formPhone);
    }

    /* ADRESS VALIDATION */
    var formAdress = inputs[5];
    var adressP = document.createElement('p');

    formAdress.onblur = function() {
        var blankSpace = formAdress.value.indexOf(' ')
        if ((formAdress.value).length == '') {
            formAdress.classList.add('error')
            adressP.innerHTML = ('Adress is required')
            formAdress.parentElement.insertBefore(adressP, formAdress.nextElementSibling)
        } else if ((formAdress.value).length < 5) {
            formAdress.classList.add('error')
            adressP.innerHTML = ('Adress must have at least 5 characters')
            formAdress.parentElement.insertBefore(adressP, formAdress.nextElementSibling)
        } else if (!hasLetters((formAdress.value).substring(0, blankSpace)) || !hasNumbers((formAdress.value).substring(blankSpace+1, (formAdress.value).length))){
            formAdress.classList.add('error')
            adressP.innerHTML = ('Wrong adress format')
            formAdress.parentElement.insertBefore(adressP, formAdress.nextElementSibling)
        } else {
            formAdress.classList.add('valid')
        }
    }

    formAdress.onfocus = function() {
        removeP(formAdress);
    }

    /* CITY VALIDATION */
    var formCity = inputs[6];
    var cityP = document.createElement('p');

    formCity.onblur = function() {
        var validationLetters = false
        var validationNumber = false

        for(i=0; i<formCity.value.length; i++){
            if (numbers.indexOf(formCity.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
            if (letters.indexOf(formCity.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formCity.value === '') {
            formCity.classList.add('error');
            cityP.innerHTML = 'City name is required';
            formCity.parentElement.insertBefore(cityP, formCity.nextElementSibling)
        } else if (formCity.value.length < 4 || validationNumber != true && validationLetters != true) {
            formCity.classList.add('error');
            cityP.innerHTML = 'City name must have more than 3 characters of letters&numbers';
            formCity.parentElement.insertBefore(cityP, formCity.nextElementSibling)
        } else {
            formCity.classList.add('valid');
        }
    }

    formCity.onfocus = function () {
        removeP(formCity);
    }

    /*  ZIP CODE VALIDATION */
    var formZipCode = inputs[7];
    var zipCodeP = document.createElement('p');

    formZipCode.onblur = function () {
        var numbers;
        for (var i = 0; i < formZipCode.value.length; i++){
            var element = formZipCode.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formZipCode.value == ''){
            formZipCode.classList.add('error')
            zipCodeP.innerHTML = 'Zip code is required'
            formZipCode.parentElement.insertBefore(zipCodeP, formZipCode.nextElementSibling)
        } else if (!numbers){
            formZipCode.classList.add('error')
            zipCodeP.innerHTML = 'Zip code should have only numbers'
            formZipCode.parentElement.insertBefore(zipCodeP, formZipCode.nextElementSibling)
        } else if (formZipCode.value.length < 4 || formZipCode.value.length > 5) {
            formZipCode.classList.add('error');
            zipCodeP.innerHTML = 'Zip code should have 4 or 5 numbers'
            formZipCode.parentElement.insertBefore(zipCodeP, formZipCode.nextElementSibling)
        } else {
            formZipCode.classList.add('valid')
        }
    }

    formZipCode.onfocus = function () {
        removeP(formZipCode);
    }


    /* EMAIL VALIDATION */
    var formEmail = inputs[8];
    var emailP = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('error');
            emailP.innerHTML = 'Email is required'
            formEmail.parentElement.insertBefore(emailP, formEmail.nextElementSibling)
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('error');
            emailP.innerHTML = 'Correct format should be email@domain.com';
            formEmail.parentElement.insertBefore(emailP, formEmail.nextElementSibling)
        } else {
            formEmail.classList.add('valid');
        }
    }

    formEmail.onfocus = function () {
        removeP(formEmail);
    }

    /* PASSWORD VALIDATION */
    var formPassword = inputs[9];
    var passwordP = document.createElement('p');

    formPassword.onblur = function() {

        var validationLetters = false
        var validationNumber = false

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
            passwordP.innerHTML = 'Password is required';
            formPassword.parentElement.insertBefore(passwordP, formPassword.nextElementSibling)
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('error');
            passwordP.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            formPassword.parentElement.insertBefore(passwordP, formPassword.nextElementSibling)
        } else {
            formPassword.classList.add('valid');
        }
    }

    formPassword.onfocus = function () {
        removeP(formPassword);
    }

    /* PASSWORD REPEAT VALIDATION */
    var formPassword2 = inputs[10];
    var password2P = document.createElement('p');

    formPassword2.onblur = function() {
        var validationLetters = false
        var validationNumber = false

        for(i=0; i<formPassword2.value.length; i++){
            if (numbers.indexOf(formPassword2.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
            if (letters.indexOf(formPassword2.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formPassword2.value === '') {
            formPassword2.classList.add('error');
            password2P.innerHTML = 'Password is required';
            formPassword2.parentElement.insertBefore(password2P, formPassword2.nextElementSibling)
        } else if (formPassword2.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword2.classList.add('error');
            password2P.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            formPassword2.parentElement.insertBefore(password2P, formPassword2.nextElementSibling)
        } else if (formPassword.value != formPassword2.value){
            formPassword2.classList.add('error');
            password2P.innerHTML = "Passwords don't match";
            formPassword2.parentElement.insertBefore(password2P, formPassword2.nextElementSibling)
        } else {
            formPassword2.classList.add('valid');
        }
    }

    formPassword2.onfocus = function () {
        removeP(formPassword2);
    }

    /* BUTTON */
    var button = document.getElementById('btn-signup');

    button.onclick = function (e) {
        e.preventDefault();
        var completed = 0;
        var errors = [];
        var message = '';
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains('valid')) {
                completed++;
            } else if (inputs[i].classList.contains('error')) {
                errors.push(inputs[i].nextElementSibling);
            }
        }
        if (completed == inputs.length) {
            message = 'Sign up successful!\n';
            for (var i = 0; i < inputs.length; i++) {
                message += inputs[i].name + ': ' + inputs[i].value + '\n';
            }

        } else if (errors.length == 0) {
            message = 'All fields are required.';
        } else {
            message = 'Something went wrong\n';
            if (errors.length + completed !== inputs.length) {
                message += 'Complete all fields\n'
            }
            for (var i = 0; i < errors.length; i++) {
                message += errors[i].innerHTML + '\n';
            }
        }
        alert(message);
    }
}