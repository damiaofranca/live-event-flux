import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	tableCell: {
		overflowX: "auto",
		paddingTop: "10px",
		paddingBottom: "10px",
		"::-webkit-scrollbar-track": {
			backgroundColor: "#F5F5F5",
		},
		"::-webkit-scrollbar": {
			height: "3px",
			backgroundColor: "red",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: tokens.colorNeutralForeground1,
		},
	},

	containerAction: {
		...shorthands.marginInline("0", "8px"),
	},
});
