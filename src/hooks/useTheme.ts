import { ThemeContext } from "@/providers/theme";
import { useContext } from "react";

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
