export interface IThemeContext {
	theme: "light" | "dark";

	onChangeTheme: () => Promise<void>;
}
