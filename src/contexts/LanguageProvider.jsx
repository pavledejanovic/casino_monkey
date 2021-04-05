import React from "react";
import { useImmer } from "use-immer";

const defaultState = {};

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
	const [state, dispatch] = useImmer({ ...defaultState });

	return (
		<LanguageContext.Provider value={[state, dispatch]}>
			{children}
		</LanguageContext.Provider>
	);
};
export { LanguageContext, LanguageProvider };
