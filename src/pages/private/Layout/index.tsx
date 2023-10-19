import { FC } from "react";

import { Main, Nav } from "@/components";

import { useStyles } from "./styles";

export const LayoutStructure: FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<Nav />
			<Main />
		</div>
	);
};
