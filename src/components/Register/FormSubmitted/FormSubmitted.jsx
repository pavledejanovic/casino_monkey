import "./formSubmitted.scss";
import tickImage from "../../../images/tick.png";
import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import FlippingCoin from "../../FlippingCoin/FlippingCoin";

const FormSubmitted = () => {
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
								<img className="tickImage" alt="tick" src={tickImage} />
								<FlippingCoin />
							</div>
							<hr className="line" />
							<div style={{ marginTop: "10%" }}>
								<h1 className="fMessage">Thank you!</h1>
								<h5 className="sMessage">Registred succesfully.</h5>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FormSubmitted;
