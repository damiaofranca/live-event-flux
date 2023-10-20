import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		height: "100%",
		widows: "100%",
		display: "flex",
		flexDirection: "column",
		"@media screen and (max-width: 620px)": {},

		"@media screen and (max-width: 1200px)": {},
	},

	content: {
		height: "100%",
		display: "grid",
		gridTemplateColumns: "30% 70%",
		"@media screen and (max-width: 620px)": {
			gridTemplateColumns: "auto",
		},
		"@media screen and (max-width: 870px)": {
			display: "flex",
			flexDirection: "column",
		},
		...shorthands.gap("10px"),
	},

	containerWrapper: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: tokens.colorNeutralBackground4Hover,
		...shorthands.borderRadius(tokens.borderRadiusLarge),

		"&.left": {
			height: "fit-content",
			...shorthands.padding("26px", "20px"),
		},

		"@media screen and (max-width: 870px)": {
			minHeight: "480px",
		},
	},

	containerInfo: {
		display: "flex",
		marginBottom: "8px",
		alignItems: "center",
		flexDirection: "column",
	},

	labelInfo: {},

	containerImg: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},

	qrCodeImg: {
		width: "300px",
		height: "auto",
		...shorthands.borderRadius(tokens.borderRadiusLarge),

		"@media screen and (max-width: 1130px)": {
			width: "220px",
		},
	},

	list: {
		...shorthands.padding("10px", "0px", "10px", "0px"),
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

	card: {
		maxWidth: "100%",
		height: "fit-content",
		...shorthands.margin("10px", "0px", "10px", "0px"),
	},
});
