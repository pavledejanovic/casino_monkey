import React, { useState } from "react";
import validation from "../../../utils/Validation";
import MonkeyAnimation from "../../MonkeyAnimation/MonkeyAnimation";
import HangingMonkey from "../../HangingMoney/HangingMonkey";
import "./secondForm.scss";

const SecondForm = ({ previousStep, submitSecondForm, values, setValues }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [agree, setAgree] = useState(false);

	const checkboxHandler = () => {
		setAgree(!agree);
	};

	const errors = () => {
		return validation("Second", values, isSubmitted, agree);
	};
	const checkForSubmit = (e) => {
		setIsSubmitted(true);
		e.preventDefault();
		if (Object.entries(errors()).length === 0 && agree) {
			submitSecondForm();
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
				<form noValidate onSubmit={(e) => checkForSubmit(e)}>
					<div className="first-section">
						<div className="form_group field">
							<input
								type="input"
								className="form_field"
								name="email"
								value={values.email}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().email && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().email}</p>
										</div>
								  )
								: ""}
							<label htmlFor="email" className="form_label">
								Email
							</label>
						</div>
						<div className="form_group field">
							<input
								type="input"
								className="form_field"
								name="username"
								value={values.username}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().username && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().username}</p>
										</div>
								  )
								: ""}
							<label htmlFor="username" className="form_label">
								Username
							</label>
						</div>
						<div className="form_group field">
							<input
								type="password"
								className="form_field"
								name="password"
								value={values.password}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().password && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().password}</p>
										</div>
								  )
								: ""}
							<label htmlFor="password" className="form_label">
								Password
							</label>
						</div>
						<div className="form_group field">
							<input
								type="password"
								className="form_field"
								name="confirmPassword"
								value={values.confirmPassword}
								onChange={handleChange}
							/>
							{isSubmitted === true
								? errors().confirmPassword && (
										<div className="form-validation-parent">
											<p className="form-validation">
												{errors().confirmPassword}
											</p>
										</div>
								  )
								: ""}
							<label htmlFor="confirmPassword" className="form_label">
								Confirm password
							</label>
						</div>
						<div className="form_group field" style={{ marginTop: "0.5rem" }}>
							<input
								type="checkbox"
								id="agree"
								onChange={checkboxHandler}
								style={{
									border: "2px dotted #00f",
									background: "#ff0000",
								}}
							/>

							<label
								htmlFor="agree"
								style={{ fontSize: "1rem", color: "#d3d8d6" }}
							>
								{" "}
								I agree to terms and conditions
							</label>
							{isSubmitted === true
								? errors().terms && (
										<div className="form-validation-parent">
											<p className="form-validation">{errors().terms}</p>
										</div>
								  )
								: ""}
						</div>
					</div>
					<div className="second-section">
						<div className="previous-step-container" style={{ width: "49%" }}>
							<button className="next-step" onClick={previousStep}>
								Previous step
							</button>
						</div>
						<div className="next-step-container" style={{ width: "49%" }}>
							<button
								className="next-step"
								type="submit"
								onKeyDown={(e) => e.key === "Enter" && checkForSubmit()}
							>
								Next step
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default SecondForm;
