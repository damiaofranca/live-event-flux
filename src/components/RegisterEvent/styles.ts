import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
	container: {
		...shorthands.margin("10px", "0px", "10px", "0px"),
		width: "100%",
	},

	formItem: {
		width: "100%",
		marginBottom: "12px",
	},

	coordinatesContainer: {
		display: "flex",
		alignItems: "center",
	},

	submitContainer: {
		marginLeft: "8px",
	},
});
