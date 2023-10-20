import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		height: "100%",
		overflowY: "auto",
		boxSizing: "border-box",
		maxHeight: "calc(100% - 64px)",
		...shorthands.padding("18px", "24px"),

		"::-webkit-scrollbar-track": {
			backgroundColor: "#F5F5F5",
		},
		"::-webkit-scrollbar": {
			width: "3px",
			backgroundColor: "red",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: tokens.colorNeutralForeground1,
		},
	},
});
