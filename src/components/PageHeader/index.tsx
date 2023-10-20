import { FC, ReactNode } from "react";
import { Title2, Subtitle2 } from "@fluentui/react-components";

import { useStyles } from "./styles";
interface IPageHeader {
	title: string;
	subTitle?: string;
	extra?: ReactNode;
	beforeAction?: ReactNode;
}

export const PageHeader: FC<IPageHeader> = (props) => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<div className={styles.leftside}>
				<div className={styles.wrapperLeftSide}>
					{props.beforeAction ? props.beforeAction : null}
					<Title2 as="h3" className={styles.title}>
						{props.title}
					</Title2>
				</div>
				{props.subTitle ? (
					<Subtitle2 as="h3" className={styles.title}>
						{props.title}
					</Subtitle2>
				) : null}
			</div>

			<div className={styles.rightside}>
				{props.extra ? <div>{props.extra}</div> : null}
			</div>
		</div>
	);
};
