let email = {},
    password = {},
    signInButton;

function handleFloatingLabel() {
   
}

// function
// field: null;
// email.field = document.qs('.js-email-field')

const handlePasswordSwitcher = function() {
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggle = document.querySelector('.js-password-toggle');
    
    // simpele zelfcontrole
    if (!passwordInput || !passwordToggle) {
        console.error("De classes werden niet gevonden");
        return;
    }

    // text tonen of password tonen
    passwordToggle.addEventListener('change', function() {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
    });
}

const getDOMElements = function() {

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
    // handleFloatingLabel();
    // handlePasswordSwitcher();
});