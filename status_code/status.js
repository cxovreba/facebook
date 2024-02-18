import { mode_change } from "./mode.js";
mode_change();

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