import { FC } from "react";
import { useStyles } from "./styles";
import { Outlet } from "react-router-dom";

export const Main: FC = () => {
	const styles = useStyles();
	return <div className={styles.root}>{<Outlet />}</div>;
};
