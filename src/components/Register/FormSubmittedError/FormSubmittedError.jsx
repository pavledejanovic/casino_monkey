import "./formSubmitted.scss";
import errorImage from "../../../images/error.png";
import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import FlippingCoin from "../../FlippingCoin/FlippingCoin";

const FormSubmittedError = () => {
	const [showLoader, setShowLoader] = useState(true);

	const doTimeout = () => {
		setTimeout(() => {
			setShowLoader(false);
		}, 1500);
	};

	useEffect(() => {
		doTimeout();
	}, []);

	return (
		<>
			{showLoader ? (
				<Spinner />
			) : (
				<>
					<div className="container">
						<div className="successTab">
							<div className="imageContainer">
								<img className="tickImage" src={errorImage} />
								<FlippingCoin />
							</div>
							<hr className="line" />
							<div style={{ marginTop: "10%" }}>
								<h1 className="fMessage">ERROR</h1>
								<h5 className="sMessage">Registred unsuccesfully.</h5>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FormSubmittedError;
