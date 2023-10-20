import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	invertedWrapper: {
		width: "100%",
		height: "100%",
		backgroundColor: tokens.colorNeutralBackground1,
	},
	firstRow: {
		display: "grid",
		alignItems: "center",
		position: "relative",
		paddingBottom: "20px",
		gridTemplateColumns: "30% 70%",
		...shorthands.gap("10px"),

		"@media screen and (max-width: 620px)": {
			gridTemplateColumns: "auto",
		},
	},
});
