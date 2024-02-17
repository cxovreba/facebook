const dark_mode = document.getElementById('dark_mode');

dark_mode.addEventListener("click", () => {
    document.body.classList.toggle('dark_mode');
    const input = document.getElementById('input');
    const word = document.querySelector('.word');
    const word1 = document.querySelector('.word1');

    if (dark_mode.textContent === 'Dark') {
        dark_mode.textContent = 'Light';
        dark_mode.style.background = '#fff';
        dark_mode.style.color = '#303156';
        input.style.background = "#494C6B";
        input.style.color = "#fff";
        popup.style.background = '#1c1e21';
        popup.style.color = '#fff';
        secondInput.style.background = '#1c1e21';
        secondInput.style.color = '#fff';
        word.style.background = '#1c1e21';
        word.style.color = '#fff';
        word1.style.background = '#1c1e21';
        word1.style.color = '#fff';
        fullName.style.background = '#1c1e21';
        fullName.style.color = '#fff';
    } else {
        dark_mode.textContent = 'Dark';
        dark_mode.style.background = '#1c1e21';
        dark_mode.style.color = '#fff';
        input.style.background = "#fff";
        input.style.color = "#1c1e21";
        popup.style.background = '#f0f2f5';
        popup.style.color = '#1c1e21';
        secondInput.style.background = '#f0f2f5';
        secondInput.style.color = '#1c1e21';
        word.style.background = '#f0f2f5';
        word.style.color = '#1c1e21';
        word1.style.background = '#f0f2f5';
        word1.style.color = '#1c1e21';
        fullName.style.background = '#f0f2f5';
        fullName.style.color = '#1c1e21';
    }
});

const popup = document.querySelector('.popup');
const closePopup = document.getElementById('close');
const input = document.getElementById('input');
const secondInput = document.getElementById('input_status');
const fullName = document.querySelector('.profile-name');
const profileName = document.querySelector('.profile-Name');

const userName = () => { 
    const savedData =localStorage.getItem('user');
    if (savedData) {
        const signUpData = JSON.parse(savedData);
        let userName = `${signUpData.firstName}  ${signUpData.lastName}`;
        fullName.innerText = userName;
        profileName.innerText = userName;

        input.placeholder = `${signUpData.firstName} საკუთარ აზრებს ხომ არ გაგვიზიარებდი?`;
        secondInput.placeholder = `${signUpData.firstName} საკუთარ აზრებს ხომ არ გაგვიზიარებდი?`;
    } else[
        alert('მომხმარებელზე ინფორმაცია ვერ მოიძებნა')
    ]
}

userName();

input.addEventListener('focusin', () => {
    if (popup.styledisplay === "flex") {
        popup.style.display = "none";
    } else {
        popup.style.display = "flex";
    }
});

closePopup.addEventListener('click', () => {
    popup.style.display = "none";
})