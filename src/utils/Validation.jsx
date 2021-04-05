import validationJSON from "../json/validation.json";

export default function validation(whichForm, values, isSubmitted, agree) {
	let errors = {};

	if (whichForm === "First") {
		if (!values.firstName) {
			errors.firstName = "First name is required";
		} else if (
			values.firstName.length <
			validationJSON[0].validators[0].parameters.targetLength
		) {
			errors.firstName = "First name needs to be 2 characters or more";
		} else if (
			values.firstName.length >
			validationJSON[0].validators[1].parameters.targetLength
		) {
			errors.firstName = "First name cannot be more than 25 characters";
		}
		if (!values.lastName) {
			errors.lastName = "Last name is required";
		} else if (
			values.lastName.length <
			validationJSON[1].validators[0].parameters.targetLength
		) {
			errors.lastName = "Last name needs to be 2 characters or more";
		} else if (
			values.lastName.length >
			validationJSON[1].validators[1].parameters.targetLength
		) {
			errors.lastName = "Last name cannot be more than 25 characters";
		}
		return errors;
	} else {
		if (!values.username.trim()) {
			errors.username = "Username required";
		} else if (
			values.username.length <
			validationJSON[3].validators[0].parameters.targetLength
		) {
			errors.username = "Username needs to be 4 characters or more";
		} else if (
			values.username.length >
			validationJSON[3].validators[1].parameters.targetLength
		) {
			errors.username = "Username cannot be more than 20 characters";
		}
		if (!values.email) {
			errors.email = "Email required";
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = "Email address is invalid";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 8) {
			errors.password = "Password needs to be at least 8 characters";
		} else if (values.password.length > 16) {
			errors.password = "Password cannot be more than 16 characters";
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = "Password is required";
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = "Passwords do not match";
		}
		if (!agree) {
			errors.terms = "Please accept our terms and conditions";
		}
	}
	return errors;
}
