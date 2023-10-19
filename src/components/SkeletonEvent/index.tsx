import { FC } from "react";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";

import { useStyles } from "./styles";

interface ISkeletonEvent {}

export const SkeletonEvent: FC<ISkeletonEvent> = () => {
	const styles = useStyles();

	return (
		<div className={styles.invertedWrapper}>
			<Skeleton>
				<div className={styles.firstRow}>
					<SkeletonItem shape="rectangle" size={28} animation="wave" />
				</div>
				<div className={styles.secondThirdRow}>
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
				</div>
				<div className={styles.secondThirdRow}>
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
				</div>
				<div className={styles.secondThirdRow}>
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
				</div>
				<div className={styles.secondThirdRow}>
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
				</div>
				<div className={styles.secondThirdRow}>
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
					<SkeletonItem size={28} animation="wave" />
				</div>
			</Skeleton>
		</div>
	);
};
