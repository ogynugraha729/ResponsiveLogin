const container = document.querySelector('.container');
const loginWrapper = document.querySelector('.login');
const signupWrapper = document.querySelector('.signup');

function toggleLoginPasswordVisibility() {
    const passwordInput = document.getElementById('login-password');
    const toggleIcon = loginWrapper.querySelector('.toggle-password');
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁‍🗨';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁';
    }

    passwordInput.style.width = ${currentWidth}px;
}

function toggleSignupPasswordVisibility() {
    const passwordInput = document.getElementById('signup-password');
    const toggleIcon = signupWrapper.querySelectorAll('.toggle-password')[0];
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁‍🗨';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁';
    }

    passwordInput.style.width = ${currentWidth}px;
}

function toggleConfirmPasswordVisibility() {
    const passwordInput = document.getElementById('confirm-password');
    const toggleIcon = signupWrapper.querySelectorAll('.toggle-password')[1];
    const currentWidth = passwordInput.offsetWidth;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁‍🗨';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁';
    }

    passwordInput.style.width = ${currentWidth}px;
}

// Login manual jika email dan password sesuai
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = loginWrapper.querySelector('form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        if (email === 'admin@gmail.com' && password === '1234') {
            window.location.href = 'classroom.html';
        } else {
            alert('Email atau password salah');
        }
    });
});

// Login Google
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log("Login berhasil:", result.user);
            window.location.href = "https://classroom.google.com/";
        })
        .catch(error => {
            console.error("Login gagal:", error);
            alert("Login gagal: " + error.message);
        });
}
