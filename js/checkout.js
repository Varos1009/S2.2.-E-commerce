function validate(event) {
	// Prevent page reload on form submission if there are errors
	event.preventDefault();

	let error = 0;

	// Get input fields
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get error messages
	const errorName = document.getElementById("errorName");
	const errorLastN = document.getElementById("errorLastN");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");

	// Reset error messages and styles
	const fields = [fName, fLastN, fEmail, fAddress, fPassword, fPhone];
	const errorMessages = [errorName, errorLastN, errorEmail, errorAddress, errorPassword, errorPhone];
	fields.forEach(field => field.classList.remove("is-invalid"));
	errorMessages.forEach(error => error.innerHTML = "");

	// Validate each field according to the requirements

	if (fName.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
		errorName.innerHTML = "This field is required and must have at least 3 characters with only letters.";
		fName.classList.add("is-invalid");
		error++;
	}

	if (fLastN.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
		errorLastN.innerHTML = "This field is required and must have at least 3 characters with only letters.";
		fLastN.classList.add("is-invalid");
		error++;
	}

	if (fEmail.value.trim().length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
		errorEmail.innerHTML = "This field is required and must be a valid email format (e.g., example@mail.com).";
		fEmail.classList.add("is-invalid");
		error++;
	}

	if (fAddress.value.trim().length < 3) {
		errorAddress.innerHTML = "This field is required and must have at least 3 characters.";
		fAddress.classList.add("is-invalid");
		error++;
	}

	if (fPassword.value.trim().length < 4 && fPassword.value.trim().length > 8 || !/[a-zA-Z]/.test(fPassword.value) || !/\d/.test(fPassword.value)) {
		errorPassword.innerHTML = "Password must have at 4-8 characters, including letters and numbers.";
		fPassword.classList.add("is-invalid");
		error++;
	}

	if (fPhone.value.trim().length !== 9 || !/^\d+$/.test(fPhone.value)) {
		errorPhone.innerHTML = "Invalid phone number!! Must be 9 digits with no letters";
		fPhone.classList.add("is-invalid");
		error++;
	}

	// Check if there are any errors and prevent form submission if there are
	if (error > 0) {
		console.log("Errors in the form. Please check the highlighted fields.");
		return false;
	} else {
		alert("Form is valid and ready to submit!");
		return true;
	}
}

// Ensure form validation on submit
document.querySelector(".form").addEventListener("submit", validate);
