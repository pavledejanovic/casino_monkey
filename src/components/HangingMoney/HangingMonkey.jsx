import "./hangingMonkey.scss";
import monkeysImage from "../../images/hangingMonkey.png";
const HangingMonkey = () => {
	return (
		<div className="swing">
			<img className="monkeys" alt="hanging" src={monkeysImage} />
		</div>
	);
};

export default HangingMonkey;
