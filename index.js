const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.onclick = () => {
    container.classList.add("active");
}

loginBtn.onclick = () => {
    container.classList.remove("active");
}