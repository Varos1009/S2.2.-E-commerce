
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	
	
	 // Reset error messages and styles
	 errorName.innerHTML = "";
	 errorLastN.innerHTML = "";
	 errorAddress.innerHTML = "";
	 errorPhone.innerHTML = "";
	 errorPassword.innerHTML = "";
	 errorEmail.innerHTML = "";
	 fName.classList.remove("is-invalid");
	 fLastN.classList.remove("is-invalid");
	 fAddress.classList.remove("is-invalid");
	 fPhone.classList.remove("is-invalid");
	 fPassword.classList.remove("is-invalid");
	 fEmail.classList.remove("is-invalid");
 
	 // Validate first name (only letters, at least 3 characters)
	 if (fName.value.trim() === "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
		 errorName.innerHTML = "First name is required and must contain only letters with at least 3 characters.";
		 fName.classList.add("is-invalid");
		 error++;
	 }
 
	 // Validate last name (only letters, at least 3 characters)
	 if (fLastN.value.trim() === "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
		 errorLastN.innerHTML = "Last name is required and must contain only letters with at least 3 characters.";
		 fLastN.classList.add("is-invalid");
		 error++;
	 }

	 // Validate address (at least 3 characters)
	 if (fAddress.value.trim() === "" || fAddress.value.length < 3) {
		 errorAddress.innerHTML = "Address is required and must contain at least 3 characters.";
		 fAddress.classList.add("is-invalid");
		 error++;
	 }
 
	 // Validate phone (only numbers)
	 if (fPhone.value.trim() === "" || !/^\d+$/.test(fPhone.value)) {
		 errorPhone.innerHTML = "Phone number is required and must contain only numbers.";
		 fPhone.classList.add("is-invalid");
		 error++;
	 }
 
	 // Validate password (at least one letter and one number, minimum 3 characters)
	 if (fPassword.value.trim() === "" || fPassword.value.length < 3 || !/[a-zA-Z]/.test(fPassword.value) || !/\d/.test(fPassword.value)) {
		 errorPassword.innerHTML = "Password is required and must contain at least one letter, one number, and be at least 3 characters long.";
		 fPassword.classList.add("is-invalid");
		 error++;
	 }
 
	 // Validate email format
	 if (fEmail.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
		 errorEmail.innerHTML = "A valid email is required.";
		 fEmail.classList.add("is-invalid");
		 error++;
	 }
 
	 // Final check
	 if (error > 0) {
		 alert("There are errors in the form. Please fix them before proceeding.");
	 } else {
		 alert("Form is valid!");
	 }
 }

