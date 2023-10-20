import { FC } from "react";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";

import { useStyles } from "./styles";

interface ISkeletonEventDetail {}

export const SkeletonEventDetail: FC<ISkeletonEventDetail> = () => {
	const styles = useStyles();

	return (
		<div className={styles.invertedWrapper}>
			<Skeleton>
				<div className={styles.firstRow}>
					<SkeletonItem shape="rectangle" size={128} animation="wave" />
					<SkeletonItem shape="rectangle" size={128} animation="wave" />
				</div>
			</Skeleton>
		</div>
	);
};
