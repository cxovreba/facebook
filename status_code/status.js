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

const post = document.getElementById('post');
const ul = document.getElementById('ul');

const data = localStorage.getItem('data');
let list = data ? JSON.parse(data) : [];

function generateStatus() {
    if (list.length) { 
        ul.innerHTML = '';
        list.forEach((el, i) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="status">
                    <div class="top_info">
                        <img class="profile" src="../icon/profile.png" alt="Profile picture">
                        <div class="profile-name">giorgi tskhovrebashvili</div>
                        <button class="delete-btn">X</button>
                    </div>
                    <div class="text">${el.value}</div>
                </div>
            `;
            ul.appendChild(li);

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                list.splice(i, 1);
                localStorage.setItem('data', JSON.stringify(list));
                generateStatus();
                updateStorage(list);
            });
        });
        return;
    }
    ul.innerHTML = '';
}

generateStatus();

post.addEventListener('click', () => {
    let { value } = document.getElementById('input_status');
    document.getElementById('input_status').value = '';
    list.push({ value });
    updateStorage(list);
    generateStatus();
    popup.style.display = "none";

    console.log(list);
})

function updateStorage(list) {
    localStorage.setItem('data', JSON.stringify(list));
};