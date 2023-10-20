import { FC } from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./styles";

interface IDetailEvent {}

export const DetailEvent: FC<IDetailEvent> = () => {
	const styles = useStyles();
	const { id } = useParams();

	return <div className={styles.root}> detail - ${id} </div>;
};
