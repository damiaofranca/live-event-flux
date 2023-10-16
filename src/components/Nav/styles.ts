import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		height: "64px",
		widows: "100%",
		display: "flex",
		paddingLeft: "28px",
		paddingRight: "28px",
		alignItems: "center",
		backgroundColor: tokens.colorNeutralBackground3,

		"@media screen and (max-width: 620px)": {
			paddingLeft: "18px",
			paddingRight: "18px",
		},

		"@media screen and (max-width: 1200px)": {
			paddingLeft: "24px",
			paddingRight: "24px",
		},
	},

	logo: {
		height: "32px",
		width: "auto",
		marginRight: "24px",

		"@media screen and (max-width: 500px)": {
			display: "none",
		},
	},

	containerItems: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},

	linkItem: {
		width: "fit-content",
		textDecorationLine: "none",
		...shorthands.borderRadius("2px"),
		...shorthands.padding("2px", "10px"),

		"&.current": {
			backgroundColor: tokens.colorNeutralForeground4,
		},

		"&:hover": {
			backgroundColor: tokens.colorNeutralForeground2,
		},
	},

	menuItem: {
		width: "100%",
		display: "flex",
		alignItems: "center",
	},

	menuItemIcon: {
		width: "20px",
		height: "20px",
		marginRight: "10px",
	},
});
