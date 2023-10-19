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

	actionsDesktop: {
		display: "flex",
		"@media screen and (max-width: 790px)": {
			display: "none",
		},
	},

	actionsMobile: {
		display: "none",

		"@media screen and (max-width: 790px)": {
			display: "flex",
		},
	},

	containerAction: {
		...shorthands.marginInline("0", "8px"),
	},
});
