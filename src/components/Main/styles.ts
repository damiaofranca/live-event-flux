import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root: {
		boxSizing: "border-box",
		maxHeight: "calc(100% - 28px)",
		...shorthands.padding("18px", "24px"),
	},
});
