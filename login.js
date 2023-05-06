const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (emailInput.value === '') {
		alert('Please enter your email.');
		emailInput.focus();
		return;
	}

	if (passwordInput.value === '') {
		alert('Please enter your password.');
		passwordInput.focus();
		return;
	}

	alert('Login successful!');
	form.reset();
	window.location.href = "dashboard.html";
});
