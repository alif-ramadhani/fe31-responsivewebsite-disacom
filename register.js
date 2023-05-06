const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const nomorHp = document.querySelector('#nomor-hp');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (nameInput.value === '') {
		alert('Please enter your name.');
		nameInput.focus();
		return;
	}

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

	if (confirmPasswordInput.value === '') {
		alert('Please confirm your password.');
		confirmPasswordInput.focus();
		return;
	}

	if (passwordInput.value !== confirmPasswordInput.value) {
		alert('Passwords do not match.');
		passwordInput.value = '';
		confirmPasswordInput.value = '';
		passwordInput.focus();
		return;
	}

	alert('Registration successful!');
	form.reset();
	window.location.href = "dashboard.html";
});
