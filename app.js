const email = document.getElementById('val-email');
const pass = document.getElementById('val-pass');
const logIn = document.querySelector('.logIn');

const savedData = localStorage.getItem("user");

const validateInput = (input, alertId) => {
    const val = input.value.trim();
    const alert = document.getElementById(alertId);

    if (val === '') {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerText = '';
        return true;
    }
};

const validator = () => { 
    if (savedData) {
        const signUpData = JSON.parse(savedData);
        const emailValid = validateInput(email, "alert-1");
        const passValid = validateInput(pass, "alert-2");

        if (emailValid && passValid && email.value === signUpData.email && pass.value === signUpData.password) {
            window.location.href = "./status_code/status.html";
            return true;
        } else {
            return false;
        }
    } else {
        alert('მომხმარებელი არ არსებობს');
        return false;
    }
}

logIn.addEventListener("click", (e) => {
    e.preventDefault();
    validator();
});

