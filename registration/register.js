const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const newEmail = document.getElementById('email');
const newPass = document.getElementById('pass');
const rePass = document.getElementById('re-pass');
const register = document.querySelector('.register');

const newFnameValidator = () => {
    const val = firstName.value.trim();
    const alert = document.getElementById('alert-3');

    if (val.length < 1) {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerText = '';
        return true;
    }
};

const newLnameValidator = () => {
    const val = lastName.value.trim();
    const alert = document.getElementById('alert-4');

    if (val.length < 1) {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerText = '';
        return true;
    }
};

const newEmailValidator = () => {
    const val = newEmail.value.trim();
    const alert = document.getElementById('alert-5');

    if (!/\S+@\S+\.\S+/.test(val) || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i.test(val)) {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerText = '';
        return true;
    }
};

const newPassValidator = () => {
    const val = newPass.value;
    const alert = document.getElementById('alert-6');

    if (val.length < 6 || val.length > 12) {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerHTML = '';
        return true;
    }
};

const rePassValidator = () => {
    const val = rePass.value;
    const alert = document.getElementById('alert-7');

    if (val !== newPass.value) {
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        alert.innerHTML = '';
        return true;
    }
}

const submissionCheck = () => { 
    if (newFnameValidator() && newLnameValidator() && newEmailValidator() && newPassValidator() && rePassValidator()) {
        const signUpData = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: newEmail.value.trim(),
            password: newPass.value.trim()
        };

        localStorage.setItem("user", JSON.stringify(signUpData));
        
        return window.location.href = "../index.html";
    }
}

register.addEventListener("click", (e) => {
    e.preventDefault();
    submissionCheck();
});