const container = document.querySelector('.container');
const loginWrapper = document.querySelector('.login');
const signupWrapper = document.querySelector('.signup');

function showSignupForm() {
    container.classList.add('active');
}

function showLoginForm() {
    container.classList.remove('active');
}

function toggleLoginPasswordVisibility() {
    const passwordInput = document.getElementById('login-password');
    const toggleIcon = loginWrapper.querySelector('.toggle-password');
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }

    passwordInput.style.width = `${currentWidth}px`;
}

function toggleSignupPasswordVisibility() {
    const passwordInput = document.getElementById('signup-password');
    const toggleIcon = signupWrapper.querySelectorAll('.toggle-password')[0];
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }

    passwordInput.style.width = `${currentWidth}px`;
}

function toggleConfirmPasswordVisibility() {
    const passwordInput = document.getElementById('confirm-password');
    const toggleIcon = signupWrapper.querySelectorAll('.toggle-password')[1];
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }

    passwordInput.style.width = `${currentWidth}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    showLoginForm();
});

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log('Login berhasil:', result.user);
            window.location.href = "classroom.html";
        })
        .catch(error => {
            console.error('Login gagal:', error);
            alert('Login gagal: ' + error.message);
        });
}
