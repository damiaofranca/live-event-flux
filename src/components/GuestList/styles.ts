import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	card: {
		...shorthands.margin("10px", "0px", "10px", "0px"),
		maxWidth: "100%",
		height: "fit-content",
	},

	list: {
		...shorthands.padding("10px", "10px", "10px", "10px"),
		overflowY: "auto",
		maxHeight: "230px",
		height: "min-content",

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

	notFound: {
		...shorthands.margin("16px", "0px", "16px", "0px"),
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: tokens.colorNeutralStrokeDisabled,
	},
});
