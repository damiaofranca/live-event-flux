import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		marginBottom: "28px",
		justifyContent: "space-between",
	},

	title: {
		marginBottom: "4px",
	},

	leftside: {
		display: "flex",
		flexDirection: "column",
	},

	rightside: {
		display: "flex",
	},
});
