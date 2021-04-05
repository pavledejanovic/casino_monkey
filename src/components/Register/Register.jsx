import React, { useState } from "react";
import "./register.scss";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
import FormSubmitted from "./FormSubmitted/FormSubmitted";

const Register = () => {
	const [showForm, setShowForm] = useState(1);

	const submitFirstForm = () => {
		setShowForm(2);
	};
	const submitSecondForm = () => {
		setShowForm(3);
	};
	const previousStep = () => {
		setShowForm(showForm - 1);
	};
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	switch (showForm) {
		case 1:
			return (
				<FirstForm
					values={values}
					setValues={setValues}
					submitFirstForm={submitFirstForm}
				/>
			);
		case 2:
			return (
				<SecondForm
					values={values}
					setValues={setValues}
					previousStep={() => previousStep()}
					submitSecondForm={submitSecondForm}
				/>
			);
		case 3:
			return <FormSubmitted />;
		default:
			return (
				<>
					<FormSubmitted />
				</>
			);
	}
};
export default Register;
