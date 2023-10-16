import { FC, ReactNode, createContext, useEffect, useState } from "react";
import {
	FluentProvider,
	webLightTheme,
	webDarkTheme,
} from "@fluentui/react-components";

import { IThemeContext } from "./types";

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const onChangeTheme = async () => {
		setTheme((_theme) => {
			localStorage.setItem("theme", _theme === "light" ? "dark" : "light");
			return _theme === "light" ? "dark" : "light";
		});
	};

	useEffect(() => {
		const _theme = localStorage.getItem("theme");
		if (typeof _theme === "string") {
			setTheme(_theme as "light" | "dark");
		}
	}, []);

	return (
		<FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
			<ThemeContext.Provider value={{ onChangeTheme, theme }}>
				{children}
			</ThemeContext.Provider>
		</FluentProvider>
	);
};
