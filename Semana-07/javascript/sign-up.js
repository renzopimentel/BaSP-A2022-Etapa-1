window.onload = function(){
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

    function convertDate(date){
        [month, day, year] = date.split('/');
        var dateFormat = [year, month, day].join('-')

        return dateFormat
    }

    var inputs = document.getElementsByTagName('input');
    var inputsP = document.getElementsByClassName('form-input');
    var numbers = "0123456789";
    var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

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

    var formBirthday = inputs[3];
    var birthdayP = document.createElement('p');
    var dateString

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    formBirthday.onblur = function() {
        if (formBirthday.value == '') {
            formBirthday.classList.add('error');
            birthdayP.innerHTML = 'Birthday is required'
            formBirthday.parentElement.insertBefore(birthdayP, formBirthday.nextElementSibling)
        } else if (getAge(formBirthday.value) < 18){
            formBirthday.classList.add('error');
            birthdayP.innerHTML = 'You should be at least 18 years old for signing up';
            formBirthday.parentElement.insertBefore(birthdayP, formBirthday.nextElementSibling)
        } else {
            formBirthday.classList.add('valid')
        }
    }

    formBirthday.onfocus = function () {
        removeP(formBirthday);
    }

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

    var formAddress = inputs[5];
    var adressP = document.createElement('p');

    formAddress.onblur = function() {
        var blankSpace = formAddress.value.indexOf(' ')
        if ((formAddress.value).length == '') {
            formAddress.classList.add('error')
            adressP.innerHTML = ('Adress is required')
            formAddress.parentElement.insertBefore(adressP, formAddress.nextElementSibling)
        } else if ((formAddress.value).length < 5) {
            formAddress.classList.add('error')
            adressP.innerHTML = ('Adress must have at least 5 characters')
            formAddress.parentElement.insertBefore(adressP, formAddress.nextElementSibling)
        } else if (!hasLetters((formAddress.value).substring(0, blankSpace)) || !hasNumbers((formAddress.value).substring(blankSpace+1, (formAddress.value).length))){
            formAddress.classList.add('error')
            adressP.innerHTML = ('Wrong adress format')
            formAddress.parentElement.insertBefore(adressP, formAddress.nextElementSibling)
        } else {
            formAddress.classList.add('valid')
        }
    }

    formAddress.onfocus = function() {
        removeP(formAddress);
    }

    var formCity = inputs[6];
    var cityP = document.createElement('p');

    formCity.onblur = function() {
        var validationLetters = false
        var validationNumber = false

        for (var i = 0; i < formCity.value.length; i++){
            var element = formCity.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                validationLetters = true;
            } else {
                validationLetters = false;
                break
            }
        }

        if (formCity.value === '') {
            formCity.classList.add('error');
            cityP.innerHTML = 'City name is required';
            formCity.parentElement.insertBefore(cityP, formCity.nextElementSibling)
        } else if (formCity.value.length < 4 || validationNumber != true && validationLetters != true) {
            formCity.classList.add('error');
            cityP.innerHTML = 'City name must have more than 3 characters, only letters';
            formCity.parentElement.insertBefore(cityP, formCity.nextElementSibling)
        } else {
            formCity.classList.add('valid');
        }
    }

    formCity.onfocus = function () {
        removeP(formCity);
    }

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

    var modalContainer = document.getElementById("modal-suscription");
    var modalTitle = document.querySelector(".modal-content > h3");
    var modalData = document.querySelector(".modal-content > ul");

    function successfulModal(data){
        modalContainer.style.display = " block ";
        modalTitle.innerHTML = data.msg;
        modalData.innerHTML =   'Name: ' + formName.value + '<br />' +
                                'LastName: ' + formLastName.value + '<br />' +
                                'Id: ' + formId.value + '<br />' +
                                'Birthday: ' + formBirthday.value + '<br />' +
                                'Phone: ' + formPhone.value + '<br />' +
                                'Address: ' + formAddress.value + '<br />' +
                                'City: ' + formCity.value + '<br />' +
                                'Zip Code: ' + formZipCode.value + '<br />' +
                                'Email: ' + formEmail.value + '<br />' +
                                'Password: ' + formPassword.value;
    }

    function errorModal(errorInfo){
        var jsonString = JSON.stringify(errorInfo);
        modalContainer.style.display = "block";
        modalTitle.innerHTML = " Sorry, there was an error ";
        modalData.innerHTML = errorInfo;
    }

    var button = document.getElementById('btn-signup');

    button.onclick = function (e) {
        var birthday = formBirthday.value;
        var dateSplit = birthday.split('-');
        birthday = dateSplit[1] + '/'+dateSplit[2]+ '/' + dateSplit[0];

        var name = formName.value;
        var lastName = formLastName.value;
        var id = formId.value;
        var phone = formPhone.value;
        var address = formAddress.value;
        var city = formCity.value;
        var zipCode = formZipCode.value
        var email = formEmail.value;
        var password = formPassword.value;

        var queryParams = 'name=' + name + '&lastName=' + lastName + '&dni=' + id + '&dob=' + birthday + '&phone=' + phone
        + '&address=' + address + '&city=' + city + '&zip=' + zipCode + '&email=' + email + '&password=' + password;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?' + queryParams;

        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                if(data.success){
                    localStorage.setItem('name', name);
                    localStorage.setItem('lastName', lastName);
                    localStorage.setItem('id', id);
                    localStorage.setItem('birthday', birthday);
                    localStorage.setItem('phone', phone);
                    localStorage.setItem('address', address);
                    localStorage.setItem('city', city);
                    localStorage.setItem('zipCode', zipCode);
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    successfulModal(data);
                } else if (data.errors){
                    var messages = ''
                    for (var error of data.errors) {
                        messages += error.msg + '\n'
                    }
                    throw new Error(messages);
                } else {
                    errorModal(data.msg)
                }
            })
            .catch(function(error) {
                alert(error);
            })
        e.preventDefault();
    }
}

if (localStorage.getItem("name") != null) {
    formName.value = localStorage.getItem('name');
    formLastName.value = localStorage.getItem('lastName');
    formId.value = localStorage.getItem('id');
    formBirthday.value = convertDate(localStorage.getItem('birthday'));
    formPhone.value = localStorage.getItem('phone');
    formAddress.value = localStorage.getItem('address');
    formCity.value = localStorage.getItem('city');
    formZipCode.value = localStorage.getItem('zipCode');
    formEmail.value = localStorage.getItem('email');
    formPassword.value = localStorage.getItem('password');
    formPassword2.value = localStorage.getItem('password');
};