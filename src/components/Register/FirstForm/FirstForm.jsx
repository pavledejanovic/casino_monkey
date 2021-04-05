import React, { useState } from "react";
import validation from "../../../utils/Validation";
import HangingMonkey from "../../HangingMoney/HangingMonkey";
import MonkeyAnimation from "../../MonkeyAnimation/MonkeyAnimation";
import "./firstForm.scss";

const FirstForm = ({ submitFirstForm, values, setValues }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	let errors = () => {
		return validation("First", values, isSubmitted);
	};

	const checkForSubmit = (e) => {
		setIsSubmitted(true);
		e.preventDefault();
		if (Object.entries(errors()).length === 0) {
			submitFirstForm();
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<>
			<HangingMonkey />
			<div className="main">
				<MonkeyAnimation />
				<form onSubmit={(e) => checkForSubmit(e)}>
					<div className="first-section">
						<div className="form-group field">
							<input
								type="input"
								className="form-field"
								name="firstName"
								value={values.firstName}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().firstName && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().firstName}</p>
										</div>
								  )
								: ""}
							<label htmlFor="firstName" className="form-label">
								First Name
							</label>
						</div>
						<div className="form-group field">
							<input
								type="input"
								className="form-field"
								name="lastName"
								value={values.lastName}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().lastName && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().lastName}</p>
										</div>
								  )
								: ""}
							<label htmlFor="lastName" className="form-label">
								Last Name
							</label>
						</div>
					</div>
					<div className="second-section">
						<div className="next-step-container">
							<button className="next-step" type="submit">
								Next step
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default FirstForm;
