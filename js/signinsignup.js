const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function login(event) {
	event.preventDefault();
	// Simulate successful login
	localStorage.setItem('isLoggedIn', 'true');
	window.location.href = 'main.html';
}