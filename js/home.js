function move() {
    window.location.href = 'signinsignup.html';
}
const button = document.querySelector('.expo');
const colors = ['purple', 'blue', 'green', 'orange', 'red'];
let colorIndex = 0;

setInterval(() => {
    button.style.borderColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 500);
const mainText = "Hi, we the True-Webs Team members are glad to see you here! The main theme of this service is to provide the correct and exact websites to you in order to save people from visiting unwanted and harmful sites that steal personal data. We hope you understand our motto.";
const subText = "Thank you. Click on the below button to enjoy our services";

let index = 0;
let subIndex = 0;
const typingTextElement = document.getElementById('typingText');
const subTextElement = document.getElementById('subText');

function typeMainText() { 
    if (index < mainText.length) {
        typingTextElement.innerHTML += mainText.charAt(index);
        index++;
        setTimeout(typeMainText, 100); // Adjust typing speed here
    } else {
        typeSubText();
    }
}

function typeSubText() {
    if (subIndex < subText.length) {
        subTextElement.innerHTML += subText.charAt(subIndex);
        subIndex++;
        setTimeout(typeSubText, 5); // Adjust typing speed here
    }
}

window.onload = function() {
    typeMainText();
};