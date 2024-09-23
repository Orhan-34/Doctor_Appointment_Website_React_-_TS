import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

interface AppContextProps {
	doctors: typeof doctors;
	currency: string;
}

interface AppContextProviderProps {
	children: React.ReactNode;
}

const defaultContext: AppContextProps = {
	doctors: [],
	currency: '',
  };
  

export const AppContext = createContext<AppContextProps>(defaultContext);


const AppContextProvider = (props: AppContextProviderProps) => {
	const value: AppContextProps = {
		doctors,
		currency: '$',
	};

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
