import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		height: "100%",
		widows: "100%",
		display: "flex",
		justifyContent: "space-between",
		"@media screen and (max-width: 620px)": {},

		"@media screen and (max-width: 1200px)": {},
	},
});
