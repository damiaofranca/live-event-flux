import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	invertedWrapper: {
		backgroundColor: tokens.colorNeutralBackground1,
	},
	firstRow: {
		display: "grid",
		alignItems: "center",
		position: "relative",
		paddingBottom: "20px",
		gridTemplateColumns: "auto",
	},
	secondThirdRow: {
		display: "grid",
		alignItems: "center",
		position: "relative",
		paddingBottom: "10px",
		...shorthands.gap("40px"),
		gridTemplateColumns: "auto auto auto auto auto",
	},
});
