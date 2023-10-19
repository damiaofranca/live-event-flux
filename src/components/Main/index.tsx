import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useStyles } from "./styles";

export const Main: FC = () => {
	const styles = useStyles();
	return <div className={styles.root}>{<Outlet />}</div>;
};
