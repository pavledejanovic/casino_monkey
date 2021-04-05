import React from "react";
import "./spinner.scss";
import monkeyLoader from "../../images/monkey.gif";

const Spinner = () => {
	return (
		<div className="mainS">
			<div className="wrapperS">
				<img className="loader" alt="spinner" src={monkeyLoader} />
			</div>
		</div>
	);
};
export default Spinner;
