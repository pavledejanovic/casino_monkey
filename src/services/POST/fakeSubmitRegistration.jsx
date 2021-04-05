export const fakeSubmit = ({ values, submitSecondForm }) => {
	// const dataToSubmit = {
	// 	fname: values.firstName,
	// 	lname: values.lastName,
	// 	username: values.username,
	// 	password: values.password,
	// 	password_confirm: values.confirmPassword,
	// };
	// const json = JSON.stringify(dataToSubmit);

	return new Promise(
		(fulfill, reject) => {
			submitSecondForm();
			//success
			setTimeout(function () {
				fulfill({
					info: {
						success: true,
					},
				});
			}, 0);
		},
		(error) => {
			// error
		}
	);
};
