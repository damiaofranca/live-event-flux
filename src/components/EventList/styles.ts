import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
	tableCell: {
		overflowX: "auto",
		paddingTop: "10px",
		paddingBottom: "10px",
		"::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
			backgroundColor: "#F5F5F5",
		},
		"::-webkit-scrollbar": {
			height: "3px",
			backgroundColor: "red",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: "#000000",
		},
	},
	containerAction: {
		...shorthands.marginInline("0", "8px"),
	},
});
