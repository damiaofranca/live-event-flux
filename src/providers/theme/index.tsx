import { FC, ReactNode, createContext, useEffect, useState } from "react";
import {
	FluentProvider,
	webLightTheme,
	webDarkTheme,
} from "@fluentui/react-components";

import { IThemeContext } from "./types";

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<string>("light");
	const onChangeTheme = async () => {
		setTheme((_theme) => {
			return _theme === "light" ? "dark" : "light";
		});
	};

	useEffect(() => {
		const _theme = localStorage.getItem("theme");
		if (typeof _theme === "string") {
			setTheme(_theme);
		}
	}, []);

	return (
		<FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
			<ThemeContext.Provider value={{ onChangeTheme }}>
				{children}
			</ThemeContext.Provider>
		</FluentProvider>
	);
};
