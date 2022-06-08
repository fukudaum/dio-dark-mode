const button = document.getElementById('mode-selector');
const body = document.body;
const footer = document.getElementsByTagName("footer")[0];
const h1 = document.getElementById("page-title");
const darkMode = "Dark Mode";
const lightMode = "Light Mode";

function toggleElements() {
    button.classList.toggle("dark-mode");   
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

function changeText() {
    if (body.classList.contains("dark-mode")) {
        h1.innerHTML = darkMode + " ON";
        button.innerHTML = lightMode;
    } else {
        h1.innerHTML = lightMode + " ON";
        button.innerHTML = darkMode;        
    }
}

function changeMode() {
    toggleElements();
    changeText();
}

button.addEventListener('click', changeMode);