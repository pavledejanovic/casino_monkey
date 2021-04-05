import "./monkeyAnimation.scss";
const MonkeyAnimation = () => {
	return (
		<div className="monkey-container">
			<div className="ears"></div>
			<div className="head">
				<div className="face">
					<div className="left-eye"></div>
					<div className="right-eye"></div>
					<div className="nose">
						<div className="left-hole"></div>
						<div className="right-hole"></div>
					</div>
					<div className="mouth"></div>
				</div>
			</div>
			<div className="arms">
				<div className="left-hand"></div>
				<div className="right-hand"></div>
			</div>
			<div className="legs">
				<div className="left-foot"></div>
				<div className="right-foot"></div>
			</div>
			<div className="belly"></div>
			<div className="chest">
				<div className="left-boob"></div>
				<div className="right-boob"></div>
			</div>
		</div>
	);
};

export default MonkeyAnimation;
