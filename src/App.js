import "./App.css";
import React, { createContext, useContext, useReducer } from "react";
import Register from "./components/Register/Register";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import { LanguageProvider } from "./contexts/LanguageProvider";

function App() {
	return (
		<>
			{/* <LanguageProvider> */}
			<BackgroundAnimation />
			<Register />
			{/* </LanguageProvider> */}
		</>
	);
}

export default App;
