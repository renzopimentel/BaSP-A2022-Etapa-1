window.onload = function(){
    var inputs = document.getElementsByTagName('input');
    var inputsP = document.getElementsByClassName('form-input');
    var p = document.createElement('p');

    /* NAME VALIDATION */
    var formName = inputs[0];
    var nameP = inputsP[0];

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
            formName.classList.add('border-red')
            p.innerHTML = 'Name is required'
            nameP.appendChild(p);
        } else if (formName.value.length < 4) {
            formName.classList.add('border-red')
            p.innerHTML = 'Name should have more than 3 letters'
            nameP.appendChild(p);
        } else if (!letters) {
            formName.classList.add('border-red')
            p.innerHTML = 'Name should have only letters'
            nameP.appendChild(p);
        } else {
            formName.classList.add('border-green')
        }
    }

    formName.onfocus = function () {
        formName.classList.remove('border-red');
        nameP.removeChild(p);
    }

    /* LAST NAME VALIDATION */
    var formLastName = inputs[1];
    var lastNameP = inputsP[1];

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
            formLastName.classList.add('border-red')
            p.innerHTML = 'Last name is required'
            lastNameP.appendChild(p);
        } else if (formLastName.value.length < 4) {
            formLastName.classList.add('border-red')
            p.innerHTML = 'Last name should have more than 3 letters'
            lastNameP.appendChild(p);
        } else if (!letters) {
            formLastName.classList.add('border-red')
            p.innerHTML = 'Last name should have only letters'
            lastNameP.appendChild(p);
        } else {
            formLastName.classList.add('border-green')
        }
    }

    formLastName.onfocus = function () {
        formLastName.classList.remove('border-red');
        lastNameP.removeChild(p);
    }

    /* ID VALIDATION */
    var formId = inputs[2];
    var idP = inputsP[2];

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
            formId.classList.add('border-red')
            p.innerHTML = 'ID is required'
            idP.appendChild(p);
        } else if (formId.value.length < 7) {
            formId.classList.add('border-red');
            p.innerHTML = 'ID should have at least 7 numbers'
            idP.appendChild(p)
        } else if (!numbers){
            formId.classList.add('border-red')
            p.innerHTML = 'ID should have only numbers'
            idP.appendChild(p);
        } else {
            formId.classList.add('border-green')
        }
    }

    formId.onfocus = function () {
        formId.classList.remove('border-red');
        idP.removeChild(p);
    }

    /* BIRTHDAY VALIDATION */
    var formBirthday = inputs[3];
    var birthdayP = inputsP[3];

    formBirthday.onblur = function() {
        if (formBirthday.value == '') {
            formBirthday.classList.add('border-red');
            p.innerHTML = 'Please enter your birthday'
            birthdayP.appendChild(p)
        } else {
            formBirthday.classList.add('border-green')
        }

        formBirthday.onfocus = function () {
            formBirthday.classList.remove('border-red');
            birthdayP.removeChild(p);
        }
    }

    /* PHONE VALIDATION */
    var formPhone = inputs[4];
    var phoneP = inputsP[4];

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
            formPhone.classList.add('border-red')
            p.innerHTML = 'Phone number is required'
            phoneP.appendChild(p);
        } else if (!numbers){
            formPhone.classList.add('border-red')
            p.innerHTML = 'Phone number should have only numbers'
            phoneP.appendChild(p);
        } else if (formPhone.value.length != 10) {
            formPhone.classList.add('border-red');
            p.innerHTML = 'Phone number should have 10 numbers'
            phoneP.appendChild(p)
        } else {
            formPhone.classList.add('border-green')
        }
    }

    formPhone.onfocus = function () {
        formPhone.classList.remove('border-red');
        phoneP.removeChild(p);
    }

    /* ADDRESS VALIDATION */
    var formAddress = inputs[5];
    var addressP = inputsP[5];

    formAddress.onblur = function() {
        if ((formAddress.value).length == '') {
            formAddress.classList.add('border-red')
            p.innerHTML = ('Address is required')
            addressP.appendChild(p)
        } else {
            formAddress.classList.add('border-green')

        }
    }

    formAdress.onfocus = function() {
        formAddress.classList.remove('border-red');
        addressP.removeChild(p);
    }

}