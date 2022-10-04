window.onload = function() {
    var emailInput = document.getElementById('email-input');
    var passwordInput = document.getElementById('password-input');
    var emailP = document.createElement('p');
    var passP = document.createElement('p');
    var button = document.getElementById('btn-login');
    var modalContainer = document.getElementById("modal-suscription");
    var modalTitle = document.querySelector(".modal-content > h3");
    var modalData = document.querySelector(".modal-content > ul");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var formEmail = document.getElementById('email-form');
    var formPassword = document.getElementById('password-form');
    var numbers = "0123456789";
    var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var closeBtn = document.getElementsByClassName("close")[0];

    function removeP(input) {
        input.classList.remove('red-border');
        if (input.nextElementSibling) {
            input.parentElement.removeChild(input.nextElementSibling);
        }
    }

    closeBtn.onclick = function() {
        modalContainer.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalContainer) {
          modalContainer.style.display = "none";
        }
     }

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

    formPassword.onblur = function() {
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
            passP.innerHTML = 'Password is required';
            formPassword.parentElement.insertBefore(passP, formPassword.nextElementSibling)
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('error');
            passP.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            formPassword.parentElement.insertBefore(passP, formPassword.nextElementSibling)
        } else {
            formPassword.classList.add('valid');
        }
    }

    formPassword.onfocus = function () {
        removeP(formPassword);
    }

    function successfulModal(data){
        modalContainer.style.display = " block ";
        modalTitle.innerHTML = " Login Succesfully! ";
        modalData.innerHTML = `${data.msg}`;
    }

    function errorModal(errorInfo){
        var jsonString = JSON.stringify(errorInfo);
        modalContainer.style.display = "block";
        modalTitle.innerHTML = " Sorry, there was an error ";
        modalData.innerHTML = `${errorInfo.msg}`;
    }

    button.onclick = function(e){
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email='+formEmail.value+'&password='+formPassword.value;
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                if(data.success){
                    // alert('Login successful! ' + data.msg + '\nEmail: ' + formEmail.value + '\nPassword: ' + formPassword.value) ;
                    successfulModal(data);
                    console.log(data);
                } else if(data.errors){
                    var messages = ''
                    for (var error of data.errors) {
                        messages += error.msg + '\n'
                    }
                    throw new Error(messages);
                } else {
                    errorModal(data);
                }
            })
            .catch(function(error) {
                console.log(error)
            })
        e.preventDefault();
  }
}