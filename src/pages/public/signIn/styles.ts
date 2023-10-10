import { tokens } from "@fluentui/react-theme";
import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		height: "100vh",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: tokens.colorNeutralBackground1,
	},
	card: {
		width: "500px",
		paddingTop: "18px",
		paddingLeft: "20px",
		paddingRight: "20px",
		paddingBottom: "18px",
		"@media screen and (max-width: 620px)": {
			width: "100%",
			maxWidth: "calc(100% - 40px)",
		},
	},
	formItem: {
		marginBottom: "12px",
	},
	header: {
		display: "flex",
		justifyContent: "center",
	},
	containerlink: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	submitBtn: {
		width: "100%",
		marginTop: "1rem",
		marginBottom: "1rem",
	},

	link: {
		color: "#000",
		textDecorationLine: "none",
		fontWeight: tokens.fontWeightMedium,
	},
});
